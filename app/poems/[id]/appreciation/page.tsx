import { notFound } from "next/navigation";
import { AppreciationListView } from "@/components/appreciation-list-view";
import { getAppreciationsByPoemId } from "@/data/appreciations";
import { getPoemById, poems } from "@/data/poems";

export function generateStaticParams() {
  return poems.map((poem) => ({
    id: poem.id
  }));
}

export const dynamicParams = false;

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
