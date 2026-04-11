from __future__ import annotations

import json
import re
from collections import defaultdict
from pathlib import Path

import mobi
from bs4 import BeautifulSoup
from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "data"
SHANGXI_DIR = ROOT / "shangxi"

MANUAL_FILE = DATA_DIR / "appreciations-manual.ts"
GENERATED_FILE = DATA_DIR / "appreciations-generated.json"
MAIN_FILE = DATA_DIR / "appreciations.ts"

ZHOU_FILE = next(path for path in SHANGXI_DIR.glob("*.pdf") if "周啸天" in path.name)
SUYING_FILE = next(path for path in SHANGXI_DIR.glob("*.pdf") if "苏缨" in path.name)
LIYANLEI_FILE = next(path for path in SHANGXI_DIR.glob("*.pdf") if "李颜垒" in path.name)
LIUSHAHE_FILE = next(path for path in SHANGXI_DIR.glob("*.mobi"))
LIUSHAHE_HTML_FILE = ROOT / ".tmp" / "liushahe-mobi" / "mobi7" / "book.html"


POEM_ENTRY_PATTERN = re.compile(
    r'id:\s*"([^"]+)"\s*,\s*chapter:\s*"([^"]+)"\s*,\s*title:\s*"([^"]+)"\s*,\s*orderLabel:\s*"([^"]+)"',
    re.S,
)
MANUAL_PAIR_PATTERN = re.compile(
    r'poemId:\s*"([^"]+)".*?source:\s*\{\s*author:\s*"([^"]+)"',
    re.S,
)
TITLE_ALIASES = {
    "萚兮": "箨兮",
    "緜": "绵",
}


def read_poem_index() -> list[dict[str, str]]:
    return json.loads((DATA_DIR / "poem-index.json").read_text(encoding="utf-8"))


def read_poem_map() -> dict[tuple[str, str], dict[str, str]]:
    poem_map: dict[tuple[str, str], dict[str, str]] = {}
    for path in sorted(DATA_DIR.glob("*.ts")):
        if "ai-analysis" in path.name or "appreciation" in path.name:
            continue
        text = path.read_text(encoding="utf-8")
        for poem_id, chapter, title, order_label in POEM_ENTRY_PATTERN.findall(text):
            poem_map[(chapter, title)] = {
                "id": poem_id,
                "chapter": chapter,
                "title": title,
                "orderLabel": order_label,
            }
    if len(poem_map) != 305:
        raise RuntimeError(f"expected 305 poem mappings, got {len(poem_map)}")
    return poem_map


def normalize_chapter_key(section: str | None, chapter: str) -> str:
    if "·" in chapter:
        return chapter
    if section in {"国风", "小雅", "大雅", "周颂"}:
        return f"{section}·{chapter}"
    return chapter


def lookup_poem_meta(
    poem_map: dict[tuple[str, str], dict[str, str]],
    chapter: str,
    title: str,
    section: str | None = None,
) -> dict[str, str]:
    title_candidates = [title]
    alias = TITLE_ALIASES.get(title)
    if alias and alias not in title_candidates:
        title_candidates.append(alias)
    for source_title, target_title in TITLE_ALIASES.items():
        if target_title == title and source_title not in title_candidates:
            title_candidates.append(source_title)

    for candidate_title in title_candidates:
        direct_key = (chapter, candidate_title)
        if direct_key in poem_map:
            return poem_map[direct_key]

        normalized_key = (normalize_chapter_key(section, chapter), candidate_title)
        if normalized_key in poem_map:
            return poem_map[normalized_key]

    candidates = [meta for meta in poem_map.values() if meta["title"] in title_candidates]
    if chapter:
        chapter_candidates = [meta for meta in candidates if chapter in meta["chapter"]]
        if len(chapter_candidates) == 1:
            return chapter_candidates[0]
    if section:
        section_candidates = [meta for meta in candidates if meta["chapter"].startswith(section)]
        if len(section_candidates) == 1:
            return section_candidates[0]
    if len(candidates) == 1:
        return candidates[0]

    raise KeyError((chapter, title, section))


def bootstrap_manual_entries() -> None:
    if MANUAL_FILE.exists():
        return

    legacy_text = MAIN_FILE.read_text(encoding="utf-8")
    marker = "const appreciationEntries: PoemAppreciationEntry[] = "
    start = legacy_text.index(marker) + len(marker)
    end = legacy_text.rindex("];") + 1
    array_text = legacy_text[start:end]

    manual_text = (
        'import type { PoemAppreciationEntry } from "@/data/appreciations-types";\n\n'
        f"export const appreciationManualEntries: PoemAppreciationEntry[] = {array_text};\n"
    )
    MANUAL_FILE.write_text(manual_text, encoding="utf-8")


