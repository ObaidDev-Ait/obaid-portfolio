"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "@/lib/data";
import { useLanguage } from "@/context/language-context";

const corePillars = [
  "React & Next.js",
  "TypeScript",
  "Node.js & NestJS",
  "PostgreSQL & APIs",
];

export function Hero() {
  const { t } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative pt-36 pb-20 md:pt-44 md:pb-28 border-b border-border"
    >
      <div className="mx-auto max-w-6xl px-6 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start"
        >
          {/* Main Editorial Left Column */}
          <div className="lg:col-span-8 flex flex-col items-start">
            {/* Status / Availability Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-border bg-[var(--btn-bg)] text-xs text-muted font-mono mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>{t.hero.badge}</span>
            </motion.div>

            {/* Name Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.08] mb-6"
            >
              {t.hero.name}
            </motion.h1>

            {/* Role & Core Positioning */}
            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-foreground/90 leading-snug mb-6"
            >
              {t.hero.title} — {t.hero.tagline}
            </motion.h2>

            {/* Human Summary */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted leading-relaxed max-w-2xl mb-8"
            >
              {t.hero.summary}
            </motion.p>

            {/* Stack Highlights */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-2 mb-10"
            >
              {corePillars.map((pillar) => (
                <span
                  key={pillar}
                  className="font-mono text-xs px-3 py-1 rounded-md border border-border bg-[var(--surface)] text-foreground/80 font-medium"
                >
                  {pillar}
                </span>
              ))}
            </motion.div>

            {/* Primary & Secondary Action Rows */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium bg-foreground text-background hover:bg-foreground/90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span>{t.hero.viewProjects}</span>
                <svg className="w-4 h-4 rtl:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="7" y1="17" x2="17" y2="7" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="7 7 17 7 17 17" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <a
                href="/cv/Obaid_Ait_Mattou_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Obaid_Ait_Mattou_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-medium border border-border bg-[var(--surface)] text-foreground hover:bg-[var(--surface-hover)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <svg className="w-4 h-4 text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="7 10 12 15 17 10" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="12" y1="15" x2="12" y2="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{t.nav.downloadCv}</span>
              </a>

              <div className="flex items-center gap-2 pl-2 rtl:pr-2 rtl:pl-0">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg border border-border bg-[var(--surface)] text-muted hover:text-foreground hover:bg-[var(--surface-hover)] transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg border border-border bg-[var(--surface)] text-muted hover:text-foreground hover:bg-[var(--surface-hover)] transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Send Email"
                  className="p-2.5 rounded-lg border border-border bg-[var(--surface)] text-muted hover:text-foreground hover:bg-[var(--surface-hover)] transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 4l-10 8L2 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Architectural Engineering Identity Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 w-full"
          >
            <div className="card-clean rounded-2xl p-6 relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border border-border shrink-0 bg-surface-muted">
                  <Image
                    src="/avatar.jpg"
                    alt="Obaid Ait Mattou"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-base">
                    {t.hero.name}
                  </h3>
                  <p className="text-xs font-mono text-muted">
                    Morocco (Available Remote)
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-border/60 text-xs font-mono">
                <div className="flex items-center justify-between text-muted">
                  <span>Specialization</span>
                  <span className="text-foreground font-medium">Full Stack Web</span>
                </div>
                <div className="flex items-center justify-between text-muted">
                  <span>Primary Stack</span>
                  <span className="text-foreground font-medium">React, Next.js, Node</span>
                </div>
                <div className="flex items-center justify-between text-muted">
                  <span>Databases</span>
                  <span className="text-foreground font-medium">PostgreSQL, MySQL</span>
                </div>
                <div className="flex items-center justify-between text-muted">
                  <span>API Design</span>
                  <span className="text-foreground font-medium">REST, Auth & RBAC</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-xs font-medium bg-[var(--surface-muted)] hover:bg-[var(--surface-hover)] border border-border text-foreground transition-colors"
                >
                  <span>{t.hero.contactMe}</span>
                  <span className="rtl:rotate-180">→</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

