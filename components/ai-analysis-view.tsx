import Link from "next/link";
import type { Poem } from "@/data/poems";
import type { PoemAiAnalysisEntry } from "@/data/ai-analysis";

export function AiAnalysisView({
  poem,
  entry
}: {
  poem: Poem;
  entry: PoemAiAnalysisEntry;
}) {
  return (
    <div className="paper-grain relative min-h-dvh overflow-hidden">
      <div className="relative mx-auto flex min-h-dvh w-full max-w-[96rem] flex-col px-4 pt-6 pb-8 sm:px-6 sm:pt-8 lg:px-10">
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
              {poem.title} AI解析
            </h1>
          </div>
        </div>

        <main className="mt-8 flex flex-1">
          <article className="interpretation-panel appreciation-reading-panel mx-auto w-full max-w-[84rem] rounded-[2.2rem] px-6 py-7 sm:px-10 sm:py-9 lg:px-16">
            <div className="border-b border-[rgba(164,133,95,0.2)] pb-6">
              <span className="appreciation-author-chip">AI解析</span>
              <h2 className="mt-4 font-[family-name:var(--font-ink)] text-[2.2rem] leading-tight tracking-[0.04em] text-[color:var(--color-accent)] sm:text-[3rem]">
                {entry.title}
              </h2>
              {entry.subtitle ? (
                <p className="mt-4 max-w-4xl font-[family-name:var(--font-song)] text-[1rem] leading-8 tracking-[0.01em] text-[color:var(--color-accent-soft)] sm:text-[1.08rem]">
                  {entry.subtitle}
                </p>
              ) : null}
            </div>

            <div className="appreciation-reading-copy mt-8 space-y-8">
              {entry.sections.map((section, index) => (
                <section
                  key={`${entry.poemId}-${section.title || "section"}-${index}`}
                  className="space-y-4"
                >
                  {section.title ? (
                    <h3 className="font-[family-name:var(--font-ink)] text-[1.8rem] tracking-[0.04em] text-[color:var(--color-accent)]">
                      {section.title}
                    </h3>
                  ) : null}
                  <div className="space-y-5 font-[family-name:var(--font-song)] text-[1.06rem] leading-10 tracking-[0.01em] text-[color:var(--color-accent-soft)]">
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p key={`${entry.poemId}-paragraph-${index}-${paragraphIndex}`}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}
