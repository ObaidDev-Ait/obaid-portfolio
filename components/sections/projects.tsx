"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/data";
import { ProjectCard } from "./project-card";

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-6 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full" />
            <span className="font-mono text-sm font-medium text-accent-blue tracking-wider uppercase">
              Featured Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Engineering Case Studies
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed">
            Production-grade systems built with scalability, security, and
            real-world impact in mind.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
