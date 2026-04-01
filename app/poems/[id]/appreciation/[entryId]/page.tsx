import { notFound } from "next/navigation";
import { AppreciationArticleView } from "@/components/appreciation-article-view";
import { getAppreciationById } from "@/data/appreciations";
import { getPoemById } from "@/data/poems";

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
