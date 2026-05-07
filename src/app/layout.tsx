import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "David Rogers Senior UX/UI Designer at Soprano Design",
    template: "%s | David Rogers Senior UX/UI Designer at Soprano Design",
  },
  description: "David Rogers Senior UX/UI Designer at Soprano Design",
  authors: [{ name: "David Rogers" }],
  openGraph: {
    type: "website",
    title: "David Rogers Senior UX/UI Designer at Soprano Design",
    description: "David Rogers Senior UX/UI Designer at Soprano Design",
  },
  twitter: {
    card: "summary",
    creator: "David Rogers",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <body>{children}</body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
