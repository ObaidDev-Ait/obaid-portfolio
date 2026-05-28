"use client";

import { motion } from "framer-motion";

interface TechIcon {
  name: string;
  glowColor: string;
  angle: number; // Angle in degrees
  icon: React.ReactNode;
}

// Tech SVGs / Components
const ReactIcon = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="#61dafb" strokeWidth="1.2" className="w-full h-full">
    <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
    <ellipse rx="11" ry="4.2"/>
    <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
    <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
  </svg>
);

const NextIcon = () => (
  <svg viewBox="0 0 180 180" fill="none" className="w-full h-full text-white">
    <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V75.216L139.73 170.218C143.197 166.304 146.471 162.062 149.508 157.52Z" fill="currentColor" />
    <path d="M117 54H129V126H117V54Z" fill="currentColor" />
  </svg>
);

const TSIcon = () => (
  <svg viewBox="0 0 256 256" fill="none" className="w-full h-full text-[#3178c6]">
    <path d="M0 0h256v256H0z" fill="currentColor"/>
    <path d="M136.21 169.53c4.13 6.94 10.96 11.23 18.99 11.23 7.8 0 12.82-3.8 12.82-12.63 0-21.72-32.96-22.95-32.96-51.2 0-14.7 10.96-24.87 27.26-24.87 14.87 0 24.12 7.02 28.5 16.52l-14.04 8.26c-3.14-5.37-7.85-8.43-14.46-8.43-6.6 0-9.83 3.63-9.83 8.92 0 19.33 32.96 20.32 32.96 50.38 0 17.6-13.46 27.18-30.8 27.18-19.49 0-31.14-9.33-35.35-21.22l14.96-8.12zm-35.35-61.94v87.11H85.49V107.59H54V93h62v14.59H100.86z" fill="white"/>
  </svg>
);

const JSIcon = () => (
  <div className="w-full h-full bg-[#f7df1e] text-black font-bold flex items-end justify-end p-[2px] text-[10px] select-none rounded-[3px]">
    JS
  </div>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="#339933" className="w-full h-full">
    <path d="M12 24a2.22 2.22 0 0 1-1.12-.31L2 18.25a2.24 2.24 0 0 1-1.12-1.93V6.68a2.24 2.24 0 0 1 1.12-1.93L10.88.31a2.23 2.23 0 0 1 2.24 0l8.88 5.44A2.24 2.24 0 0 1 23.12 7.7v9.64a2.24 2.24 0 0 1-1.12 1.93l-8.88 5.44A2.22 2.22 0 0 1 12 24zM12 2.05L3.12 7.49v10.88L12 23.81l8.88-5.44V7.49z"/>
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 24 24" fill="#f05032" className="w-full h-full">
    <path d="M23.27 11.59L12.41 1.05a1.76 1.76 0 0 0-2.48 0L8.85 2.13l3.05 3.05a2.22 2.22 0 0 1 .65.04c.48.09.89.39 1.14.81.25.43.32.93.2 1.41l3.05 3.05c.48-.12.98-.05 1.41.2.85.49 1.14 1.58.65 2.43a1.77 1.77 0 0 1-2.43.65c-.81-.47-1.11-1.49-.69-2.31l-3-3a1.77 1.77 0 0 1-1.38.16 1.76 1.76 0 0 1-1.14-.97L7.33 7.82c-.85.49-1.94.2-2.43-.65a1.76 1.76 0 0 1 .65-2.43c.81-.47 1.83-.17 2.31.65l3.05-3.05-1.08-1.08a1.76 1.76 0 0 0-2.48 0L1.05 12.41a1.76 1.76 0 0 0 0 2.48l10.86 10.86c.68.68 1.8.68 2.48 0l10.86-10.86a1.76 1.76 0 0 0 0-2.48z" />
  </svg>
);

const AWSIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M6 14.5a3.5 3.5 0 1 0 7 0v-4" />
    <path d="M13 12.5a3.5 3.5 0 1 0 7 0v-2" />
    <path d="M3 19s3-2.5 9-2.5 9 2.5 9 2.5" strokeWidth="1.5" />
    <path d="M19 16.5l2 2.5-2.5 1" strokeWidth="1.5" />
  </svg>
);

