"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/data";
import { useLanguage } from "@/context/language-context";

interface Props {
  project: Project;
}

export function ProjectCaseStudy({ project }: Props) {
  const [imgError, setImgError] = useState(false);
  const { t } = useLanguage();

  const localizedProj = t.projects.slugs[project.slug] || {
    title: project.title,
    category: project.category,
    subtitle: project.subtitle,
    card: project.card,
    summary: project.summary,
    features: project.features,
    highlights: project.highlights,
    challenges: project.challenges,
    impact: project.impact,
  };

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Back Button */}
          <motion.div variants={item} className="mb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs font-mono text-muted hover:text-foreground transition-colors group"
            >
              <span className="transition-transform group-hover:-translate-x-1 rtl:group-hover:translate-x-1 rtl:rotate-180">
                ←
              </span>
              <span>{t.caseStudy.backToProjects}</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div variants={item} className="mb-10 pb-8 border-b border-border">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-4">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded border border-border bg-[var(--btn-bg)] text-foreground">
                  {localizedProj.category}
                </span>
                <span className="font-mono text-xs text-muted">
                  {project.status}
                </span>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3">
                {project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-mono font-medium border border-border bg-[var(--btn-bg)] hover:bg-[var(--btn-bg-hover)] text-foreground transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>{t.caseStudy.viewSource}</span>
                  </a>
                )}
                {project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-mono font-medium bg-foreground text-background hover:bg-foreground/90 transition-colors"
                  >
                    <span>{t.caseStudy.livePreview}</span>
                    <span className="rtl:rotate-180">→</span>
                  </a>
                )}
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-2">
              {localizedProj.title}
            </h1>
            <p className="text-base text-muted font-mono">
              {localizedProj.subtitle}
            </p>
          </motion.div>

          {/* Project Screenshot Showcase */}
          <motion.div
            variants={item}
            className="relative mb-12 rounded-xl overflow-hidden border border-border bg-surface-muted aspect-[16/9]"
          >
            {project.image && !imgError ? (
              <Image
                src={project.image}
                alt={`${localizedProj.title} Interface Preview`}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                onError={() => setImgError(true)}
                className="object-cover object-top"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                <span className="text-3xl mb-2">{project.icon}</span>
                <h3 className="text-lg font-bold text-foreground">
                  {localizedProj.title}
                </h3>
                <span className="font-mono text-xs text-muted">
                  {localizedProj.category}
                </span>
              </div>
            )}
          </motion.div>

          {/* Section 1: Overview */}
          <motion.div variants={item} className="mb-10 pb-8 border-b border-border">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted mb-3">
              01 // {t.caseStudy.overview}
            </h2>
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
              {localizedProj.summary}
            </p>
          </motion.div>

          {/* Section 2: Technology Stack */}
          <motion.div variants={item} className="mb-10 pb-8 border-b border-border">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted mb-4">
              02 // {t.caseStudy.technologies}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs font-medium px-3 py-1 rounded-md bg-[var(--btn-bg)] border border-border text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Section 3: Engineering Highlights & Architecture */}
          <motion.div variants={item} className="mb-10 pb-8 border-b border-border">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted mb-4">
              03 // {t.caseStudy.architectureTitle}
            </h2>

            {/* Solivra OS Dedicated System Architecture Visualizer */}
            {project.slug === "solivra-os" && (
              <div className="mb-8 p-6 rounded-2xl border border-border bg-[var(--surface-muted)] space-y-6">
                <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold block">
                  System Architecture Flow
                </span>

                {/* Tier 1: Application Stack */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
                  <div className="p-4 rounded-xl border border-border bg-background">
                    <span className="text-xs font-mono text-muted block mb-1">Frontend Layer</span>
                    <span className="text-sm font-bold text-foreground">Next.js + React + TS</span>
                  </div>
                  <div className="flex items-center justify-center font-mono text-xs text-muted py-1 md:py-0">
                    <span className="hidden md:inline text-base">→</span>
                    <span className="md:hidden text-base">↓</span>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-background">
                    <span className="text-xs font-mono text-muted block mb-1">Backend REST API</span>
                    <span className="text-sm font-bold text-foreground">NestJS + JWT Cookies</span>
                  </div>
                </div>

                <div className="flex items-center justify-center font-mono text-xs text-muted">
                  <span className="text-base">↓</span>
                </div>

                {/* Tier 2: Database & AI Gateway */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-border bg-background text-center">
                    <span className="text-xs font-mono text-muted block mb-1">Database & ORM</span>
                    <span className="text-sm font-bold text-foreground">PostgreSQL + Prisma</span>
                    <span className="text-[11px] font-mono text-muted block mt-1">Multi-Tenant Isolation</span>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-background text-center">
                    <span className="text-xs font-mono text-muted block mb-1">AI Engine</span>
                    <span className="text-sm font-bold text-foreground">Google Gemini AI Gateway</span>
                    <span className="text-[11px] font-mono text-muted block mt-1">Autonomous ERP Agents</span>
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {localizedProj.highlights.map((h) => (
                <div
                  key={h.area}
                  className="card-clean rounded-xl p-5"
                >
                  <span className="font-mono text-xs font-semibold text-foreground uppercase tracking-wider block mb-1.5">
                    {h.area}
                  </span>
                  <p className="text-sm text-muted leading-relaxed">
                    {h.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Section 4: Key Technical Challenges Solved */}
          <motion.div variants={item} className="mb-10 pb-8 border-b border-border">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted mb-4">
              04 // {t.caseStudy.challengesTitle}
            </h2>
            <div className="space-y-4">
              {localizedProj.challenges.map((c) => (
                <div
                  key={c.title}
                  className="card-clean rounded-xl p-5 border-l-2 border-l-foreground rtl:border-r-2 rtl:border-l-0"
                >
                  <h3 className="font-semibold text-foreground text-sm mb-1.5">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {c.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Section 5: Impact & Outcomes */}
          <motion.div variants={item} className="mb-12">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted mb-4">
              05 // {t.caseStudy.impactTitle}
            </h2>
            <ul className="space-y-2.5">
              {localizedProj.impact.map((imp) => (
                <li
                  key={imp}
                  className="flex items-start gap-2.5 text-sm sm:text-base text-muted leading-relaxed"
                >
                  <span className="font-mono text-foreground font-semibold mt-0.5 rtl:rotate-180">
                    →
                  </span>
                  <span>{imp}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Bottom Navigation */}
          <motion.div
            variants={item}
            className="pt-8 border-t border-border flex items-center justify-between"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted transition-colors"
            >
              <span className="rtl:rotate-180">←</span>
              <span>{t.caseStudy.backToProjects}</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

