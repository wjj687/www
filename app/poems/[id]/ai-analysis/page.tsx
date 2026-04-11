import { notFound } from "next/navigation";
import { AiAnalysisView } from "@/components/ai-analysis-view";
import { getAiAnalysisByPoemId } from "@/data/ai-analysis";
import { getPoemById, poems } from "@/data/poems";

export function generateStaticParams() {
  return poems.map((poem) => ({
    id: poem.id
  }));
}

export const dynamicParams = false;

export default async function PoemAiAnalysisPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const poem = getPoemById(id);

  if (!poem) {
    notFound();
  }

  const entry = getAiAnalysisByPoemId(poem.id);

  if (!entry) {
    notFound();
  }

  return <AiAnalysisView poem={poem} entry={entry} />;
}
