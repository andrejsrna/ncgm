import type { Metadata } from "next";
import "./globals.css";
import { pressStart2P } from '@/lib/fonts'
import { Providers } from './providers';
import Header from '@/app/components/Header';
import Footer from '@/app/components/footer';
export const metadata: Metadata = {
  title: "No Copyright Gaming Music",
  description: "Discover free and high-quality music for your gaming content. Perfect for YouTube, Twitch, and other platforms without any copyright concerns.",
  keywords: ["No Copyright Gaming Music", "Gaming Music", "Royalty-Free Music", "Stream Music", "Content Creator Music"],
  authors: [{ name: "No Copyright Gaming Music", url: "https://nocopyrightgamingmusic.com" }],
  creator: "No Copyright Gaming Music",
  themeColor: "#b71c1c",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "No Copyright Gaming Music",
    description: "Enhance your gaming content with free and copyright-safe music. Perfect for streamers and creators.",
    url: "https://nocopyrightgamingmusic.com",
    siteName: "No Copyright Gaming Music",
    images: [
      {
        url: "https://nocopyrightgamingmusic.com/og-image.jpg", // Nahrajte obrázok do public a upravte cestu
        width: 1200,
        height: 630,
        alt: "No Copyright Gaming Music - Royalty-Free Music for Gaming",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "No Copyright Gaming Music",
    description: "Discover copyright-free music for gaming and streaming.",
    images: ["https://nocopyrightgamingmusic.com/og-image.jpg"],
  },
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={pressStart2P.className}
      >
        <Header />
        <Providers>
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
