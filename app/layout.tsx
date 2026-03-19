import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "诗经",
  description: "古典、淡雅、简洁的《诗经》阅读原型。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
