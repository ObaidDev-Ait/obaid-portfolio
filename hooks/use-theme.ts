"use client";

import { useSyncExternalStore, useCallback } from "react";

export type Theme = "light" | "dark";

function subscribeTheme(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("theme-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("theme-change", callback);
  };
}

function getThemeSnapshot(): Theme {
  if (typeof document !== "undefined") {
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
  }
  return "light";
}

function getThemeServerSnapshot(): Theme {
  return "light";
}

export function useTheme() {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getThemeServerSnapshot
  );

  const toggleTheme = useCallback(() => {
    // Disable transitions temporarily to prevent lag on mobile rendering
    document.documentElement.classList.add("disable-transitions");

    const newTheme: Theme = theme === "light" ? "dark" : "light";

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

    // Dispatch global event so all toggle buttons and useSyncExternalStore update
    window.dispatchEvent(new CustomEvent("theme-change", { detail: newTheme }));

    // Re-enable transitions in the next animation frames
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.documentElement.classList.remove("disable-transitions");
      });
    });
  }, [theme]);

  return { theme, toggleTheme };
}
