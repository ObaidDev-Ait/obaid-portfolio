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
  category: string;
  status: string;
  subtitle: string;
  card: string;
  githubUrl: string;
  liveUrl: string;
  techStack: string[];
  features: string[];
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
  title: "Full-Stack Software Developer",
  tagline: "Software Developer passionate about building secure, scalable, and high-performance applications.",
  summary:
    "I design and build modern web applications, scalable backend systems, and intuitive user experiences. I specialize in React, Next.js, Node.js, REST APIs Nest.js, databases, and software engineering best practices.",
  email: "obaidait2025@gmail.com",
  github: "https://github.com/ObaidDev-Ait",
  linkedin: "https://linkedin.com/in/obaid-ait-mattou-2b058130b",
  phone: "+212645508349",
};

// ── Projects ─────────────────────────────────────────────────
export const projects: Project[] = [
  {
    slug: "aquaflex",
    icon: "💧",
    color: "#0284c7",
    gradient: "from-sky-500 to-blue-600",
    image: "/projects/aquaflex.png",
    title: "Aquaflex – Premium Corporate & E-Commerce Platform",
    category: "Corporate Website",
    status: "Completed",
    subtitle: "Premium Corporate & E-Commerce Platform",
    card: "High-end corporate website and e-commerce platform for Aquaflex, featuring custom product catalogs, responsive design, modern animations, and full SEO optimization.",
    githubUrl: "#",
    liveUrl: "#",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Responsive Design",
      "SEO Optimization",
      "Vercel",
    ],
    features: [
      "Premium UI/UX",
      "Product Catalog",
      "Product Details",
      "Responsive Design",
      "Contact Forms",
      "SEO",
      "Performance Optimization",
      "Modern Animations",
    ],
    summary:
      "Aquaflex is a premium corporate website and e-commerce platform crafted to present high-end bedding, foam, and salon solutions. Built with Next.js, TypeScript, and Framer Motion, it offers fluid animations, responsive product showcases, and high-conversion contact flows.",
    highlights: [
      {
        area: "UI/UX & Aesthetics",
        detail:
          "Designed a high-end, luxury aesthetic tailored for corporate branding with custom typography and interactive components.",
      },
      {
        area: "Catalog Architecture",
        detail:
          "Built interactive product catalogs and detail views optimized for high visual clarity and fast load performance.",
      },
      {
        area: "SEO & Conversion",
        detail:
          "Engineered structured metadata, schema markup, and direct WhatsApp / form inquiry funnels.",
      },
    ],
    architecture: `CLIENT & PRESENTATION LAYER (Next.js & React)
  Responsive UI · Framer Motion Animations · Tailwind CSS
  Product Catalog · Contact & Devis Inquiry Funnel
─────────────────────────────────────────────
OPTIMIZATION & DEPLOYMENT LAYER (Vercel)
  Edge Middleware · SSG / SSR Optimization · SEO Meta Generator`,
    challenges: [
      {
        title: "High-Resolution Visual Performance",
        detail:
          "Optimizing large product showcase assets while maintaining fluid client-side scrolling and 60fps micro-animations.",
      },
      {
        title: "Seamless Multi-Category Catalog Navigation",
        detail:
          "Structuring nested product categories (Matelas, Mousses, Salon Mousse) with zero layout shift during navigation.",
      },
    ],
    impact: [
      "Elevated brand positioning for Aquaflex as a premium comfort and mattress manufacturer",
      "Enhanced lead capture via instant inquiry funnels and mobile responsiveness",
      "Optimized Google Search visibility through strict technical SEO structure",
    ],
  },
  {
    slug: "solivra-agency",
    icon: "🚀",
    color: "#2563eb",
    gradient: "from-blue-600 to-indigo-600",
    image: "/projects/solivra-agency.png",
    title: "Solivra Agency – Digital Agency Platform",
    category: "Business Platform",
    status: "Completed",
    subtitle: "Digital Agency Platform",
    card: "Full-stack digital agency platform with lead generation, CMS architecture, admin dashboard, JWT auth, and PostgreSQL persistence.",
    githubUrl: "#",
    liveUrl: "#",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Prisma ORM",
      "Tailwind CSS",
      "JWT Authentication",
      "REST API",
      "Docker",
      "Vercel",
    ],
    features: [
      "Services Showcase",
      "Portfolio",
      "Lead Generation",
      "Contact Management",
      "Admin Dashboard",
      "CMS Architecture",
      "Authentication",
      "Responsive Design",
    ],
    summary:
      "Solivra Agency platform provides a full-featured digital agency portal complete with service showcases, portfolio management, client lead generation, and a secure back-office admin dashboard powered by NestJS and Prisma ORM.",
    highlights: [
      {
        area: "Full-Stack System",
        detail:
          "Built end-to-end integration between Next.js frontend, NestJS REST API, and PostgreSQL via Prisma ORM.",
      },
      {
        area: "Admin & Management",
        detail:
          "Implemented JWT authentication and RBAC to secure administrative controls over content and client inquiries.",
      },
      {
        area: "Lead Capture",
        detail:
          "Constructed dynamic contact & proposal request systems with database logging and client notifications.",
      },
    ],
    architecture: `CLIENT LAYER (Next.js)
  Services Showcase · Portfolio Showcase · Lead Generation UI
─────────────────────────────────────────────
BACKEND API (NestJS + REST API)
  JWT Auth Guard · Contact Controller · Portfolio CMS Module
─────────────────────────────────────────────
DATA LAYER (PostgreSQL + Prisma ORM)
  Relational Database Schema · Containerized via Docker`,
    challenges: [
      {
        title: "CMS & Front-End Synchronization",
        detail:
          "Creating a unified type system shared across NestJS backend entities and Next.js frontend pages for dynamic portfolio rendering.",
      },
      {
        title: "Secure Admin Operations",
        detail:
          "Protecting administrative dashboard endpoints against unauthenticated access using stateless JWT tokens.",
      },
    ],
    impact: [
      "Streamlined client onboarding and project estimate requests",
      "Centralized agency portfolio and service management",
      "Containerized deployment workflow using Docker and Vercel",
    ],
  },
  {
    slug: "trip2go",
    icon: "🏝️",
    color: "#059669",
    gradient: "from-emerald-500 to-teal-700",
    image: "/projects/trip2go.png",
    title: "Trip2Go – Tourism & Excursion Booking Platform",
    category: "Travel Platform",
    status: "Completed",
    subtitle: "Tourism & Excursion Booking Platform",
    card: "Comprehensive tourism booking platform featuring real-time excursion reservations, Stripe payment integration, interactive Google Maps, and user dashboards.",
    githubUrl: "#",
    liveUrl: "#",
    techStack: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Prisma ORM",
      "Stripe",
      "Google Maps API",
      "Tailwind CSS",
      "JWT",
      "Docker",
      "Vercel",
    ],
    features: [
      "Booking Engine",
      "Reservation System",
      "Payments",
      "Maps",
      "Search",
      "Dashboard",
      "Customer Accounts",
      "Excursions",
    ],
    summary:
      "Trip2Go is an end-to-end tourism and excursion booking engine for travel experiences. Users can explore curated excursions, locate activities on Google Maps, complete Stripe checkout, and manage reservations via user dashboards.",
    highlights: [
      {
        area: "Booking & Payments",
        detail:
          "Integrated Stripe webhooks and payment intents for real-time ticket checkout and order verification.",
      },
      {
        area: "Geospatial Exploration",
        detail:
          "Embedded interactive Google Maps with custom markers for trip itineraries and pickup points.",
      },
      {
        area: "Reservation Engine",
        detail:
          "Engineered date-slot availability tracking and customer reservation history management.",
      },
    ],
    architecture: `CLIENT FRONTEND (Next.js)
  Excursion Catalog · Interactive Google Maps · Booking Checkout UI
─────────────────────────────────────────────
BACKEND SERVICES (NestJS)
  Booking Engine · Stripe Webhook Handler · Account Service
─────────────────────────────────────────────
PERSISTENCE (PostgreSQL + Prisma)
  Reservation Schemas · Transactional Availability Checks`,
    challenges: [
      {
        title: "Concurrent Availability Management",
        detail:
          "Preventing overbooking of limited excursion seats during simultaneous payment checkouts.",
      },
      {
        title: "Stripe Payment State Reconciliation",
        detail:
          "Handling asynchronous payment webhooks reliably to transition booking statuses from pending to confirmed.",
      },
    ],
    impact: [
      "Automated complete customer reservation and payment flow",
      "Enhanced booking conversion through interactive geolocation maps",
      "Scalable infrastructure ready for high seasonal travel demand",
    ],
  },
  {
    slug: "atlasforecast",
    icon: "🌍",
    color: "#22d3ee",
    gradient: "from-cyan-400 to-blue-500",
    image: "/projects/atlasforecast.png",
    title: "AtlasForecast – AI Weather & Satellite Analytics Platform",
    category: "Weather Platform",
    status: "Completed",
    subtitle: "AI Weather & Satellite Analytics Platform",
    card: "Satellite-enhanced weather analytics platform with interactive Leaflet maps, weather radar, NASA GIBS temporal imagery, Chart.js forecasting, and multi-API data fusion.",
    githubUrl: "#",
    liveUrl: "#",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Leaflet",
      "Chart.js",
      "OpenWeather API",
      "Meteoblue API",
      "NASA GIBS API",
      "REST API",
      "Vercel",
    ],
    features: [
      "Weather Forecasts",
      "Satellite Maps",
      "Weather Radar",
      "Interactive Charts",
      "Alerts",
      "Air Quality",
      "Search Cities",
    ],
    summary:
      "AtlasForecast is an advanced weather analytics platform uniting live weather radar, satellite layer visualizers, severe alert monitors, and Chart.js metrics across worldwide cities by orchestrating OpenWeather, Meteoblue, and NASA GIBS data feeds.",
    highlights: [
      {
        area: "Geospatial & Tiles",
        detail:
          "Integrated Leaflet maps with custom NASA GIBS satellite tile layers and weather radar overlays.",
      },
      {
        area: "Data Visualization",
        detail:
          "Built interactive temperature, humidity, and barometric trends using responsive Chart.js components.",
      },
      {
        area: "Multi-API Fusion",
        detail:
          "Fused multiple meteorological data sources with fallback handling and caching.",
      },
    ],
    architecture: `CLIENT (Next.js & React)
  Leaflet Map Engine · NASA GIBS Tiles · Chart.js Analytics
─────────────────────────────────────────────
ORCHESTRATION & API LAYER
  OpenWeather API · Meteoblue API · Response Normalizer`,
    challenges: [
      {
        title: "Multi-Source Data Synchronization",
        detail:
          "Merging atmospheric data from different providers with distinct coordinate systems and update frequencies.",
      },
      {
        title: "High-Performance GIS Layer Rendering",
        detail:
          "Maintaining smooth map panning and temporal slider scrubbing while rendering high-resolution satellite tiles.",
      },
    ],
    impact: [
      "Provides accessible, satellite-grade meteorological insights to users",
      "Interactive charts make complex climate patterns easy to analyze",
      "Fast global city search with instant forecast updates",
    ],
  },
  {
    slug: "kechbus-ticket",
    icon: "🚌",
    color: "#f59e0b",
    gradient: "from-amber-400 to-red-500",
    image: "/projects/kechbus-ticket.png",
    title: "KechBus Ticket – Smart Transportation & Digital Ticketing",
    category: "Transportation",
    status: "Completed",
    subtitle: "Smart Transportation & Digital Ticketing",
    card: "Smart urban transportation and ticketing system with live GPS tracking via Socket.IO, digital QR tickets, route management, and driver/admin dashboards.",
    githubUrl: "#",
    liveUrl: "#",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "Prisma ORM",
      "Google Maps API",
      "Socket.IO",
      "QR Code",
      "JWT Authentication",
      "Tailwind CSS",
      "Docker",
      "REST API",
    ],
    features: [
      "Online Ticket Booking",
      "QR Tickets",
      "Live Tracking",
      "Route Management",
      "Driver Dashboard",
      "Notifications",
      "Admin Dashboard",
    ],
    summary:
      "KechBus Ticket is a modern transit digitizing platform for public and private bus routes. It features online ticket booking, tampered-proof QR validation, live GPS fleet tracking over WebSockets, and administrative control panels.",
    highlights: [
      {
        area: "Real-Time Fleet Tracking",
        detail:
          "Engineered WebSocket (Socket.IO) broadcast pipelines for real-time bus location updates on Google Maps.",
      },
      {
        area: "Digital QR Ticketing",
        detail:
          "Generated tamper-proof QR codes verified by driver mobile dashboards.",
      },
      {
        area: "Route & Fleet Management",
        detail:
          "Built administrative dashboards for route scheduling, seat capacity management, and analytics.",
      },
    ],
    architecture: `CLIENT & DRIVER DASHBOARD (React & Next.js)
  Passenger Booking UI · Driver Scan App · Google Maps Tracking
─────────────────────────────────────────────
REAL-TIME BACKEND (NestJS + Socket.IO)
  GPS Ingestion Engine · QR Verification · WebSocket Broadcaster
─────────────────────────────────────────────
PERSISTENCE (PostgreSQL + Prisma)
  Bus Routes · Seat Inventory · Digital Ticket Ledger`,
    challenges: [
      {
        title: "High-Frequency Location Updates",
        detail:
          "Optimizing WebSocket telemetry data fanout to handle hundreds of concurrent mobile map clients without server lag.",
      },
      {
        title: "QR Ticket Validation Security",
        detail:
          "Ensuring single-use verification logic for QR tickets to prevent double-boarding fraud.",
      },
    ],
    impact: [
      "Eliminates manual paper ticketing with secure QR validation",
      "Improves commuter satisfaction through real-time transit tracking",
      "Streamlines fleet operations for bus drivers and dispatchers",
    ],
  },
  {
    slug: "ai-resume-builder",
    icon: "📄",
    color: "#a855f7",
    gradient: "from-purple-500 to-pink-600",
    image: "/projects/ai-resume-builder.png",
    title: "AI Resume Builder – AI Resume SaaS",
    category: "AI SaaS",
    status: "Completed",
    subtitle: "AI Resume SaaS Platform",
    card: "AI-powered resume creation SaaS platform with automatic tailing, ATS score optimization, live PDF preview, streaming generation, Redis caching, and Stripe subscriptions.",
    githubUrl: "#",
    liveUrl: "#",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "Prisma ORM",
      "OpenAI API",
      "Redis",
      "Stripe",
      "Tailwind CSS",
      "Puppeteer PDF",
      "JWT Auth",
      "Docker",
      "Vercel",
    ],
    features: [
      "AI Resume Generation",
      "ATS Score Optimization",
      "Live PDF Preview",
      "Job Description Matching",
      "Custom Templates",
      "Subscription Plans",
      "User Dashboard",
      "Export PDF",
    ],
    summary:
      "AI Resume Builder is a SaaS platform designed to craft ATS-friendly, highly targeted professional resumes in minutes using AI models. Features interactive prompt tailoring, real-time PDF previewing, and subscription management.",
    highlights: [
      {
        area: "AI Tailoring Engine",
        detail:
          "Built AI prompt pipelines matching resume bullet points against job description keywords for high ATS scoring.",
      },
      {
        area: "Live Rendering Pipeline",
        detail:
          "Developed serverless Puppeteer HTML-to-PDF compilation with instant client preview.",
      },
      {
        area: "SaaS Monetization",
        detail:
          "Implemented Stripe subscriptions with usage tier enforcement via Redis rate limiters.",
      },
    ],
    architecture: `FRONTEND DASHBOARD (Next.js & React)
  Resume Studio · ATS Analyzer · Live PDF Preview Pane
─────────────────────────────────────────────
BACKEND API (NestJS + OpenAI + Redis)
  AI Generation Pipeline · Redis Cache Guard · Puppeteer PDF Renderer
─────────────────────────────────────────────
PERSISTENCE LAYER (PostgreSQL + Prisma)
  User Profiles · Resume Schemas · Subscription Ledger`,
    challenges: [
      {
        title: "Real-Time PDF Compilation Latency",
        detail:
          "Optimizing server-side Puppeteer PDF rendering to deliver sub-second preview updates during live editing.",
      },
      {
        title: "ATS Keyword Extraction Accuracy",
        detail:
          "Fine-tuning prompt engineering to reliably extract hard skills and actionable verbs without content hallucination.",
      },
    ],
    impact: [
      "Boosts job application callback rates by tailoring resumes directly to specific job descriptions",
      "Sub-second live preview improves user editing satisfaction",
      "Automated subscription management and secure token usage limits",
    ],
  },
];


// ── Skills ───────────────────────────────────────────────────
export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "⚡",
    items: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "PWA",
    ],
  },
  {
    category: "Backend",
    icon: "🔧",
    items: [
      "Node.js",
      "Nest.js",
      "Express",
      "REST APIs",
      "JWT Auth",
      "RBAC",
      "WebSocket",
    ],
  },
  {
    category: "Databases & Storage",
    icon: "🗄️",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQL",
      "Supabase",
      "IndexedDB",
      "Caching (TTL)",
    ],
  },
  {
    category: "DevOps & Tools",
    icon: "🚀",
    items: [
      "Git & GitHub",
      "Vercel",
      "Service Workers",
      "CI/CD",
      "Lighthouse",
      "Performance Tuning",
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
  "Full-Stack Software Developer",
  "React & Next.js Developer",
  "Backend & API Engineer",
  "PWA Specialist",
  "Database Systems Developer",
];
