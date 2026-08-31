"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { categorizedSkills } from "@/lib/data";
import { useLanguage } from "@/context/language-context";

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  const categoryTranslationMap: Record<string, string> = {
    Frontend: t.skills.categories.frontend,
    Backend: t.skills.categories.backend,
    "Database & Storage": t.skills.categories.database,
    CMS: t.skills.categories.cms,
    "Tools & DevOps": t.skills.categories.tools,
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="skills" className="py-24 md:py-32 border-b border-border">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-border">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-muted font-semibold">
              02 // {t.skills.title}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mt-2">
              {t.skills.title}
            </h2>
          </div>
          <p className="text-sm text-muted max-w-md">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categorizedSkills.map((group, index) => (
            <motion.div
              key={group.name}
              variants={itemVariants}
              className="card-clean rounded-xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
                  <h3 className="font-semibold text-foreground text-base tracking-tight">
                    {categoryTranslationMap[group.name] || group.name}
                  </h3>
                  <span className="font-mono text-[11px] text-muted-foreground font-medium">
                    0{index + 1}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-2.5 py-1 rounded-md bg-[var(--btn-bg)] border border-border text-foreground/85 font-medium hover:border-border-strong transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

