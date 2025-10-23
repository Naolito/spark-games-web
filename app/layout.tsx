import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Spark Games - Mobile Game Development Studio",
    template: "%s | Spark Games"
  },
  description: "Spark Games is the commercial name of Naolito Games SL, a mobile game development studio based in Málaga, Spain. Creating engaging mobile games for global audiences.",
  keywords: ["mobile games", "game development", "Spark Games", "Naolito Games", "iOS games", "Android games", "Spain", "Unity", "mobile gaming", "app development"],
  authors: [{ name: "Spark Games" }],
  creator: "Spark Games",
  publisher: "Naolito Games SL",
  robots: "index, follow",
  manifest: "/manifest.json",
  metadataBase: new URL('https://sparkgames.com'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sparkgames.com",
    siteName: "Spark Games",
    title: "Spark Games - Mobile Game Development Studio",
    description: "Creating engaging mobile games for global audiences. Commercial name of Naolito Games SL.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Spark Games - Mobile Game Development Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spark Games - Mobile Game Development Studio",
    description: "Creating engaging mobile games for global audiences.",
    creator: "@sparkgames",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://sparkgames.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
