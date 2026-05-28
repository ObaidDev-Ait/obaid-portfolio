"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { label: "Home", href: "/#hero" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section tracking
      const sections = navItems.map((item) => item.href.split("#")[1]);
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
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
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
          scrolled
            ? "bg-[var(--navbar-bg)] backdrop-blur-xl border-b border-border py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-1">
            <span className="text-xl font-bold tracking-tight gradient-text">
              Obaid
            </span>
            <span className="text-accent-blue text-xl font-bold">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-colors duration-200 py-1",
                  activeSection === item.href.split("#")[1]
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
                {activeSection === item.href.split("#")[1] && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-blue to-accent-purple rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Right Controls */}
          <div className="md:hidden flex items-center gap-4 relative z-[110]">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-8 h-8 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={
                  mobileOpen
                    ? { rotate: 45, y: 5.5 }
                    : { rotate: 0, y: 0 }
                }
                className="block w-5 h-[1.5px] bg-foreground origin-center"
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-5 h-[1.5px] bg-foreground"
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={
                  mobileOpen
                    ? { rotate: -45, y: -5.5 }
                    : { rotate: 0, y: 0 }
                }
                className="block w-5 h-[1.5px] bg-foreground origin-center"
                transition={{ duration: 0.2 }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[99] md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-[var(--backdrop-bg)] backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-72 bg-[var(--mobile-menu-bg)] backdrop-blur-xl border-l border-border p-8 pt-24 flex flex-col gap-6"
            >
              {navItems.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "text-lg font-medium transition-colors text-left",
                    activeSection === item.href.split("#")[1]
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="block"
                  >
                    {item.label}
                  </motion.span>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