def read_manual_pairs() -> set[tuple[str, str]]:
    text = MANUAL_FILE.read_text(encoding="utf-8")
    return {(poem_id, author) for poem_id, author in MANUAL_PAIR_PATTERN.findall(text)}


def flatten_outline(path: Path) -> list[tuple[str, int]]:
    reader = PdfReader(str(path))
    items: list[tuple[str, int]] = []

    def walk(nodes):
        for node in nodes:
            if isinstance(node, list):
                walk(node)
                continue
            try:
                title = getattr(node, "title", str(node))
                page = reader.get_destination_page_number(node) + 1
                items.append((title, page))
            except Exception:
                continue

    walk(reader.outline)
    return items


def compact_page_text(text: str) -> str:
    lines = [line.strip() for line in text.replace("\r\n", "\n").split("\n")]
    lines = [line for line in lines if line]
    if not lines:
        return ""
    merged = "".join(lines)
    merged = re.sub(r"\s+", " ", merged)
    merged = merged.replace("“ ", "“").replace(" ”", "”")
    merged = merged.replace("（ ", "（").replace(" ）", "）")
    return merged.strip()


def extract_page_texts(reader: PdfReader, start_page: int, end_page: int) -> list[str]:
    texts: list[str] = []
    for page_num in range(start_page, end_page + 1):
        texts.append(reader.pages[page_num - 1].extract_text() or "")
    return texts


def extract_between(text: str, start_marker: str, end_marker: str | None = None) -> str:
    start = text.find(start_marker)
    if start == -1:
        return text.strip()
    text = text[start + len(start_marker) :]
    if end_marker:
        end = text.find(end_marker)
        if end != -1:
            text = text[:end]
    return text.strip()


def split_pages_to_paragraphs(texts: list[str]) -> list[str]:
    paragraphs: list[str] = []
    for text in texts:
        compact = compact_page_text(text)
        if compact:
            paragraphs.append(compact)
    return paragraphs


def format_pages(start_page: int, end_page: int) -> str:
    if start_page == end_page:
        return f"PDF 第{start_page}页"
    return f"PDF 第{start_page}-{end_page}页"


def slugify_title(title: str) -> str:
    clean = re.sub(r"[^\w\u4e00-\u9fff]+", "-", title, flags=re.UNICODE)
    clean = re.sub(r"-{2,}", "-", clean).strip("-")
    if not clean:
        clean = "entry"
    return clean.lower()


def build_zhou_ranges(poem_index: list[dict[str, str]]) -> list[tuple[dict[str, str], int, int]]:
    outline = flatten_outline(ZHOU_FILE)
    candidates = outline[9 : next(i for i, (_, page) in enumerate(outline) if page >= 742)]

    chapter_groups: list[tuple[str, list[dict[str, str]]]] = []
    current_chapter = None
    bucket: list[dict[str, str]] = []
    for item in poem_index:
        chapter = item["chapter"]
        if chapter != current_chapter:
            if bucket:
                chapter_groups.append((current_chapter, bucket))
            current_chapter = chapter
            bucket = [item]
        else:
            bucket.append(item)
    if bucket:
        chapter_groups.append((current_chapter, bucket))

    pointer = 0
    assigned: list[tuple[dict[str, str], int]] = []

    for chapter, poems in chapter_groups:
        first_title = poems[0]["title"]
        start_index: int | None = None
        search = pointer
        while search < len(candidates):
            title, _page = candidates[search]
            if title == first_title:
                start_index = search
                break
            if title == chapter:
                start_index = search + 1
                break
            search += 1
        if start_index is None:
            raise RuntimeError(f"unable to align outline for chapter {chapter}")

        for offset, poem in enumerate(poems):
            title, page = candidates[start_index + offset]
            assigned.append((poem, page))
        pointer = start_index + len(poems)

    last_page = 739
    ranges: list[tuple[dict[str, str], int, int]] = []
    for idx, (poem, start_page) in enumerate(assigned):
        end_page = assigned[idx + 1][1] - 1 if idx + 1 < len(assigned) else last_page
        ranges.append((poem, start_page, end_page))
    return ranges


