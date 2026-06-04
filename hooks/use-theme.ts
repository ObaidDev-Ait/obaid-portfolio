"use client";

import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Determine initial theme on mount safely
    let initialTheme: Theme = "light";
    try {
      const saved = localStorage.getItem("theme") as Theme | null;
      if (saved === "dark" || saved === "light") {
        initialTheme = saved;
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        initialTheme = "dark";
      }
    } catch (e) {
      console.warn("[useTheme] Failed to read theme from localStorage:", e);
    }

    // Force DOM class to match initial theme (prevents React hydration from overwriting it)
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setTheme(initialTheme);

    // Listen to changes from other toggles
    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent<Theme>;
      setTheme(customEvent.detail);
    };

    window.addEventListener("theme-change", handleThemeChange);
    return () => window.removeEventListener("theme-change", handleThemeChange);
  }, []);

  const toggleTheme = () => {
    // Disable transitions temporarily to prevent lag on mobile rendering
    document.documentElement.classList.add("disable-transitions");

    const newTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    
    try {
      localStorage.setItem("theme", newTheme);
    } catch (e) {
      console.warn("[useTheme] Failed to write theme to localStorage:", e);
    }
    
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Force style reflow to apply new styles instantly
    window.getComputedStyle(document.documentElement).opacity;

    // Dispatch global event so all toggle buttons update their state
    window.dispatchEvent(new CustomEvent("theme-change", { detail: newTheme }));

    // Re-enable transitions in the next animation frames
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.documentElement.classList.remove("disable-transitions");
      });
    });
  };

  return { theme, toggleTheme };
}
