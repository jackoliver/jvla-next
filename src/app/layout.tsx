import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "JV-LA | Jack-Edward Oliver",
  description: "The home of Jack-Edward Oliver.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
