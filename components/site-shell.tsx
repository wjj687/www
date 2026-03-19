import Link from "next/link";
import { CatalogDrawer } from "@/components/catalog-drawer";
import { poems } from "@/data/poems";

export function SiteShell({
  children,
  currentPoemId
}: {
  children: React.ReactNode;
  currentPoemId?: string;
}) {
  return (
    <div className="relative overflow-hidden">
      <CatalogDrawer poems={poems} currentPoemId={currentPoemId} />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
      >
        <div className="absolute left-[-10%] top-12 h-56 w-56 rounded-full bg-[rgba(139,111,71,0.1)] blur-3xl animate-brush" />
        <div className="absolute bottom-16 right-[-8%] h-72 w-72 rounded-full bg-[rgba(205,191,167,0.18)] blur-3xl animate-brush" />
      </div>

      <div className="relative mx-auto flex min-h-dvh w-full max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-10">
        <div className="flex justify-center pt-2">
          <Link href="/" className="focus-ink inline-block">
            <h1 className="font-[family-name:var(--font-ink)] text-4xl text-[color:var(--color-accent)] sm:text-5xl">
              诗经
            </h1>
          </Link>
        </div>

        <main className="flex flex-1 items-center py-6">{children}</main>
      </div>
    </div>
  );
}
