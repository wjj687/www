import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export default function NotFound() {
  return (
    <SiteShell>
      <div className="paper-panel ink-frame rounded-[2rem] px-6 py-12 text-center sm:px-10">
        <p className="section-title text-[11px] text-[color:var(--color-ink-soft)]">
          未找到篇章
        </p>
        <h2 className="mt-5 text-3xl font-semibold">这一页还没有写入卷册</h2>
        <Link
          href="/"
          className="focus-ink mt-8 inline-flex rounded-full bg-[color:var(--color-accent)] px-5 py-3 text-sm text-[color:var(--color-paper)] hover:-translate-y-0.5"
        >
          返回目录
        </Link>
      </div>
    </SiteShell>
  );
}
