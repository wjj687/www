import type { Poem } from "@/data/poems";

export function PoemSheet({ poem }: { poem: Poem }) {
  return (
    <article className="paper-panel ink-frame mx-auto w-full max-w-4xl rounded-[2rem] px-6 py-12 sm:px-10 sm:py-14">
      <header className="border-b border-[color:var(--color-line)] pb-8 text-center">
        <p className="text-xs tracking-[0.32em] text-[color:var(--color-ink-soft)]">
          {poem.chapter}
        </p>
        <h1 className="mt-5 text-4xl font-semibold text-[color:var(--color-ink)] sm:text-5xl">
          {poem.title}
        </h1>
      </header>

      <div className="mx-auto mt-10 max-w-2xl space-y-5 text-center text-xl leading-[2.35] text-[color:var(--color-ink)] sm:text-[28px]">
        {poem.lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </article>
  );
}
