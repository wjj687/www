from __future__ import annotations

import json
from pathlib import Path

from pypdf import PdfReader

TITLE_NORMALIZATION = {
    "芣？": "芣苢",
    "何彼？矣": "何彼襛矣",
    "蝃？": "蝃蝀",
    "兔爱": "兔爰",
    "东门之？": "东门之墠",
    "驷？": "驷驖",
    "兼葭": "蒹葭",
    "瞻印": "瞻卬",
    "？弁": "頍弁",
    "？": "駉",
    "有？": "有駜",
    "？宫": "閟宫",
}

LOST_POEM_KEYS = {
    ("鹿鸣之什", "南陔"),
    ("白华之什", "白华"),
    ("白华之什", "华黍"),
    ("白华之什", "由庚"),
    ("白华之什", "崇丘"),
    ("白华之什", "由仪"),
}


def main() -> int:
    pdf_path = Path(r"F:\codex\poem\yiwen.pdf")
    reader = PdfReader(str(pdf_path))

    try:
        outline = reader.outline
    except Exception:
        outline = []

    rows: list[dict] = []
    current_volume = ""
    current_section = ""
    current_chapter = ""
    order = 0

    def walk(items, level: int = 0) -> None:
        nonlocal current_volume, current_section, current_chapter, order

        for item in items:
            if isinstance(item, list):
                walk(item, level + 1)
                continue

            title = getattr(item, "title", None)
            if not title:
                continue

            try:
                page = reader.get_destination_page_number(item)
            except Exception:
                page = None

            if level == 0 and title.startswith("卷"):
                current_volume = title
                current_section = ""
                current_chapter = ""
                continue

            if level == 1:
                current_section = title
                current_chapter = ""
                continue

            if level == 2:
                current_chapter = title
                continue

            if level == 3:
                normalized_title = TITLE_NORMALIZATION.get(title, title)

                if (current_chapter, normalized_title) in LOST_POEM_KEYS:
                    continue

                order += 1
                rows.append(
                    {
                        "order": order,
                        "title": normalized_title,
                        "page": page,
                        "volume": current_volume,
                        "section": current_section,
                        "chapter": current_chapter,
                    }
                )

    walk(outline)
    print(json.dumps(rows, ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
