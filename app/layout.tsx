import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vision.scot'),
  title: {
    default: "Vision Scotland - A Better Future for Scotland",
    template: "%s | Vision Scotland"
  },
  description: "Less Tax, Less Work, More Life. A comprehensive policy framework for building a happier, fairer, and more prosperous Scotland through renewable wealth, land reform, and progressive policy.",
  keywords: [
    "Scotland",
    "Scottish independence",
    "Scottish policy",
    "land value tax",
    "Scottish wealth fund",
    "four day week",
    "renewable energy Scotland",
    "housing Scotland",
    "Scottish politics",
    "land reform Scotland",
    "Norway wealth fund",
    "citizens dividend",
    "affordable housing",
    "free childcare",
    "Scottish energy",
    "wellbeing economy"
  ],
  authors: [{ name: "Vision Scotland" }],
  creator: "Vision Scotland",
  publisher: "Vision Scotland",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://vision.scot",
    siteName: "Vision Scotland",
    title: "Vision Scotland - Less Tax, Less Work, More Life",
    description: "A comprehensive policy framework for building a happier, fairer, and more prosperous Scotland. Explore policies on renewable wealth, land reform, four-day week, and more.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vision Scotland - A Vision for a Better Scotland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision Scotland - Less Tax, Less Work, More Life",
    description: "A comprehensive policy framework for building a happier, fairer, and more prosperous Scotland.",
    images: ["/og-image.png"],
    creator: "@visionscotland",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://vision.scot",
  },
  category: "politics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="geo.region" content="GB-SCT" />
        <meta name="geo.placename" content="Scotland" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
