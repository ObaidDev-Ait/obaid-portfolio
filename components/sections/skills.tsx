"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const coreSkills = [
  { name: "React", key: "react" },
  { name: "Next.js", key: "next" },
  { name: "TypeScript", key: "typescript" },
  { name: "Tailwind CSS", key: "tailwind" },
  { name: "Node.js", key: "node" },
  { name: "MySQL", key: "mysql" },
  { name: "Supabase", key: "supabase" },
  { name: "Git / GitHub", key: "git" },
  { name: "Vercel", key: "vercel" },
  { name: "Framer Motion", key: "framer" },
  { name: "Leaflet", key: "leaflet" },
  { name: "JWT Auth", key: "jwt" },
];

function getTechIconLarge(key: string) {
  switch (key) {
    case "react":
      return (
        <svg className="w-12 h-12 sm:w-14 h-14 text-[#61dafb] transition-transform duration-300 group-hover:scale-110" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
          <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      );
    case "next":
      return (
        <svg className="w-12 h-12 sm:w-14 h-14 text-slate-900 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 180 180" fill="none" stroke="currentColor">
          <mask id="next-mask-l" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
            <circle cx="90" cy="90" r="90" fill="black" />
          </mask>
          <g mask="url(#next-mask-l)">
            <circle cx="90" cy="90" r="90" fill="black" />
            <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V75.216L139.73 170.218C143.197 166.304 146.471 162.062 149.508 157.52Z" fill="white" />
            <path d="M117 54H129V126H117V54Z" fill="white" />
          </g>
        </svg>
      );
    case "typescript":
      return (
        <svg className="w-12 h-12 sm:w-14 h-14 text-[#3178c6] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 256 256" fill="currentColor">
          <path d="M0 0h256v256H0z" fill="currentColor"/>
          <path d="M136.21 169.53c4.13 6.94 10.96 11.23 18.99 11.23 7.8 0 12.82-3.8 12.82-12.63 0-21.72-32.96-22.95-32.96-51.2 0-14.7 10.96-24.87 27.26-24.87 14.87 0 24.12 7.02 28.5 16.52l-14.04 8.26c-3.14-5.37-7.85-8.43-14.46-8.43-6.6 0-9.83 3.63-9.83 8.92 0 19.33 32.96 20.32 32.96 50.38 0 17.6-13.46 27.18-30.8 27.18-19.49 0-31.14-9.33-35.35-21.22l14.96-8.12zm-35.35-61.94v87.11H85.49V107.59H54V93h62v14.59H100.86z" fill="white"/>
        </svg>
      );
    case "tailwind":
      return (
        <svg className="w-12 h-12 sm:w-14 h-14 text-[#38bdf8] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 6.00002C9.5 6.00002 8 7.50002 7.5 10.5C8.25 9.50002 9.25 9.00002 10.5 9.00002C12.5 9.00002 13.5 10 14.5 11C16.1 12.6 17.6 14.1 20.5 14.1C23 14.1 24.5 12.6 25 9.60002C24.25 10.6 23.25 11.1 22 11.1C20 11.1 19 10.1 18 9.10002C16.4 7.50002 14.9 6.00002 12 6.00002ZM7.5 14.1C5 14.1 3.5 15.6 3 18.6C3.75 17.6 4.75 17.1 6 17.1C8 17.1 9 18.1 10 19.1C11.6 20.7 13.1 22.2 16 22.2C18.5 22.2 20 20.7 20.5 17.7C19.75 18.7 18.75 19.2 17.5 19.2C15.5 19.2 14.5 18.2 13.5 17.2C11.9 15.6 10.4 14.1 7.5 14.1Z" />
        </svg>
      );
    case "node":
      return (
        <svg className="w-12 h-12 sm:w-14 h-14 text-[#339933] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 24a2.22 2.22 0 0 1-1.12-.31L2 18.25a2.24 2.24 0 0 1-1.12-1.93V6.68a2.24 2.24 0 0 1 1.12-1.93L10.88.31a2.23 2.23 0 0 1 2.24 0l8.88 5.44A2.24 2.24 0 0 1 23.12 7.7v9.64a2.24 2.24 0 0 1-1.12 1.93l-8.88 5.44A2.22 2.22 0 0 1 12 24zM12 2.05L3.12 7.49v10.88L12 23.81l8.88-5.44V7.49z"/>
        </svg>
      );
    case "mysql":
      return (
        <svg className="w-12 h-12 sm:w-14 h-14 text-[#00758f] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
        </svg>
      );
    case "supabase":
      return (
        <svg className="w-12 h-12 sm:w-14 h-14 text-[#3ecf8e] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.36 10.96a1.13 1.13 0 0 0-1.02-.68h-5.26l2.9-7.58a1.13 1.13 0 0 0-1.84-1.2l-13.5 14.8a1.13 1.13 0 0 0 .84 1.9h5.26l-2.9 7.58a1.13 1.13 0 0 0 1.84 1.2l13.5-14.82a1.13 1.13 0 0 0 .18-1.2z" />
        </svg>
      );
    case "git":
      return (
        <svg className="w-12 h-12 sm:w-14 h-14 text-[#f05032] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.27 11.59L12.41 1.05a1.76 1.76 0 0 0-2.48 0L8.85 2.13l3.05 3.05a2.22 2.22 0 0 1 .65.04c.48.09.89.39 1.14.81.25.43.32.93.2 1.41l3.05 3.05c.48-.12.98-.05 1.41.2.85.49 1.14 1.58.65 2.43a1.77 1.77 0 0 1-2.43.65c-.81-.47-1.11-1.49-.69-2.31l-3-3a1.77 1.77 0 0 1-1.38.16 1.76 1.76 0 0 1-1.14-.97L7.33 7.82c-.85.49-1.94.2-2.43-.65a1.76 1.76 0 0 1 .65-2.43c.81-.47 1.83-.17 2.31.65l3.05-3.05-1.08-1.08a1.76 1.76 0 0 0-2.48 0L1.05 12.41a1.76 1.76 0 0 0 0 2.48l10.86 10.86c.68.68 1.8.68 2.48 0l10.86-10.86a1.76 1.76 0 0 0 0-2.48z" />
        </svg>
      );
    case "vercel":
      return (
        <svg className="w-12 h-12 sm:w-14 h-14 text-slate-900 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 22.525H0L12 1.475l12 21.05z" />
        </svg>
      );
    case "framer":
      return (
        <svg className="w-12 h-12 sm:w-14 h-14 text-[#f02e65] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h12L24 12H12L0 24V12h12L0 0z" />
        </svg>
      );
    case "leaflet":
      return (
        <svg className="w-12 h-12 sm:w-14 h-14 text-[#199900] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      );
    case "jwt":
      return (
        <svg className="w-12 h-12 sm:w-14 h-14 text-[#d63aff] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      );
    default:
      return (
        <svg className="w-10 h-10 text-muted-foreground transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      );
  }
}

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.85, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="skills" className="py-32 relative">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-6 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full" />
            <span className="font-mono text-sm font-medium text-accent-blue tracking-wider uppercase">
              Technologies
            </span>
            <div className="h-px w-6 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
            Technologies & Outils
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed">
            Voici les technologies et outils que j&apos;utilise pour créer des solutions
            innovantes et performantes.
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8"
        >
          {coreSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div 
                className="w-full aspect-square rounded-[2rem] bg-[var(--skill-card-bg)] border border-[var(--skill-card-border)] hover:border-[var(--skill-card-border-hover)] hover:bg-[var(--skill-card-bg-hover)] transition-all duration-300 flex items-center justify-center shadow-[var(--skill-card-shadow)] hover:shadow-[var(--skill-card-shadow-hover)] hover:-translate-y-1.5"
              >
                {getTechIconLarge(skill.key)}
              </div>
              <span className="mt-3.5 font-mono text-xs sm:text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
