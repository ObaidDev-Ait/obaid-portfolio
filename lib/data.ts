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
    slug: "solivra-os",
    icon: "⚡",
    color: "#6366f1",
    gradient: "from-indigo-500 to-purple-600",
    image: "/projects/solivra-os.png",
    title: "Solivra OS",
    category: "Enterprise ERP",
    status: "Completed",
    subtitle: "Enterprise ERP · CRM · AI Operations Platform",
    card: "Enterprise ERP platform centralizing CRM, sales, finance, projects, HR, reporting, administration and AI-powered automation.",
    githubUrl: "https://github.com/ObaidDev-Ait",
    liveUrl: "#",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Gemini AI",
      "RBAC",
      "Docker",
    ],
    features: [
      "Dashboard",
      "CRM & Leads",
      "Sales & Finance",
      "Invoices & Expenses",
      "Projects & Tasks",
      "HR & Payroll",
      "Reports & Analytics",
      "Knowledge Base",
      "AI Gateway & Agents",
      "RBAC & Team Management",
      "Audit Logs",
      "Client Portal",
    ],
    summary:
      "Solivra OS is a full-stack enterprise ERP platform designed to centralize business operations including CRM, Sales, Finance, Projects, HR, Knowledge Base, Reporting, Administration, RBAC, and AI-powered automation. Built with a decoupled frontend/backend monorepo architecture for real multi-tenant enterprise scale.",
    highlights: [
      {
        area: "Monorepo Architecture",
        detail:
          "Decoupled Turborepo setup featuring Next.js frontend apps, NestJS REST API backend, and PostgreSQL database managed with Prisma ORM.",
      },
      {
        area: "Enterprise Security & RBAC",
        detail:
          "Strict multi-tenant data isolation, fine-grained server-side RBAC, HttpOnly session authentication, refresh token rotation, IDOR defense, and audit logging.",
      },
      {
        area: "Real AI Gateway & Agents",
        detail:
          "Direct Google Gemini AI integration executing autonomous AI agents over contextual enterprise business data.",
      },
      {
        area: "Financial Engine",
        detail:
          "Complete billing workflow handling quotes, invoices, VAT calculation, partial payments, full settlement, expenses, and automated reconciliation.",
      },
    ],
    challenges: [
      {
        title: "Multi-Tenant Enterprise Architecture",
        detail:
          "Designing a secure multi-tenant ERP architecture combining CRM, finance, operations, HR, RBAC and real AI automation while maintaining strong performance and data isolation.",
      },
    ],
    impact: [
      "Passed 1,481 / 1,481 enterprise QA assertions with 0 critical security issues and 0 cross-tenant data leaks.",
      "Achieved 30/30 Next.js routes compiled with 0 TypeScript errors and Lighthouse >= 92 performance.",
      "Synchronized 1,362 i18n keys across English, French, and Arabic with native RTL layout support.",
      "Achieved a verified Product Acceptance score of 9.91 / 10.",
    ],
  },
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
    image: "/projects/trip2go.png",
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
    image: "/projects/aquaflex.png",
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
    icon: "🌐",
    color: "#2563eb",
    gradient: "from-blue-600 to-indigo-600",
    image: "/projects/solivra-agency.png",
    title: "SOLIVRA AGENCY",
    category: "WordPress Website",
    status: "Completed",
    subtitle: "Agency Website & Portfolio Platform",
    card: "Business website for a digital agency presenting services, portfolio galleries, client inquiry forms, and performance optimization.",
    githubUrl: "https://github.com/ObaidDev-Ait",
    liveUrl: "#",
    techStack: [
      "WordPress",
      "Elementor",
      "PHP",
      "CSS",
      "JavaScript",
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
      "SOLIVRA AGENCY is a modern agency website built on WordPress with Elementor, custom PHP, and bespoke CSS. It was engineered to present digital services, showcase past client work, and capture qualified consultation leads with optimized load performance.",
    highlights: [
      {
        area: "Custom Theme Styling",
        detail:
          "Authored custom CSS and PHP templates extending Elementor's capabilities for bespoke typography and layouts.",
      },
      {
        area: "Lead Capture & Funnels",
        detail:
          "Configured optimized contact and inquiry workflows to connect prospects directly with the agency team.",
      },
      {
        area: "Asset Optimization",
        detail:
          "Tuned caching, asset delivery, and responsive images to ensure rapid page load times.",
      },
    ],
    challenges: [
      {
        title: "Dynamic Grid Adaptability",
        detail:
          "Ensuring multi-column agency portfolios render cleanly across various smartphone viewports without layout breaking.",
      },
      {
        title: "Performance on WordPress Core",
        detail:
          "Minimizing plugin overhead to maintain fast first-contentful-paint metrics.",
      },
    ],
    impact: [
      "Established an authoritative digital presence for the agency",
      "Improved consultation inquiry submissions through streamlined contact funnels",
      "Delivered a reliable, easy-to-manage content management experience for the client",
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

// ── Experience ────────────────────────────────────────────────
export interface ExperienceItem {
  period: string;
  role: string;
  type: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}

export const experiences: ExperienceItem[] = [
  {
    period: "2024 — Present",
    role: "Full Stack Software Developer",
    type: "Freelance / Independent",
    description:
      "Designing and delivering custom full-stack web applications, REST APIs, and CMS platforms for diverse clients and business owners.",
    responsibilities: [
      "Architected and built full-stack solutions using Next.js, React, Node.js, Express, and PostgreSQL",
      "Integrated third-party APIs (OpenWeather, Leaflet, OpenAI, payment gateways, and custom REST services)",
      "Implemented relational database schemas, migrations, and ORM layer integrations using Prisma and Supabase",
      "Built bespoke WordPress and WooCommerce platforms for business clients requiring flexible content management",
      "Handled production deployments, performance tuning, and ongoing client maintenance",
    ],
    skills: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "REST APIs", "WordPress"],
  },
  {
    period: "2023 — 2024",
    role: "Frontend & Web Developer",
    type: "Freelance & Projects",
    description:
      "Focused on engineering responsive web user interfaces, component systems, and client website migrations.",
    responsibilities: [
      "Developed high-fidelity, responsive user interfaces using modern CSS, Tailwind, and React",
      "Collaborated directly with clients to translate business requirements into technical specs and interactive features",
      "Optimized Core Web Vitals, asset compression, and mobile navigation layouts for production websites",
    ],
    skills: ["JavaScript", "React", "HTML5", "CSS3", "Tailwind CSS", "Git"],
  },
];

// ── Categorized Skills ────────────────────────────────────────
export interface CategorizedSkillGroup {
  name: string;
  skills: string[];
}

export const categorizedSkills: CategorizedSkillGroup[] = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "NestJS", "Express", "REST APIs", "JWT Auth", "WebSocket"],
  },
  {
    name: "Database & Storage",
    skills: ["PostgreSQL", "MySQL", "Supabase", "Prisma ORM", "SQLite"],
  },
  {
    name: "CMS",
    skills: ["WordPress", "Elementor", "WooCommerce", "PHP"],
  },
  {
    name: "Tools & DevOps",
    skills: ["Git", "GitHub", "Docker", "Vercel", "Firebase", "Figma"],
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
