import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CYIBS",
  description: "CYIBS website built with Next.js, TypeScript, Tailwind CSS, and the App Router.",
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