def generate_zhou_entries(
    poem_map: dict[tuple[str, str], dict[str, str]],
    manual_pairs: set[tuple[str, str]],
) -> list[dict]:
    poem_index = read_poem_index()
    ranges = build_zhou_ranges(poem_index)
    reader = PdfReader(str(ZHOU_FILE))
    entries: list[dict] = []

    for poem, start_page, end_page in ranges:
        poem_meta = lookup_poem_meta(
            poem_map,
            poem["chapter"],
            poem["title"],
            poem.get("section"),
        )
        poem_id = poem_meta["id"]
        if (poem_id, "周啸天") in manual_pairs:
            continue

        page_texts = extract_page_texts(reader, start_page, end_page)
        excerpt = extract_between("\f".join(page_texts), "鉴赏", "（周啸天）")
        paragraphs = split_pages_to_paragraphs(excerpt.split("\f"))
        if not paragraphs:
            continue

        entries.append(
            {
                "id": f"zhouxiaotian-{poem_id}",
                "poemId": poem_id,
                "title": f"《{poem['title']}》鉴赏",
                "subtitle": "",
                "summary": "",
                "labels": [],
                "source": {
                    "author": "周啸天",
                    "work": "《诗经楚辞鉴赏辞典》",
                    "year": "2012",
                    "pages": format_pages(start_page, end_page),
                },
                "sections": [{"title": "", "paragraphs": paragraphs}],
            }
        )

    return entries


def generate_suying_entries(
    poem_map: dict[tuple[str, str], dict[str, str]],
    manual_pairs: set[tuple[str, str]],
) -> list[dict]:
    outline = flatten_outline(SUYING_FILE)
    poem_items = outline[3:]
    reader = PdfReader(str(SUYING_FILE))
    entries: list[dict] = []

    for idx, (title, start_page) in enumerate(poem_items):
        if title not in {
            "关雎",
            "葛覃",
            "卷耳",
            "樛木",
            "螽斯",
            "桃夭",
            "兔罝",
            "芣苢",
            "汉广",
            "汝坟",
            "麟之趾",
        }:
            continue
        poem_meta = lookup_poem_meta(poem_map, "周南", title, "国风")
        if (poem_meta["id"], "苏缨") in manual_pairs:
            continue
        end_page = poem_items[idx + 1][1] - 1 if idx + 1 < len(poem_items) else 67
        page_texts = extract_page_texts(reader, start_page, end_page)
        excerpt = extract_between("\f".join(page_texts), "【考释】", "【字义】")
        paragraphs = split_pages_to_paragraphs(excerpt.split("\f"))
        if not paragraphs:
            continue

        entries.append(
            {
                "id": f"suying-{poem_meta['id']}",
                "poemId": poem_meta["id"],
                "title": f"《{title}》考释",
                "subtitle": "",
                "summary": "",
                "labels": [],
                "source": {
                    "author": "苏缨",
                    "work": "《诗经讲评之风人深致》",
                    "year": "2010",
                    "pages": format_pages(start_page, end_page),
                },
                "sections": [{"title": "", "paragraphs": paragraphs}],
            }
        )

    return entries


LIYANLEI_TITLE_PATTERN = re.compile(r"^(?P<title>.+?)\s*——\s*《(?P<chapter>[^·》]+)·(?P<poem>[^》]+)》$")


def trim_liyanlei_first_page(lines: list[str], article_title: str) -> list[str]:
    trimmed = [line.strip() for line in lines if line.strip()]
    if not trimmed:
        return trimmed
    if len(trimmed[0]) <= 8:
        trimmed = trimmed[1:]
    while trimmed and (
        trimmed[0] == article_title
        or trimmed[0] == "——"
        or ("《" in trimmed[0] and "》" in trimmed[0])
        or (len(trimmed[0]) <= 10 and "·" in trimmed[0])
    ):
        trimmed = trimmed[1:]
    return trimmed


