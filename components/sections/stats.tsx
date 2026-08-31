"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { stats } from "@/lib/data";
import { useLanguage } from "@/context/language-context";

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      animate(count, value, {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
      });
    }
  }, [inView, count, value]);

  return (
    <motion.span>
      {useTransform(rounded, (latest) => `${latest}${suffix}`)}
    </motion.span>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const { t } = useLanguage();

  const labelMap: Record<string, string> = {
    "Production Systems": t.stats.productionSystems,
    "APIs Integrated": t.stats.apisIntegrated,
    "RBAC Tiers": t.stats.rbacTiers,
    "Offline-Ready": t.stats.offlineReady,
  };

  return (
    <div ref={ref} className="mx-auto max-w-6xl px-6 py-6 border-b border-border">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-left rtl:text-right sm:text-center">
            <div className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-mono">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                inView={isInView}
              />
            </div>
            <div className="text-xs text-muted mt-1 font-mono uppercase tracking-wider">
              {labelMap[stat.label] || stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

