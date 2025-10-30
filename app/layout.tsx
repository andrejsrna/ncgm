import type { Metadata, Viewport } from "next";
import "./globals.css";
import { shareTechMono } from "@/lib/fonts";
import Header from "@/app/components/Header";
import Footer from "@/app/components/footer";
import { SITE_URL } from "@/lib/env";
import { SITE_AUTHOR, SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

const ogImage = `${SITE_URL}/og-image.jpg`;

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  keywords: [
    SITE_NAME,
    "royalty-free music",
    "creator music library",
    "label collective",
    "stream safe audio",
  ],
  authors: [SITE_AUTHOR],
  creator: SITE_AUTHOR.name,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} – Creator-Ready Music`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [ogImage],
  },
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#b71c1c",
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={shareTechMono.className}
      >
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
