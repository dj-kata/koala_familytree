"""Generate every compatibility CSV from canonical data.js."""

from __future__ import annotations

import csv
import io
import argparse
from pathlib import Path

from data_model import PROJECT_ROOT, load_data, people_by_id


ROW_SPACING = 100
COLUMN_SPACING = 200
FIELDNAMES = (
    "行番号",
    "列番号",
    "個体名",
    "性別",
    "生年月日",
    "没日",
    "父親",
    "母親",
    "現在地",
    "アイコン",
)
GENDER_LABELS = {"male": "オス", "female": "メス"}


def grid_value(value: float, spacing: int) -> str:
    result = value / spacing
    return str(int(result)) if result.is_integer() else str(result)


def render_view(view: dict, by_id: dict[int, dict]) -> str:
    target = io.StringIO(newline="")
    positions = view.get("positions", {})
    writer = csv.DictWriter(target, fieldnames=FIELDNAMES, lineterminator="\n")
    writer.writeheader()
    for person_id in view["members"]:
        person = by_id[int(person_id)]
        position = positions.get(str(person_id), {})
        father = by_id.get(int(person["fid"])) if "fid" in person else None
        mother = by_id.get(int(person["mid"])) if "mid" in person else None
        writer.writerow(
            {
                "行番号": grid_value(float(position["y"]), ROW_SPACING) if "y" in position else "",
                "列番号": grid_value(float(position["x"]), COLUMN_SPACING) if "x" in position else "",
                "個体名": person["name"],
                "性別": GENDER_LABELS.get(person.get("gender", ""), person.get("gender", "")),
                "生年月日": person.get("born", ""),
                "没日": person.get("dead", ""),
                "父親": father["name"] if father else "",
                "母親": mother["name"] if mother else "",
                "現在地": person.get("locate", ""),
                "アイコン": person.get("img", ""),
            }
        )
    return target.getvalue()


def main() -> int:
    parser = argparse.ArgumentParser(description="data.jsから表示用CSVを生成します")
    parser.add_argument("--check", action="store_true", help="生成せず同期状態だけを検査する")
    args = parser.parse_args()

    people, views = load_data()
    by_id = people_by_id(people)
    stale: list[Path] = []

    for view in views.values():
        csv_path = PROJECT_ROOT / view["csv"]
        expected = render_view(view, by_id)
        if args.check:
            if not csv_path.is_file() or csv_path.read_text(encoding="utf-8-sig") != expected:
                stale.append(csv_path)
        else:
            csv_path.parent.mkdir(parents=True, exist_ok=True)
            csv_path.write_text(expected, encoding="utf-8", newline="\n")

    if stale:
        for path in stale:
            print(f"ERROR: {path.relative_to(PROJECT_ROOT)} は data.js と同期していません")
        print("make generate を実行してください")
        return 1
    if args.check:
        print(f"CSV同期確認: {len(views)}ファイル")
    else:
        print(f"CSV生成完了: {len(views)}ファイル")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
