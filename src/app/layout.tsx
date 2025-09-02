import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const siteUrl = "https://mrkndrei.vercel.app";
const ogImage = `${siteUrl}/seo-thumbnail.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mark Andrei Bance – Frontend Developer & UI/UX Designer",
    template: "%s | Mark Andrei Bance",
  },
  description:
    "Frontend Developer & UI/UX Designer. I design and build modern and accessible websites and apps.",
  keywords: [
    "Mark Andrei Bance",
    "Frontend Developer",
    "UI/UX Designer",
    "React Developer",
    "Next.js",
    "Web Designer",
    "Iloilo",
    "Philippines",
    "Portfolio",
  ],
  authors: [{ name: "Mark Andrei Bance", url: siteUrl }],
  creator: "Mark Andrei Bance",
  publisher: "Mark Andrei Bance",
  alternates: { canonical: siteUrl },
  category: "technology",
  applicationName: "Mark Andrei Bance Portfolio",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Mark Andrei Bance – Frontend Developer & UI/UX Designer",
    description:
      "Portfolio showcasing web development, UI/UX design, and modern digital experiences.",
    siteName: "Mark Andrei Bance Portfolio",
    locale: "en_US",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Portfolio preview of Mark Andrei Bance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark Andrei Bance – Frontend Developer & UI/UX Designer",
    description:
      "Modern, accessible websites and apps built with React & Next.js.",
    images: [ogImage],
    creator: "@mrkndrei", // optional: add your handle
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  try {
    var savedTheme = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    var html = document.documentElement;
    html.classList.toggle('dark', isDark);
  } catch (e) {}
})();`,
          }}
        />
        {/* JSON-LD: WebSite + SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: siteUrl,
              name: "Mark Andrei Bance – Frontend Developer & UI/UX Designer",
              inLanguage: "en",
              potentialAction: {
                "@type": "SearchAction",
                target: `${siteUrl}/?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