const LaravelIcon = () => (
  <svg viewBox="0 0 24 24" fill="#ff2d20" className="w-full h-full">
    <path d="M22.062 10.978l-2.031-1.17v-4.69l-4.062-2.34-4.062 2.34v2.35l-2.031 1.17v-4.69l-4.062-2.34-4.062 2.34v9.38l4.062 2.34 2.031-1.17v2.34l4.062 2.34 4.062-2.34v-2.34l2.031-1.17v4.69l4.062 2.34 4.062-2.34v-9.37l-2.031-1.18zm-18-7.59l2.031-1.17 2.031 1.17v2.34l-2.031 1.17-2.031-1.17v-2.34zm2.031 9.37l-2.031-1.17v-4.69l2.031-1.17 2.031 1.17v4.69l-2.031 1.17zm6.094-1.17l-2.031-1.17v-2.34l2.031-1.17 2.031 1.17v2.34l-2.031 1.17zm2.031 4.69l-2.031-1.17v-4.69l2.031-1.17 2.031 1.17v4.69l-2.031 1.17zm6.094-3.52l-2.031-1.17v-4.69l2.031-1.17 2.031 1.17v4.69l-2.031 1.17z"/>
  </svg>
);

const SupabaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="#3ecf8e" className="w-full h-full">
    <path d="M21.36 10.96a1.13 1.13 0 0 0-1.02-.68h-5.26l2.9-7.58a1.13 1.13 0 0 0-1.84-1.2l-13.5 14.8a1.13 1.13 0 0 0 .84 1.9h5.26l-2.9 7.58a1.13 1.13 0 0 0 1.84 1.2l13.5-14.82a1.13 1.13 0 0 0 .18-1.2z" />
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" fill="#38bdf8" className="w-full h-full">
    <path d="M12 6.00002C9.5 6.00002 8 7.50002 7.5 10.5C8.25 9.50002 9.25 9.00002 10.5 9.00002C12.5 9.00002 13.5 10 14.5 11C16.1 12.6 17.6 14.1 20.5 14.1C23 14.1 24.5 12.6 25 9.60002C24.25 10.6 23.25 11.1 22 11.1C20 11.1 19 10.1 18 9.10002C16.4 7.50002 14.9 6.00002 12 6.00002ZM7.5 14.1C5 14.1 3.5 15.6 3 18.6C3.75 17.6 4.75 17.1 6 17.1C8 17.1 9 18.1 10 19.1C11.6 20.7 13.1 22.2 16 22.2C18.5 22.2 20 20.7 20.5 17.7C19.75 18.7 18.75 19.2 17.5 19.2C15.5 19.2 14.5 18.2 13.5 17.2C11.9 15.6 10.4 14.1 7.5 14.1Z" />
  </svg>
);

// Map components to orbits (similar to image 1)
const innerOrbitIcons: TechIcon[] = [
  { name: "Node.js", glowColor: "#339933", angle: 140, icon: <NodeIcon /> },
  { name: "TypeScript", glowColor: "#3178c6", angle: 340, icon: <TSIcon /> },
  { name: "React", glowColor: "#61dafb", angle: 260, icon: <ReactIcon /> },
];

const middleOrbitIcons: TechIcon[] = [
  { name: "Tailwind CSS", glowColor: "#38bdf8", angle: 60, icon: <TailwindIcon /> },
  { name: "Git", glowColor: "#f05032", angle: 180, icon: <GitIcon /> },
  { name: "Supabase", glowColor: "#3ecf8e", angle: 300, icon: <SupabaseIcon /> },
];

const outerOrbitIcons: TechIcon[] = [
  { name: "Laravel", glowColor: "#ff2d20", angle: 90, icon: <LaravelIcon /> },
  { name: "Next.js", glowColor: "#ffffff", angle: 200, icon: <NextIcon /> },
  { name: "AWS", glowColor: "#ff9900", angle: 310, icon: <AWSIcon /> },
  { name: "JavaScript", glowColor: "#f7df1e", angle: 240, icon: <JSIcon /> },
];

