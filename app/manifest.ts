import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "诗经",
    short_name: "诗经",
    description: "古典、雅致、适合手机阅读的《诗经》应用。",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f0e2",
    theme_color: "#f6f0e2",
    orientation: "portrait",
    lang: "zh-CN",
    icons: [
      {
        src: "/icons/icon-any.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any"
      },
      {
        src: "/icons/icon-maskable.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable"
      }
    ]
  };
}
