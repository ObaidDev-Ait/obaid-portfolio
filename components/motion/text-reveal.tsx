"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
  staggerDelay?: number;
}

const wordVariants: Variants = {
  hidden: {
    y: "100%",
  },
  visible: {
    y: "0%",
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export function TextReveal({
  text,
  className,
  delay = 0,
  once = true,
  staggerDelay = 0.05,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-10% 0px" });

  const words = text.split(" ");

  const customContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={customContainerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn("flex flex-wrap", className)}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="overflow-hidden inline-block">
          <motion.span
            variants={wordVariants}
            className="inline-block"
            style={{ willChange: "transform" }}
          >
            {word}
            {i < words.length - 1 && "\u00A0"}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}
