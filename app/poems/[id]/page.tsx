import { notFound } from "next/navigation";
import { PoemSheet } from "@/components/poem-sheet";
import { SiteShell } from "@/components/site-shell";
import { getPoemById, poems } from "@/data/poems";

export function generateStaticParams() {
  return poems.map((poem) => ({
    id: poem.id
  }));
}

export const dynamicParams = false;

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
