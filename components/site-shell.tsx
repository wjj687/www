import Link from "next/link";
import { CatalogDrawerLoader } from "@/components/catalog-drawer-loader";
import { FeatureMenu } from "@/components/feature-menu";
import { ReadingControlsProvider } from "@/components/reading-controls";
import { poems } from "@/data/poems";

export function SiteShell({
  children,
  currentPoemId
}: {
  children: React.ReactNode;
  currentPoemId?: string;
}) {
  return (
    <ReadingControlsProvider>
      <div className="paper-grain relative overflow-hidden">
        <CatalogDrawerLoader poems={poems} currentPoemId={currentPoemId} />
        <FeatureMenu currentPoemId={currentPoemId} />

        <div className="relative mx-auto flex min-h-dvh w-full max-w-7xl flex-col px-4 pt-6 pb-8 sm:px-6 sm:pt-8 lg:px-10">
          <div className="flex justify-center pt-1 sm:pt-2">
            <Link href="/" className="focus-ink inline-block">
              <h1 className="font-[family-name:var(--font-ink)] text-5xl tracking-[0.08em] text-black sm:text-6xl">
                诗经
              </h1>
            </Link>
          </div>

          <main className="flex flex-1 items-start justify-center pt-[20vh] pb-6 sm:pt-[24vh] lg:pt-[28vh]">
            {children}
          </main>
        </div>
      </div>
    </ReadingControlsProvider>
  );
}
