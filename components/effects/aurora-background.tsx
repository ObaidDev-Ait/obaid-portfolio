"use client";

import { cn } from "@/lib/utils";

interface AuroraBackgroundProps {
  className?: string;
}

export function AuroraBackground({ className }: AuroraBackgroundProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      {/* Blue blob */}
      <div
        className="absolute -top-1/4 -left-1/4 h-[60%] w-[60%] animate-aurora-1 rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, #4f8cff 0%, transparent 70%)",
          opacity: "var(--aurora-opacity-1)",
        }}
      />

      {/* Purple blob */}
      <div
        className="absolute -right-1/4 top-1/4 h-[50%] w-[50%] animate-aurora-2 rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, #a855f7 0%, transparent 70%)",
          opacity: "var(--aurora-opacity-2)",
        }}
      />

      {/* Pink blob */}
      <div
        className="absolute -bottom-1/4 left-1/3 h-[55%] w-[55%] animate-aurora-3 rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, #ec4899 0%, transparent 70%)",
          opacity: "var(--aurora-opacity-3)",
        }}
      />

      <style jsx>{`
        @keyframes aurora-1 {
          0%,
          100% {
            transform: translate(0%, 0%) scale(1);
          }
          25% {
            transform: translate(10%, 15%) scale(1.1);
          }
          50% {
            transform: translate(5%, 25%) scale(0.95);
          }
          75% {
            transform: translate(-5%, 10%) scale(1.05);
          }
        }

        @keyframes aurora-2 {
          0%,
          100% {
            transform: translate(0%, 0%) scale(1);
          }
          25% {
            transform: translate(-15%, 10%) scale(1.05);
          }
          50% {
            transform: translate(-10%, -15%) scale(1.1);
          }
          75% {
            transform: translate(10%, -5%) scale(0.9);
          }
        }

        @keyframes aurora-3 {
          0%,
          100% {
            transform: translate(0%, 0%) scale(1);
          }
          33% {
            transform: translate(15%, -10%) scale(1.08);
          }
          66% {
            transform: translate(-10%, -20%) scale(0.95);
          }
        }

        .animate-aurora-1 {
          animation: aurora-1 18s ease-in-out infinite;
        }

        .animate-aurora-2 {
          animation: aurora-2 22s ease-in-out infinite;
        }

        .animate-aurora-3 {
          animation: aurora-3 26s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-aurora-1,
          .animate-aurora-2,
          .animate-aurora-3 {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
