import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { NoiseOverlay } from "@/components/effects/noise-overlay";
import { LanguageProvider } from "@/context/language-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Obaid Ait Mattou — Full Stack Software Engineer",
    template: "%s | Obaid Ait Mattou",
  },
  description:
    "Full Stack Software Engineer building modern web applications, scalable backend systems, and responsive digital products with React, Next.js, TypeScript, and Node.js.",
  keywords: [
    "Obaid Ait Mattou",
    "Full Stack Software Engineer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "REST APIs",
    "Software Architecture",
  ],
  authors: [{ name: "Obaid Ait Mattou" }],
  openGraph: {
    title: "Obaid Ait Mattou — Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer building modern web applications with React, Next.js, TypeScript, and Node.js. View case studies and technical highlights.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const saved = localStorage.getItem('theme');
                  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (_) {}
              })()
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground selection:bg-accent/15 selection:text-foreground">
        <LanguageProvider>
          <SmoothScroll>
            <NoiseOverlay />
            <Navbar />
            <main className="flex-1 relative z-10">{children}</main>
            <Footer />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}

