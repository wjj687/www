import { PoemSheet } from "@/components/poem-sheet";
import { SiteShell } from "@/components/site-shell";
import { poems } from "@/data/poems";

export default function HomePage() {
  return (
    <SiteShell currentPoemId={poems[0]?.id}>
      <PoemSheet poem={poems[0]} />
    </SiteShell>
  );
}
