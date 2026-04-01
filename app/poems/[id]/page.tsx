import { notFound } from "next/navigation";
import { PoemSheet } from "@/components/poem-sheet";
import { SiteShell } from "@/components/site-shell";
import { getPoemById } from "@/data/poems";

export default async function PoemPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const poem = getPoemById(id);

  if (!poem) {
    notFound();
  }

  return (
    <SiteShell currentPoemId={poem.id}>
      <div className="route-ripple-enter w-full max-w-3xl">
        <PoemSheet poem={poem} />
      </div>
    </SiteShell>
  );
}
