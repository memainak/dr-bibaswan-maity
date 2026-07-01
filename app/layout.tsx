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
  metadataBase: new URL("https://drbibaswanmaity.com"),
  title: {
    default: `${SITE.name} | Urologist & Renal Transplant Surgeon in Midnapore`,
    template: `%s | ${SITE.name}`,
  },
  description: `${SITE.name} — ${SITE.titles}. ${SITE.tagline} at ${SITE.shortName}, Midnapore. Kidney stones, prostate, laparoscopy, oncology & more. Call ${SITE.phoneDisplay}.`,
  keywords: [
    "urologist Midnapore",
    "laparoscopy surgeon West Bengal",
    "kidney stone laser surgery",
    "uro-oncologist",
    "Dr Bibaswan Maity",
    "Urosolution clinic",
    "andrologist Midnapore",
    "renal transplant surgeon",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: `${SITE.name} | Consultant Urologist in Midnapore`,
    description: `Book an appointment with ${SITE.name} at ${SITE.shortName}. ${SITE.titles}.`,
    siteName: SITE.name,
    images: [{ url: SITE.profileImage, alt: SITE.name }],
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
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#00B4D8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": SITE.name,
      "url": "https://drbibaswanmaity.com",
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": SITE.name,
      "alternateName": SITE.shortName,
      "url": "https://drbibaswanmaity.com",
      "logo": "https://drbibaswanmaity.com/icon.png",
      "image": `https://drbibaswanmaity.com${SITE.profileImage}`,
      "telephone": SITE.phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": SITE.address.line1,
        "addressLocality": "Midnapore",
        "addressRegion": "West Bengal",
        "postalCode": SITE.address.pin,
        "addressCountry": "IN"
      }
    }
  ];

  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        />
        {children}
      </body>
    </html>
  );
}

