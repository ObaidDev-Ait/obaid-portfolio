import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { NoiseOverlay } from "@/components/effects/noise-overlay";
import { Preloader } from "@/components/layout/preloader";
import { AuroraBackground } from "@/components/effects/aurora-background";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Obaid — Full Stack & AI Engineer",
    template: "%s | Obaid",
  },
  description:
    "Portfolio of Obaid — Full Stack & AI Engineer specializing in real-time systems, climate intelligence platforms, enterprise-grade PWAs, and data-driven automation.",
  keywords: [
    "Full Stack Developer",
    "AI Engineer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Obaid" }],
  openGraph: {
    title: "Obaid — Full Stack & AI Engineer",
    description:
      "Building intelligent, production-grade systems that scale. Explore my engineering case studies.",
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
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
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
      <body className="min-h-screen flex flex-col">
        <Preloader />
        <div className="fixed inset-0 z-0 pointer-events-none">
          <AuroraBackground />
        </div>
        <SmoothScroll>
          <NoiseOverlay />
          <Navbar />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
