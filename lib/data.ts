// ============================================================
// PORTFOLIO DATA — Centralized Content Management
// ============================================================

export interface ProjectHighlight {
  area: string;
  detail: string;
}

export interface ProjectChallenge {
  title: string;
  detail: string;
}

export interface Project {
  slug: string;
  icon: string;
  color: string;
  gradient: string;
  image: string;
  title: string;
  subtitle: string;
  card: string;
  githubUrl: string;
  liveUrl: string;
  techStack: string[];
  summary: string;
  highlights: ProjectHighlight[];
  architecture: string;
  challenges: ProjectChallenge[];
  impact: string[];
}

export interface SkillCategory {
  category: string;
  icon: string;
  items: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  email: string;
  github: string;
  linkedin: string;
  phone?: string;
}

// ── Personal Info ────────────────────────────────────────────
export const personalInfo: PersonalInfo = {
  name: "Obaid Ait Mattou",
  title: "Full Stack & AI Engineer",
  tagline: "Building intelligent, production-grade systems that scale.",
  summary:
    "I architect and ship end-to-end software — from real-time transit platforms and climate intelligence systems to enterprise-grade PWAs. I specialize in secure API design, offline-first architectures, and data-driven automation.",
  email: "obaidait2025@gmail.com",
  github: "https://github.com/ObaidDev-Ait",
  linkedin: "https://linkedin.com/in/obaid-ait-mattou-2b058130b",
  phone: "+212645508349",
};

