"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(() => {
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem("portfolio-loaded");
    }
    return false;
  });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!loading) return;

    // Simulate page assets loading progress
    const duration = 1200; // 1.2s total loading time
    const intervalTime = 30;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem("portfolio-loaded", "true");
          }, 200);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -20,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background select-none"
        >
          {/* Logo & Text */}
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 border border-black/5 shadow-[0_0_30px_rgba(79,140,255,0.08)]"
            >
              {/* Animated Inner Glow */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-2xl border-t border-accent-blue/30 border-r border-accent-purple/30"
              />
              <span className="font-mono text-2xl font-black tracking-tighter text-foreground bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
                O
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center"
            >
              <h2 className="font-mono text-xs font-semibold text-foreground tracking-widest uppercase">
                OBAID.DEV
              </h2>
              <p className="text-[10px] text-muted-foreground mt-1 tracking-wider uppercase font-medium">
                System Initializing
              </p>
            </motion.div>
          </div>

          {/* Progress / "Download" Line */}
          <div className="mt-10 w-48 h-[2px] bg-black/[0.06] rounded-full overflow-hidden relative">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-accent-blue to-accent-purple shadow-[0_0_8px_rgba(79,140,255,0.8)]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
