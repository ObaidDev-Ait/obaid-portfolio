"use client";

import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface SpotlightProps {
  className?: string;
}

export function Spotlight({ className }: SpotlightProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    []
  );

  const handleMouseEnter = useCallback(() => {
    setIsActive(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsActive(false);
  }, []);

  return (
    <div
      className={cn("relative", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500 motion-reduce:hidden"
        style={{
          opacity: isActive ? 1 : 0,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(79, 140, 255, 0.06), transparent 40%)`,
        }}
        aria-hidden="true"
      />
    </div>
  );
}
