"""Fill missing positions in named views without moving existing nodes."""

from __future__ import annotations

from collections import defaultdict
from statistics import median

from data_model import load_data, people_by_id, write_data


ROW_SPACING = 100
COLUMN_SPACING = 200


def generations(people: list[dict]) -> dict[str, int]:
    by_id = people_by_id(people)
    cache: dict[str, int] = {}

    def resolve(person_id: str, visiting: set[str] | None = None) -> int:
        if person_id in cache:
            return cache[person_id]
        visiting = set() if visiting is None else visiting
        if person_id in visiting:
            return 0
        visiting.add(person_id)
        person = by_id[person_id]
        parent_generations = [
            resolve(str(person[field]), visiting)
            for field in ("fid", "mid")
            if field in person and str(person[field]) in by_id
        ]
        visiting.remove(person_id)
        result = max(parent_generations, default=-1) + 1
        cache[person_id] = result
        return result

    for person_id in by_id:
        resolve(person_id)
    return cache


def is_free(x: float, y: float, positions: dict[str, dict]) -> bool:
    return all(abs(x - point["x"]) >= 120 or abs(y - point["y"]) >= 70 for point in positions.values())


def nearest_free_x(base_x: float, y: float, positions: dict[str, dict]) -> float:
    snapped = round(base_x / COLUMN_SPACING) * COLUMN_SPACING
    offsets = [0]
    for step in range(1, 20):
        offsets.extend((step * COLUMN_SPACING, -step * COLUMN_SPACING))
    for offset in offsets:
        candidate = snapped + offset
        if is_free(candidate, y, positions):
            return candidate
    return snapped


def fill_view(view: dict, generation_by_id: dict[str, int], by_id: dict[str, dict]) -> list[str]:
    positions = view.setdefault("positions", {})
    missing = [str(person_id) for person_id in view["members"] if str(person_id) not in positions]
    if not missing:
        return []

    generation_rows: dict[int, list[float]] = defaultdict(list)
    for person_id, position in positions.items():
        generation_rows[generation_by_id[person_id]].append(float(position["y"]))

    added: list[str] = []
    for person_id in sorted(missing, key=lambda value: (generation_by_id[value], view["members"].index(value))):
        person = by_id[person_id]
        parent_positions = [
            positions[str(person[field])]
            for field in ("fid", "mid")
            if field in person and str(person[field]) in positions
        ]
        generation = generation_by_id[person_id]
        if parent_positions:
            base_x = sum(point["x"] for point in parent_positions) / len(parent_positions)
            y = max(point["y"] for point in parent_positions) + ROW_SPACING
        else:
            row = generation_rows.get(generation, [])
            y = median(row) if row else (generation + 1) * ROW_SPACING
            same_row_x = [point["x"] for point in positions.values() if abs(point["y"] - y) < 1]
            base_x = median(same_row_x) if same_row_x else 0
        y = round(y / ROW_SPACING) * ROW_SPACING
        x = nearest_free_x(base_x, y, positions)
        positions[person_id] = {"x": x, "y": y}
        generation_rows[generation].append(y)
        added.append(person_id)
    return added


def main() -> None:
    people, views = load_data()
    by_id = people_by_id(people)
    generation_by_id = generations(people)
    total = 0
    for view_key, view in views.items():
        if view_key == "all":
            continue
        added = fill_view(view, generation_by_id, by_id)
        if added:
            total += len(added)
            labels = ", ".join(f"{by_id[person_id]['name']}({person_id})" for person_id in added)
            print(f"{view_key}: {labels}")
    write_data(people, views)
    print(f"座標補完完了: {total}個体")


if __name__ == "__main__":
    main()
