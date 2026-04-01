import poemIndexJson from "@/data/poem-index.json";

export type PoemIndexEntry = {
  order: number;
  title: string;
  page: number;
  volume: string;
  section: string;
  chapter: string;
};

export const poemIndex = poemIndexJson as PoemIndexEntry[];

export function getPoemIndexEntryByOrder(order: number) {
  return poemIndex.find((entry) => entry.order === order);
}

export function getPoemIndexEntriesByChapter(chapter: string) {
  return poemIndex.filter((entry) => entry.chapter === chapter);
}
