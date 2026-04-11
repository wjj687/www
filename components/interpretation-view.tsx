"use client";

import { Fragment, type ReactNode, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type {
  InterpretationCategory,
  Poem,
  PoemInterpretationEntity,
  PoemInterpretationMention
} from "@/data/poems";

type InterpretationRange = {
  start: number;
  end: number;
  entityId: string;
};

const categoryLabelMap: Record<InterpretationCategory, string> = {
  person: "人物",
  place: "地名",
  flora: "植物",
  fauna: "动物"
};

const interpretationCategories: InterpretationCategory[] = [
  "person",
  "place",
  "flora",
  "fauna"
];

function buildInterpretationRanges(
  line: string,
  mentions: PoemInterpretationMention[]
): InterpretationRange[] {
  let searchFrom = 0;

  return mentions
    .map((mention) => {
      const start = line.indexOf(mention.target, searchFrom);

      if (start === -1) {
        return null;
      }

      searchFrom = start + mention.target.length;

      return {
        start,
        end: start + mention.target.length - 1,
        entityId: mention.entityId
      };
    })
    .filter((range): range is InterpretationRange => range !== null);
}

function InterpretationLine({
  line,
  mentions,
  entitiesById,
  selectedId,
  onSelect
}: {
  line: string;
  mentions: PoemInterpretationMention[];
  entitiesById: Map<string, PoemInterpretationEntity>;
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  const ranges = buildInterpretationRanges(line, mentions);

  if (ranges.length === 0) {
    return line;
  }

  const parts: ReactNode[] = [];
  let cursor = 0;

  ranges.forEach((range) => {
    const entity = entitiesById.get(range.entityId);

    if (!entity) {
      return;
    }

    if (range.start > cursor) {
      parts.push(
        <Fragment key={`text-${cursor}`}>
          {line.slice(cursor, range.start)}
        </Fragment>
      );
    }

    parts.push(
      <button
        key={`${entity.id}-${range.start}`}
        type="button"
        onClick={() => onSelect(entity.id)}
        className={`interpretation-tag category-${entity.category} ${
          selectedId === entity.id ? "is-active" : ""
        }`}
      >
        {line.slice(range.start, range.end + 1)}
      </button>
    );

    cursor = range.end + 1;
  });

  if (cursor < line.length) {
    parts.push(<Fragment key={`tail-${cursor}`}>{line.slice(cursor)}</Fragment>);
  }

  return parts;
}

export function InterpretationView({ poem }: { poem: Poem }) {
  const entities = poem.interpretationEntities ?? [];
  const hasInterpretations = entities.length > 0;
  const entitiesById = useMemo(
    () => new Map(entities.map((entity) => [entity.id, entity])),
    [entities]
  );
  const [selectedId, setSelectedId] = useState<string | null>(entities[0]?.id ?? null);
  const [imageState, setImageState] = useState<"idle" | "loaded" | "error">("idle");

  const selectedEntity = selectedId ? entitiesById.get(selectedId) ?? null : null;

  useEffect(() => {
    setSelectedId(entities[0]?.id ?? null);
  }, [entities]);

  useEffect(() => {
    if (!selectedEntity?.image) {
      return;
    }

    setImageState("idle");
  }, [selectedEntity?.id, selectedEntity?.image]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    entities.forEach((entity) => {
      if (!entity.image) {
        return;
      }

      const preloadImage = new window.Image();
      preloadImage.src = entity.image.src;
    });
  }, [entities]);

  return (
    <div className="paper-grain relative min-h-dvh overflow-hidden">
      <div className="relative mx-auto flex min-h-dvh w-full max-w-7xl flex-col px-4 pb-8 pt-6 sm:px-6 sm:pt-8 lg:px-10">
        <div className="flex items-start justify-between gap-4">
          <Link
            href={`/poems/${poem.id}`}
            className="interpretation-back-button focus-ink"
          >
            <span className="interpretation-back-arrow" aria-hidden="true" />
            <span>返回正文</span>
          </Link>

          <div className="pt-1 text-right">
            <p className="text-xs tracking-[0.28em] text-[color:var(--color-ink-soft)]">
              {poem.chapter}
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-ink)] text-4xl tracking-[0.08em] text-[color:var(--color-accent)] sm:text-5xl">
              {poem.title} 解释
            </h1>
          </div>
        </div>

        <main className="mt-8 grid flex-1 gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(21rem,0.92fr)]">
          <section className="interpretation-panel reading-surface ink-frame rounded-[2.2rem] px-6 py-7 sm:px-8 sm:py-8">
            <div className="flex flex-col gap-5 border-b border-[rgba(164,133,95,0.2)] pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="section-title text-[11px] text-[color:var(--color-ink-soft)]">
                  原文点读
                </p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--color-accent-soft)]">
                  {hasInterpretations
                    ? "点击诗中带颜色的词语，右侧会显示对应的人物、地名或动植物说明。"
                    : "本篇原文里暂时没有适合做人名、地名或动植物解释的标注对象。"}
                </p>
              </div>

              {hasInterpretations ? (
                <div className="flex flex-wrap gap-2">
                  {interpretationCategories.map((category) => (
                    <span
                      key={category}
                      className={`interpretation-legend category-${category}`}
                    >
                      {categoryLabelMap[category]}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="mt-8 space-y-6 text-center font-[family-name:var(--font-reading)] text-[1.55rem] font-bold leading-[2.7] tracking-[0.02em] text-[color:var(--color-accent)] sm:text-[1.92rem]">
              {poem.lines.map((line, lineIndex) => (
                <p key={`${poem.id}-interpretation-line-${lineIndex}`}>
                  <InterpretationLine
                    line={line}
                    mentions={poem.interpretationMentions?.[lineIndex] ?? []}
                    entitiesById={entitiesById}
                    selectedId={selectedId}
                    onSelect={setSelectedId}
                  />
                </p>
              ))}
            </div>
          </section>

          <aside className="interpretation-panel interpretation-detail-panel rounded-[2.2rem] px-6 py-7 sm:px-8 sm:py-8">
            {selectedEntity ? (
              <div className="flex h-full flex-col">
                <div className="flex items-start justify-between gap-4 border-b border-[rgba(164,133,95,0.2)] pb-5">
                  <div>
                    <p className="section-title text-[11px] text-[color:var(--color-ink-soft)]">
                      对应解释
                    </p>
                    <h2 className="mt-3 font-[family-name:var(--font-ink)] text-4xl tracking-[0.04em] text-[color:var(--color-accent)]">
                      {selectedEntity.label}
                    </h2>
                  </div>

                  <span
                    className={`interpretation-category-pill category-${selectedEntity.category}`}
                  >
                    {categoryLabelMap[selectedEntity.category]}
                  </span>
                </div>

                {selectedEntity.image ? (
                  <figure className="interpretation-image-wrap mt-6 overflow-hidden rounded-[1.8rem] border border-[rgba(179,145,103,0.22)] bg-[rgba(255,250,241,0.72)] p-3">
                    <div className="interpretation-image-stage relative overflow-hidden rounded-[1.35rem]">
                      {selectedEntity.image.placeholderSrc ? (
                        <img
                          src={selectedEntity.image.placeholderSrc}
                          alt=""
                          aria-hidden="true"
                          className="interpretation-image-placeholder h-auto w-full object-cover"
                        />
                      ) : null}
                      <img
                        src={selectedEntity.image.src}
                        alt={selectedEntity.image.alt}
                        loading="eager"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        onLoad={() => setImageState("loaded")}
                        onError={() => setImageState("error")}
                        className={`interpretation-image-real h-auto w-full rounded-[1.35rem] object-cover ${
                          imageState === "loaded" ? "is-loaded" : ""
                        }`}
                      />
                      {imageState === "idle" ? (
                        <div className="interpretation-image-status">正在载入相关图片</div>
                      ) : null}
                      {imageState === "error" ? (
                        <div className="interpretation-image-status">当前网络较慢，先显示占位图</div>
                      ) : null}
                    </div>
                    <figcaption className="mt-3 text-center text-xs tracking-[0.22em] text-[color:var(--color-ink-soft)]">
                      {selectedEntity.image.caption}
                    </figcaption>
                    <p className="mt-2 text-center text-[11px] leading-6 text-[color:var(--color-ink-soft)]">
                      图片来源：
                      <a
                        href={selectedEntity.image.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="ml-1 underline decoration-[rgba(124,95,62,0.42)] underline-offset-3"
                      >
                        {selectedEntity.image.credit}
                      </a>
                    </p>
                  </figure>
                ) : null}

                <div className="mt-6 space-y-4 text-left font-[family-name:var(--font-song)] text-[1rem] leading-8 tracking-[0.01em] text-[color:var(--color-accent-soft)]">
                  <p className="interpretation-summary">{selectedEntity.summary}</p>
                  {selectedEntity.facts?.length ? (
                    <dl className="interpretation-facts-grid">
                      {selectedEntity.facts.map((fact) => (
                        <Fragment key={`${selectedEntity.id}-${fact.label}`}>
                          <dt>{fact.label}</dt>
                          <dd>{fact.value}</dd>
                        </Fragment>
                      ))}
                    </dl>
                  ) : null}
                  {selectedEntity.details.map((detail, detailIndex) => (
                    <p key={`${selectedEntity.id}-detail-${detailIndex}`}>{detail}</p>
                  ))}
                </div>
              </div>
            ) : (
              <div className="interpretation-empty-state flex h-full items-center justify-center rounded-[1.8rem] border border-dashed border-[rgba(167,135,96,0.3)] bg-[rgba(255,250,241,0.4)] p-8 text-center font-[family-name:var(--font-song)] text-[color:var(--color-accent-soft)]">
                {hasInterpretations
                  ? "点击左侧标注词语后，这里会显示对应解释。"
                  : "本篇暂无人物、地名或动植物解释。"}
              </div>
            )}
          </aside>
        </main>
      </div>
    </div>
  );
}
