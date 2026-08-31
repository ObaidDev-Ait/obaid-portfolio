"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/lib/data";
import { useLanguage } from "@/context/language-context";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          {/* Left Column: Heading & Status */}
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-wider text-muted font-semibold">
              05 // {t.contact.title}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mt-2 mb-4">
              {t.contact.title}
            </h2>
            <p className="text-base text-muted leading-relaxed mb-6">
              {t.contact.subtitle}
            </p>

            <div className="space-y-2 text-xs font-mono text-muted">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span>{t.hero.status}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">📍</span>
                <span>{t.contact.locationValue}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Action Cards */}
          <div className="lg:col-span-7 space-y-4">
            {/* Direct Email Card */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="card-clean rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
            >
              <div>
                <span className="font-mono text-xs text-muted block mb-1">
                  {t.contact.directEmail}
                </span>
                <span className="text-base sm:text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  {personalInfo.email}
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3.5 py-2 rounded-md bg-[var(--btn-bg)] border border-border text-foreground group-hover:border-border-strong transition-colors self-start sm:self-auto">
                <span>{t.contact.sendButton}</span>
                <span className="transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 rtl:rotate-180">→</span>
              </span>
            </a>

            {/* LinkedIn & GitHub Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="card-clean rounded-xl p-5 group flex items-center justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-muted block mb-0.5">
                    LinkedIn
                  </span>
                  <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                    Obaid Ait Mattou
                  </span>
                </div>
                <svg className="w-4 h-4 text-muted group-hover:text-foreground transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="card-clean rounded-xl p-5 group flex items-center justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-muted block mb-0.5">
                    GitHub
                  </span>
                  <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                    @ObaidDev-Ait
                  </span>
                </div>
                <svg className="w-4 h-4 text-muted group-hover:text-foreground transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