def generate_liyanlei_entries(
    poem_map: dict[tuple[str, str], dict[str, str]],
    manual_pairs: set[tuple[str, str]],
) -> list[dict]:
    outline = flatten_outline(LIYANLEI_FILE)
    recognized: list[dict[str, str | int]] = []

    for title, page in outline:
        match = LIYANLEI_TITLE_PATTERN.match(title)
        if not match:
            continue
        chapter = match.group("chapter")
        poem_title = match.group("poem")
        try:
            poem_meta = lookup_poem_meta(poem_map, chapter, poem_title)
        except KeyError:
            continue
        article_title = match.group("title").strip()
        recognized.append(
            {
                "outlineTitle": title,
                "articleTitle": article_title,
                "chapter": chapter,
                "poemTitle": poem_title,
                "page": page,
                "poemId": poem_meta["id"],
            }
        )

    reader = PdfReader(str(LIYANLEI_FILE))
    deduped_entries: dict[tuple[str, str], dict] = {}

    for idx, entry in enumerate(recognized):
        poem_id = str(entry["poemId"])
        poem_meta = next(meta for meta in poem_map.values() if meta["id"] == poem_id)
        if (poem_meta["id"], "李颜垒") in manual_pairs:
            continue

        start_page = int(entry["page"])
        end_page = int(recognized[idx + 1]["page"]) - 1 if idx + 1 < len(recognized) else len(reader.pages)
        page_texts = extract_page_texts(reader, start_page, end_page)
        paragraphs: list[str] = []
        for page_index, text in enumerate(page_texts):
            lines = [line.strip() for line in text.replace("\r\n", "\n").split("\n") if line.strip()]
            if page_index == 0:
                lines = trim_liyanlei_first_page(lines, str(entry["articleTitle"]))
            compact = compact_page_text("\n".join(lines))
            if compact:
                paragraphs.append(compact)
        if not paragraphs:
            continue

        generated_entry = {
            "id": f"liyanlei-{poem_meta['id']}-p{start_page}",
            "poemId": poem_meta["id"],
            "title": str(entry["articleTitle"]),
            "subtitle": "",
            "summary": "",
            "labels": [],
            "_startPage": start_page,
            "source": {
                "author": "李颜垒",
                "work": "《最美不过诗经》",
                "pages": format_pages(start_page, end_page),
                "url": "https://e.dangdang.com/touch/products/1900110515.html",
            },
            "sections": [{"title": "", "paragraphs": paragraphs}],
        }
        dedupe_key = (poem_meta["id"], str(entry["articleTitle"]))
        previous = deduped_entries.get(dedupe_key)
        if previous is None:
            deduped_entries[dedupe_key] = generated_entry
            continue

        previous_paragraphs = sum(len(section["paragraphs"]) for section in previous["sections"])
        current_paragraphs = sum(
            len(section["paragraphs"]) for section in generated_entry["sections"]
        )
        previous_start_page = int(previous.get("_startPage", 0))
        if (current_paragraphs, start_page) > (previous_paragraphs, previous_start_page):
            deduped_entries[dedupe_key] = generated_entry

    entries: list[dict] = []
    for entry in deduped_entries.values():
        entry.pop("_startPage", None)
        entries.append(entry)

    return entries


def ensure_liushahe_html() -> Path:
    if LIUSHAHE_HTML_FILE.exists():
        return LIUSHAHE_HTML_FILE

    _temp_dir, extracted_path = mobi.extract(str(LIUSHAHE_FILE))
    return Path(extracted_path)


def normalize_liushahe_text(text: str) -> str:
    return re.sub(r"\s+", " ", text).strip()


def infer_liushahe_section(chapter: str) -> str:
    if chapter in {"小雅", "大雅", "周颂", "商颂"}:
        return chapter
    return "国风"


def extract_liushahe_catalog(soup: BeautifulSoup) -> list[dict[str, str]]:
    entries: list[dict[str, str]] = []
    seen_filepos: set[str] = set()

    for anchor in soup.find_all("a"):
        href = anchor.get("href")
        if not href or not href.startswith("#filepos"):
            continue

        text = "".join(anchor.stripped_strings).strip()
        split_index = text.find("\u3000")
        marker_index = text.find(chr(183))
        if split_index == -1 or marker_index == -1 or marker_index <= split_index:
            continue

        filepos = href[1:]
        if filepos in seen_filepos:
            continue
        seen_filepos.add(filepos)

        entries.append(
            {
                "filepos": filepos,
                "label": text[:split_index].strip(),
                "titleText": text,
                "chapter": text[split_index + 1 : marker_index].strip(),
                "poemTitle": text[marker_index + 1 :].strip(),
            }
        )

    return entries


def extract_liushahe_paragraphs(
    soup: BeautifulSoup,
    filepos: str,
    heading_text: str,
) -> list[str]:
    anchor = soup.find(id=filepos)
    if anchor is None:
        return []

    paragraphs: list[str] = []
    node = anchor
    while True:
        node = node.next_sibling
        if node is None:
            break
        if isinstance(node, str):
            continue

        node_id = node.get("id")
        if isinstance(node_id, str) and node_id.startswith("filepos"):
            break
        if node.name in {"img", "mbp:pagebreak"}:
            continue

        text = normalize_liushahe_text("".join(node.stripped_strings))
        if text:
            paragraphs.append(text)

    normalized_heading = normalize_liushahe_text(heading_text)
    while paragraphs and normalize_liushahe_text(paragraphs[0]) == normalized_heading:
        paragraphs = paragraphs[1:]

    return paragraphs


