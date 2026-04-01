import { notFound } from "next/navigation";
import { AiAnalysisView } from "@/components/ai-analysis-view";
import { getAiAnalysisByPoemId } from "@/data/ai-analysis";
import { getPoemById } from "@/data/poems";

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
