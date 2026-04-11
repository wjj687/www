import "server-only";
import { cache } from "react";
import generatedEntries from "@/data/appreciations-generated.json";
import { appreciationManualEntries } from "@/data/appreciations-manual";
import type { PoemAppreciationEntry } from "@/data/appreciations-types";

export const getAllAppreciations = cache((): PoemAppreciationEntry[] => [
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
