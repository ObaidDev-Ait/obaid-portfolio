"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-[var(--btn-bg)] border border-[var(--btn-border)] hover:bg-[var(--btn-bg-hover)] hover:border-[var(--btn-border-hover)] text-foreground transition-all duration-200 cursor-pointer overflow-hidden select-none shrink-0"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          y: theme === "dark" ? 30 : 0,
          rotate: theme === "dark" ? 45 : 0,
          opacity: theme === "dark" ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="absolute flex items-center justify-center"
      >
        {/* Sun Icon */}
        <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          y: theme === "dark" ? 0 : -30,
          rotate: theme === "dark" ? 0 : -45,
          opacity: theme === "dark" ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="absolute flex items-center justify-center"
      >
        {/* Moon Icon */}
        <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      </motion.div>
    </button>
  );
}