interface OrbitRingProps {
  radius: number;
  speed: number;
  reverse?: boolean;
  icons: TechIcon[];
}

const OrbitRing = ({ radius, speed, reverse = false, icons }: OrbitRingProps) => {
  return (
    <div
      className="absolute border border-dashed border-accent-blue/10 rounded-full flex items-center justify-center pointer-events-none"
      style={{
        width: radius * 2,
        height: radius * 2,
      }}
    >
      <motion.div
        className="absolute w-full h-full rounded-full pointer-events-none"
        animate={{
          rotate: reverse ? -360 : 360,
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {icons.map((tech) => {
          // Convert initial angle to x, y offsets on the perimeter
          const rad = (tech.angle * Math.PI) / 180;
          const x = Math.round(Math.cos(rad) * radius);
          const y = Math.round(Math.sin(rad) * radius);

          return (
            <motion.div
              key={tech.name}
              className="absolute pointer-events-auto"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
              }}
              // Keep the icon upright as the ring rotates by doing the opposite rotation
              animate={{
                rotate: reverse ? 360 : -360,
              }}
              transition={{
                duration: speed,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Technology Planet Pod */}
              <div
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-[#0d121f]/90 border border-slate-700/40 backdrop-blur-md transition-all duration-300 hover:scale-125 hover:border-slate-500/70 hover:shadow-[0_0_20px_var(--glow)] cursor-pointer group"
                style={{
                  // Set local css variable for glow color
                  ["--glow" as any]: tech.glowColor,
                  boxShadow: `0 0 12px ${tech.glowColor}20, inset 0 0 8px ${tech.glowColor}10`,
                }}
                title={tech.name}
              >
                <div className="w-5.5 h-5.5 sm:w-6 sm:h-6 flex items-center justify-center opacity-85 group-hover:opacity-100 transition-opacity duration-300">
                  {tech.icon}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export function OrbitingAvatar() {
  return (
    <div className="relative w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] md:w-[580px] md:h-[580px] flex items-center justify-center scale-[0.65] xs:scale-[0.75] sm:scale-[0.85] md:scale-95 lg:scale-100 origin-center select-none">
      {/* Background radial soft glows to simulate depth */}
      <div className="absolute w-[200px] h-[200px] bg-accent-blue/15 rounded-full blur-[60px] pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] bg-accent-purple/10 rounded-full blur-[80px] pointer-events-none translate-x-10 translate-y-10" />

      {/* Orbit Rings & Orbiting Stack Planets */}
      {/* Outer Orbit: Radius 260px, rotates counter-clockwise slowly (70s) */}
      <OrbitRing radius={260} speed={70} reverse={true} icons={outerOrbitIcons} />

      {/* Middle Orbit: Radius 195px, rotates clockwise medium (50s) */}
      <OrbitRing radius={195} speed={50} reverse={false} icons={middleOrbitIcons} />

      {/* Inner Orbit: Radius 135px, rotates counter-clockwise faster (35s) */}
      <OrbitRing radius={135} speed={35} reverse={true} icons={innerOrbitIcons} />

      {/* Central Profile Avatar Pod */}
      <motion.div
        className="relative z-10 w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full p-[4px] bg-gradient-to-tr from-accent-blue via-accent-purple to-accent-pink shadow-[0_0_50px_rgba(79,140,255,0.4)]"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#0b0c11] bg-[#0b0c11]">
          <img
            src="/avatar.jpg"
            alt="Obaid Ait Mattou Profile Picture"
            className="w-full h-full object-cover"
          />
          
          {/* Subtle inner overlay overlay shadow */}
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-full pointer-events-none" />
        </div>
      </motion.div>

      {/* Aesthetic glowing rings immediately behind avatar */}
      <motion.div
        className="absolute w-60 h-60 rounded-full border border-accent-blue/15 pointer-events-none"
        animate={{
          scale: [0.95, 1.05, 0.95],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