def generate_liushahe_entries(
    poem_map: dict[tuple[str, str], dict[str, str]],
    manual_pairs: set[tuple[str, str]],
) -> list[dict]:
    html_path = ensure_liushahe_html()
    soup = BeautifulSoup(html_path.read_text(encoding="utf-8", errors="ignore"), "html.parser")
    catalog = extract_liushahe_catalog(soup)
    entries: list[dict] = []
    skipped_titles: list[tuple[str, str]] = []

    for item in catalog:
        section = infer_liushahe_section(item["chapter"])
        poem_meta = lookup_poem_meta(
            poem_map,
            item["chapter"],
            item["poemTitle"],
            section,
        )
        if (poem_meta["id"], "流沙河") in manual_pairs:
            skipped_titles.append(("manual", item["titleText"]))
            continue

        paragraphs = extract_liushahe_paragraphs(soup, item["filepos"], item["titleText"])
        if not paragraphs:
            skipped_titles.append(("empty", item["titleText"]))
            continue

        entries.append(
            {
                "id": f"liushahe-{poem_meta['id']}",
                "poemId": poem_meta["id"],
                "title": item["titleText"],
                "subtitle": "",
                "summary": "",
                "labels": [],
                "source": {
                    "author": "流沙河",
                    "work": "《流沙河讲诗经》",
                    "year": "2020",
                },
                "sections": [{"title": "", "paragraphs": paragraphs}],
            }
        )

    manual_skip_count = sum(1 for reason, _title in skipped_titles if reason == "manual")
    if len(entries) + manual_skip_count != len(catalog):
        raise RuntimeError(
            f"expected {len(catalog)} 流沙河 entries, got {len(entries)}; skipped={skipped_titles}"
        )

    return entries


def write_generated_file(entries: list[dict]) -> None:
    content = json.dumps(entries, ensure_ascii=False, indent=2) + "\n"
    GENERATED_FILE.write_text(content, encoding="utf-8")


def write_main_file() -> None:
    content = """import "server-only";
import { cache } from "react";
import generatedEntries from "@/data/appreciations-generated.json";
import { appreciationManualEntries } from "@/data/appreciations-manual";
import type { PoemAppreciationEntry } from "@/data/appreciations-types";

const getAllAppreciations = cache((): PoemAppreciationEntry[] => [
  ...appreciationManualEntries,
  ...(generatedEntries as PoemAppreciationEntry[])
]);

const getAppreciationIndex = cache(() => {
  const byPoemId = new Map<string, PoemAppreciationEntry[]>();
  const byEntryKey = new Map<string, PoemAppreciationEntry>();

  for (const entry of getAllAppreciations()) {
    const poemEntries = byPoemId.get(entry.poemId);
    if (poemEntries) {
      poemEntries.push(entry);
    } else {
      byPoemId.set(entry.poemId, [entry]);
    }
    byEntryKey.set(`${entry.poemId}::${entry.id}`, entry);
  }

  return { byPoemId, byEntryKey };
});

export function getAppreciationsByPoemId(poemId: string) {
  return getAppreciationIndex().byPoemId.get(poemId) ?? [];
}

export function getAppreciationById(poemId: string, entryId: string) {
  return getAppreciationIndex().byEntryKey.get(`${poemId}::${entryId}`);
}
"""
    MAIN_FILE.write_text(content, encoding="utf-8")


def main() -> None:
    bootstrap_manual_entries()
    poem_map = read_poem_map()
    manual_pairs = read_manual_pairs()
    poem_ids = {meta["id"] for meta in poem_map.values()}

    generated_entries = []
    generated_entries.extend(generate_zhou_entries(poem_map, manual_pairs))
    generated_entries.extend(generate_suying_entries(poem_map, manual_pairs))
    generated_entries.extend(generate_liyanlei_entries(poem_map, manual_pairs))
    generated_entries.extend(generate_liushahe_entries(poem_map, manual_pairs))

    generated_entries.sort(key=lambda entry: (entry["poemId"], entry["source"]["author"], entry["id"]))

    write_generated_file(generated_entries)
    write_main_file()

    coverage: defaultdict[str, int] = defaultdict(int)
    for poem_id, _author in manual_pairs:
        coverage[poem_id] += 1
    for entry in generated_entries:
        coverage[entry["poemId"]] += 1
    missing_poems = sorted(poem_ids - set(coverage))
    if missing_poems:
        raise RuntimeError(f"missing appreciation coverage for {len(missing_poems)} poems")

    print(f"generated entries: {len(generated_entries)}")
    print(f"covered poems: {len(coverage)}")


if __name__ == "__main__":
    main()
