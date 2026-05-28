"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { stats } from "@/lib/data";

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
        duration: 2,
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

  return (
    <div ref={ref} className="mx-auto max-w-6xl px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-b border-black/[0.06]"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tighter gradient-text">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                inView={isInView}
              />
            </div>
            <div className="text-sm text-muted-foreground mt-1 font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
