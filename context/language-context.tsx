"use client";

import React, { createContext, useContext, useEffect, useSyncExternalStore, useCallback } from "react";
import { Language, Translations, translations } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function subscribeLanguage(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("language-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("language-change", callback);
  };
}

function getLanguageSnapshot(): Language {
  if (typeof window !== "undefined") {
    const savedLang = localStorage.getItem("portfolio_lang") as Language | null;
    if (savedLang && (savedLang === "en" || savedLang === "fr" || savedLang === "ar")) {
      return savedLang;
    }
  }
  return "en";
}

function getLanguageServerSnapshot(): Language {
  return "en";
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const language = useSyncExternalStore(
    subscribeLanguage,
    getLanguageSnapshot,
    getLanguageServerSnapshot
  );

  const setLanguage = useCallback((lang: Language) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio_lang", lang);
      window.dispatchEvent(new CustomEvent("language-change", { detail: lang }));
    }
  }, []);

  const dir: "ltr" | "rtl" = language === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
      document.documentElement.dir = dir;
    }
  }, [language, dir]);

  const currentTranslations = translations[language] || translations.en;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: currentTranslations,
        dir,
      }}
    >
      <div dir={dir} className={dir === "rtl" ? "font-sans-ar" : ""}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
