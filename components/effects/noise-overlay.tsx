"use client";

import { cn } from "@/lib/utils";

interface NoiseOverlayProps {
  className?: string;
}

export function NoiseOverlay({ className }: NoiseOverlayProps) {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03]",
        className
      )}
      aria-hidden="true"
    >
      <svg
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noise-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.80"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#noise-filter)"
        />
      </svg>
    </div>
  );
}
