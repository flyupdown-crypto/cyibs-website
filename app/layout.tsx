import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YBS - Cambridge Youth International Business School",
  description:
    "Premium Cambridge summer business leadership programme for globally minded young leaders.",
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
