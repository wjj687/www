"use client";

import dynamic from "next/dynamic";
import type { Poem } from "@/data/poems";

const CatalogDrawer = dynamic(
  () =>
    import("@/components/catalog-drawer").then((module) => module.CatalogDrawer),
  {
    ssr: false,
    loading: () => null
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
