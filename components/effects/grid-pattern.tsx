"use client";

import { cn } from "@/lib/utils";

interface GridPatternProps {
  className?: string;
}

export function GridPattern({ className }: GridPatternProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0",
        className
      )}
      aria-hidden="true"
    >
      <svg
        className="h-full w-full opacity-[0.15]"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          mask: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMask:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      >
        <defs>
          <pattern
            id="dot-grid"
            x="0"
            y="0"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="var(--grid-dot)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)" />
      </svg>
    </div>
  );
}
