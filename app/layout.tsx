import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "诗经",
  description: "古典、淡雅、简洁的《诗经》阅读原型。"
};

const backgroundImage = "url('/magnolia-bg.png')";
const backgroundOverlay =
  "linear-gradient(180deg, rgba(255, 249, 239, 0.34), rgba(244, 235, 216, 0.08) 38%, rgba(242, 233, 214, 0) 58%), radial-gradient(circle at 50% 52%, rgba(255, 249, 239, 0.7), rgba(255, 249, 239, 0.16) 24%, rgba(255, 249, 239, 0) 40%), linear-gradient(180deg, rgba(139, 113, 79, 0.06), transparent 16%), linear-gradient(0deg, rgba(139, 113, 79, 0.05), transparent 18%), linear-gradient(180deg, rgba(255, 250, 240, 0.22), rgba(246, 235, 214, 0.1))";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div
          aria-hidden="true"
          suppressHydrationWarning
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
            backgroundImage,
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        />
        <div
          aria-hidden="true"
          suppressHydrationWarning
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1,
            pointerEvents: "none",
            backgroundImage: backgroundOverlay
          }}
        />
        <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
      </body>
    </html>
  );
}
