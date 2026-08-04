"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/data";

interface Props {
  project: Project;
}

export function ProjectCaseStudy({ project }: Props) {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Back Button */}
          <motion.div variants={item}>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 group"
            >
              <span className="transition-transform group-hover:-translate-x-1">
                ←
              </span>
              Back to Projects
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div variants={item} className="mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-black/[0.05]">
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: `${project.color}15` }}
                >
                  {project.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-md bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                      {project.category}
                    </span>
                    <span className="font-mono text-[10px] uppercase font-semibold px-2 py-0.5 rounded-md border bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                      {project.status}
                    </span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    {project.title}
                  </h1>
                  <p className="text-sm text-muted font-medium mt-0.5 text-muted-foreground">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Action/Download Line */}
              <div className="flex items-center gap-3 shrink-0">
                {project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs bg-[var(--btn-bg)] border border-[var(--btn-border)] hover:bg-[var(--btn-bg-hover)] hover:border-[var(--btn-border-hover)] transition-all duration-200"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Download Source
                  </a>
                )}
                {project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Project Image Showcase */}
          {project.image && (
            <motion.div
              variants={item}
              className="relative mb-12 rounded-2xl overflow-hidden glass-card border border-border shadow-[0_20px_50px_var(--img-shadow)] group/img aspect-video"
              style={{ boxShadow: `0 20px 50px ${project.color}10` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-50 group-hover/img:opacity-30 transition-opacity duration-300 pointer-events-none" />
              <Image
                src={project.image}
                alt={`${project.title} Interface`}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-[1.02]"
              />
            </motion.div>
          )}

          {/* Summary */}
          <motion.div variants={item} className="mb-12">
            <SectionTitle icon="📋" title="Project Overview" />
            <p className="text-muted-foreground leading-relaxed text-base">
              {project.summary}
            </p>
          </motion.div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <motion.div variants={item} className="mb-12">
              <SectionTitle icon="✨" title="Key Features" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat) => (
                  <div
                    key={feat}
                    className="glass-card rounded-xl px-4 py-3 flex items-center gap-3 border border-border/50"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent-blue shrink-0" />
                    <span className="text-sm font-medium text-foreground">{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Tech Stack / Website Technologies */}
          <motion.div variants={item} className="mb-12">
            <SectionTitle
              icon="🛠️"
              title={project.techStackTitle || "Tech Stack"}
            />
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs font-medium px-3 py-1.5 rounded-full bg-accent-blue/[0.08] text-accent-blue border border-accent-blue/[0.15] hover:bg-accent-blue/[0.15] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div variants={item} className="mb-12">
            <SectionTitle
              icon={project.highlightsTitle ? "🎯" : "⚡"}
              title={project.highlightsTitle || "Engineering Highlights"}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.highlights.map((h) => (
                <div
                  key={h.area}
                  className="glass-card rounded-xl p-5 hover:bg-[var(--btn-bg-hover)] transition-colors"
                >
                  <div className="font-mono text-[11px] font-semibold text-accent-blue uppercase tracking-wider mb-2">
                    {h.area}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {h.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Development Process */}
          {project.developmentProcess && project.developmentProcess.length > 0 && (
            <motion.div variants={item} className="mb-12">
              <SectionTitle icon="⚙️" title="Development Process" />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {project.developmentProcess.map((step, idx) => (
                  <div
                    key={step}
                    className="glass-card rounded-xl p-5 border border-border/50 flex flex-col justify-between group hover:border-accent-blue/40 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-accent-blue px-2.5 py-1 rounded bg-accent-blue/10 border border-accent-blue/20">
                        Step 0{idx + 1}
                      </span>
                      {idx < project.developmentProcess!.length - 1 && (
                        <span className="hidden sm:inline font-mono text-xs text-muted-foreground/60">
                          →
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-semibold text-foreground">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Architecture (if present) */}
          {project.architecture && (
            <motion.div variants={item} className="mb-12">
              <SectionTitle icon="🏗️" title="Architecture" />
              <pre className="glass-card rounded-xl p-6 font-mono text-sm text-accent-cyan leading-relaxed whitespace-pre-wrap overflow-x-auto">
                {project.architecture}
              </pre>
            </motion.div>
          )}

          {/* Challenges */}
          <motion.div variants={item} className="mb-12">
            <SectionTitle icon="🧩" title="Challenges Solved" />
            <div className="space-y-4">
              {project.challenges.map((c) => (
                <div
                  key={c.title}
                  className="glass-card rounded-xl p-5 border-l-[3px] border-l-accent-purple"
                >
                  <h4 className="font-semibold text-foreground mb-1.5">
                    {c.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {c.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Business Impact */}
          <motion.div variants={item} className="mb-12">
            <SectionTitle icon="📈" title="Business Impact" />
            <div className="space-y-3">
              {project.impact.map((imp) => (
                <div
                  key={imp}
                  className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                >
                  <span className="text-accent-green font-bold mt-0.5 shrink-0">
                    →
                  </span>
                  <span>{imp}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-4 pt-8 border-t border-black/[0.05]"
          >
            {project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-[var(--btn-bg)] border border-[var(--btn-border)] hover:bg-[var(--btn-bg-hover)] hover:border-[var(--btn-border-hover)] transition-all duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View Source
              </a>
            )}
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-[0_4px_20px_rgba(79,140,255,0.25)] hover:shadow-[0_6px_24px_rgba(79,140,255,0.35)] hover:-translate-y-0.5 transition-all duration-200"
            >
              ← All Projects
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function SectionTitle({ icon, title }: { icon: string; title: string }) {
  return (
    <h3 className="text-lg font-bold tracking-tight mb-4 flex items-center gap-2">
      <span>{icon}</span> {title}
    </h3>
  );
}
