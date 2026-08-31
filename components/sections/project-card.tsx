"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/data";
import { useLanguage } from "@/context/language-context";

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

export function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
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

  const mainChallenge = localizedProj.challenges && localizedProj.challenges[0];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={featured ? "lg:col-span-2" : "col-span-1"}
    >
      <div className="card-clean rounded-2xl p-6 sm:p-7 flex flex-col h-full group hover:border-border-strong transition-all">
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded border border-border bg-[var(--btn-bg)] text-foreground">
              {localizedProj.category}
            </span>
            <span className="font-mono text-xs text-muted">
              {project.status}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${localizedProj.title} on GitHub`}
                className="p-1.5 rounded-md text-muted hover:text-foreground hover:bg-[var(--btn-bg)] transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Project Image Preview */}
        <Link
          href={`/projects/${project.slug}`}
          className="relative w-full aspect-[16/9] mb-5 rounded-xl overflow-hidden border border-border bg-surface-muted block group-hover:border-border-strong transition-colors"
        >
          {project.image && !imgError ? (
            <Image
              src={project.image}
              alt={`${localizedProj.title} screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImgError(true)}
              className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
              <span className="text-2xl mb-2">{project.icon}</span>
              <span className="font-semibold text-sm text-foreground">{localizedProj.title}</span>
            </div>
          )}
        </Link>

        {/* Title & Description */}
        <div className="flex-1 flex flex-col">
          <Link href={`/projects/${project.slug}`} className="group-hover:text-accent transition-colors">
            <h3 className="text-xl font-bold tracking-tight text-foreground mb-1">
              {localizedProj.title}
            </h3>
          </Link>
          <p className="text-xs font-mono text-muted mb-3">
            {localizedProj.subtitle}
          </p>
          <p className="text-sm text-muted leading-relaxed mb-5">
            {localizedProj.card}
          </p>

          {/* Key Engineering Challenge (if present) */}
          {mainChallenge && (
            <div className="mb-5 p-3 rounded-lg border border-border/80 bg-[var(--surface-muted)] text-xs">
              <span className="font-mono font-semibold text-foreground block mb-0.5">
                Challenge:
              </span>
              <span className="text-muted leading-normal">
                {mainChallenge.title} — {mainChallenge.detail}
              </span>
            </div>
          )}

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6 mt-auto pt-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] px-2 py-0.5 rounded bg-[var(--btn-bg)] border border-border text-foreground/80 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Case Study Link */}
          <div className="pt-4 border-t border-border flex items-center justify-between">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-foreground hover:text-accent transition-colors"
            >
              <span>{t.projects.viewCaseStudy}</span>
              <span className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180">→</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

