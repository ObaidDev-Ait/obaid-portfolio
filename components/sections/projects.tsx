"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/data";
import { ProjectCard } from "./project-card";
import { useLanguage } from "@/context/language-context";

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  const featuredProjects = projects.slice(0, 2);
  const otherProjects = projects.slice(2);

  return (
    <section id="projects" className="py-24 md:py-32 border-b border-border">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-border">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-muted font-semibold">
              03 // {t.projects.title}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mt-2">
              {t.projects.title}
            </h2>
          </div>
          <p className="text-sm text-muted max-w-md">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Featured Projects Grid (Large visual presence) */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </motion.div>

        {/* Other Projects Section */}
        {otherProjects.length > 0 && (
          <div className="pt-8">
            <div className="flex items-center gap-3 mb-8">
              <h3 className="text-base font-semibold text-foreground tracking-tight">
                {t.projects.allCategories}
              </h3>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index + featuredProjects.length}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

