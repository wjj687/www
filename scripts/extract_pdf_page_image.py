from __future__ import annotations

import sys
from pathlib import Path

from pypdf import PdfReader


def main() -> int:
    if len(sys.argv) != 4:
      print("Usage: python scripts/extract_pdf_page_image.py <pdf_path> <page_index> <output_path>", file=sys.stderr)
      return 1

    pdf_path = Path(sys.argv[1])
    page_index = int(sys.argv[2])
    output_path = Path(sys.argv[3])

    reader = PdfReader(str(pdf_path))
    page = reader.pages[page_index]
    images = list(page.images)

    if not images:
        print(f"No image found on page {page_index}", file=sys.stderr)
        return 1

    image_file = images[0]
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_bytes(image_file.data)
    print(str(output_path))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