// ── Projects ─────────────────────────────────────────────────
export const projects: Project[] = [
  {
    slug: "atlasforecast",
    icon: "🌍",
    color: "#22d3ee",
    gradient: "from-cyan-400 to-blue-500",
    image: "/projects/atlasforecast.png",
    title: "AtlasForecast AI",
    subtitle: "Satellite-Enhanced Climate Intelligence & Risk Analytics Platform",
    card: "Satellite-enhanced climate intelligence platform with automated risk detection, NASA GIBS temporal imagery, multi-API weather fusion, and intelligent TTL caching.",
    githubUrl: "#",
    liveUrl: "#",
    techStack: [
      "React.js",
      "Vite",
      "Supabase",
      "Leaflet",
      "NASA GIBS",
      "OpenWeatherMap",
      "Open-Meteo",
      "OAuth",
      "REST API",
      "Geospatial",
      "Climate Analytics",
      "Risk Engine",
      "TTL Caching",
      "Satellite Imagery",
    ],
    summary:
      "Designed and built an AI-augmented climate intelligence platform that fuses data from multiple meteorological APIs and NASA satellite imagery to deliver real-time weather forecasting, automated severe-weather risk analysis, and interactive geospatial visualization. Features an automated climate risk engine that detects heatwaves, storms, and flood conditions using multi-variable threshold analysis.",
    highlights: [
      {
        area: "Risk Analysis Engine",
        detail:
          "Automated multi-variable climate risk scoring: temperature anomaly, wind speed, precipitation intensity, and humidity cross-correlation for heatwave, storm, and flood detection.",
      },
      {
        area: "Satellite Integration",
        detail:
          "NASA GIBS tile layer integration with temporal date controls — users explore satellite imagery across time ranges.",
      },
      {
        area: "Geospatial Visualization",
        detail:
          "Interactive Leaflet map with weather overlays, risk zones, marker clusters, and responsive viewport management.",
      },
      {
        area: "Multi-API Orchestration",
        detail:
          "Parallel data fetching from OpenWeatherMap and Open-Meteo with response normalization and failover logic.",
      },
      {
        area: "Intelligent Caching",
        detail:
          "Local cache layer with configurable TTL per data type — balances API rate limits against data staleness thresholds.",
      },
      {
        area: "Auth System",
        detail:
          "Supabase Auth with multi-provider OAuth (Google, GitHub), session persistence, and route-level protection.",
      },
    ],
    architecture: `CLIENT LAYER
  React.js + Vite · Leaflet Map · NASA GIBS Tiles
  Risk Dashboard · Temporal Controls · Alert Feed
─────────────────────────────────────────────
DATA ORCHESTRATION LAYER
  Multi-API Fetcher · Response Normalizer · Failover
  Cache Manager (TTL) · Rate Limit Guard
─────────────────────────────────────────────
INTELLIGENCE / ANALYTICS LAYER
  Risk Scoring Engine · Threshold Analyzer
  Heatwave Detector · Storm Classifier · Flood Estimator
─────────────────────────────────────────────
EXTERNAL DATA SOURCES
  OpenWeatherMap API · Open-Meteo API · NASA GIBS API
─────────────────────────────────────────────
AUTH & PERSISTENCE (Supabase)
  Multi-Provider OAuth · Session Management`,
    challenges: [
      {
        title: "Multi-Source Weather Data Fusion",
        detail:
          "Orchestrating parallel requests to multiple weather APIs with differing response schemas, normalizing the data into a unified internal model, and implementing failover logic.",
      },
      {
        title: "Automated Severe-Weather Risk Detection",
        detail:
          "Engineering a multi-variable threshold analysis engine that cross-correlates temperature, wind speed, precipitation, and humidity to classify risk events.",
      },
      {
        title: "Satellite Temporal Exploration at Scale",
        detail:
          "Integrating NASA GIBS tile layers with date-parameterized URLs and building temporal navigation controls without overwhelming the tile server.",
      },
      {
        title: "API Cost Optimization via Intelligent Caching",
        detail:
          "Designing a TTL-differentiated caching layer reducing external API calls by ~70% while guaranteeing data freshness.",
      },
    ],
    impact: [
      "Democratized climate intelligence — satellite-grade analysis accessible to non-specialist users",
      "Proactive risk alerting enables early evacuation planning and infrastructure protection",
      "70% API cost reduction through intelligent TTL caching",
      "NASA-grade satellite access via temporal GIBS integration",
      "Supports agricultural planning, urban heat island monitoring, and disaster preparedness",
    ],
  },
  {
    slug: "kechbus-ticket",
    icon: "🚌",
    color: "#f59e0b",
    gradient: "from-amber-400 to-red-500",
    image: "/projects/kechbus-ticket.png",
    title: "KechBus Ticket",
    subtitle: "Real-Time Intelligent Urban Transit & Digital Ticketing Platform",
    card: "Real-time urban transit platform with smart seat reservation, digital QR ticketing, live fleet tracking, and role-based access. Engineered for concurrency safety and smart city scalability.",
    githubUrl: "#",
    liveUrl: "#",
    techStack: [
      "React.js",
      "Node.js",
      "Express",
      "MySQL",
      "REST API",
      "Real-Time",
      "WebSocket",
      "QR Ticketing",
      "GPS Tracking",
      "RBAC",
      "Optimistic Locking",
      "Event-Driven",
    ],
    summary:
      "Engineered a real-time urban transportation management platform that digitizes the entire bus ticketing lifecycle — from route discovery and seat reservation to digital ticket issuance and live fleet tracking. Features concurrent-safe seat allocation, real-time data synchronization, and a role-based authentication layer.",
    highlights: [
      {
        area: "Reservation Engine",
        detail:
          "Concurrent-safe seat allocation with optimistic locking to prevent double-booking under high load.",
      },
      {
        area: "Digital Ticketing",
        detail:
          "Unique ticket generation with QR-encodable references, validation endpoints, and expiry management.",
      },
      {
        area: "Real-Time Tracking",
        detail:
          "Live bus position ingestion and propagation to connected clients via event-driven architecture.",
      },
      {
        area: "Data Sync",
        detail:
          "Bi-directional synchronization pipeline ensuring consistency between mobile clients and central database.",
      },
      {
        area: "Database Design",
        detail:
          "Third-normal-form relational schema with composite indexes, foreign key constraints, and transactional writes.",
      },
      {
        area: "API Design",
        detail:
          "RESTful resource-oriented API with versioning, pagination, filtering, and standardized error responses.",
      },
    ],
    architecture: `CLIENT LAYER
  React.js SPA · Real-Time Listeners · QR Ticket View
  Route Explorer · Seat Selector · Live Map
─────────────────────────────────────────────
API LAYER (Node.js / Express)
  Auth Middleware · Role Guard · Reservation Controller
  Ticket Issuer · Tracking Ingestor · Sync Coordinator
─────────────────────────────────────────────
REAL-TIME ENGINE
  WebSocket / SSE · Event Bus · Position Broadcast
  Client State Reconciliation
─────────────────────────────────────────────
DATA LAYER (MySQL)
  Normalized Schema · Optimistic Locking · Audit Logs
  Composite Indexes · Transactional Writes`,
    challenges: [
      {
        title: "Concurrent Seat Reservation Integrity",
        detail:
          "Solving the double-booking problem under concurrent requests using optimistic locking with version-check-and-swap at the database level.",
      },
      {
        title: "Real-Time Fleet Position at Scale",
        detail:
          "Designing an event-driven position ingestion pipeline that accepts high-frequency GPS updates and fans them out to subscribed clients.",
      },
      {
        title: "Relational Schema for Multi-Entity Transit Domain",
        detail:
          "Modeling routes, stops, schedules, buses, drivers, passengers, tickets, and reservations in a fully normalized relational schema.",
      },
      {
        title: "Digital Ticket Lifecycle Management",
        detail:
          "Implementing a tamper-resistant digital ticket pipeline: generation, QR encoding, server-side expiry, and ride-completion state transitions.",
      },
    ],
    impact: [
      "Eliminated paper ticketing — fully digital lifecycle reduces cost and fraud",
      "Live fleet visibility enables dynamic trip planning, improving ridership satisfaction",
      "Centralized data model enables route optimization and demand analysis",
      "Concurrent-safe reservation engine prevents double-booking revenue leakage",
      "Smart city-ready architecture supports municipal transit API integration",
    ],
  },
  {
    slug: "vacations-manager",
    icon: "🏢",
    color: "#a855f7",
    gradient: "from-purple-500 to-pink-500",
    image: "/projects/vacations-manager.png",
    title: "Vacations Manager",
    subtitle: "Enterprise-Grade Workforce Absence Orchestration Platform",
    card: "Enterprise workforce absence management PWA with 7-tier RBAC, JWT-secured auth, autonomous business-day computation, offline-first architecture, and automated PDF reporting.",
    githubUrl: "#",
    liveUrl: "#",
    techStack: [
      "React.js",
      "Node.js",
      "Express",
      "MySQL",
      "JWT",
      "PWA",
      "Service Workers",
      "RBAC",
      "REST API",
      "Offline-First",
      "PDF Generation",
      "HttpOnly Cookies",
      "Background Sync",
      "IndexedDB",
    ],
    summary:
      "Architected and shipped a production-grade Progressive Web App that automates end-to-end employee leave lifecycle management. Implements a 7-tier Role-Based Access Control matrix, cryptographically secured JWT authentication with HttpOnly cookie transport, and an autonomous business-day calculation engine. Built with an offline-first architecture leveraging Service Workers.",
    highlights: [
      {
        area: "Auth Architecture",
        detail:
          "Stateless JWT with HttpOnly secure cookies, refresh token rotation, and session invalidation.",
      },
      {
        area: "Access Control",
        detail:
          "Fine-grained RBAC engine with 7 hierarchical permission tiers and middleware-level enforcement.",
      },
      {
        area: "Business Logic",
        detail:
          "Custom calendar computation engine: auto-excludes holidays, weekends, and org-specific non-working days.",
      },
      {
        area: "Offline Capability",
        detail:
          "Service Worker lifecycle management with precaching, runtime caching strategies, and background sync.",
      },
      {
        area: "Caching Layer",
        detail:
          "Dynamic cache-first / network-first strategy selection based on resource criticality.",
      },
      {
        area: "Document Pipeline",
        detail:
          "Server-side PDF generation for administrative reports, leave summaries, and compliance documents.",
      },
    ],
    architecture: `CLIENT (PWA)
  React.js SPA · Service Workers · IndexedDB Cache
  Offline Queue · Background Sync · Web App Manifest
─────────────────────────────────────────────
API GATEWAY (Node.js / Express)
  JWT Middleware · RBAC Guard · Rate Limiter
  Request Validation · Error Boundary
─────────────────────────────────────────────
BUSINESS LOGIC LAYER
  Leave Orchestrator · Calendar Engine · PDF Generator
  Notification Dispatcher · Approval Workflow
─────────────────────────────────────────────
DATA LAYER (MySQL)
  Normalized Schema · Transactions · Indexed Queries
  Parameterized Statements · Audit Trail`,
    challenges: [
      {
        title: "Autonomous Business-Day Resolution",
        detail:
          "Designing a date computation engine that dynamically accounts for country-specific holidays, configurable weekend patterns, and org-level custom closures.",
      },
      {
        title: "Offline-First Reliability Under Network Partition",
        detail:
          "Implementing a resilient offline queue with conflict resolution so that leave requests submitted offline are seamlessly synced on reconnect.",
      },
      {
        title: "Scalable Multi-Tier Authorization",
        detail:
          "Engineering a 7-level permission hierarchy enforced at both API middleware and UI component layers with zero privilege-escalation surface.",
      },
      {
        title: "Secure Token Lifecycle",
        detail:
          "Managing JWT expiration, silent refresh, and HttpOnly cookie storage to eliminate XSS-based token theft while maintaining frictionless UX.",
      },
    ],
    impact: [
      "Reduced administrative overhead by ~60% — automated leave balance and approval routing",
      "Zero-downtime accessibility — offline-first PWA works in low-connectivity zones",
      "Compliance-ready audit trail — every action logged with timestamps and actor identity",
      "On-demand PDF reporting for payroll integration and management review",
      "Multi-department scalability — new teams onboarded without codebase modification",
    ],
  },
];

