"""Apply a layout JSON exported from the browser to canonical data.js."""

from __future__ import annotations

import argparse
import json
from pathlib import Path

from data_model import load_data, write_data


def merge_layout(exported: dict, views: dict) -> str:
    view_key = exported.get("view")
    if not isinstance(view_key, str):
        raise ValueError("layout JSON has no view key")
    if view_key not in views:
        raise ValueError(f"unknown view: {view_key}")

    for field in ("positions", "junctions", "routes"):
        value = exported.get(field)
        if not isinstance(value, dict):
            raise ValueError(f"layout JSON has no {field} object")
        views[view_key][field] = value
    return view_key


def main() -> None:
    parser = argparse.ArgumentParser(description="ブラウザから出力したレイアウトをdata.jsへ反映します")
    parser.add_argument("layout", type=Path, help="レイアウトJSON")
    args = parser.parse_args()

    exported = json.loads(args.layout.read_text(encoding="utf-8"))
    people, views = load_data()
    view_key = merge_layout(exported, views)
    write_data(people, views)
    print(f"{view_key} のレイアウトを data.js に反映しました")


if __name__ == "__main__":
    main()
