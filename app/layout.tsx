import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site-data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drbibaswanmaity.in"),
  title: {
    default: `${SITE.name} | Urologist & Renal Transplant Surgeon in Midnapore`,
    template: `%s | ${SITE.name}`,
  },
  description: `${SITE.name} — ${SITE.titles}. Expert urological, andrological, and renal transplant care at ${SITE.shortName}, Midnapore, West Bengal. Call ${SITE.phoneDisplay} for appointments.`,
  keywords: [
    "urologist Midnapore",
    "andrologist West Bengal",
    "renal transplant surgeon",
    "kidney stone treatment",
    "Dr Bibaswan Maity",
    "Urosolution clinic",
    "urology doctor Midnapore",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: `${SITE.name} | Consultant Urologist in Midnapore`,
    description: `Book an appointment with ${SITE.name} at ${SITE.shortName}. ${SITE.titles}.`,
    siteName: SITE.shortName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Urologist in Midnapore`,
    description: `Expert urological care at ${SITE.shortName}. Call ${SITE.phoneDisplay}.`,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} min-h-screen`}>{children}</body>
    </html>
  );
}
