"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, type Variants } from "framer-motion";
import { personalInfo, typingPhrases } from "@/lib/data";
import { GradientOrbs } from "@/components/effects/gradient-orbs";
import { GridPattern } from "@/components/effects/grid-pattern";
import { OrbitingAvatar } from "@/components/effects/orbiting-avatar";

export function Hero() {
  const [typedText, setTypedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const current = typingPhrases[phraseIndex];

    if (isDeleting) {
      setTypedText(current.substring(0, typedText.length - 1));
    } else {
      setTypedText(current.substring(0, typedText.length + 1));
    }

    if (!isDeleting && typedText === current) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
      return;
    }
  }, [typedText, phraseIndex, isDeleting]);

  useEffect(() => {
    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Effects */}
      <GradientOrbs className="opacity-95" />
      <GridPattern />

      <div className="mx-auto max-w-6xl px-6 relative z-10 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 xl:col-span-8"
          >
            {/* Greeting */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mb-6"
            >
              <motion.span
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
                className="text-2xl origin-[70%_70%]"
              >
                👋
              </motion.span>
              <span className="font-mono text-sm text-accent-blue tracking-wide">
                Hey, I&apos;m
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] mb-4"
            >
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            {/* Typing Title */}
            <motion.div
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground mb-6 tracking-tight min-h-[3.5rem] xs:min-h-[2.5rem] sm:min-h-[2rem] md:min-h-[2.5rem] flex items-center"
            >
              <span className="text-accent-blue">{typedText}</span>
              <span className="typing-cursor" />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mb-10"
            >
              {personalInfo.summary}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <a
                href="/#projects"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-[0_4px_24px_rgba(79,140,255,0.3)] hover:shadow-[0_8px_32px_rgba(79,140,255,0.4)] hover:-translate-y-0.5 transition-all duration-300"
              >
                View Projects
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </a>
              <a
                href="/cv/Obaid_Ait_Mattou_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Obaid_Ait_Mattou_CV.pdf"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-foreground bg-[var(--btn-bg)] border border-[var(--btn-border)] hover:bg-[var(--btn-bg-hover)] hover:border-[var(--btn-border-hover)] hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
              >
                Download CV
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-foreground bg-[var(--btn-bg)] border border-[var(--btn-border)] hover:bg-[var(--btn-bg-hover)] hover:border-[var(--btn-border-hover)] hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mt-10"
            >
              {[
                { href: personalInfo.github, label: "GitHub", path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
                { href: personalInfo.linkedin, label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center rounded-xl text-muted-foreground hover:text-foreground bg-[var(--btn-bg)] border border-[var(--btn-border)] hover:border-[var(--btn-border-hover)] hover:bg-[var(--btn-bg-hover)] transition-all duration-200"
                >
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="w-10 h-10 flex items-center justify-center rounded-xl text-muted-foreground hover:text-foreground bg-[var(--btn-bg)] border border-[var(--btn-border)] hover:border-[var(--btn-border-hover)] hover:bg-[var(--btn-bg-hover)] transition-all duration-200"
              >
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4l-10 8L2 4" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Orbiting Avatar Component */}
          <div className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end overflow-visible">
            <OrbitingAvatar />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted font-mono text-xs"
      >
        <span>scroll</span>
        <motion.div
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-accent-blue to-transparent origin-top"
        />
      </motion.div>
    </section>
  );
}