// ── Skills ───────────────────────────────────────────────────
export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "⚡",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "PWA",
      "Leaflet",
    ],
  },
  {
    category: "Backend",
    icon: "🔧",
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "JWT Auth",
      "RBAC",
      "WebSocket",
      "PDF Generation",
    ],
  },
  {
    category: "Data & Cloud",
    icon: "🗄️",
    items: [
      "MySQL",
      "Supabase",
      "IndexedDB",
      "SQL Optimization",
      "Data Modeling",
      "Caching (TTL)",
    ],
  },
  {
    category: "AI & Analytics",
    icon: "🤖",
    items: [
      "Risk Scoring Engines",
      "Climate Analytics",
      "Data Fusion",
      "Threshold Analysis",
      "Geospatial Data",
      "Satellite Imagery",
    ],
  },
  {
    category: "DevOps & Tools",
    icon: "🚀",
    items: [
      "Git / GitHub",
      "Vercel",
      "Service Workers",
      "CI/CD",
      "Lighthouse",
      "Performance Tuning",
    ],
  },
  {
    category: "API Integration",
    icon: "🔌",
    items: [
      "OpenWeatherMap",
      "Open-Meteo",
      "NASA GIBS",
      "OAuth Providers",
      "Supabase Auth",
      "Real-Time APIs",
    ],
  },
];

// ── Stats ────────────────────────────────────────────────────
export const stats = [
  { value: 3, label: "Production Systems", suffix: "" },
  { value: 12, label: "APIs Integrated", suffix: "+" },
  { value: 7, label: "RBAC Tiers", suffix: "" },
  { value: 100, label: "Offline-Ready", suffix: "%" },
];

// ── Typing Phrases ───────────────────────────────────────────
export const typingPhrases = [
  "Full Stack Engineer",
  "AI Systems Builder",
  "API Architect",
  "PWA Specialist",
  "Climate Tech Dev",
];
