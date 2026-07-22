"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const visibleBadges = project.techStack.slice(0, 5);
  const remaining = project.techStack.length - visibleBadges.length;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div
        className="group relative glass-card gradient-border rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(79,140,255,0.08)] cursor-pointer h-full flex flex-col"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Spotlight Effect */}
        {isHovered && (
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none opacity-60 transition-opacity duration-300"
            style={{
              background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(79,140,255,0.06), transparent 50%)`,
            }}
          />
        )}

        {/* Absolute Link overlay to prevent nested <a> elements */}
        <Link
          href={`/projects/${project.slug}`}
          className="absolute inset-0 z-10 rounded-2xl cursor-pointer"
          aria-label={`View case study for ${project.title}`}
        />

        {/* Project Cover Image */}
        {project.image && (
          <div className="relative w-full h-44 mb-5 rounded-xl overflow-hidden bg-black/5 dark:bg-white/5 border border-white/10 group-hover:shadow-md transition-all">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
          </div>
        )}

        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg relative z-0"
            style={{ background: `${project.color}15` }}
          >
            {project.icon}
          </div>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-lg text-muted hover:text-foreground hover:bg-[var(--btn-bg-hover)] transition-all duration-200 relative z-20"
            onClick={(e) => e.stopPropagation()}
            aria-label="View on GitHub"
          >
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>

        {/* Content */}
        <div className="relative flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-md bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
              {project.category}
            </span>
            <span className={cn(
              "font-mono text-[10px] uppercase font-semibold px-2 py-0.5 rounded-md border",
              project.status === "Completed" 
                ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" 
                : "bg-purple-500/10 text-purple-600 border-purple-500/20"
            )}>
              {project.status}
            </span>
          </div>
          <h3 className="text-xl font-bold tracking-tight mb-1">
            {project.title}
          </h3>
          <p className="text-xs font-medium text-muted mb-4">
            {project.subtitle}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
            {project.card}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {visibleBadges.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] font-medium px-2.5 py-1 rounded-full bg-accent-blue/[0.08] text-accent-blue border border-accent-blue/[0.15] hover:bg-accent-blue/[0.15] transition-colors"
              >
                {tech}
              </span>
            ))}
            {remaining > 0 && (
              <span className="font-mono text-[11px] font-medium px-2.5 py-1 rounded-full bg-[var(--btn-bg)] text-muted border border-[var(--btn-border)]">
                +{remaining}
              </span>
            )}
          </div>

          {/* Footer */}
          <div className="pt-5 border-t border-black/[0.05] flex items-center justify-between">
            <span className="text-sm font-semibold text-accent-blue flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
              View Case Study
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
