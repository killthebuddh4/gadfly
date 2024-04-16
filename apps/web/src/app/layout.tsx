import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gadfly",
  description: "A system 2 for language models.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
