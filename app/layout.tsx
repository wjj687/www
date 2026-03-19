import type { Metadata } from "next";
import { Noto_Serif_SC, Zhi_Mang_Xing } from "next/font/google";
import "./globals.css";

const serif = Noto_Serif_SC({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"]
});

const display = Zhi_Mang_Xing({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400"
});

export const metadata: Metadata = {
  title: "诗经",
  description: "古典、淡雅、简净的《诗经》阅读软件原型"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${serif.variable} ${display.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
