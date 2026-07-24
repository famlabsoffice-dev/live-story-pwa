import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Live Story PWA",
  description: "A live story telling PWA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
