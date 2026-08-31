"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/lib/data";
import { useLanguage } from "@/context/language-context";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 md:py-32 border-b border-border">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-border">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-muted font-semibold">
              04 // {t.experience.title}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mt-2">
              {t.experience.title}
            </h2>
          </div>
          <p className="text-sm text-muted max-w-md">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Timeline List */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="space-y-8"
        >
          {experiences.map((item, index) => {
            const localizedItem = t.experience.items[index] || {
              period: item.period,
              role: item.role,
              type: item.type,
              description: item.description,
              responsibilities: item.responsibilities,
            };

            return (
              <div
                key={`${item.role}-${index}`}
                className="card-clean rounded-2xl p-6 sm:p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4 pb-4 border-b border-border">
                  <div>
                    <h3 className="text-xl font-bold text-foreground tracking-tight">
                      {localizedItem.role}
                    </h3>
                    <span className="text-xs font-mono text-muted">
                      {localizedItem.type}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-semibold px-3 py-1 rounded bg-[var(--btn-bg)] border border-border text-foreground/80 self-start sm:self-auto">
                    {localizedItem.period}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-muted leading-relaxed mb-6">
                  {localizedItem.description}
                </p>

                {/* Responsibilities list */}
                <div className="mb-6">
                  <ul className="space-y-2 text-sm text-muted">
                    {localizedItem.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-muted-foreground font-mono text-xs mt-0.5">
                          —
                        </span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-[11px] px-2 py-0.5 rounded bg-[var(--btn-bg)] border border-border text-foreground/75 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

