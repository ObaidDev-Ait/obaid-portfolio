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
    default: "Obaid — Full-Stack Software Developer",
    template: "%s | Obaid",
  },
  description:
    "Software Developer passionate about building secure, scalable, and high-performance applications. Experienced in full-stack development, API design, database management, and modern web technologies.",
  keywords: [
    "Full Stack Developer",
    "Software Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Nest.js",
    "PostgreSQL",
    "REST APIs",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Obaid" }],
  openGraph: {
    title: "Obaid — Full-Stack Software Developer",
    description:
      "Software Developer passionate about building secure, scalable, and high-performance applications. Explore my engineering case studies.",
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
