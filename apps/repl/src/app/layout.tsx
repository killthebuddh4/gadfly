import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gadfly UI",
  description: "A system 2 for language models.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1 className="p-4 text-right">
          <Link
            className="cursor-pointer text-blue-500 hover:text-blue-900"
            href={`/`}
          >
            root
          </Link>
        </h1>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
