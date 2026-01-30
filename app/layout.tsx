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
  title: "Vision Scotland - A Better Future",
  description: "A comprehensive framework for building a happier, fairer, and more prosperous Scotland through technology, renewable wealth, and progressive policy reform.",
  keywords: ["Scotland", "policy", "renewable energy", "wealth fund", "four-day week", "land reform", "Scottish independence"],
  authors: [{ name: "Vision Scotland" }],
  openGraph: {
    title: "Vision Scotland - Less Tax, Less Work, More Life",
    description: "A comprehensive framework for building a happier, fairer, and more prosperous Scotland.",
    type: "website",
    locale: "en_GB",
    siteName: "vision.scot",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision Scotland - Less Tax, Less Work, More Life",
    description: "A comprehensive framework for building a happier, fairer, and more prosperous Scotland.",
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
