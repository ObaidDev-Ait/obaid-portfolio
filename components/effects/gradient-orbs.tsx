"use client";

import { cn } from "@/lib/utils";

interface GradientOrbsProps {
  className?: string;
}

export function GradientOrbs({ className }: GradientOrbsProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      {/* Blue orb */}
      <div
        className="absolute left-[10%] top-[20%] h-72 w-72 animate-orb-float-1 rounded-full opacity-40 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, #4f8cff 0%, transparent 70%)",
        }}
      />

      {/* Purple orb */}
      <div
        className="absolute right-[15%] top-[10%] h-80 w-80 animate-orb-float-2 rounded-full opacity-35 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, #a855f7 0%, transparent 70%)",
        }}
      />

      {/* Pink orb */}
      <div
        className="absolute bottom-[15%] left-[30%] h-64 w-64 animate-orb-float-3 rounded-full opacity-30 blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, #ec4899 0%, transparent 70%)",
        }}
      />

      <style jsx>{`
        @keyframes orb-float-1 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(30px, -40px);
          }
          50% {
            transform: translate(-20px, 20px);
          }
          75% {
            transform: translate(15px, -10px);
          }
        }

        @keyframes orb-float-2 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(-40px, 30px);
          }
          66% {
            transform: translate(25px, -35px);
          }
        }

        @keyframes orb-float-3 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          20% {
            transform: translate(35px, 25px);
          }
          40% {
            transform: translate(-15px, -30px);
          }
          60% {
            transform: translate(-30px, 15px);
          }
          80% {
            transform: translate(20px, -20px);
          }
        }

        .animate-orb-float-1 {
          animation: orb-float-1 15s ease-in-out infinite;
        }

        .animate-orb-float-2 {
          animation: orb-float-2 20s ease-in-out infinite;
        }

        .animate-orb-float-3 {
          animation: orb-float-3 25s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-orb-float-1,
          .animate-orb-float-2,
          .animate-orb-float-3 {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
