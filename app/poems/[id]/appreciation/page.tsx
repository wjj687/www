import { notFound } from "next/navigation";
import { AppreciationListView } from "@/components/appreciation-list-view";
import { getAppreciationsByPoemId } from "@/data/appreciations";
import { getPoemById } from "@/data/poems";

export default async function PoemAppreciationPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const poem = getPoemById(id);

  if (!poem) {
    notFound();
  }

  const entries = getAppreciationsByPoemId(poem.id);

  return <AppreciationListView poem={poem} entries={entries} />;
}
