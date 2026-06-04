"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="border-t border-black/[0.05] dark:border-white/[0.05] py-16 bg-transparent"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">
          {/* Column 1: Brand initials & Tagline */}
          <div className="md:col-span-5 flex flex-col items-start">
            {/* OAM Glowing Badge */}
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center font-black text-white shadow-[0_0_25px_rgba(79,140,255,0.4)] text-base tracking-wider mb-5 uppercase select-none">
              OAM
            </div>
            
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed mb-6">
              Building intelligent, production-grade systems that scale.
            </p>

            {/* Social Links Pods */}
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[var(--btn-bg)] border border-[var(--btn-border)] hover:border-[var(--btn-border-hover)] hover:bg-[var(--btn-bg-hover)] flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0h.003z" />
                </svg>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[var(--btn-bg)] border border-[var(--btn-border)] hover:border-[var(--btn-border-hover)] hover:bg-[var(--btn-bg-hover)] flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-200"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-9 h-9 rounded-full bg-[var(--btn-bg)] border border-[var(--btn-border)] hover:border-[var(--btn-border-hover)] hover:bg-[var(--btn-bg-hover)] flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-200"
                aria-label="Email"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4l-10 8L2 4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 flex flex-col">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground mb-5 pb-2 border-b border-black/[0.05] dark:border-white/[0.05]">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/#hero" },
                { label: "Skills", href: "/#skills" },
                { label: "Projects", href: "/#projects" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue/30 group-hover:bg-accent-blue group-hover:scale-125 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div className="md:col-span-4 flex flex-col">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground mb-5 pb-2 border-b border-black/[0.05] dark:border-white/[0.05]">
              Contact
            </h4>
            <ul className="space-y-3.5">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <svg className="w-4 h-4 text-accent-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 4l-10 8L2 4" />
                  </svg>
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <svg className="w-4 h-4 text-accent-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {personalInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground select-none">
                <svg className="w-4 h-4 text-accent-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Agadir & Marrakech, Morocco
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & policy bar */}
        <div className="border-t border-black/[0.05] dark:border-white/[0.05] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="/#hero"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Privacy Policy
            </a>

            {/* Back to top circular button */}
            <button
              onClick={handleScrollToTop}
              className="w-8 h-8 rounded-full bg-[var(--btn-bg)] border border-[var(--btn-border)] hover:bg-[var(--btn-bg-hover)] hover:border-[var(--btn-border-hover)] flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-300"
              aria-label="Back to top"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
