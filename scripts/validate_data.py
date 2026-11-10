#!/usr/bin/env python3
"""Validate the CSV files used by the family-tree views."""

from __future__ import annotations

import argparse
import csv
import json
import re
from collections import Counter
from pathlib import Path
from urllib.parse import urlparse


PROJECT_ROOT = Path(__file__).resolve().parent.parent
CSV_DIRECTORY = PROJECT_ROOT / "csvs"
IMAGE_DIRECTORY = PROJECT_ROOT / "imgs"
DATA_FILE = PROJECT_ROOT / "data.js"
REQUIRED_COLUMNS = (
    "行番号",
    "列番号",
    "個体名",
    "性別",
    "生年月日",
    "父親",
    "母親",
    "現在地",
    "アイコン",
)
VALID_GENDERS = {"", "オス", "メス", "おす", "めす", "雄", "雌", "male", "female", "M", "F"}


def validate_csv(path: Path) -> tuple[list[str], list[str]]:
    errors: list[str] = []
    warnings: list[str] = []
    placeholder_icon_count = 0
    missing_icons: set[str] = set()

    with path.open(encoding="utf-8-sig", newline="") as source:
        reader = csv.DictReader(source)
        columns = tuple(reader.fieldnames or ())
        missing_columns = [column for column in REQUIRED_COLUMNS if column not in columns]
        if missing_columns:
            return ([f"必須列がありません: {', '.join(missing_columns)}"], warnings)
        rows = list(reader)

    names = [row["個体名"].strip() for row in rows if row["個体名"].strip()]
    duplicates = sorted(name for name, count in Counter(names).items() if count > 1)
    if duplicates:
        errors.append(f"個体名が重複しています: {', '.join(duplicates)}")

    for line_number, row in enumerate(rows, start=2):
        name = row["個体名"].strip()
        if not name:
            errors.append(f"{line_number}行目: 個体名が空です")

        gender = row["性別"].strip()
        if gender not in VALID_GENDERS:
            errors.append(f"{line_number}行目 ({name}): 未対応の性別「{gender}」です")

        for column in ("行番号", "列番号"):
            value = row[column].strip()
            if value:
                try:
                    int(value)
                except ValueError:
                    errors.append(f"{line_number}行目 ({name}): {column}「{value}」は整数ではありません")

        icon = row["アイコン"].strip()
        if not icon:
            continue
        filename = Path(urlparse(icon).path).name
        if filename == ".png":
            placeholder_icon_count += 1
        elif filename and not (IMAGE_DIRECTORY / filename).is_file():
            missing_icons.add(filename)

    if placeholder_icon_count:
        warnings.append(f"プレースホルダーのアイコンURLが{placeholder_icon_count}件あります")
    if missing_icons:
        warnings.append(f"存在しない画像があります: {', '.join(sorted(missing_icons))}")

    return errors, warnings


def validate_data_js() -> list[str]:
    errors: list[str] = []
    source = DATA_FILE.read_text(encoding="utf-8")
    blocks = re.findall(r"^  \{\n(.*?)^  \},$", source, flags=re.MULTILINE | re.DOTALL)
    people: dict[int, dict[str, object]] = {}

    for block_number, block in enumerate(blocks, start=1):
        id_match = re.search(r"^    id: (\d+),$", block, flags=re.MULTILINE)
        name_match = re.search(r'^    name: (".*"),$', block, flags=re.MULTILINE)
        pids_match = re.search(r"^    pids: \[([^]]*)\],$", block, flags=re.MULTILINE)
        if not (id_match and name_match and pids_match):
            errors.append(f"data.jsの{block_number}番目の個体を解析できません")
            continue

        person_id = int(id_match.group(1))
        try:
            name = json.loads(name_match.group(1))
        except json.JSONDecodeError:
            errors.append(f"data.jsのID {person_id}: 個体名が不正な文字列です")
            continue

        if person_id in people:
            errors.append(f"data.js: ID {person_id} が重複しています")
        parent_ids = {
            key: int(match.group(1))
            for key in ("fid", "mid")
            if (match := re.search(rf"^    {key}: (\d+),$", block, flags=re.MULTILINE))
        }
        people[person_id] = {
            "name": name,
            "pids": [int(value) for value in re.findall(r"\d+", pids_match.group(1))],
            **parent_ids,
        }

    names = [str(person["name"]) for person in people.values()]
    duplicate_names = sorted(name for name, count in Counter(names).items() if count > 1)
    if "" in names:
        errors.append("data.js: 個体名が空のデータがあります")
    if duplicate_names:
        errors.append(f"data.js: 個体名が重複しています: {', '.join(duplicate_names)}")

    valid_ids = set(people)
    for person_id, person in people.items():
        referenced_ids = [*person["pids"]]
        referenced_ids.extend(person[key] for key in ("fid", "mid") if key in person)
        for referenced_id in referenced_ids:
            if referenced_id not in valid_ids:
                errors.append(f"data.jsのID {person_id}: 存在しないID {referenced_id} を参照しています")
        if person_id in person["pids"]:
            errors.append(f"data.jsのID {person_id}: 自分自身がパートナーになっています")
        for partner_id in person["pids"]:
            if partner_id in people and person_id not in people[partner_id]["pids"]:
                errors.append(f"data.jsのID {person_id} と {partner_id}: パートナー参照が片方向です")

    with (CSV_DIRECTORY / "all.csv").open(encoding="utf-8-sig", newline="") as source_file:
        csv_names = [row["個体名"].strip() for row in csv.DictReader(source_file)]
    if names != csv_names:
        errors.append("data.js と csvs/all.csv の個体名・並び順が一致しません")

    return errors


def main() -> int:
    parser = argparse.ArgumentParser(description="家系図CSVの重複・形式・画像参照を検査します")
    parser.add_argument(
        "--strict-images",
        action="store_true",
        help="画像参照の警告もエラーとして扱う",
    )
    args = parser.parse_args()

    error_count = 0
    warning_count = 0
    paths = sorted(CSV_DIRECTORY.glob("*.csv"))
    if not paths:
        print("ERROR: csvs/*.csv が見つかりません")
        return 1

    for path in paths:
        errors, warnings = validate_csv(path)
        for message in errors:
            print(f"ERROR {path.relative_to(PROJECT_ROOT)}: {message}")
        for message in warnings:
            print(f"WARN  {path.relative_to(PROJECT_ROOT)}: {message}")
        error_count += len(errors)
        warning_count += len(warnings)

    data_errors = validate_data_js()
    for message in data_errors:
        print(f"ERROR data.js: {message}")
    error_count += len(data_errors)

    if args.strict_images:
        error_count += warning_count

    print(f"検査完了: {len(paths)}ファイル / エラー{error_count}件 / 画像警告{warning_count}件")
    return 1 if error_count else 0


if __name__ == "__main__":
    raise SystemExit(main())
