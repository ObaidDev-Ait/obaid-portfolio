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
  techStackTitle?: string;
  features: string[];
  summary: string;
  highlights: ProjectHighlight[];
  highlightsTitle?: string;
  architecture?: string;
  developmentProcess?: string[];
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
    slug: "atlasforecast",
    icon: "🌍",
    color: "#22d3ee",
    gradient: "from-cyan-400 to-blue-500",
    image: "/projects/atlasforecast.png",
    title: "AtlasForecast",
    category: "Weather Platform",
    status: "Completed",
    subtitle: "Modern Weather Forecasting & Climate Analytics",
    card: "A modern weather forecasting platform providing real-time weather, forecasts, interactive maps, and climate insights with a clean responsive interface.",
    githubUrl: "https://github.com/ObaidDev-Ait",
    liveUrl: "#",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "OpenWeather API",
      "Meteoblue API",
      "Leaflet",
      "Chart.js",
      "Vercel",
    ],
    features: [
      "Real-Time Weather",
      "Interactive Maps",
      "7-Day Forecasts",
      "Radar Imagery",
      "Climate Insights",
      "Location Search",
      "Responsive Interface",
    ],
    summary:
      "AtlasForecast is a modern weather forecasting platform providing real-time weather data, multi-day forecasts, interactive Leaflet maps, and climate insights through a clean, highly responsive interface.",
    highlights: [
      {
        area: "Interactive GIS Maps",
        detail:
          "Integrated Leaflet maps with live weather radar and satellite layer visualizers.",
      },
      {
        area: "Data Visualization",
        detail:
          "Built responsive Chart.js visualizers for hourly and weekly meteorological metrics.",
      },
      {
        area: "Multi-API Integration",
        detail:
          "Orchestrated OpenWeather and Meteoblue APIs with automatic failover and caching.",
      },
    ],
    challenges: [
      {
        title: "Geospatial Map Rendering",
        detail:
          "Optimizing Leaflet tile loading and temporal slider scrubbing across desktop and mobile devices.",
      },
      {
        title: "Multi-Source API Normalization",
        detail:
          "Harmonizing weather data structures from different providers into a single unified dashboard API.",
      },
    ],
    impact: [
      "Provides accessible, real-time meteorological insights",
      "Interactive map overlays simplify climate pattern analysis",
      "Fast global city search with instant forecast updates",
    ],
  },
  {
    slug: "trip2go",
    icon: "🏝️",
    color: "#059669",
    gradient: "from-emerald-500 to-teal-700",
    image: "/projects/Trip2go.png",
    title: "Trip2Go",
    category: "Travel & Tourism",
    status: "Completed",
    subtitle: "Premium Travel & Excursion Booking Platform",
    card: "A premium travel booking platform for Morocco featuring excursions, tours, destinations, booking management, and an elegant responsive UI.",
    githubUrl: "https://github.com/ObaidDev-Ait",
    liveUrl: "#",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "REST API",
    ],
    features: [
      "Excursion Booking Engine",
      "Morocco Destinations Showcase",
      "Reservation Management",
      "Interactive Maps",
      "Customer Reviews",
      "Responsive UI",
    ],
    summary:
      "Trip2Go is a premium travel booking platform for Morocco featuring curated excursions, guided tours, interactive destination maps, reservation management, and an elegant responsive user interface.",
    highlights: [
      {
        area: "Booking Workflow",
        detail:
          "Engineered end-to-end excursion reservation workflows and customer booking management.",
      },
      {
        area: "Relational Persistence",
        detail:
          "Structured PostgreSQL schemas with Prisma ORM for itineraries, slots, and bookings.",
      },
      {
        area: "Responsive UI",
        detail:
          "Designed a vibrant visual layout highlighting top Moroccan travel destinations.",
      },
    ],
    challenges: [
      {
        title: "Reservation State Validation",
        detail:
          "Preventing overbooking of tour slots during high-concurrency booking periods.",
      },
      {
        title: "Mobile Filtering & Search",
        detail:
          "Structuring nested search filters for touchscreens with zero layout shifts.",
      },
    ],
    impact: [
      "Streamlined excursion discovery and booking process",
      "Elevated destination engagement through high-resolution showcases",
      "Robust backend infrastructure built for high seasonal volume",
    ],
  },
  {
    slug: "kechbus-ticket",
    icon: "🚌",
    color: "#f59e0b",
    gradient: "from-amber-400 to-red-500",
    image: "/projects/kechbus-ticket.png",
    title: "KechBus Ticket",
    category: "Transportation",
    status: "Completed",
    subtitle: "Smart Bus Reservation & Ticketing System",
    card: "Online bus ticket reservation system with real-time schedules, booking management, and route visualization.",
    githubUrl: "https://github.com/ObaidDev-Ait",
    liveUrl: "#",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Leaflet",
      "REST API",
    ],
    features: [
      "Online Bus Ticket Booking",
      "Real-Time Route Maps & Schedules",
      "Interactive Seat Selection",
      "Reservation History",
      "Admin Control Panel",
      "RESTful API Backend",
    ],
    summary:
      "KechBus Ticket is an online bus ticket reservation system providing real-time bus schedules, interactive route stop maps with Leaflet, seat allocation, and full booking management.",
    highlights: [
      {
        area: "Route Mapping",
        detail:
          "Embedded interactive Leaflet maps displaying bus routes and scheduled stops.",
      },
      {
        area: "Seat Selection",
        detail:
          "Implemented interactive seat maps with real-time availability validation.",
      },
      {
        area: "Backend Architecture",
        detail:
          "Developed Express.js REST APIs backed by PostgreSQL for transit scheduling.",
      },
    ],
    challenges: [
      {
        title: "Seat Inventory Lockouts",
        detail:
          "Ensuring temporary seat holds during online checkout to avoid double bookings.",
      },
      {
        title: "Route Visualization",
        detail:
          "Efficiently rendering complex bus route vectors on interactive mobile maps.",
      },
    ],
    impact: [
      "Replaced physical tickets with streamlined digital reservations",
      "Improved transit transparency with real-time schedules",
      "Centralized administrative control over routes and schedules",
    ],
  },
  {
    slug: "contentflow",
    icon: "⚡",
    color: "#a855f7",
    gradient: "from-purple-500 to-pink-600",
    image: "/projects/contentflow.png",
    title: "ContentFlow",
    category: "AI SaaS Platform",
    status: "Completed",
    subtitle: "AI-Powered Content Publishing Platform",
    card: "AI-powered content publishing platform allowing users to generate, organize, edit, and publish content efficiently through a modern dashboard.",
    githubUrl: "https://github.com/ObaidDev-Ait",
    liveUrl: "#",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma ORM",
      "SQLite",
      "Tailwind CSS",
      "OpenAI API",
      "Authentication",
    ],
    features: [
      "AI Article & Copy Generation",
      "Rich Text Editor",
      "Content Organization & Tagging",
      "Publishing Pipelines",
      "User Authentication",
      "Dashboard Analytics",
    ],
    summary:
      "ContentFlow is an AI-powered content publishing SaaS platform that enables creators and teams to generate, organize, edit, and publish articles seamlessly using OpenAI models and Next.js.",
    highlights: [
      {
        area: "AI Generation Engine",
        detail:
          "Integrated OpenAI API prompt pipelines for generating blog posts and marketing copy.",
      },
      {
        area: "Rich Editor & Dashboard",
        detail:
          "Built a modern dashboard interface with rich text editing, draft saving, and taxonomy organization.",
      },
      {
        area: "Data & Authentication",
        detail:
          "Configured Prisma ORM with SQLite for fast data queries and secure user session management.",
      },
    ],
    highlightsTitle: "Platform Highlights",
    challenges: [
      {
        title: "Streaming AI Generation",
        detail:
          "Implementing streaming response handlers for instant content previews during AI generation.",
      },
      {
        title: "Content Taxonomy",
        detail:
          "Structuring intuitive tag and category organization for large document libraries.",
      },
    ],
    impact: [
      "Accelerates content creation workflows by up to 70%",
      "Modern dashboard unifies drafting, editing, and publishing",
      "Scalable architecture prepared for enterprise SaaS deployment",
    ],
  },
  {
    slug: "aquaflex",
    icon: "💧",
    color: "#0284c7",
    gradient: "from-sky-500 to-blue-600",
    image: "/projects/AQWAFLEX.png",
    title: "AQWAFLEX",
    category: "Corporate Website",
    status: "Completed",
    subtitle: "Premium Corporate & E-Commerce Platform",
    card: "Professional corporate website showcasing premium products with responsive design, modern UI, and SEO optimization.",
    githubUrl: "https://github.com/ObaidDev-Ait",
    liveUrl: "#",
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
    ],
    features: [
      "Premium Product Showcase",
      "Interactive Product Catalog",
      "Fluid Framer Motion Animations",
      "Direct Inquiry Funnel",
      "Full SEO Optimization",
      "Responsive Layout",
    ],
    summary:
      "AQWAFLEX is a professional corporate website showcasing premium bedding, foam, and mattress products. Built with Next.js, TypeScript, and Framer Motion, it delivers modern UI styling, responsive product galleries, and search engine optimization.",
    highlights: [
      {
        area: "Modern UI/UX Design",
        detail:
          "Created a luxury corporate design tailored to brand identity with elegant typography.",
      },
      {
        area: "Framer Motion",
        detail:
          "Designed smooth entrance animations and micro-interactions across pages.",
      },
      {
        area: "SEO & Performance",
        detail:
          "Structured metadata, schema tags, and optimized assets for rapid loading.",
      },
    ],
    challenges: [
      {
        title: "High-Resolution Asset Optimization",
        detail:
          "Optimizing product photography while retaining crisp quality and 60fps scroll performance.",
      },
      {
        title: "Multi-Device Layout Balance",
        detail:
          "Balancing image aspect ratios for mobile screens without cropping essential product details.",
      },
    ],
    impact: [
      "Elevated brand authority for AQWAFLEX as a high-end manufacturer",
      "Drove higher lead inquiries via responsive contact forms",
      "Achieved fast page load times and strong SEO scores",
    ],
  },
  {
    slug: "solivra-agency",
    icon: "🚀",
    color: "#2563eb",
    gradient: "from-blue-600 to-indigo-600",
    image: "/projects/SOLIVRAAGENCY.png",
    title: "SOLIVRA AGENCY",
    category: "Digital Agency",
    status: "Completed",
    subtitle: "Digital Agency Platform",
    card: "Business website for a digital agency presenting services, portfolio, contact forms, and optimized performance.",
    githubUrl: "https://github.com/ObaidDev-Ait",
    liveUrl: "#",
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
    ],
    features: [
      "Services Showcase",
      "Portfolio Showcase",
      "Contact & Inquiry Forms",
      "Performance Optimization",
      "Clean UI/UX Layout",
      "Mobile Responsive",
    ],
    summary:
      "SOLIVRA AGENCY is a modern digital agency website designed to present agency services, showcase creative project portfolios, and capture prospective client leads with optimized web performance.",
    highlights: [
      {
        area: "Agency Portfolio",
        detail:
          "Built interactive galleries to display past client work and digital deliverables.",
      },
      {
        area: "Lead Capture",
        detail:
          "Designed intuitive contact forms and inquiry funnels for new client consultation.",
      },
      {
        area: "Performance Optimization",
        detail:
          "Optimized static rendering and asset delivery for high Google Lighthouse scores.",
      },
    ],
    challenges: [
      {
        title: "Responsive Grid Hierarchy",
        detail:
          "Formatting multi-column agency service offerings seamlessly across all mobile viewports.",
      },
      {
        title: "Cross-Browser Consistency",
        detail:
          "Ensuring pixel-perfect CSS rendering across all modern web browsers.",
      },
    ],
    impact: [
      "Established strong digital agency brand presence",
      "Boosted user engagement and client consultation inquiries",
      "Delivered lightweight, high-speed static web pages",
    ],
  },
  {
    slug: "vacations-manager",
    icon: "📅",
    color: "#ec4899",
    gradient: "from-pink-500 to-rose-600",
    image: "/projects/vacations-manager.png",
    title: "Vacations Manager",
    category: "Business Management",
    status: "Completed",
    subtitle: "Corporate Vacation & Leave Management System",
    card: "Vacation and leave management application for companies with employee requests, approvals, calendars, and administration dashboard.",
    githubUrl: "https://github.com/ObaidDev-Ait",
    liveUrl: "#",
    techStack: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
    ],
    features: [
      "Employee Leave Requests",
      "Manager Approval Workflows",
      "Team Availability Calendar",
      "Employee Profiles",
      "Administration Dashboard",
      "Leave Status Tracking",
    ],
    summary:
      "Vacations Manager is an internal business application for streamlining company leave requests. Employees can submit vacation applications while managers review, approve, and track team availability via central dashboards.",
    highlights: [
      {
        area: "Approval Workflows",
        detail:
          "Built automated leave request submission and multi-tier approval tracking.",
      },
      {
        area: "Interactive Calendar",
        detail:
          "Designed department availability calendars to prevent scheduling conflicts.",
      },
      {
        area: "Relational Schema",
        detail:
          "Structured normalized PostgreSQL databases for employee accounts, balances, and request logs.",
      },
    ],
    challenges: [
      {
        title: "Date Overlap Validation",
        detail:
          "Implementing algorithmic validation to detect overlapping time-off requests within departments.",
      },
      {
        title: "Role-Based Access Control",
        detail:
          "Restricting view rights so employees only access appropriate team data.",
      },
    ],
    impact: [
      "Replaced manual leave management with automated digital tracking",
      "Prevented departmental understaffing via visual calendars",
      "Provided HR administration with downloadable leave history reports",
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
