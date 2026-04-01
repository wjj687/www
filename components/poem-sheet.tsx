"use client";

import { Fragment } from "react";
import { useReadingControls } from "@/components/reading-controls";
import type { Poem, PoemPhoneticSegment } from "@/data/poems";

type PhoneticUnit = {
  char: string;
  pinyin?: string;
  index: number;
};

type AnnotationRange = {
  start: number;
  end: number;
  number: number;
};

function buildAnnotationRanges(
  line: string,
  targets: string[],
  numbers: number[]
): AnnotationRange[] {
  let searchFrom = 0;

  return targets
    .map((target, index) => {
      const start = line.indexOf(target, searchFrom);

      if (start === -1) {
        return null;
      }

      searchFrom = start + target.length;

      return {
        start,
        end: start + target.length - 1,
        number: numbers[index]
      };
    })
    .filter((range): range is AnnotationRange => range !== null);
}

function expandPhoneticSegments(
  line: string,
  segments: PoemPhoneticSegment[] | undefined
): PhoneticUnit[] {
  const lineSegments = segments?.length ? segments : [{ text: line }];
  const units: PhoneticUnit[] = [];
  let cursor = 0;

  lineSegments.forEach((segment) => {
    const chars = Array.from(segment.text);
    const syllables = segment.pinyin?.trim().split(/\s+/).filter(Boolean) ?? [];
    const canSplitByChar = syllables.length === chars.length;

    chars.forEach((char, charIndex) => {
      units.push({
        char,
        pinyin: canSplitByChar ? syllables[charIndex] : undefined,
        index: cursor
      });
      cursor += 1;
    });
  });

  return units;
}

function renderPlainLine(
  line: string,
  targets: string[],
  numbers: number[],
  showAnnotation: boolean
) {
  if (!showAnnotation || targets.length === 0) {
    return line;
  }

  const ranges = buildAnnotationRanges(line, targets, numbers);
  const parts: React.ReactNode[] = [];
  let cursor = 0;

  ranges.forEach((range) => {
    if (range.start > cursor) {
      parts.push(
        <Fragment key={`plain-text-${cursor}`}>
          {line.slice(cursor, range.start)}
        </Fragment>
      );
    }

    parts.push(
      <span
        key={`plain-target-${range.start}-${range.end}`}
        className="annotation-target"
      >
        {line.slice(range.start, range.end + 1)}
        <sup className="annotation-marker">{range.number}</sup>
      </span>
    );

    cursor = range.end + 1;
  });

  if (cursor < line.length) {
    parts.push(<Fragment key={`plain-tail-${cursor}`}>{line.slice(cursor)}</Fragment>);
  }

  return parts;
}

function renderPhoneticLine(
  line: string,
  segments: PoemPhoneticSegment[] | undefined,
  targets: string[],
  numbers: number[],
  showAnnotation: boolean
) {
  const units = expandPhoneticSegments(line, segments);
  const ranges = showAnnotation ? buildAnnotationRanges(line, targets, numbers) : [];
  const highlightedIndexes = new Set<number>();
  const markersByIndex = new Map<number, number>();

  ranges.forEach((range) => {
    for (let index = range.start; index <= range.end; index += 1) {
      highlightedIndexes.add(index);
    }
    markersByIndex.set(range.end, range.number);
  });

  return units.map((unit) => {
    const markerNumber = markersByIndex.get(unit.index);
    const highlighted = highlightedIndexes.has(unit.index);
    const isPunctuation = /^[，。、“”！？；：、]$/.test(unit.char);

    return (
      <span
        key={`phonetic-${unit.index}-${unit.char}`}
        className={`phonetic-char ${
          unit.pinyin ? "has-phonetic" : ""
        } ${
          highlighted ? "is-annotated" : ""
        } ${isPunctuation ? "is-punctuation" : ""}`}
      >
        {unit.pinyin ? <span className="phonetic-char-rt">{unit.pinyin}</span> : null}
        <span className="phonetic-char-base">
          {unit.char}
          {markerNumber ? <sup className="annotation-marker">{markerNumber}</sup> : null}
        </span>
      </span>
    );
  });
}

