(() => {
  "use strict";

  const ROW_SPACING = 150;
  const COLUMN_SPACING = 220;
  const PERSON_PREFIX = "person:";
  const UNION_PREFIX = "union:";
  const ROUTE_PREFIX = "route:";
  const PARENT_ROUTE_PREFIX = "parent-route:";

  const state = {
    network: null,
    nodes: null,
    edges: null,
    resizeObserver: null,
    viewKey: null,
    viewLabel: "",
    people: [],
    layout: null,
    routeNodeMeta: new Map(),
    editMode: false,
  };

  const byId = new Map(window.familyData.map((person) => [String(person.id), person]));

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function pairKey(firstId, secondId) {
    return `${firstId}|${secondId}`;
  }

  function personNodeId(personId) {
    return `${PERSON_PREFIX}${personId}`;
  }

  function personIdFromNode(nodeId) {
    const value = String(nodeId);
    return value.startsWith(PERSON_PREFIX) ? value.slice(PERSON_PREFIX.length) : null;
  }

  function showStatus(message, type = "info") {
    const element = document.getElementById("status");
    element.textContent = message;
    element.className = `status ${type}`;
  }

  function makeLabel(person) {
    const lines = [person.name];
    if (person.born) lines.push(person.born);
    if (person.dead) lines.push(`没 ${person.dead}`);
    if (person.locate) lines.push(person.locate);
    return lines.join("\n");
  }

  function generationFor(personId, peopleInView, peopleById, cache, visiting = new Set()) {
    if (cache.has(personId)) return cache.get(personId);
    if (visiting.has(personId)) return 0;
    visiting.add(personId);
    const person = peopleById.get(personId);
    const parentGenerations = [person?.fid, person?.mid]
      .filter((id) => id !== undefined && peopleInView.has(String(id)))
      .map((id) => generationFor(String(id), peopleInView, peopleById, cache, visiting));
    visiting.delete(personId);
    const generation = parentGenerations.length ? Math.max(...parentGenerations) + 1 : 0;
    cache.set(personId, generation);
    return generation;
  }

  function completePositions(people, savedPositions) {
    const positions = clone(savedPositions || {});
    const peopleInView = new Set(people.map((person) => String(person.id)));
    const peopleById = new Map(people.map((person) => [String(person.id), person]));
    const generations = new Map();
    const generationCache = new Map();

    people.forEach((person, sourceIndex) => {
      if (positions[String(person.id)]) return;
      const generation = generationFor(String(person.id), peopleInView, peopleById, generationCache);
      if (!generations.has(generation)) generations.set(generation, []);
      generations.get(generation).push({ person, sourceIndex });
    });

    [...generations.entries()].sort(([a], [b]) => a - b).forEach(([generation, entries]) => {
      entries.sort((left, right) => {
        const parentCenter = (entry) => {
          const parentXs = [entry.person.fid, entry.person.mid]
            .map((id) => positions[String(id)]?.x)
            .filter((value) => Number.isFinite(value));
          return parentXs.length ? parentXs.reduce((sum, value) => sum + value, 0) / parentXs.length : entry.sourceIndex * COLUMN_SPACING;
        };
        return parentCenter(left) - parentCenter(right) || left.sourceIndex - right.sourceIndex;
      });
      const startX = -((entries.length - 1) * COLUMN_SPACING) / 2;
      entries.forEach((entry, index) => {
        positions[String(entry.person.id)] = {
          x: startX + index * COLUMN_SPACING,
          y: generation * ROW_SPACING,
        };
      });
    });
    return positions;
  }

  function parentFamilies(people) {
    const visibleIds = new Set(people.map((person) => String(person.id)));
    const families = new Map();
    people.forEach((child) => {
      if (child.fid === undefined || child.mid === undefined) return;
      if (!visibleIds.has(String(child.fid)) || !visibleIds.has(String(child.mid))) return;
      const key = pairKey(child.fid, child.mid);
      if (!families.has(key)) {
        families.set(key, {
          key,
          parentIds: key.split("|"),
          children: [],
        });
      }
      families.get(key).children.push(String(child.id));
    });
    return families;
  }

  function alignmentPenalty(from, to) {
    const aligned = Math.abs(from.x - to.x) < 1 || Math.abs(from.y - to.y) < 1;
    return (aligned ? 0 : 1200) + Math.abs(from.x - to.x) + Math.abs(from.y - to.y);
  }

  function automaticJunction(family, positions) {
    const first = positions[String(family.parentIds[0])];
    const second = positions[String(family.parentIds[1])];
    const children = family.children.map((id) => positions[String(id)]).filter(Boolean);
    if (Math.abs(first.y - second.y) < 1) {
      return { x: (first.x + second.x) / 2, y: first.y };
    }

    const childAverageX = children.length
      ? children.reduce((sum, child) => sum + child.x, 0) / children.length
      : (first.x + second.x) / 2;
    const candidates = [];
    const xs = [first.x, second.x, (first.x + second.x) / 2, childAverageX, ...children.map((child) => child.x)];
    const ys = [first.y, second.y, (first.y + second.y) / 2];
    xs.forEach((x) => ys.forEach((y) => candidates.push({ x, y })));

    return candidates.reduce((best, candidate) => {
      let score = alignmentPenalty(first, candidate) * 2 + alignmentPenalty(second, candidate) * 2;
      children.forEach((child) => { score += alignmentPenalty(candidate, child); });
      Object.values(positions).forEach((position) => {
        if (Math.hypot(candidate.x - position.x, candidate.y - position.y) < 60) score += 5000;
      });
      return !best || score < best.score ? { ...candidate, score } : best;
    }, null);
  }

  function automaticRoute(start, end) {
    if (Math.abs(start.x - end.x) < 1 || Math.abs(start.y - end.y) < 1) return [];
    const direction = end.y >= start.y ? 1 : -1;
    const busY = start.y + direction * Math.min(70, Math.max(35, Math.abs(end.y - start.y) / 2));
    return [
      { x: start.x, y: busY },
      { x: end.x, y: busY },
    ];
  }

  function singleElbow(start, end) {
    if (Math.abs(start.x - end.x) < 1 || Math.abs(start.y - end.y) < 1) return [];
    return [{ x: end.x, y: start.y }];
  }

  function addRouteNode(visNodes, id, position, editable, label = "") {
    visNodes.push({
      id,
      x: position.x,
      y: position.y,
      label: editable ? label : "",
      shape: "dot",
      size: editable ? 6 : 1,
      borderWidth: editable ? 1 : 0,
      color: editable
        ? { background: "#ffd27a", border: "#a66b00" }
        : { background: "rgba(255,255,255,0.01)", border: "rgba(255,255,255,0.01)" },
      font: { size: 9, color: "#6d4a00" },
      physics: false,
      fixed: false,
    });
  }

  function addSegmentedEdges(visNodes, visEdges, fromId, toId, points, edgeOptions, idBase, editable, routeKey = null) {
    const routeIds = points.map((point, index) => {
      const id = routeKey ? `${ROUTE_PREFIX}${routeKey}:${index}` : `${PARENT_ROUTE_PREFIX}${idBase}:${index}`;
      addRouteNode(visNodes, id, point, editable && Boolean(routeKey), String(index + 1));
      if (routeKey) state.routeNodeMeta.set(id, { routeKey, index });
      return id;
    });
    const chain = [fromId, ...routeIds, toId];
    for (let index = 0; index < chain.length - 1; index += 1) {
      visEdges.push({
        id: `${idBase}:${index}`,
        from: chain[index],
        to: chain[index + 1],
        ...edgeOptions,
        arrows: index === chain.length - 2 ? edgeOptions.arrows : "",
      });
    }
  }

  function graphData(people, layout, editable) {
    const visNodes = [];
    const visEdges = [];
    state.routeNodeMeta.clear();
    const visibleById = new Map(people.map((person) => [String(person.id), person]));
    layout.positions = completePositions(people, layout.positions);
    layout.junctions ||= {};
    layout.routes ||= {};

    people.forEach((person) => {
      const position = layout.positions[String(person.id)];
      const hasImage = person.img && !person.img.endsWith("/imgs/.png");
      const node = {
        id: personNodeId(person.id),
        x: position.x,
        y: position.y,
        label: makeLabel(person),
        group: person.gender || "unknown",
        shape: hasImage ? "circularImage" : "dot",
        size: hasImage ? 28 : 22,
        image: hasImage ? person.img : undefined,
        borderWidth: hasImage ? 5 : 3,
        physics: false,
        fixed: false,
        font: { size: 13, color: "#4d5a52", vadjust: 8 },
      };
      if (hasImage) node.shapeProperties = { useBorderWithImage: true };
      visNodes.push(node);
    });

    const families = parentFamilies(people);
    families.forEach((family) => {
      const firstParent = visibleById.get(family.parentIds[0]);
      const secondParent = visibleById.get(family.parentIds[1]);
      const firstPosition = layout.positions[String(family.parentIds[0])];
      const secondPosition = layout.positions[String(family.parentIds[1])];
      const savedJunction = layout.junctions[family.key];
      const junction = savedJunction || automaticJunction(family, layout.positions);
      layout.junctions[family.key] = { x: junction.x, y: junction.y };
      const junctionId = `${UNION_PREFIX}${family.key}`;

      visNodes.push({
        id: junctionId,
        x: junction.x,
        y: junction.y,
        label: "",
        shape: "dot",
        size: editable ? 10 : 7,
        color: { background: "#f28b00", border: "#b85d00" },
        borderWidth: 2,
        physics: false,
        fixed: false,
      });

      [
        [family.parentIds[0], firstParent, firstPosition],
        [family.parentIds[1], secondParent, secondPosition],
      ].forEach(([parentId, parent, parentPosition], parentIndex) => {
        const points = singleElbow(parentPosition, junction);
        addSegmentedEdges(
          visNodes,
          visEdges,
          personNodeId(parentId),
          junctionId,
          points,
          {
            color: { color: parent?.gender === "male" ? "#2f8fe4" : "#e23f76" },
            width: 3,
            smooth: false,
            arrows: "",
          },
          `parent:${family.key}:${parentIndex}`,
          false,
        );
      });

      family.children.forEach((childId) => {
        const childPosition = layout.positions[String(childId)];
        const routeKey = `${family.key}>${childId}`;
        const route = layout.routes[routeKey] || { mode: "orthogonal", points: automaticRoute(junction, childPosition) };
        layout.routes[routeKey] = route;
        if (route.mode === "curve") {
          visEdges.push({
            id: `child:${routeKey}`,
            from: junctionId,
            to: personNodeId(childId),
            color: { color: "#718078" },
            width: 2,
            arrows: "to",
            smooth: { enabled: true, type: "continuous" },
          });
        } else {
          addSegmentedEdges(
            visNodes,
            visEdges,
            junctionId,
            personNodeId(childId),
            route.points || [],
            { color: { color: "#718078" }, width: 2, smooth: false, arrows: "to" },
            `child:${routeKey}`,
            editable,
            routeKey,
          );
        }
      });
    });

    return { nodes: visNodes, edges: visEdges };
  }

  function syncLayoutFromNetwork() {
    if (!state.network || !state.layout) return;
    const positions = state.network.getPositions();
    state.people.forEach((person) => {
      const position = positions[personNodeId(person.id)];
      if (position) state.layout.positions[String(person.id)] = { x: Math.round(position.x), y: Math.round(position.y) };
    });
    Object.keys(state.layout.junctions).forEach((key) => {
      const position = positions[`${UNION_PREFIX}${key}`];
      if (position) state.layout.junctions[key] = { x: Math.round(position.x), y: Math.round(position.y) };
    });
    state.routeNodeMeta.forEach(({ routeKey, index }, nodeId) => {
      const position = positions[nodeId];
      if (!position || !state.layout.routes[routeKey]) return;
      state.layout.routes[routeKey].points[index] = { x: Math.round(position.x), y: Math.round(position.y) };
    });
  }

  function renderGraph(people, layout, viewKey, label) {
    if (state.resizeObserver) state.resizeObserver.disconnect();
    if (state.network) state.network.destroy();
    state.viewKey = viewKey;
    state.viewLabel = label;
    state.people = people;
    state.layout = clone(layout);
    state.editMode = document.getElementById("edit-layout").checked;

    const data = graphData(people, state.layout, state.editMode);
    state.nodes = new vis.DataSet(data.nodes);
    state.edges = new vis.DataSet(data.edges);
    const container = document.getElementById("network-container");
    state.network = new vis.Network(container, { nodes: state.nodes, edges: state.edges }, {
      physics: { enabled: false },
      layout: { hierarchical: false },
      interaction: {
        dragNodes: state.editMode,
        dragView: true,
        hover: true,
        keyboard: true,
        navigationButtons: true,
        zoomView: true,
      },
      nodes: {
        color: { background: "#9bac9f", border: "#68776c" },
      },
      groups: {
        male: { color: { background: "#46a0ed", border: "#1f6eb6" } },
        female: { color: { background: "#e94f83", border: "#b71e57" } },
        unknown: { color: { background: "#aab7ae", border: "#657269" } },
      },
      edges: { smooth: false, selectionWidth: 1 },
    });

    state.network.on("dragEnd", () => {
      syncLayoutFromNetwork();
      showStatus("レイアウトを変更しました。必要なら「レイアウトを書き出す」で保存してください。", "success");
    });
    state.network.on("click", (params) => {
      if (params.nodes.length !== 1) return;
      const personId = personIdFromNode(params.nodes[0]);
      if (!personId) return;
      const person = people.find((item) => String(item.id) === personId) || byId.get(personId);
      if (person) showStatus(`${person.name}${person.dead ? `（没 ${person.dead}）` : ""}`);
    });
    state.resizeObserver = new ResizeObserver(() => state.network?.redraw());
    state.resizeObserver.observe(container);
    window.setTimeout(() => state.network?.fit({ animation: { duration: 450, easingFunction: "easeInOutQuad" } }), 30);
    showStatus(`${label}を表示しました（${people.length}個体）。`, "success");
  }

  function renderSelectedView() {
    const viewKey = document.getElementById("view-select").value;
    const view = window.familyViews[viewKey];
    if (!view) return showStatus(`表示設定「${viewKey}」がありません。`, "error");
    const people = view.members.map((id) => byId.get(String(id))).filter(Boolean).map(clone);
    document.getElementById("download-csv").href = `./${view.csv}`;
    renderGraph(people, view, viewKey, view.label);
  }

  function setEditMode(enabled) {
    state.editMode = enabled;
    if (!state.network || !state.nodes) return;
    state.network.setOptions({ interaction: { dragNodes: enabled } });
    const updates = [];
    state.nodes.forEach((node) => {
      if (String(node.id).startsWith(ROUTE_PREFIX)) {
        updates.push({
          id: node.id,
          size: enabled ? 6 : 1,
          label: enabled ? String(state.routeNodeMeta.get(node.id)?.index + 1 || "") : "",
          borderWidth: enabled ? 1 : 0,
          color: enabled
            ? { background: "#ffd27a", border: "#a66b00" }
            : { background: "rgba(255,255,255,0.01)", border: "rgba(255,255,255,0.01)" },
        });
      } else if (String(node.id).startsWith(UNION_PREFIX)) {
        updates.push({ id: node.id, size: enabled ? 10 : 7 });
      }
    });
    if (updates.length) state.nodes.update(updates);
    showStatus(enabled
      ? "編集モードです。個体・オレンジの接点・黄色の中継点をドラッグできます。"
      : "表示モードに戻りました。");
  }

  function exportLayout() {
    if (!state.layout || !state.viewKey) return showStatus("先に家系図を表示してください。", "error");
    syncLayoutFromNetwork();
    const payload = {
      schemaVersion: 1,
      view: state.viewKey,
      label: state.viewLabel,
      positions: state.layout.positions,
      junctions: state.layout.junctions,
      routes: state.layout.routes,
    };
    const blob = new Blob([`${JSON.stringify(payload, null, 2)}\n`], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `layout-${state.viewKey}.json`;
    anchor.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
    showStatus(`layout-${state.viewKey}.json を書き出しました。`, "success");
  }

  function parseCustomCsv(source) {
    const result = Papa.parse(source, { header: true, skipEmptyLines: true, transformHeader: (header) => header.trim() });
    if (result.errors.length) throw new Error(result.errors[0].message);
    const genderMap = { "オス": "male", "メス": "female", "雄": "male", "雌": "female", M: "male", F: "female" };
    const people = [];
    const names = new Map();
    const positions = {};
    result.data.forEach((row) => {
      const name = String(row["個体名"] || row.name || "").trim();
      if (!name) return;
      if (names.has(name)) throw new Error(`個体名「${name}」が重複しています`);
      const id = name;
      let born = String(row["生年月日"] || row.born || "").trim();
      let dead = String(row["没日"] || row.dead || "").trim();
      if (!dead && born.includes("-")) [born, dead] = born.split("-", 2);
      const person = {
        id,
        name,
        gender: genderMap[String(row["性別"] || row.gender || "").trim()] || String(row.gender || "").toLowerCase(),
        born,
        dead,
        locate: String(row["現在地"] || row.locate || row.location || "").trim(),
        img: String(row["アイコン"] || row.img || row.icon || "").trim(),
        _father: String(row["父親"] || row.father || "").trim(),
        _mother: String(row["母親"] || row.mother || "").trim(),
      };
      people.push(person);
      names.set(name, id);
      const rowNumber = Number.parseFloat(row["行番号"] || row.row || "");
      const columnNumber = Number.parseFloat(row["列番号"] || row.column || "");
      if (Number.isFinite(rowNumber) && Number.isFinite(columnNumber)) {
        positions[String(id)] = { x: columnNumber * 200, y: rowNumber * 100 };
      }
    });
    people.forEach((person) => {
      if (names.has(person._father)) person.fid = names.get(person._father);
      if (names.has(person._mother)) person.mid = names.get(person._mother);
      delete person._father;
      delete person._mother;
    });
    return { people, layout: { positions, junctions: {}, routes: {} } };
  }

  function renderCustom() {
    const source = document.getElementById("custom-data").value.trim();
    if (!source) return showStatus("CSVまたはJSONを入力してください。", "error");
    try {
      const type = document.querySelector('input[name="source-type"]:checked').value;
      let parsed;
      if (type === "csv") {
        parsed = parseCustomCsv(source);
      } else {
        const json = JSON.parse(source);
        parsed = Array.isArray(json)
          ? { people: json, layout: { positions: {}, junctions: {}, routes: {} } }
          : { people: json.people, layout: json.layout || { positions: {}, junctions: {}, routes: {} } };
      }
      if (!Array.isArray(parsed.people) || !parsed.people.length) throw new Error("個体データがありません");
      parsed.people = parsed.people.map((person) => ({
        ...person,
        id: String(person.id ?? person.name),
        ...(person.fid === undefined ? {} : { fid: String(person.fid) }),
        ...(person.mid === undefined ? {} : { mid: String(person.mid) }),
      }));
      document.getElementById("download-csv").removeAttribute("href");
      renderGraph(parsed.people, parsed.layout, "custom", "貼り付けたデータ");
    } catch (error) {
      showStatus(`読込エラー: ${error.message}`, "error");
    }
  }

  function initialize() {
    const select = document.getElementById("view-select");
    Object.entries(window.familyViews).forEach(([key, view]) => {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = view.label;
      select.append(option);
    });
    document.getElementById("render-view").addEventListener("click", renderSelectedView);
    select.addEventListener("change", () => {
      const view = window.familyViews[select.value];
      document.getElementById("download-csv").href = `./${view.csv}`;
    });
    document.getElementById("edit-layout").addEventListener("change", (event) => setEditMode(event.target.checked));
    document.getElementById("export-layout").addEventListener("click", exportLayout);
    document.getElementById("render-custom").addEventListener("click", renderCustom);
    document.getElementById("clear-custom").addEventListener("click", () => {
      document.getElementById("custom-data").value = "";
    });
    if (window.familyViews.yume) select.value = "yume";
    renderSelectedView();
  }

  window.addEventListener("DOMContentLoaded", initialize);
})();
