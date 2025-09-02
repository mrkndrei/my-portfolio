import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mark Andrei Bance - Portfolio",
  description:
    "Portfolio of Mark Andrei Bance — Frontend Developer & UI/UX Designer. I design and build digital experiences, from intuitive interfaces to efficient web and mobile applications.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function setTheme() {
                  try {
                    var savedTheme = localStorage.getItem('theme');
                    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    var isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
                    
                    var html = document.documentElement;
                    if (isDark) {
                      html.classList.add('dark');
                      html.style.setProperty('--background', 'oklch(0.145 0 0)');
                      html.style.setProperty('--foreground', 'oklch(0.985 0 0)');
                    } else {
                      html.classList.remove('dark');
                      html.style.setProperty('--background', 'white');
                      html.style.setProperty('--foreground', 'black');
                    }
                  } catch (e) {}
                }
                
                setTheme();
                
                // Also run on DOM ready in case the first one was too early
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', setTheme);
                } else {
                  setTheme();
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