export function PoemSheet({ poem }: { poem: Poem }) {
  const { showAnnotation, showPhonetic, showTranslation } = useReadingControls();
  const flattenedAnnotations = poem.annotations?.flat() ?? [];
  let annotationCursor = 1;

  return (
    <article className="poem-card paper-edge-soft paper-panel reading-surface ink-frame mx-auto w-full max-w-3xl rounded-[2.4rem] border border-transparent px-6 py-12 shadow-[0_24px_60px_rgba(84,62,44,0.14)] backdrop-blur-[3px] sm:px-10 sm:py-14">
      <header className="border-b border-transparent pb-8 text-center">
        <p className="text-xs tracking-[0.32em] text-[color:var(--color-ink-soft)]">
          {poem.chapter}
        </p>
        <h1 className="mt-5 font-[family-name:var(--font-ink)] text-5xl tracking-[0.04em] text-[color:var(--color-accent)] sm:text-6xl">
          {poem.title}
        </h1>
      </header>

      <div
        className={`mx-auto mt-10 font-[family-name:var(--font-reading)] text-[1.55rem] font-bold tracking-[0.02em] text-[color:var(--color-accent)] sm:text-[2rem] ${
          showPhonetic ? "max-w-2xl" : "max-w-xl"
        } ${
          showTranslation
            ? "space-y-6"
            : showPhonetic
              ? "space-y-7"
              : "space-y-5"
        }`}
      >
        {poem.lines.map((line, lineIndex) => {
          const lineAnnotations = poem.annotations?.[lineIndex] ?? [];
          const lineTargets = poem.annotationTargets?.[lineIndex] ?? [];
          const lineSegments = poem.phonetics?.[lineIndex];
          const lineTranslation = poem.translation?.[lineIndex];
          const lineNumbers = lineAnnotations.map((_, index) => annotationCursor + index);
          annotationCursor += lineAnnotations.length;

          return (
            <div
              key={`${poem.id}-line-${lineIndex}`}
              className={`poem-line-stack ${
                showTranslation ? "has-translation" : ""
              }`}
            >
              <p
                className={`poem-line text-center ${
                  showPhonetic ? "poem-line-phonetic" : ""
                } ${showPhonetic ? "leading-[3.18]" : "leading-[2.6]"}`}
              >
                {showPhonetic
                  ? renderPhoneticLine(
                      line,
                      lineSegments,
                      lineTargets,
                      lineNumbers,
                      showAnnotation
                    )
                  : renderPlainLine(line, lineTargets, lineNumbers, showAnnotation)}
              </p>

              {showTranslation && lineTranslation ? (
                <p className="poem-line-translation">{lineTranslation}</p>
              ) : null}
            </div>
          );
        })}
      </div>

      <section
        className={`annotation-section mx-auto max-w-2xl overflow-hidden transition-all duration-500 ${
          showAnnotation && flattenedAnnotations.length > 0
            ? "mt-12 max-h-[48rem] opacity-100"
            : "mt-0 max-h-0 opacity-0"
        }`}
        aria-hidden={!showAnnotation}
      >
        {flattenedAnnotations.length > 0 ? (
          <div className="rounded-[2rem] bg-[rgba(248,242,231,0.58)] px-5 py-6 sm:px-7">
            <p className="section-title text-center text-[11px] text-[color:var(--color-ink-soft)]">
              注释
            </p>
            <div className="annotation-scroll mt-5 max-h-[19rem] overflow-y-auto pr-2 text-left font-[family-name:var(--font-song)] text-[0.98rem] leading-8 tracking-[0.01em] text-[color:var(--color-accent-soft)] sm:text-[1.05rem]">
              <div className="space-y-3">
                {flattenedAnnotations.map((note, index) => (
                  <p key={`${poem.id}-annotation-${index}`} className="annotation-entry">
                    <span className="annotation-index">{index + 1}.</span>
                    <span>{note}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </section>
    </article>
  );
}
