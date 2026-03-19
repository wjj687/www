"use client";

import dynamic from "next/dynamic";
import type { Poem } from "@/data/poems";

const CatalogDrawer = dynamic(
  () =>
    import("@/components/catalog-drawer").then((module) => module.CatalogDrawer),
  {
    ssr: false,
    loading: () => (
      <button
        type="button"
        aria-label="打开目录"
        className="fixed left-5 top-5 z-50 flex size-16 items-center justify-center rounded-full border border-[color:var(--color-line)] bg-[rgba(247,241,227,0.92)] shadow-[var(--shadow-ink)] backdrop-blur-sm sm:left-7 sm:top-7 sm:size-[4.5rem]"
      >
        <span className="catalog-glyph" aria-hidden="true">
          <span />
          <span />
          <span />
          <i />
          <i />
          <i />
        </span>
      </button>
    )
  }
);

export function CatalogDrawerLoader({
  poems,
  currentPoemId
}: {
  poems: Poem[];
  currentPoemId?: string;
}) {
  return <CatalogDrawer poems={poems} currentPoemId={currentPoemId} />;
}
