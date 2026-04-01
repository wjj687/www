import { notFound } from "next/navigation";
import { InterpretationView } from "@/components/interpretation-view";
import { getPoemById } from "@/data/poems";

export default async function PoemInterpretationPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const poem = getPoemById(id);

  if (!poem) {
    notFound();
  }

  return <InterpretationView poem={poem} />;
}
