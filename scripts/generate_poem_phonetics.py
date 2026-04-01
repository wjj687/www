from __future__ import annotations

import json
import re
import sys

from pypinyin import Style, lazy_pinyin

PUNCTUATION_PATTERN = re.compile(r"[，。、“”！？；：、（）《》〈〉·—…,.!?;:()\[\]\- ]")


def to_segments(line: str) -> list[dict[str, str]]:
    segments: list[dict[str, str]] = []

    for char in line:
        if PUNCTUATION_PATTERN.fullmatch(char):
            segments.append({"text": char})
            continue

        pinyin = lazy_pinyin(char, style=Style.TONE3, neutral_tone_with_five=True)[0]
        segments.append({"text": char, "pinyin": pinyin})

    return segments


def main() -> int:
    if len(sys.argv) == 2:
        raw_input = sys.argv[1]
    else:
        raw_input = sys.stdin.read().strip()

    if not raw_input:
        print(
            "Usage: python scripts/generate_poem_phonetics.py '[\"诗句一\",\"诗句二\"]'\n"
            "   or: echo [\"诗句一\",\"诗句二\"] | python scripts/generate_poem_phonetics.py",
            file=sys.stderr,
        )
        return 1

    try:
        lines = json.loads(raw_input)
    except json.JSONDecodeError:
        lines = [line.strip() for line in raw_input.splitlines() if line.strip()]

    if not isinstance(lines, list) or not all(isinstance(line, str) for line in lines):
        print("Input must be a JSON string array.", file=sys.stderr)
        return 1

    output = [to_segments(line) for line in lines]
    print(json.dumps(output, ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
