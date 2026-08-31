"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";
import { useLanguage } from "@/context/language-context";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { t } = useLanguage();

  const navItems = [
    { label: t.nav.about, href: "/#about", id: "about" },
    { label: t.nav.skills, href: "/#skills", id: "skills" },
    { label: t.nav.projects, href: "/#projects", id: "projects" },
    { label: t.nav.experience, href: "/#experience", id: "experience" },
    { label: t.nav.contact, href: "/#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ["about", "skills", "projects", "experience", "contact"];
      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
          scrolled
            ? "bg-[var(--navbar-bg)] backdrop-blur-md border-b border-border py-3.5"
            : "bg-transparent py-5"
        )}
      >
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
          {/* Identity */}
          <Link
            href="/"
            className="group flex items-center gap-2 font-medium tracking-tight text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          >
            <span className="font-semibold text-sm sm:text-base">Obaid Ait Mattou</span>
            <span className="hidden sm:inline-block font-mono text-xs text-muted-foreground border-l border-border pl-2 rtl:border-r rtl:border-l-0 rtl:pr-2 rtl:pl-0">
              Full Stack Engineer
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3.5 py-1.5 text-sm font-medium transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                    isActive
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-[var(--btn-bg)]"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-accent rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions: Language Toggle, CV & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle />
            <a
              href="/cv/Obaid_Ait_Mattou_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Obaid_Ait_Mattou_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium rounded-md border border-border bg-[var(--btn-bg)] hover:bg-[var(--btn-bg-hover)] text-foreground transition-colors"
            >
              <span>{t.nav.downloadCv}</span>
              <svg className="w-3.5 h-3.5 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="7 10 12 15 17 10" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="12" y1="15" x2="12" y2="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md border border-border text-foreground hover:bg-[var(--btn-bg)]"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden bg-background/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 left-0 right-0 border-b border-border bg-[var(--mobile-menu-bg)] p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                      activeSection === item.id
                        ? "bg-accent/10 text-accent font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-[var(--btn-bg)]"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-3 mt-1 border-t border-border flex items-center justify-between">
                  <a
                    href="/cv/Obaid_Ait_Mattou_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Obaid_Ait_Mattou_CV.pdf"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium rounded-md border border-border bg-[var(--btn-bg)] text-foreground"
                  >
                    <span>{t.nav.downloadCv}</span>
                    <svg className="w-3.5 h-3.5 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeLinecap="round" strokeLinejoin="round" />
                      <polyline points="7 10 12 15 17 10" strokeLinecap="round" strokeLinejoin="round" />
                      <line x1="12" y1="15" x2="12" y2="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

