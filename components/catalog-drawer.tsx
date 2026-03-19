"use client";

import Link from "next/link";
import { startTransition, useState } from "react";
import type { Poem } from "@/data/poems";

type CatalogDrawerProps = {
  poems: Poem[];
  currentPoemId?: string;
};

export function CatalogDrawer({
  poems,
  currentPoemId
}: CatalogDrawerProps) {
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    startTransition(() => {
      setOpen((value) => !value);
    });
  }

  function closeDrawer() {
    startTransition(() => {
      setOpen(false);
    });
  }

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="poem-catalog"
        aria-label={open ? "关闭目录" : "打开目录"}
        onClick={toggleOpen}
        className={`focus-ink fixed left-5 top-5 z-50 flex size-16 items-center justify-center rounded-full border border-[color:var(--color-line)] bg-[rgba(247,241,227,0.92)] shadow-[var(--shadow-ink)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5 sm:left-7 sm:top-7 sm:size-[4.5rem] ${
          open ? "rotate-180" : "rotate-0"
        }`}
      >
        <span className="sr-only">目录</span>
        <span className="catalog-glyph" aria-hidden="true">
          <span />
          <span />
          <span />
          <i />
          <i />
          <i />
        </span>
      </button>

      <div
        className={`fixed inset-0 z-40 bg-[rgba(49,38,29,0.24)] transition-opacity duration-300 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={closeDrawer}
      />

      <aside
        id="poem-catalog"
        aria-label="诗经目录"
        className={`paper-panel fixed inset-y-0 left-0 z-50 w-[min(24rem,88vw)] border-r border-[color:var(--color-line)] px-5 py-24 transition-transform duration-300 sm:px-7 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="ink-frame h-full rounded-[1.75rem] px-5 py-6 sm:px-6">
          <p className="section-title text-[11px] text-[color:var(--color-ink-soft)]">
            目录
          </p>
          <div className="mt-8 space-y-3">
            {poems.map((poem) => {
              const active = poem.id === currentPoemId;

              return (
                <Link
                  key={poem.id}
                  href={`/poems/${poem.id}`}
                  onClick={closeDrawer}
                  aria-current={active ? "page" : undefined}
                  className={`focus-ink block rounded-[1.4rem] border px-4 py-4 transition-colors ${
                    active
                      ? "border-[color:var(--color-accent)] bg-[rgba(139,111,71,0.12)]"
                      : "border-[color:var(--color-line)] bg-[rgba(255,255,255,0.2)] hover:border-[color:var(--color-accent)]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs tracking-[0.24em] text-[color:var(--color-ink-soft)]">
                        {poem.chapter}
                      </p>
                      <h2 className="mt-2 text-2xl font-semibold text-[color:var(--color-ink)]">
                        {poem.title}
                      </h2>
                    </div>
                    <span className="text-xs text-[color:var(--color-accent)]">
                      {poem.orderLabel}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}
