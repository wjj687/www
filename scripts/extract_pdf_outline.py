from __future__ import annotations

import json
import sys
from pathlib import Path

from pypdf import PdfReader


def walk_outline(reader: PdfReader, items, level: int, rows: list[dict]) -> None:
    for item in items:
        if isinstance(item, list):
            walk_outline(reader, item, level + 1, rows)
            continue

        title = getattr(item, "title", None)
        if not title:
          continue

        try:
            page = reader.get_destination_page_number(item)
        except Exception:
            page = None

        rows.append(
            {
                "level": level,
                "page": page,
                "title": title,
            }
        )


def main() -> int:
    if len(sys.argv) != 2:
        print("Usage: python scripts/extract_pdf_outline.py <pdf-path>", file=sys.stderr)
        return 1

    pdf_path = Path(sys.argv[1]).expanduser().resolve()
    reader = PdfReader(str(pdf_path))
    rows: list[dict] = []

    try:
        outline = reader.outline
    except Exception:
        outline = []

    walk_outline(reader, outline, 0, rows)

    payload = {
        "file": str(pdf_path),
        "pages": len(reader.pages),
        "outline": rows,
    }
    print(json.dumps(payload, ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
