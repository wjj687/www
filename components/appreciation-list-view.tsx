import Link from "next/link";
import type { Poem } from "@/data/poems";
import type { PoemAppreciationEntry } from "@/data/appreciations";

function buildSourceLine(entry: PoemAppreciationEntry) {
  return [entry.source.work, entry.source.year]
    .filter(Boolean)
    .join(" · ");
}

export function AppreciationListView({
  poem,
  entries
}: {
  poem: Poem;
  entries: PoemAppreciationEntry[];
}) {
  return (
    <div className="paper-grain relative min-h-dvh overflow-hidden">
      <div className="relative mx-auto flex min-h-dvh w-full max-w-7xl flex-col px-4 pt-6 pb-8 sm:px-6 sm:pt-8 lg:px-10">
        <div className="flex items-start justify-between gap-4">
          <Link href={`/poems/${poem.id}`} className="interpretation-back-button focus-ink">
            <span className="interpretation-back-arrow" aria-hidden="true" />
            <span>返回主页面</span>
          </Link>

          <div className="pt-1 text-right">
            <p className="text-xs tracking-[0.28em] text-[color:var(--color-ink-soft)]">
              {poem.chapter}
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-ink)] text-4xl tracking-[0.08em] text-[color:var(--color-accent)] sm:text-5xl">
              {poem.title} 赏析
            </h1>
          </div>
        </div>

        <main className="mt-8 flex flex-1 flex-col gap-5">
          <section className="interpretation-panel appreciation-hero-panel rounded-[2.2rem] px-6 py-6 sm:px-8 sm:py-7">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="section-title text-[11px] text-[color:var(--color-ink-soft)]">
                  篇目
                </p>
                <h2 className="mt-4 font-[family-name:var(--font-ink)] text-[2.15rem] tracking-[0.05em] text-[color:var(--color-accent)] sm:text-[2.7rem]">
                  {poem.title}
                </h2>
              </div>
              <span className="appreciation-count-badge">{entries.length}</span>
            </div>
          </section>

          {entries.length > 0 ? (
            <section className="grid gap-5 xl:grid-cols-2">
              {entries.map((entry) => (
                <Link
                  key={entry.id}
                  href={`/poems/${poem.id}/appreciation/${entry.id}`}
                  className="appreciation-card focus-ink group rounded-[2rem] px-6 py-6 sm:px-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <span className="appreciation-author-chip">{entry.source.author}</span>
                      <h2 className="mt-4 font-[family-name:var(--font-ink)] text-[1.8rem] leading-tight tracking-[0.04em] text-[color:var(--color-accent)] sm:text-[2rem]">
                        {entry.title}
                      </h2>
                    </div>
                    <span className="appreciation-card-arrow" aria-hidden="true" />
                  </div>

                  <div className="mt-6 border-t border-[rgba(177,148,108,0.2)] pt-4">
                    <p className="appreciation-source-line">{buildSourceLine(entry)}</p>
                  </div>
                </Link>
              ))}
            </section>
          ) : null}
        </main>
      </div>
    </div>
  );
}
