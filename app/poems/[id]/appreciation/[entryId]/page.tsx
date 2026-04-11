import { notFound } from "next/navigation";
import { AppreciationArticleView } from "@/components/appreciation-article-view";
import { getAllAppreciations, getAppreciationById } from "@/data/appreciations";
import { getPoemById, poems } from "@/data/poems";

export function generateStaticParams() {
  const poemIds = new Set(poems.map((poem) => poem.id));
  return getAllAppreciations()
    .filter((entry) => poemIds.has(entry.poemId))
    .map((entry) => ({
      id: entry.poemId,
      entryId: entry.id
    }));
}

export const dynamicParams = false;

export default async function PoemAppreciationEntryPage({
  params
}: {
  params: Promise<{ id: string; entryId: string }>;
}) {
  const { id, entryId } = await params;
  const poem = getPoemById(id);

  if (!poem) {
    notFound();
  }

  const entry = getAppreciationById(poem.id, entryId);

  if (!entry) {
    notFound();
  }

  return <AppreciationArticleView poem={poem} entry={entry} />;
}
