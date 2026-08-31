"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/language-context";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 border-b border-border">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          {/* Left Column: Label */}
          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-wider text-muted font-semibold">
              01 // {t.about.title}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-3">
              {t.about.subtitle}
            </h2>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-8 space-y-6 text-base sm:text-lg text-muted leading-relaxed">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>

            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-border">
              <div>
                <h4 className="font-mono text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                  {t.about.highlights.h1Title}
                </h4>
                <p className="text-sm text-muted">
                  {t.about.highlights.h1Desc}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                  {t.about.highlights.h2Title}
                </h4>
                <p className="text-sm text-muted">
                  {t.about.highlights.h2Desc}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                  {t.about.highlights.h3Title}
                </h4>
                <p className="text-sm text-muted">
                  {t.about.highlights.h3Desc}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

