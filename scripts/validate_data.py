#!/usr/bin/env python3
"""Validate canonical pedigree facts, layouts, routes, and image references."""

from __future__ import annotations

import argparse
from collections import Counter
from pathlib import Path
from urllib.parse import urlparse

from data_model import PROJECT_ROOT, load_data, people_by_id


IMAGE_DIRECTORY = PROJECT_ROOT / "imgs"
VALID_GENDERS = {"", "male", "female"}


def validate() -> tuple[list[str], list[str]]:
    errors: list[str] = []
    warnings: list[str] = []
    people, views = load_data()
    by_id = people_by_id(people)

    ids = [int(person["id"]) for person in people]
    names = [str(person.get("name", "")) for person in people]
    for person_id, count in Counter(ids).items():
        if count > 1:
            errors.append(f"ID {person_id} が重複しています")
    for name, count in Counter(names).items():
        if not name:
            errors.append("個体名が空のデータがあります")
        elif count > 1:
            errors.append(f"個体名「{name}」が重複しています")

    placeholder_names: list[str] = []
    missing_icons: set[str] = set()
    partner_pairs: set[tuple[int, int]] = set()
    for person in people:
        person_id = int(person["id"])
        name = str(person.get("name", person_id))
        gender = str(person.get("gender", ""))
        if gender not in VALID_GENDERS:
            errors.append(f"{name}: 未対応のgender「{gender}」です")
        if "dead" not in person:
            errors.append(f"{name}: deadフィールドがありません")
        if "-" in str(person.get("born", "")):
            errors.append(f"{name}: bornに没日が混在しています")

        parent_ids: list[int] = []
        for field in ("fid", "mid"):
            if field in person:
                parent_id = int(person[field])
                parent_ids.append(parent_id)
                if parent_id not in by_id:
                    errors.append(f"{name}: 存在しない{field}={parent_id}を参照しています")
                if parent_id == person_id:
                    errors.append(f"{name}: 自分自身が親になっています")
        if len(parent_ids) == 2:
            partner_pairs.add(tuple(sorted(parent_ids)))

        icon = str(person.get("img", ""))
        filename = Path(urlparse(icon).path).name
        if filename == ".png":
            placeholder_names.append(name)
        elif filename and not (IMAGE_DIRECTORY / filename).is_file():
            missing_icons.add(filename)

    valid_ids = set(by_id)
    for view_key, view in views.items():
        members = [int(value) for value in view.get("members", [])]
        duplicate_members = [value for value, count in Counter(members).items() if count > 1]
        if duplicate_members:
            errors.append(f"{view_key}: membersに重複IDがあります: {duplicate_members}")
        for member_id in members:
            if member_id not in valid_ids:
                errors.append(f"{view_key}: 不明なmember ID {member_id}です")

        member_set = set(members)
        for person_id, position in view.get("positions", {}).items():
            if int(person_id) not in member_set:
                errors.append(f"{view_key}: positionsのID {person_id}がmembersにありません")
            if not all(isinstance(position.get(axis), (int, float)) for axis in ("x", "y")):
                errors.append(f"{view_key}: positions[{person_id}]の座標が不正です")

        for pair_key, position in view.get("junctions", {}).items():
            try:
                pair = tuple(sorted(int(value) for value in pair_key.split("|")))
            except ValueError:
                errors.append(f"{view_key}: 接点キー「{pair_key}」が不正です")
                continue
            if pair not in partner_pairs:
                errors.append(f"{view_key}: 接点「{pair_key}」に対応する親ペアがありません")
            if not all(isinstance(position.get(axis), (int, float)) for axis in ("x", "y")):
                errors.append(f"{view_key}: junctions[{pair_key}]の座標が不正です")

        for route_key, route in view.get("routes", {}).items():
            if ">" not in route_key:
                errors.append(f"{view_key}: 経路キー「{route_key}」が不正です")
                continue
            pair_key, child_text = route_key.split(">", 1)
            try:
                child_id = int(child_text)
            except ValueError:
                errors.append(f"{view_key}: 経路の子ID「{child_text}」が不正です")
                continue
            child = by_id.get(child_id)
            if child is None or "fid" not in child or "mid" not in child:
                errors.append(f"{view_key}: 経路「{route_key}」の子または両親が不正です")
            else:
                expected_pair = "|".join(map(str, sorted((int(child["fid"]), int(child["mid"])))))
                if pair_key != expected_pair:
                    errors.append(f"{view_key}: 経路「{route_key}」の親ペアが一致しません")
            points = route.get("points") if isinstance(route, dict) else None
            if not isinstance(points, list) or any(
                not isinstance(point, dict)
                or not all(isinstance(point.get(axis), (int, float)) for axis in ("x", "y"))
                for point in points
            ):
                errors.append(f"{view_key}: routes[{route_key}]のpointsが不正です")

    if placeholder_names:
        warnings.append(f"プレースホルダーのアイコンURLが{len(placeholder_names)}件あります")
    if missing_icons:
        warnings.append(f"存在しない画像があります: {', '.join(sorted(missing_icons))}")
    return errors, warnings


def main() -> int:
    parser = argparse.ArgumentParser(description="data.jsの家系・表示レイアウトを検査します")
    parser.add_argument("--strict-images", action="store_true", help="画像警告もエラーとして扱う")
    args = parser.parse_args()

    errors, warnings = validate()
    for message in errors:
        print(f"ERROR: {message}")
    for message in warnings:
        print(f"WARN: {message}")
    error_count = len(errors) + (len(warnings) if args.strict_images else 0)
    print(f"検査完了: 個体・表示レイアウト / エラー{error_count}件 / 画像警告{len(warnings)}件")
    return 1 if error_count else 0


if __name__ == "__main__":
    raise SystemExit(main())
