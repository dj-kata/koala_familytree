from __future__ import annotations

import copy
import sys
import unittest
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(PROJECT_ROOT / "scripts"))

from apply_layout import merge_layout  # noqa: E402
from data_model import load_data, people_by_id  # noqa: E402
from generate_csvs import render_view  # noqa: E402


class DataModelTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.people, cls.views = load_data()
        cls.by_id = people_by_id(cls.people)

    def test_born_and_dead_are_separate(self) -> None:
        self.assertTrue(all("dead" in person for person in self.people))
        self.assertTrue(all("-" not in person.get("born", "") for person in self.people))
        tilly = next(person for person in self.people if person["name"] == "ティリー")
        self.assertEqual("2009/12/15", tilly["born"])
        self.assertEqual("2024/12/25", tilly["dead"])

    def test_ids_and_parent_references_are_ascii_strings(self) -> None:
        known_ids = set(self.by_id)
        for person in self.people:
            self.assertRegex(person["id"], r"^[a-z][a-z0-9_]*$")
            for field in ("fid", "mid"):
                if field in person:
                    self.assertIsInstance(person[field], str)
                    self.assertIn(person[field], known_ids)

    def test_generated_csv_has_dead_column(self) -> None:
        generated = render_view(self.views["all"], self.by_id)
        self.assertTrue(generated.startswith("行番号,列番号,個体名,性別,生年月日,没日,"))
        self.assertIn(",ティリー,メス,2009/12/15,2024/12/25,", generated)

    def test_named_views_reference_known_people(self) -> None:
        known_ids = set(self.by_id)
        self.assertEqual(11, len(self.views))
        for view in self.views.values():
            self.assertLessEqual(set(map(str, view["members"])), known_ids)

    def test_named_views_have_saved_positions(self) -> None:
        for view_key, view in self.views.items():
            if view_key != "all":
                self.assertLessEqual(set(view["members"]), set(view["positions"]), view_key)

    def test_layout_export_can_be_merged(self) -> None:
        views = copy.deepcopy(self.views)
        exported = {
            "view": "yume",
            "positions": {"ティリー": {"x": 100, "y": 200}},
            "junctions": {"マックス|ティリー": {"x": 150, "y": 200}},
            "routes": {"マックス|ティリー>チャーリー": {"mode": "orthogonal", "points": []}},
        }
        self.assertEqual("yume", merge_layout(exported, views))
        self.assertEqual(exported["positions"], views["yume"]["positions"])


if __name__ == "__main__":
    unittest.main()
