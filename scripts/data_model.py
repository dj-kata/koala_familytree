"""Read and write the JSON-compatible literals stored in data.js."""

from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any


PROJECT_ROOT = Path(__file__).resolve().parent.parent
DATA_PATH = PROJECT_ROOT / "data.js"


def load_data(path: Path = DATA_PATH) -> tuple[list[dict[str, Any]], dict[str, Any]]:
    source = path.read_text(encoding="utf-8")
    match = re.fullmatch(
        r"const familyData = (\[.*\]);\n\n"
        r"const familyViews = (\{.*\});\n\n"
        r"window\.familyData = familyData;\n"
        r"window\.familyViews = familyViews;\n?",
        source,
        flags=re.DOTALL,
    )
    if not match:
        raise ValueError("data.js is not in the canonical JSON-compatible format")
    return json.loads(match.group(1)), json.loads(match.group(2))


def write_data(
    people: list[dict[str, Any]],
    views: dict[str, Any],
    path: Path = DATA_PATH,
) -> None:
    people_json = json.dumps(people, ensure_ascii=False, indent=2)
    views_json = json.dumps(views, ensure_ascii=False, indent=2)
    path.write_text(
        f"const familyData = {people_json};\n\n"
        f"const familyViews = {views_json};\n\n"
        "window.familyData = familyData;\n"
        "window.familyViews = familyViews;\n",
        encoding="utf-8",
        newline="\n",
    )


def people_by_id(people: list[dict[str, Any]]) -> dict[str, dict[str, Any]]:
    return {str(person["id"]): person for person in people}
