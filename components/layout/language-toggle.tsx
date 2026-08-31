"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/language-context";
import { Language } from "@/lib/translations";
import { motion, AnimatePresence } from "framer-motion";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "ar", label: "العربية", flag: "🇲🇦" },
];

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Switch Language"
        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-border/80 bg-background/60 backdrop-blur-md text-foreground hover:bg-accent/80 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <span className="text-sm leading-none">{currentLang.flag}</span>
        <span className="uppercase tracking-wider font-mono">{currentLang.code}</span>
        <svg
          className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-36 rounded-xl border border-border bg-card/95 backdrop-blur-xl shadow-xl z-50 overflow-hidden p-1"
          >
            {languages.map((lang) => {
              const isSelected = lang.code === language;
              return (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`flex items-center justify-between w-full px-3 py-2 text-xs rounded-lg transition-colors text-left rtl:text-right ${
                    isSelected
                      ? "bg-primary/10 text-primary font-bold"
                      : "text-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </div>
                  {isSelected && (
                    <svg className="w-3.5 h-3.5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
