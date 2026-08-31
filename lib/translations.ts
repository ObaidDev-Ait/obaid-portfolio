export type Language = "en" | "fr" | "ar";

export interface Translations {
  nav: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
    downloadCv: string;
  };
  hero: {
    badge: string;
    greeting: string;
    name: string;
    title: string;
    tagline: string;
    summary: string;
    contactMe: string;
    viewProjects: string;
    status: string;
    phrases: string[];
  };
  about: {
    title: string;
    subtitle: string;
    p1: string;
    p2: string;
    highlightsTitle: string;
    highlights: {
      h1Title: string;
      h1Desc: string;
      h2Title: string;
      h2Desc: string;
      h3Title: string;
      h3Desc: string;
    };
  };
  skills: {
    title: string;
    subtitle: string;
    categories: {
      frontend: string;
      backend: string;
      database: string;
      cms: string;
      tools: string;
    };
  };
  projects: {
    title: string;
    subtitle: string;
    viewCaseStudy: string;
    githubRepo: string;
    liveDemo: string;
    allCategories: string;
    techStack: string;
    keyFeatures: string;
    slugs: Record<
      string,
      {
        title: string;
        category: string;
        subtitle: string;
        card: string;
        summary: string;
        features: string[];
        highlights: { area: string; detail: string }[];
        challenges: { title: string; detail: string }[];
        impact: string[];
      }
    >;
  };
  stats: {
    productionSystems: string;
    apisIntegrated: string;
    rbacTiers: string;
    offlineReady: string;
  };
  experience: {
    title: string;
    subtitle: string;
    items: {
      period: string;
      role: string;
      type: string;
      description: string;
      responsibilities: string[];
    }[];
  };
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendButton: string;
    sending: string;
    successMessage: string;
    errorMessage: string;
    directEmail: string;
    phone: string;
    location: string;
    locationValue: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    connect: string;
    rights: string;
  };
  caseStudy: {
    backToProjects: string;
    overview: string;
    technologies: string;
    featuresTitle: string;
    architectureTitle: string;
    challengesTitle: string;
    impactTitle: string;
    livePreview: string;
    viewSource: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      downloadCv: "Download CV",
    },
    hero: {
      badge: "Available for new projects & opportunities",
      greeting: "Hello, I'm",
      name: "Obaid Ait Mattou",
      title: "Full-Stack Software Developer",
      tagline:
        "Software Developer passionate about building secure, scalable, and high-performance applications.",
      summary:
        "I design and build modern web applications, scalable backend systems, and intuitive user experiences. I specialize in React, Next.js, Node.js, Nest.js REST APIs, databases, and software engineering best practices.",
      contactMe: "Get in Touch",
      viewProjects: "Explore Projects",
      status: "Open to Remote & On-Site Roles",
      phrases: [
        "Full-Stack Software Developer",
        "React & Next.js Specialist",
        "Backend & API Engineer",
        "TypeScript & Node.js Developer",
        "Database Architecture Specialist",
      ],
    },
    about: {
      title: "About Me",
      subtitle: "Passionate developer dedicated to craft, performance, and clean code.",
      p1: "I am a Full-Stack Software Developer with a strong foundation in modern web technologies and software design principles. My passion lies in crafting high-impact digital solutions that solve real-world business challenges.",
      p2: "Whether engineering complex Next.js applications, building robust RESTful microservices with Node.js/NestJS, or modeling normalized SQL databases, I prioritize code quality, maintainability, and exceptional user experiences.",
      highlightsTitle: "Engineering Principles",
      highlights: {
        h1Title: "Clean Architecture",
        h1Desc: "Writing modular, scalable, and maintainable code built for long-term growth.",
        h2Title: "Performance & Security",
        h2Desc: "Optimizing Core Web Vitals, API latency, and authentication protocols.",
        h3Title: "User-Centric Design",
        h3Desc: "Designing fluid, responsive interfaces with precise micro-interactions.",
      },
    },
    skills: {
      title: "Skills & Technologies",
      subtitle: "A comprehensive stack honed across full-stack engineering domain.",
      categories: {
        frontend: "Frontend Development",
        backend: "Backend & API Development",
        database: "Database & Storage",
        cms: "Content Management Systems",
        tools: "Tools, DevOps & Platforms",
      },
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Selected software systems and web platforms engineered for performance.",
      viewCaseStudy: "View Case Study",
      githubRepo: "GitHub Code",
      liveDemo: "Live Demo",
      allCategories: "All Projects",
      techStack: "Tech Stack",
      keyFeatures: "Key Features",
      slugs: {
        "solivra-os": {
          title: "Solivra OS",
          category: "Enterprise ERP",
          subtitle: "Enterprise ERP · CRM · AI Operations Platform",
          card: "Enterprise ERP platform centralizing CRM, sales, finance, projects, HR, reporting, administration and AI-powered automation.",
          summary:
            "Solivra OS is a full-stack enterprise ERP platform designed to centralize business operations including CRM, Sales, Finance, Projects, HR, Knowledge Base, Reporting, Administration, RBAC, and AI-powered automation. Built with a decoupled frontend/backend monorepo architecture for real multi-tenant enterprise scale.",
          features: [
            "Executive Dashboard & Analytics",
            "CRM, Leads & Contact Pipeline",
            "Sales & Quotation Management",
            "Finance Engine (Invoices, VAT, Expenses)",
            "Project & Task Management",
            "HR, Attendance & Payroll System",
            "Enterprise Knowledge Base & Audit Logs",
            "Real AI Gateway & Agent Execution",
            "Multi-Tenant RBAC & Access Control",
            "Dedicated B2B Client Portal",
          ],
          highlights: [
            {
              area: "Monorepo Architecture",
              detail: "Decoupled Turborepo setup featuring Next.js frontend apps, NestJS REST API backend, and PostgreSQL database managed with Prisma ORM.",
            },
            {
              area: "Enterprise Security & RBAC",
              detail: "Strict multi-tenant data isolation, fine-grained server-side RBAC, HttpOnly session authentication, refresh token rotation, IDOR defense, and audit logging.",
            },
            {
              area: "Real AI Gateway & Agents",
              detail: "Direct Google Gemini AI integration executing autonomous AI agents over contextual enterprise business data.",
            },
            {
              area: "Financial Engine",
              detail: "Complete billing workflow handling quotes, invoices, VAT calculation, partial payments, full settlement, expenses, and automated reconciliation.",
            },
          ],
          challenges: [
            {
              title: "Multi-Tenant Enterprise Architecture",
              detail: "Designing a secure multi-tenant ERP architecture combining CRM, finance, operations, HR, RBAC and real AI automation while maintaining strong performance and data isolation.",
            },
          ],
          impact: [
            "Passed 1,481 / 1,481 enterprise QA assertions with 0 critical security issues and 0 cross-tenant data leaks.",
            "Achieved 30/30 Next.js routes compiled with 0 TypeScript errors and Lighthouse >= 92 performance.",
            "Synchronized 1,362 i18n keys across English, French, and Arabic with native RTL layout support.",
            "Achieved a verified Product Acceptance score of 9.91 / 10.",
          ],
        },
        atlasforecast: {
          title: "AtlasForecast",
          category: "Weather Platform",
          subtitle: "Modern Weather Forecasting & Climate Analytics",
          card: "A modern weather forecasting platform providing real-time weather, multi-day forecasts, interactive maps, and climate insights with a clean responsive interface.",
          summary:
            "AtlasForecast is a modern weather forecasting platform providing real-time weather data, multi-day forecasts, interactive Leaflet maps, and climate insights through a clean, highly responsive interface.",
          features: [
            "Real-Time Weather Data",
            "Interactive GIS Maps",
            "7-Day Meteorological Forecasts",
            "Radar & Satellite Imagery",
            "Climate Insights & Analytics",
            "Global Location Search",
            "Responsive Modern Interface",
          ],
          highlights: [
            {
              area: "Interactive GIS Maps",
              detail: "Integrated Leaflet maps with live weather radar and satellite layer visualizers.",
            },
            {
              area: "Data Visualization",
              detail: "Built responsive Chart.js visualizers for hourly and weekly meteorological metrics.",
            },
            {
              area: "Multi-API Integration",
              detail: "Orchestrated OpenWeather and Meteoblue APIs with automatic failover and caching.",
            },
          ],
          challenges: [
            {
              title: "Geospatial Map Rendering",
              detail: "Optimizing Leaflet tile loading and temporal slider scrubbing across desktop and mobile devices.",
            },
            {
              title: "Multi-Source API Normalization",
              detail: "Harmonizing weather data structures from different providers into a single unified dashboard API.",
            },
          ],
          impact: [
            "Provides accessible, real-time meteorological insights",
            "Interactive map overlays simplify climate pattern analysis",
            "Fast global city search with instant forecast updates",
          ],
        },
        trip2go: {
          title: "Trip2Go",
          category: "Travel & Tourism",
          subtitle: "Premium Travel & Excursion Booking Platform",
          card: "A premium travel booking platform for Morocco featuring excursions, tours, destinations, booking management, and an elegant responsive UI.",
          summary:
            "Trip2Go is a premium travel booking platform for Morocco featuring curated excursions, guided tours, interactive destination maps, reservation management, and an elegant responsive user interface.",
          features: [
            "Excursion Booking Engine",
            "Morocco Destinations Showcase",
            "Reservation Management",
            "Interactive Maps",
            "Customer Reviews & Ratings",
            "Responsive Modern UI",
          ],
          highlights: [
            {
              area: "Booking Workflow",
              detail: "Engineered end-to-end excursion reservation workflows and customer booking management.",
            },
            {
              area: "Relational Persistence",
              detail: "Structured PostgreSQL schemas with Prisma ORM for itineraries, slots, and bookings.",
            },
            {
              area: "Responsive UI",
              detail: "Designed a vibrant visual layout highlighting top Moroccan travel destinations.",
            },
          ],
          challenges: [
            {
              title: "Reservation State Validation",
              detail: "Preventing overbooking of tour slots during high-concurrency booking periods.",
            },
            {
              title: "Mobile Filtering & Search",
              detail: "Structuring nested search filters for touchscreens with zero layout shifts.",
            },
          ],
          impact: [
            "Streamlined excursion discovery and booking process",
            "Elevated destination engagement through high-resolution showcases",
            "Robust backend infrastructure built for high seasonal volume",
          ],
        },
        "kechbus-ticket": {
          title: "KechBus Ticket",
          category: "Transportation",
          subtitle: "Smart Bus Reservation & Ticketing System",
          card: "Online bus ticket reservation system with real-time schedules, booking management, and route visualization.",
          summary:
            "KechBus Ticket is an online bus ticket reservation system providing real-time bus schedules, interactive route stop maps with Leaflet, seat allocation, and full booking management.",
          features: [
            "Online Bus Ticket Booking",
            "Real-Time Route Maps & Schedules",
            "Interactive Seat Selection",
            "Reservation History Tracking",
            "Admin Control Panel",
            "RESTful API Backend",
          ],
          highlights: [
            {
              area: "Route Mapping",
              detail: "Embedded interactive Leaflet maps displaying bus routes and scheduled stops.",
            },
            {
              area: "Seat Selection",
              detail: "Implemented interactive seat maps with real-time availability validation.",
            },
            {
              area: "Backend Architecture",
              detail: "Developed Express.js REST APIs backed by PostgreSQL for transit scheduling.",
            },
          ],
          challenges: [
            {
              title: "Seat Inventory Lockouts",
              detail: "Ensuring temporary seat holds during online checkout to avoid double bookings.",
            },
            {
              title: "Route Visualization",
              detail: "Efficiently rendering complex bus route vectors on interactive mobile maps.",
            },
          ],
          impact: [
            "Replaced physical tickets with streamlined digital reservations",
            "Improved transit transparency with real-time schedules",
            "Centralized administrative control over routes and schedules",
          ],
        },
        contentflow: {
          title: "ContentFlow",
          category: "AI SaaS Platform",
          subtitle: "AI-Powered Content Publishing Platform",
          card: "AI-powered content publishing platform allowing users to generate, organize, edit, and publish content efficiently through a modern dashboard.",
          summary:
            "ContentFlow is an AI-powered content publishing SaaS platform that enables creators and teams to generate, organize, edit, and publish articles seamlessly using OpenAI models and Next.js.",
          features: [
            "AI Article & Copy Generation",
            "Rich Text Editor",
            "Content Organization & Tagging",
            "Publishing Pipelines",
            "User Authentication & Sessions",
            "Dashboard Analytics",
          ],
          highlights: [
            {
              area: "AI Generation Engine",
              detail: "Integrated OpenAI API prompt pipelines for generating blog posts and marketing copy.",
            },
            {
              area: "Rich Editor & Dashboard",
              detail: "Built a modern dashboard interface with rich text editing, draft saving, and taxonomy organization.",
            },
            {
              area: "Data & Authentication",
              detail: "Configured Prisma ORM with SQLite for fast data queries and secure user session management.",
            },
          ],
          challenges: [
            {
              title: "Streaming AI Generation",
              detail: "Implementing streaming response handlers for instant content previews during AI generation.",
            },
            {
              title: "Content Taxonomy",
              detail: "Structuring intuitive tag and category organization for large document libraries.",
            },
          ],
          impact: [
            "Accelerates content creation workflows by up to 70%",
            "Modern dashboard unifies drafting, editing, and publishing",
            "Scalable architecture prepared for enterprise SaaS deployment",
          ],
        },
        aquaflex: {
          title: "AQWAFLEX",
          category: "Corporate Website",
          subtitle: "Premium Corporate & E-Commerce Platform",
          card: "Professional corporate website showcasing premium products with responsive design, modern UI, and SEO optimization.",
          summary:
            "AQWAFLEX is a professional corporate website showcasing premium bedding, foam, and mattress products. Built with Next.js, TypeScript, and Framer Motion, it delivers modern UI styling, responsive product galleries, and search engine optimization.",
          features: [
            "Premium Product Showcase",
            "Interactive Product Catalog",
            "Fluid Framer Motion Animations",
            "Direct Inquiry Funnel",
            "Full SEO Optimization",
            "Responsive Layout",
          ],
          highlights: [
            {
              area: "Modern UI/UX Design",
              detail: "Created a luxury corporate design tailored to brand identity with elegant typography.",
            },
            {
              area: "Framer Motion",
              detail: "Designed smooth entrance animations and micro-interactions across pages.",
            },
            {
              area: "SEO & Performance",
              detail: "Structured metadata, schema tags, and optimized assets for rapid loading.",
            },
          ],
          challenges: [
            {
              title: "High-Resolution Asset Optimization",
              detail: "Optimizing product photography while retaining crisp quality and 60fps scroll performance.",
            },
            {
              title: "Multi-Device Layout Balance",
              detail: "Balancing image aspect ratios for mobile screens without cropping essential product details.",
            },
          ],
          impact: [
            "Elevated brand authority for AQWAFLEX as a high-end manufacturer",
            "Drove higher lead inquiries via responsive contact forms",
            "Achieved fast page load times and strong SEO scores",
          ],
        },
        "solivra-agency": {
          title: "SOLIVRA AGENCY",
          category: "WordPress Website",
          subtitle: "Agency Website & Portfolio Platform",
          card: "Business website for a digital agency presenting services, portfolio galleries, client inquiry forms, and performance optimization.",
          summary:
            "SOLIVRA AGENCY is a modern agency website built on WordPress with Elementor, custom PHP, and bespoke CSS. It was engineered to present digital services, showcase past client work, and capture qualified consultation leads with optimized load performance.",
          features: [
            "Services Showcase",
            "Portfolio Showcase",
            "Contact & Inquiry Forms",
            "Performance Optimization",
            "Clean UI/UX Layout",
            "Mobile Responsive",
          ],
          highlights: [
            {
              area: "Custom Theme Styling",
              detail: "Authored custom CSS and PHP templates extending Elementor's capabilities for bespoke typography.",
            },
            {
              area: "Lead Capture & Funnels",
              detail: "Configured optimized contact and inquiry workflows to connect prospects directly with the agency team.",
            },
            {
              area: "Asset Optimization",
              detail: "Tuned caching, asset delivery, and responsive images to ensure rapid page load times.",
            },
          ],
          challenges: [
            {
              title: "Dynamic Grid Adaptability",
              detail: "Ensuring multi-column agency portfolios render cleanly across various smartphone viewports.",
            },
            {
              title: "Performance on WordPress Core",
              detail: "Minimizing plugin overhead to maintain fast first-contentful-paint metrics.",
            },
          ],
          impact: [
            "Established an authoritative digital presence for the agency",
            "Improved consultation inquiry submissions through streamlined contact funnels",
            "Delivered a reliable, easy-to-manage content management experience for the client",
          ],
        },
        "vacations-manager": {
          title: "Vacations Manager",
          category: "Business Management",
          subtitle: "Corporate Vacation & Leave Management System",
          card: "Vacation and leave management application for companies with employee requests, approvals, calendars, and administration dashboard.",
          summary:
            "Vacations Manager is an internal business application for streamlining company leave requests. Employees can submit vacation applications while managers review, approve, and track team availability via central dashboards.",
          features: [
            "Employee Leave Requests",
            "Manager Approval Workflows",
            "Team Availability Calendar",
            "Employee Profiles",
            "Administration Dashboard",
            "Leave Status Tracking",
          ],
          highlights: [
            {
              area: "Approval Workflows",
              detail: "Built automated leave request submission and multi-tier approval tracking.",
            },
            {
              area: "Interactive Calendar",
              detail: "Designed department availability calendars to prevent scheduling conflicts.",
            },
            {
              area: "Relational Schema",
              detail: "Structured normalized PostgreSQL databases for employee accounts, balances, and request logs.",
            },
          ],
          challenges: [
            {
              title: "Date Overlap Validation",
              detail: "Implementing algorithmic validation to detect overlapping time-off requests within departments.",
            },
            {
              title: "Role-Based Access Control",
              detail: "Restricting view rights so employees only access appropriate team data.",
            },
          ],
          impact: [
            "Replaced manual leave management with automated digital tracking",
            "Prevented departmental understaffing via visual calendars",
            "Provided HR administration with downloadable leave history reports",
          ],
        },
      },
    },
    stats: {
      productionSystems: "Production Systems",
      apisIntegrated: "APIs Integrated",
      rbacTiers: "RBAC Tiers",
      offlineReady: "Offline-Ready",
    },
    experience: {
      title: "Experience & Journey",
      subtitle: "My professional background in software development and web engineering.",
      items: [
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
        },
      ],
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Have a project in mind or interested in working together? Send me a message!",
      nameLabel: "Your Name",
      namePlaceholder: "John Doe",
      emailLabel: "Your Email",
      emailPlaceholder: "john@example.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project or inquiry...",
      sendButton: "Send Message",
      sending: "Sending...",
      successMessage: "Thank you! Your message has been sent successfully.",
      errorMessage: "Something went wrong. Please try again or email me directly.",
      directEmail: "Direct Email",
      phone: "Phone / WhatsApp",
      location: "Location",
      locationValue: "Morocco (Available Globally / Remote)",
    },
    footer: {
      tagline: "Building scalable, high-performance web applications with clean code & modern architecture.",
      quickLinks: "Quick Links",
      connect: "Connect",
      rights: "All rights reserved.",
    },
    caseStudy: {
      backToProjects: "Back to Projects",
      overview: "Project Overview",
      technologies: "Technologies Used",
      featuresTitle: "Key System Features",
      architectureTitle: "Architecture & Engineering Highlights",
      challengesTitle: "Technical Challenges & Solutions",
      impactTitle: "Business & Operational Impact",
      livePreview: "Live Preview",
      viewSource: "View Source Code",
    },
  },
  fr: {
    nav: {
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      experience: "Expérience",
      contact: "Contact",
      downloadCv: "Télécharger CV",
    },
    hero: {
      badge: "Disponible pour de nouveaux projets et opportunités",
      greeting: "Bonjour, je suis",
      name: "Obaid Ait Mattou",
      title: "Développeur Logiciel Full-Stack",
      tagline:
        "Développeur passionné par la création d'applications sécurisées, évolutives et performantes.",
      summary:
        "Je conçois et développe des applications web modernes, des systèmes backend évolutifs et des interfaces utilisateur intuitives. Je suis spécialisé en React, Next.js, Node.js, APIs REST Nest.js, bases de données et bonnes pratiques d'ingénierie logicielle.",
      contactMe: "Me Contacter",
      viewProjects: "Découvrir Mes Projets",
      status: "Disponible à distance & sur site",
      phrases: [
        "Développeur Logiciel Full-Stack",
        "Spécialiste React & Next.js",
        "Ingénieur Backend & APIs",
        "Développeur TypeScript & Node.js",
        "Spécialiste Architecture de Données",
      ],
    },
    about: {
      title: "À Propos de Moi",
      subtitle: "Développeur passionné par la qualité, la performance et le code propre.",
      p1: "Je suis un Développeur Logiciel Full-Stack possédant une solide expertise dans les technologies web modernes et l'architecture logicielle. Ma passion consiste à concevoir des solutions numériques à fort impact qui répondent aux vrais défis métiers.",
      p2: "Qu'il s'agisse d'architecturer des applications Next.js complexes, d'élaborer des microservices RESTful robustes avec Node.js/NestJS, ou de modéliser des bases de données SQL normalisées, je privilégie toujours la qualité du code et l'expérience utilisateur.",
      highlightsTitle: "Principes d'Ingénierie",
      highlights: {
        h1Title: "Architecture Propre",
        h1Desc: "Code modulaire, évolutif et maintenable conçu pour une croissance pérenne.",
        h2Title: "Performance & Sécurité",
        h2Desc: "Optimisation des Core Web Vitals, de la latence API et de la sécurité.",
        h3Title: "Conception Centrée Utilisateur",
        h3Desc: "Interfaces fluides et réactives enrichies d'interactions soignées.",
      },
    },
    skills: {
      title: "Compétences & Technologies",
      subtitle: "Un éventail de compétences maîtrisées à travers l'ingénierie full-stack.",
      categories: {
        frontend: "Développement Frontend",
        backend: "Développement Backend & APIs",
        database: "Bases de Données & Stockage",
        cms: "Systèmes de Gestion de Contenu (CMS)",
        tools: "Outils, DevOps & Plateformes",
      },
    },
    projects: {
      title: "Projets En Vedette",
      subtitle: "Une sélection d'applications et de plateformes web conçues pour la performance.",
      viewCaseStudy: "Voir l'Étude de Cas",
      githubRepo: "Code GitHub",
      liveDemo: "Démo en Direct",
      allCategories: "Tous les Projets",
      techStack: "Technologies",
      keyFeatures: "Fonctionnalités Clés",
      slugs: {
        "solivra-os": {
          title: "Solivra OS",
          category: "ERP d'Entreprise",
          subtitle: "ERP d'Entreprise · CRM · Plateforme IA",
          card: "Plateforme ERP d'entreprise centralisant le CRM, les ventes, la finance, les projets, les RH, le reporting et l'automatisation IA.",
          summary:
            "Solivra OS est une plateforme ERP complète conçue pour centraliser les opérations d'entreprise : CRM, Ventes, Finance, Projets, RH, Base de Connaissances, Reporting, Administration, RBAC et automatisation par IA.",
          features: [
            "Tableau de bord exécutif et analyses",
            "CRM et pipeline de prospects",
            "Gestion des ventes et devis",
            "Moteur financier (Factures, TVA, Dépenses)",
            "Gestion de projets et tâches",
            "Système RH, présence et paie",
            "Base de connaissances et journaux d'audit",
            "Passerelle IA et agents autonomes",
            "Contrôle d'accès RBAC multi-locataire",
            "Portail client B2B dédié",
          ],
          highlights: [
            {
              area: "Architecture Monorepo",
              detail: "Structure Turborepo découplée avec frontend Next.js, API NestJS et base PostgreSQL gérée par Prisma ORM.",
            },
            {
              area: "Sécurité & RBAC",
              detail: "Isolation stricte des données multi-locataires, contrôle d'accès RBAC, cookies HttpOnly, rotation des jetons et journaux d'audit.",
            },
            {
              area: "Passerelle IA & Agents",
              detail: "Intégration directe de Google Gemini AI exécutant des agents IA autonomes sur les données métiers.",
            },
            {
              area: "Moteur Financier",
              detail: "Gestion complète de la facturation, calcul de TVA, paiements partiels, règlement total et rapprochement automatique.",
            },
          ],
          challenges: [
            {
              title: "Architecture Multi-Locataire",
              detail: "Concevoir une architecture ERP multi-locataire sécurisée combinant CRM, finance, opérations, RH, RBAC et automatisation IA tout en maintenant de hautes performances et une isolation stricte des données.",
            },
          ],
          impact: [
            "1 481 / 1 481 assertions QA d'entreprise validées avec 0 problème de sécurité critique et 0 fuite inter-locataire.",
            "30/30 routes Next.js compilées sans erreur TypeScript et performance Lighthouse >= 92.",
            "1 362 clés i18n synchronisées en anglais, français et arabe avec support RTL natif.",
            "Score de recette produit vérifié de 9,91 / 10.",
          ],
        },
        atlasforecast: {
          title: "AtlasForecast",
          category: "Plateforme Météo",
          subtitle: "Prévisions Météorologiques et Analyse Climatique",
          card: "Une plateforme météo moderne fournissant des données en temps réel, des prévisions sur plusieurs jours, des cartes interactives et des analyses climatiques.",
          summary:
            "AtlasForecast est une plateforme météo moderne fournissant des données météorologiques en temps réel, des prévisions détaillées, des cartes interactives Leaflet et des données climatiques via une interface épurée et réactive.",
          features: [
            "Données Météo en Temps Réel",
            "Cartes GIS Interactives",
            "Prévisions Météorologiques sur 7 Jours",
            "Imagerie Radar et Satellite",
            "Analyses Climatiques",
            "Recherche de Villes Mondiales",
            "Interface Moderne et Réactive",
          ],
          highlights: [
            {
              area: "Cartographie GIS Interactive",
              detail: "Intégration de cartes Leaflet avec visualiseurs radar météo et satellite en direct.",
            },
            {
              area: "Visualisation de Données",
              detail: "Création de graphiques Chart.js réactifs pour les métriques météorologiques horaires et hebdomadaires.",
            },
            {
              area: "Intégration Multi-APIs",
              detail: "Orchestration des APIs OpenWeather et Meteoblue avec basculement automatique et mise en cache.",
            },
          ],
          challenges: [
            {
              title: "Rendu Cartographique Géospatial",
              detail: "Optimisation du chargement des tuiles Leaflet sur ordinateur et mobile.",
            },
            {
              title: "Normalisation Multi-Sources",
              detail: "Harmonisation des structures de données provenant de différents fournisseurs dans une API unique.",
            },
          ],
          impact: [
            "Fournit des analyses météorologiques en temps réel accessibles",
            "Les cartes interactives simplifient l'analyse des tendances climatiques",
            "Recherche rapide de villes mondiales avec mise à jour instantanée",
          ],
        },
        trip2go: {
          title: "Trip2Go",
          category: "Voyage & Tourisme",
          subtitle: "Plateforme de Réservation de Voyages & Excursions",
          card: "Une plateforme de réservation de voyages au Maroc proposant des excursions, des visites guidées, la gestion des réservations et une UI élégante.",
          summary:
            "Trip2Go est une plateforme premium de réservation touristique au Maroc proposant des excursions guidées, des cartes de destinations interactives, la gestion des réservations et une interface utilisateur élégante.",
          features: [
            "Moteur de Réservation d'Excursions",
            "Vitrine des Destinations du Maroc",
            "Gestion des Réservations",
            "Cartes Interactives",
            "Avis et Évaluations Clients",
            "UI Moderne et Réactive",
          ],
          highlights: [
            {
              area: "Workflow de Réservation",
              detail: "Conception de workflows complets de réservation d'excursions et de gestion des clients.",
            },
            {
              area: "Persistance Relationnelle",
              detail: "Structures PostgreSQL avec ORM Prisma pour les itinéraires, créneaux et réservations.",
            },
            {
              area: "UI Réactive",
              detail: "Mise en page visuelle attrayante mettant en valeur les meilleures destinations marocaines.",
            },
          ],
          challenges: [
            {
              title: "Validation des Réservations",
              detail: "Prévention de la surréservation lors des pics de trafic.",
            },
            {
              title: "Recherche & Filtres Mobiles",
              detail: "Structuration de filtres de recherche fluides pour écrans tactiles.",
            },
          ],
          impact: [
            "Processus de découverte et de réservation d'excursions simplifié",
            "Engagement renforcé grâce à des vitrines haute définition",
            "Infrastructure backend robuste conçue pour de forts volumes saisonniers",
          ],
        },
        "kechbus-ticket": {
          title: "KechBus Ticket",
          category: "Transport",
          subtitle: "Système Intelligent de Réservation de Bus",
          card: "Système de réservation de billets de bus en ligne avec horaires en temps réel, gestion des réservations et visualisation d'itinéraires.",
          summary:
            "KechBus Ticket est un système de réservation de billets de bus en ligne offrant des horaires en temps réel, des cartes d'arrêts interactives avec Leaflet, le choix du siège et la gestion globale des réservations.",
          features: [
            "Réservation de Billets en Ligne",
            "Cartes & Horaires en Temps Réel",
            "Sélection Interactive du Siège",
            "Historique des Réservations",
            "Panneau d'Administration",
            "Backend API RESTful",
          ],
          highlights: [
            {
              area: "Cartographie d'Itinéraires",
              detail: "Intégration de cartes Leaflet affichant les lignes de bus et arrêts prévus.",
            },
            {
              area: "Sélection des Sièges",
              detail: "Plan interactif des sièges avec vérification de disponibilité en temps réel.",
            },
            {
              area: "Architecture Backend",
              detail: "Développement d'APIs REST Express.js adossées à PostgreSQL.",
            },
          ],
          challenges: [
            {
              title: "Verrouillage Temporaire des Sièges",
              detail: "Blocage temporaire des places lors du paiement pour éviter les doublons.",
            },
            {
              title: "Visualisation des Trajets",
              detail: "Rendu fluide des tracés de lignes de bus sur cartes mobiles.",
            },
          ],
          impact: [
            "Remplacement des billets papier par des réservations numériques",
            "Transparence accrue grâce aux horaires en temps réel",
            "Gestion centralisée des trajets et horaires pour l'administration",
          ],
        },
        contentflow: {
          title: "ContentFlow",
          category: "Plateforme SaaS IA",
          subtitle: "Plateforme de Publication de Contenu Propulsée par l'IA",
          card: "Plateforme SaaS permettant aux utilisateurs de générer, organiser, éditer et publier du contenu efficacement via un tableau de bord moderne.",
          summary:
            "ContentFlow est une plateforme SaaS de publication assistée par IA permettant aux créateurs et équipes de générer, organiser, éditer et publier des articles via les modèles OpenAI et Next.js.",
          features: [
            "Génération d'Articles & Textes par IA",
            "Éditeur de Texte Enrichi",
            "Organisation & Tags de Contenu",
            "Pipeline de Publication",
            "Authentification Utilisateur",
            "Tableau de Bord Analytique",
          ],
          highlights: [
            {
              area: "Moteur de Génération IA",
              detail: "Intégration d'OpenAI API pour générer des articles de blog et contenus marketing.",
            },
            {
              area: "Éditeur & Dashboard",
              detail: "Création d'un tableau de bord moderne avec édition de texte, sauvegarde de brouillons et catégorisation.",
            },
            {
              area: "Données & Authentification",
              detail: "Configuration de Prisma avec SQLite pour des requêtes rapides et des sessions sécurisées.",
            },
          ],
          challenges: [
            {
              title: "Génération IA en Streaming",
              detail: "Gestion des flux de réponses pour un aperçu en temps réel pendant la génération.",
            },
            {
              title: "Taxonomie du Contenu",
              detail: "Organisation intuitive par catégories et tags pour de grands volumes de documents.",
            },
          ],
          impact: [
            "Accélère la création de contenu jusqu'à 70%",
            "Unifie la rédaction, l'édition et la publication",
            "Architecture évolutive prête pour un déploiement SaaS entreprise",
          ],
        },
        aquaflex: {
          title: "AQWAFLEX",
          category: "Site Corporate",
          subtitle: "Plateforme Entreprise & Vitrine E-Commerce",
          card: "Site web d'entreprise présentant des produits haut de gamme avec un design réactif, une UI moderne et une optimisation SEO.",
          summary:
            "AQWAFLEX est un site d'entreprise présentant des produits de literie et mousse haut de gamme. Conçu avec Next.js, TypeScript et Framer Motion, il propose des galeries réactives et une excellente optimisation pour les moteurs de recherche.",
          features: [
            "Vitrine Produit Haut de Gamme",
            "Catalogue Produit Interactif",
            "Animations Fluides Framer Motion",
            "Formulaire de Demande Directe",
            "Optimisation SEO Complète",
            "Mise en Page Réactive",
          ],
          highlights: [
            {
              area: "Design UI/UX Moderne",
              detail: "Création d'une identité visuelle d'entreprise élégante avec une typographie soignée.",
            },
            {
              area: "Animations Framer Motion",
              detail: "Conception d'animations d'apparition et d'interactions fluides.",
            },
            {
              area: "SEO & Performance",
              detail: "Métadonnées structurées et ressources optimisées pour un chargement très rapide.",
            },
          ],
          challenges: [
            {
              title: "Optimisation des Images HD",
              detail: "Maintien d'une qualité d'image maximale tout en garantissant un défilement à 60fps.",
            },
            {
              title: "Adaptabilité Multi-Écrans",
              detail: "Équilibre des ratios d'affichage sur écrans mobiles sans déformer les produits.",
            },
          ],
          impact: [
            "Renforcement de l'image de marque d'AQWAFLEX en tant que fabricant leader",
            "Augmentation des demandes de devis via les formulaires réactifs",
            "Excellents scores de chargement et de référencement naturel",
          ],
        },
        "solivra-agency": {
          title: "SOLIVRA AGENCY",
          category: "Site WordPress",
          subtitle: "Site d'Agence Digital & Portfolio",
          card: "Site web professionnel pour une agence digitale présentant ses services, son portfolio, ses formulaires de contact et optimisé pour la performance.",
          summary:
            "SOLIVRA AGENCY est un site d'agence moderne conçu sur WordPress avec Elementor, du PHP sur mesure et du CSS personnalisé. Il met en valeur les services digitaux, les projets clients et capture les demandes de prospects.",
          features: [
            "Présentation des Services",
            "Galerie de Portfolio",
            "Formulaires de Contact & Devis",
            "Optimisation de la Performance",
            "UI/UX Épurée",
            "Design Mobile Réactif",
          ],
          highlights: [
            {
              area: "Style Sur Mesure",
              detail: "Développement de templates CSS/PHP personnalisés étendant Elementor.",
            },
            {
              area: "Capture de Prospects",
              detail: "Workflows de contact optimisés pour connecter directement les clients à l'agence.",
            },
            {
              area: "Optimisation des Ressources",
              detail: "Réglage du cache et des images réactives pour des temps de chargement minimes.",
            },
          ],
          challenges: [
            {
              title: "Grilles Dynamiques Mobiles",
              detail: "Affichage fluide du portfolio sur tous les types de smartphones.",
            },
            {
              title: "Performance WordPress",
              detail: "Réduction au strict minimum des extensions pour préserver la vitesse.",
            },
          ],
          impact: [
            "Présence numérique forte et crédible pour l'agence",
            "Augmentation des demandes de consultation en ligne",
            "Gestion de contenu intuitive et flexible pour le client",
          ],
        },
        "vacations-manager": {
          title: "Vacations Manager",
          category: "Gestion d'Entreprise",
          subtitle: "Système de Gestion des Congés & Absences",
          card: "Application de gestion des congés pour entreprises avec demandes employés, validations managers, calendriers et tableau de bord d'administration.",
          summary:
            "Vacations Manager est une application d'entreprise simplifiant la gestion des congés. Les employés soumettent leurs demandes et les managers valident et suivent la disponibilité des équipes via un tableau de bord central.",
          features: [
            "Demandes de Congés Employés",
            "Workflows de Validation Manager",
            "Calendrier de Disponibilité d'Équipe",
            "Profils Employés",
            "Tableau de Bord d'Administration",
            "Suivi des Statuts de Demande",
          ],
          highlights: [
            {
              area: "Workflows de Validation",
              detail: "Soumission automatique des demandes et suivi des validations à plusieurs niveaux.",
            },
            {
              area: "Calendrier Interactif",
              detail: "Calendriers de disponibilité par département pour éviter les conflits de planning.",
            },
            {
              area: "Schéma Relationnel",
              detail: "Base PostgreSQL normalisée pour les comptes, solde de congés et historiques.",
            },
          ],
          challenges: [
            {
              title: "Détection des Chevauchements",
              detail: "Algorithme de vérification pour empêcher le sous-effectif simultané.",
            },
            {
              title: "Contrôle d'Accès par Rôles",
              detail: "Restriction des droits de vue selon le niveau hiérarchique.",
            },
          ],
          impact: [
            "Numérisation complète de la gestion des congés",
            "Visibilité accrue grâce aux calendriers visuels",
            "Rapports d'absence téléchargeables pour les RH",
          ],
        },
      },
    },
    stats: {
      productionSystems: "Systèmes en Production",
      apisIntegrated: "APIs Intégrées",
      rbacTiers: "Niveaux de Rôles RBAC",
      offlineReady: "Prêt Hors-Ligne",
    },
    experience: {
      title: "Expérience & Parcours",
      subtitle: "Mon parcours professionnel dans le développement logiciel et l'ingénierie web.",
      items: [
        {
          period: "2024 — Présent",
          role: "Développeur Logiciel Full Stack",
          type: "Indépendant / Freelance",
          description:
            "Conception et réalisation d'applications web full-stack, d'APIs REST et de plateformes CMS sur mesure pour des clients et entreprises.",
          responsibilities: [
            "Architecture et développement de solutions full-stack avec Next.js, React, Node.js, Express et PostgreSQL",
            "Intégration d'APIs tierces (OpenWeather, Leaflet, OpenAI, passerelles de paiement et services REST)",
            "Conception de schémas de bases de données relationnelles et intégrations ORM avec Prisma et Supabase",
            "Création de sites WordPress et WooCommerce sur mesure offrant une gestion de contenu souple",
            "Déploiements en production, optimisation des performances et maintenance continue",
          ],
        },
        {
          period: "2023 — 2024",
          role: "Développeur Frontend & Web",
          type: "Projets & Freelance",
          description:
            "Spécialisé dans le développement d'interfaces web réactives, de systèmes de composants et la migration de sites.",
          responsibilities: [
            "Développement d'interfaces utilisateur modernes et réactives avec HTML5, CSS3, Tailwind et React",
            "Collaboration directe avec les clients pour traduire les besoins fonctionnels en spécifications techniques",
            "Optimisation des Core Web Vitals, de la compression des ressources et de la navigation mobile",
          ],
        },
      ],
    },
    contact: {
      title: "Me Contacter",
      subtitle: "Un projet en tête ou envie de collaborer ? Envoyez-moi un message !",
      nameLabel: "Votre Nom",
      namePlaceholder: "Jean Dupont",
      emailLabel: "Votre Email",
      emailPlaceholder: "jean@example.com",
      messageLabel: "Message",
      messagePlaceholder: "Parlez-moi de votre projet...",
      sendButton: "Envoyer le Message",
      sending: "Envoi en cours...",
      successMessage: "Merci ! Votre message a été envoyé avec succès.",
      errorMessage: "Une erreur est survenue. Veuillez réessayer ou me contacter par email.",
      directEmail: "Email Direct",
      phone: "Téléphone / WhatsApp",
      location: "Localisation",
      locationValue: "Maroc (Disponible dans le Monde / Remote)",
    },
    footer: {
      tagline: "Développement d'applications web performantes et évolutives avec un code propre.",
      quickLinks: "Liens Rapides",
      connect: "Réseaux",
      rights: "Tous droits réservés.",
    },
    caseStudy: {
      backToProjects: "Retour aux Projets",
      overview: "Présentation du Projet",
      technologies: "Technologies Utilisées",
      featuresTitle: "Fonctionnalités Principales",
      architectureTitle: "Architecture & Points Forts",
      challengesTitle: "Défis Techniques & Solutions",
      impactTitle: "Impact Opérationnel & Métier",
      livePreview: "Aperçu en Direct",
      viewSource: "Voir le Code Source",
    },
  },
  ar: {
    nav: {
      about: "عنّي",
      skills: "المهارات",
      projects: "المشاريع",
      experience: "الخبرة",
      contact: "تواصل معي",
      downloadCv: "تحميل السيرة الذاتية",
    },
    hero: {
      badge: "متاح لمشاريع وفرص عمل جديدة",
      greeting: "مرحباً، أنا",
      name: "عبيد أيت ماطو",
      title: "مطور برمجيات متكامل (Full-Stack)",
      tagline: "مطور برمجيات شغوف ببناء تطبيقات آمنة، قابلة للتطوير وعالية الأداء.",
      summary:
        "أقوم بتصميم وتطوير تطبيقات ويب حديثة، وأنظمة خلفية عالية الكفاءة، وواجهات مستخدم سلسة. متخصص في React و Next.js و Node.js و Nest.js واجهات برمجة التطبيقات REST والقواعد البيانات وأفضل ممارسات الهندسة البرمجية.",
      contactMe: "تواصل معي",
      viewProjects: "استكشف المشاريع",
      status: "متاح للعمل عن بُعد وفي الموقع",
      phrases: [
        "مطور برمجيات متكامل (Full-Stack)",
        "متخصص في React & Next.js",
        "مهندس أنظمة خلفية و APIs",
        "مطور TypeScript & Node.js",
        "متخصص في معمارية قواعد البيانات",
      ],
    },
    about: {
      title: "عنّي",
      subtitle: "مطور شغوف بالجودة والأداء والرمز البرمجي النظيف.",
      p1: "أنا مطور برمجيات متكامل أملك خلفية قوية في تقنيات الويب الحديثة ومبادئ تصميم البرمجيات. شغفي يكمن في ابتكار حلول رقمية ذات تأثير عالي تحل تحديات الأعمال الحقيقية.",
      p2: "سواء عند تصميم تطبيقات Next.js معقدة، أو بناء خدمات microservices خلفية متينة باستعمال Node.js/NestJS، أو نمذجة قواعد بيانات SQL، فإنني أضع جودة البرمجة وتجربة المستخدم الممتازة في صدارة أولوياتي.",
      highlightsTitle: "مبادئ الهندسة البرمجية",
      highlights: {
        h1Title: "معمارية نظيفة",
        h1Desc: "كتابة كود برمجي مرن وقابل للتوسع والصيانة على المدى الطويل.",
        h2Title: "الأداء والأمان",
        h2Desc: "تحسين سرعة الاستجابة، مؤشرات الأداء وحماية البيانات.",
        h3Title: "تصميم متمركز حول المستخدم",
        h3Desc: "واجهات سلسة وتفاعلية تتكيف مع كافة الشاشات.",
      },
    },
    skills: {
      title: "المهارات والتقنيات",
      subtitle: "مجموعة شاملة من التقنيات المصقولة في مجال تطوير الويب المتكامل.",
      categories: {
        frontend: "تطوير الواجهات الأمامية (Frontend)",
        backend: "تطوير الأنظمة الخلفية و APIs",
        database: "قواعد البيانات والتخزين",
        cms: "أنظمة إدارة المحتوى (CMS)",
        tools: "الأدوات وبيئة العمل (DevOps)",
      },
    },
    projects: {
      title: "أبرز المشاريع",
      subtitle: "مجموعة من الأنظمة والتطبيقات البرمجية المصممة بعناية لأعلى مستويات الأداء.",
      viewCaseStudy: "عرض دراسة الحالة",
      githubRepo: "رمز GitHub",
      liveDemo: "معاينة حية",
      allCategories: "جميع المشاريع",
      techStack: "التقنيات المستعملة",
      keyFeatures: "المميزات الرئيسية",
      slugs: {
        "solivra-os": {
          title: "Solivra OS",
          category: "نظام ERP للمؤسسات",
          subtitle: "منصة ERP · CRM · إدارة العمليات بالذكاء الاصطناعي",
          card: "منصة ERP متكاملة للمؤسسات لمركزة إدارة العملاء، المبيعات، المالية، المشاريع، الموارد البشرية والذكاء الاصطناعي.",
          summary:
            "Solivra OS هي منصة ERP سحابية متكاملة لمركزة العمليات الإدارية والمالية والتشغيلية للمؤسسات مع محرك ذكاء اصطناعي ونظام أمان متقدم متعدد المستأجرين.",
          features: [
            "لوحة قيادة تنفيذية وتحليلات شاملة",
            "إدارة علاقات العملاء (CRM) والفرص",
            "إدارة المبيعات والعروض التجارية",
            "المحرك المالي (الفواتير، الضريبة، المصاريف)",
            "إدارة المشاريع والمهام",
            "نظام الموارد البشرية والحضور والرواتب",
            "قاعدة المعرفة وسجلات المراجعة",
            "بوابة الذكاء الاصطناعي والوكلاء المستقلين",
            "نظام الصلاحيات (RBAC) متعدد المستأجرين",
            "بوابة العملاء الخاصة (B2B)",
          ],
          highlights: [
            {
              area: "هيكلية Monorepo",
              detail: "بناء مستقل عبر Turborepo يربط واجهة Next.js وخلفية NestJS REST API مع قاعدة بيانات PostgreSQL و Prisma.",
            },
            {
              area: "الأمان والصلاحيات RBAC",
              detail: "عزل كامل لبيانات المستأجرين، صلاحيات دقيقة على مستوى الخادم، مصادقة HttpOnly، وتتبع سجلات المراجعة.",
            },
            {
              area: "وكلاء الذكاء الاصطناعي",
              detail: "دمج مباشر لـ Google Gemini AI لتشغيل وكلاء ذكاء اصطناعي يتعاملون مع البيانات التشغيلية للمؤسسة.",
            },
            {
              area: "المحرك المالي",
              detail: "دورة تداول مالية كاملة تشمل العروض، الفواتير، حساب ضريبة القيمة المضافة، الدفع الجزئي والتسوية الشاملة.",
            },
          ],
          challenges: [
            {
              title: "هيكلية المؤسسات متعددة المستأجرين",
              detail: "تصميم نظام ERP آمن متعدد المستأجرين يجمع بين إدارة العملاء، المالية، الموارد البشرية، الصلاحيات والذكاء الاصطناعي مع الحفاظ على الأداء العالي وعزل البيانات.",
            },
          ],
          impact: [
            "نجاح 1,481 / 1,481 اختبار ضمان جودة للمؤسسات مع 0 ثغرات أمنية و 0 تسريبات للبيانات.",
            "تجميع 30/30 مسار Next.js بنجاح وبدون أي أخطاء TypeScript مع أداء Lighthouse >= 92.",
            "مزامنة 1,362 مفتاح ترجمة عبر الإنجليزية، الفرنسية، والعربية مع دعم كامل للاتجاه من اليمين إلى اليسار (RTL).",
            "تحقيق تقييم قبول المنتج بدرجة 9.91 / 10.",
          ],
        },
        atlasforecast: {
          title: "AtlasForecast",
          category: "منصة الأحوال الجوية",
          subtitle: "التنبؤ الجوي الحديث وتحليلات المناخ",
          card: "منصة حديثة للتنبؤ بالطقس توفر بيانات فورية، وتوقعات لعدة أيام، وخرائط تفاعلية وتحليلات مناخية بواجهة استجابة أنيقة.",
          summary:
            "AtlasForecast هي منصة طقس حديثة تزود المستخدمين ببيانات جوية لحظية، وتوقعات للأيام القادمة، وخرائط Leaflet تفاعلية، وتحليلات مناخية عبر واجهة واضحة وسريعة الاستجابة.",
          features: [
            "بيانات الطقس الفورية",
            "خرائط GIS تفاعلية",
            "توقعات الطقس لمدة 7 أيام",
            "صور الرادار والأقمار الصناعية",
            "تحليلات المناخ والرؤية الجوية",
            "بحث سريع عن المدن العالمية",
            "واجهة حديثة ومتجاوبة",
          ],
          highlights: [
            {
              area: "خرائط GIS تفاعلية",
              detail: "دمج خرائط Leaflet مع طبقات رادار الطقس البث المباشر للأقمار الصناعية.",
            },
            {
              area: "تصوير البيانات",
              detail: "بناء رسوم بيانية تفاعلية عبر Chart.js لمتابعة التغيرات الجوية الساعية والأسبوعية.",
            },
            {
              area: "دمج متعدد لـ APIs",
              detail: "ربط واجهات OpenWeather و Meteoblue مع نظام تخزين مؤقت تلقائي.",
            },
          ],
          challenges: [
            {
              title: "تحسين عرض الخرائط",
              detail: "تسريع تحميل مربعات خرائط Leaflet على مختلف الأجهزة.",
            },
            {
              title: "توحيد بيانات المصادر",
              detail: "دمج هيكلة البيانات من مزودين مختلفين في API موحد.",
            },
          ],
          impact: [
            "توفير معلومات جوية دقيقة ولحظية للمستخدمين",
            "تبسيط تحليل أنماط المناخ عبر الخرائط التفاعلية",
            "بحث عالمي سريع مع تحديثات فورية للتوقعات",
          ],
        },
        trip2go: {
          title: "Trip2Go",
          category: "السياحة والسفر",
          subtitle: "منصة حجز الرحلات والاستكشافات السياحية",
          card: "منصة حجز سفر فاخرة للمغرب تتضمن الرحلات والجولات الاستكشافية وإدارة الحجوزات بواجهة أنيقة ومتجاوبة.",
          summary:
            "Trip2Go هي منصة حجز رحلات سياحية متكاملة في المغرب تقدم جولات مخصصة، وخرائط تفاعلية للمواقع السياحية، ونظام حجز وإدارة مريح.",
          features: [
            "محرك حجز الرحلات والسياحة",
            "معرض الوجهات السياحية بالمغرب",
            "إدارة الحجوزات والمواعيد",
            "خرائط مواقع تفاعلية",
            "تقييمات وآراء العملاء",
            "واجهة حديثة متجاوبة",
          ],
          highlights: [
            {
              area: "مسار عمل الحجز",
              detail: "تطوير دورة حجز كاملة من الاختيار إلى تأكيد الحجز وإدارة طلبات العملاء.",
            },
            {
              area: "قواعد البيانات العلاقية",
              detail: "بناء مخططات PostgreSQL عبر Prisma ORM لتنظيم الجداول والحجوزات.",
            },
            {
              area: "تصميم متجاوب",
              detail: "تصميم أنيق يسلط الضوء على أجمل المعالم السياحية المغربية.",
            },
          ],
          challenges: [
            {
              title: "تأكيد صحة الحجز",
              detail: "منع التضارب والحجز المزدوج في أوقات الإقبال العالي.",
            },
            {
              title: "فلترة البحث للهواتف",
              detail: "تنسيق خيارات البحث والتصفية للشاشات اللمسية بسلاسة.",
            },
          ],
          impact: [
            "تسهيل اكتشاف الرحلات وحجزها بسرعة",
            "رفع مستوى التفاعل بفضل الصور والمعارض عالية الجودة",
            "بنية برمجية متينة تستوعب الأعداد الكبيرة في مواسم الذروة",
          ],
        },
        "kechbus-ticket": {
          title: "KechBus Ticket",
          category: "النقل والمواصلات",
          subtitle: "نظام حجز تذاكر الحافلات الذكي",
          card: "نظام إلكتروني لحجز تذاكر الحافلات يوفر مواقيت الرحلات المباشرة، وإدارة الحجز، وتتبع خطوط السير.",
          summary:
            "KechBus Ticket هو تطبيق حجز تذاكر حافلات عبر الإنترنت يتيح معرفة مواعيد الحافلات اللحظية، واختيار المقاعد تفاعلياً، وتتبع مسارات الحافلات عبر خرائط Leaflet.",
          features: [
            "حجز تذاكر الحافلات عبر الإنترنت",
            "خرائط ومواعيد الرحلات المباشرة",
            "تحديد المقاعد تفاعلياً",
            "سجل الحجوزات والتذاكر",
            "لوحة تحكم الإدارة",
            "خلفية برمجية RESTful API",
          ],
          highlights: [
            {
              area: "رسم المسارات",
              detail: "دمج خرائط تفاعلية تظهر محطات الحافلات وخطوط السير.",
            },
            {
              area: "اختيار المقعد",
              detail: "تطوير مخطط مقاعد تفاعلي يظهر المقاعد المتاحة فوراً.",
            },
            {
              area: "معمارية الخلفية",
              detail: "بناء APIs باستعمال Express.js و PostgreSQL لجدولة الرحلات.",
            },
          ],
          challenges: [
            {
              title: "حجز المقاعد المؤقت",
              detail: "توفير مهلة زمنية للمقعد أثناء عملية الشراء لتجنب التضارب.",
            },
            {
              title: "عرض الخطوط الجغرافية",
              detail: "رسم مسارات الحافلات بكفاءة على الهواتف الذكية.",
            },
          ],
          impact: [
            "استبدال التذاكر الورقية بنظام رقمي متكامل",
            "زيادة الشفافية عبر توفير مواقيت دقيقة ولحظية",
            "إدارة مركزية مريحة لخطوط الحافلات والمواعيد",
          ],
        },
        contentflow: {
          title: "ContentFlow",
          category: "منصة SaaS للذكاء الاصطناعي",
          subtitle: "منصة إنتاج ونشر المحتوى بالذكاء الاصطناعي",
          card: "منصة ذكية تمكن المستخدمين من توليد وتنظيم وتحرير ونشر المقالات والكتب بفعالية عبر لوحة تحكم حديثة.",
          summary:
            "ContentFlow هي منصة SaaS مدعومة بالذكاء الاصطناعي تتيح لصناع المحتوى والفرق توليد وتنسيق ونشر المقالات بسهولة باستخدام نماذج OpenAI و Next.js.",
          features: [
            "توليد المقالات والنصوص بالذكاء الاصطناعي",
            "محرر نصوص غني ومتقدم",
            "تصنيف وتنظيم المحتوى",
            "مسارات النشر التلقائي",
            "نظام تسجيل الدخول والأمان",
            "تحليلات لوحة التحكم",
          ],
          highlights: [
            {
              area: "محرك الذكاء الاصطناعي",
              detail: "ربط OpenAI API لصياغة المقالات والنصوص التسويقية بنقرة زر.",
            },
            {
              area: "المحرر ولوحة التحكم",
              detail: "بناء لوحة تحكم حديثة مع حفظ المسودات وتصنيف المجلدات.",
            },
            {
              area: "البيانات والأمان",
              detail: "ربط Prisma ORM مع SQLite لضمان سرعة الاستعلامات وأمان الجلسات.",
            },
          ],
          challenges: [
            {
              title: "التوليد البثي المباشر",
              detail: "تطبيق معالجة استجابة البث الحقيقي لإظهار النص أثناء كتابته.",
            },
            {
              title: "تصنيف المجلدات",
              detail: "تنظيم الوسوم والتصنيفات لآلاف المستندات بسهولة.",
            },
          ],
          impact: [
            "تسريع صناعة المحتوى بنسبة تصل إلى 70%",
            "لوحة تحكم موحدة للصياغة والمراجعة والنشر",
            "بنية قابلة للتوسع ومناسبة للشركات والمؤسسات",
          ],
        },
        aquaflex: {
          title: "AQWAFLEX",
          category: "موقع شركة تجاري",
          subtitle: "منصة تعريفية وتجارية فاخرة",
          card: "موقع إلكتروني رسمي يستعرض المنتجات عالية الجودة بتصميم متجاوب وواجهة حديثة ومحسّن لمحركات البحث.",
          summary:
            "AQWAFLEX موقع شركة متخصص في عرض المنتجات الفاخرة مثل الأسرة والأسفنج. تم بناؤه باستخدام Next.js و TypeScript و Framer Motion لتقديم تجربة تصفح متميزة وسريعة.",
          features: [
            "معرض المنتجات الفاخرة",
            "كتالوج تفاعلي للمنتجات",
            "حركات وتأثيرات Framer Motion",
            "نموذج التواصل والطلبات",
            "تحسين كامل لمحركات البحث (SEO)",
            "تنسيق متجاوب بالكامل",
          ],
          highlights: [
            {
              area: "تصميم UI/UX حديث",
              detail: "ابتكار هوية تليق بالشركات الكبرى مع خطوط وألوان فاخرة.",
            },
            {
              area: "حركات Framer Motion",
              detail: "إضافة حركات دخول وانتقالات تفاعلية عند التصفح.",
            },
            {
              area: "الأداء و SEO",
              detail: "تهيئة البيانات الوصفية والوسوم لضمان الترتيب في محركات البحث.",
            },
          ],
          challenges: [
            {
              title: "ضغط الصور عالية الدقة",
              detail: "الحفاظ على جودة الصور العالية مع ضمان سلاسة التصفح.",
            },
            {
              title: "التكيف مع جميع الشاشات",
              detail: "ضبط أبعاد الصور على الهواتف دون اقتطاع أجزاء مهمة.",
            },
          ],
          impact: [
            "تعزيز مكانة العلامة التجارية لشركة AQWAFLEX كشركة رائدة",
            "زيادة طلبات الاستفسار عبر نماذج التواصل المتجاوبة",
            "تحقيق نتائج ممتازة في سرعة التحميل ومحركات البحث",
          ],
        },
        "solivra-agency": {
          title: "SOLIVRA AGENCY",
          category: "موقع ووردبريس",
          subtitle: "موقع وكالة رقمية ومعرض أعمال",
          card: "موقع تجاري لوكالة تسويق ورقمية يعرض الخدمات، ومعرض الأعمال، ونماذج طلب الاستشارات، ومحسّن للأداء.",
          summary:
            "SOLIVRA AGENCY موقع وكالة حديث بني باستعمال WordPress و Elementor و PHP و CSS مخصص. تم تطويره لعرض الخدمات الرقمية وأعمال العملاء وتسهيل التواصل.",
          features: [
            "عرض الخدمات الرقمية",
            "معرض الأعمال والمشاريع",
            "نماذج طلب الاستشارات",
            "تحسين سرعة التحميل",
            "تصميم أنيق ومريح",
            "متوافق مع الهواتف الذكية",
          ],
          highlights: [
            {
              area: "تصميم مخصص",
              detail: "كتابة قوالب CSS و PHP مخصصة لتوسيع قدرات Elementor.",
            },
            {
              area: "جذب العملاء",
              detail: "تهيئة مسارات تواصل مريحة لربط الزوار بالوكالة مباشرة.",
            },
            {
              area: "تحسين الملفات",
              detail: "ضبط التخزين المؤقت والتحميل السريع للصور.",
            },
          ],
          challenges: [
            {
              title: "شبكات المعارض الديناميكية",
              detail: "ضمان تصفح معرض الأعمال بسلاسة على كافة الهواتف.",
            },
            {
              title: "سرعة WordPress",
              detail: "تقليل الإضافات المستعملة للحفاظ على سرعة الاستجابة.",
            },
          ],
          impact: [
            "ترسيخ حضور رقمي موثوق وقوي للوكالة",
            "زيادة عدد الاستفسارات والطلبات عبر الموقع",
            "توفير بيئة إدارة محتوى سهلة وسلسة للعميل",
          ],
        },
        "vacations-manager": {
          title: "Vacations Manager",
          category: "إدارة الأعمال",
          subtitle: "نظام إدارة العطلات والإجازات للشركات",
          card: "تطبيق مخصص لإدارة طلبات العطل والإجازات في الشركات يتضمن طلبات الموظفين، الموافقات، التقويم، ولوحة الإدارة.",
          summary:
            "Vacations Manager تطبيق داخلي للشركات لتنظيم طلبات الإجازات. يتيح للموظفين تقديم الطلبات وللمدراء مراجعتها ومتابعة حضور الفريق عبر لوحات قيادة مركزية.",
          features: [
            "تقديم طلبات الإجازات للموظفين",
            "مسار موافقات المدراء",
            "تقويم تفاعلي لتوفر الفريق",
            "ملفات الموظفين الشخصية",
            "لوحة تحكم الإدارة",
            "متابعة حالة الطلبات",
          ],
          highlights: [
            {
              area: "مسارات الموافقة",
              detail: "بناء نظام أوتوماتيكي لتقديم الطلبات ومتابعة التراخيص.",
            },
            {
              area: "التقويم التفاعلي",
              detail: "تصميم تقويم لجدولة الإجازات وتجنب التعارض في الأقسام.",
            },
            {
              area: "قواعد البيانات",
              detail: "مخطط PostgreSQL منظم لحسابات الموظفين وأرصدة العطل.",
            },
          ],
          challenges: [
            {
              title: "كشف تضارب التواريخ",
              detail: "تطوير خوارزمية لتنبيه المدراء عند تزامن إجازات نفس القسم.",
            },
            {
              title: "الصلاحيات والأدوار",
              detail: "تحديد صلاحيات الرؤية بحسب رتبة الموظف والمدير.",
            },
          ],
          impact: [
            "تحويل إدارة العطل الورقية إلى نظام إلكتروني منظم",
            "تجنب النقص في كوادر الأقسام عبر التقويم المرئي",
            "إصدار تقارير وسجلات إجازات جاهزة لإدارة الموارد البشرية",
          ],
        },
      },
    },
    stats: {
      productionSystems: "أنظمة في الإنتاج",
      apisIntegrated: "APIs مدمجة",
      rbacTiers: "مستويات الصلاحيات",
      offlineReady: "جاهز للعمل بدون إنترنت",
    },
    experience: {
      title: "الخبرة والمسار المهني",
      subtitle: "خلفيتي المهنية في مجال تطوير البرمجيات وهندسة الويب.",
      items: [
        {
          period: "2024 — الحاضر",
          role: "مطور برمجيات متكامل (Full Stack)",
          type: "مستقل / Freelance",
          description:
            "تصميم وتطوير تطبيقات ويب متكاملة، وواجهات APIs، ومنصات إدارة المحتوى لمختلف العملاء والشركات.",
          responsibilities: [
            "بناء وهندسة حلول متكاملة باستعمال Next.js و React و Node.js و Express و PostgreSQL",
            "دمج APIs خارجية (OpenWeather, Leaflet, OpenAI, بوابات الدفع وخدمات REST)",
            "تصميم قواعد بيانات علاقية والربط عبر Prisma و Supabase",
            "تطوير مواقع ووردبريس ومتاجر إلكترونية مخصصة تتيح مرونة كاملة في المحتوى",
            "إدارة النشر على الخوادم وتحسين الأداء والصيانة المستمرة للعملاء",
          ],
        },
        {
          period: "2023 — 2024",
          role: "مطور واجهات أمامية وويب",
          type: "مشاريع ومستقل",
          description:
            "التركيز على بناء واجهات مستخدم سريعة الاستجابة، وأنظمة المكونات، وتطوير مواقع العملاء.",
          responsibilities: [
            "بناء واجهات برمجية عالية الجودة ومتجاوبة باستخدام HTML5 و CSS3 و Tailwind و React",
            "العمل المباشر مع العملاء لتحويل المتطلبات إلى ميزات تقنية تفاعلية",
            "تحسين سرعة الموقع ومؤشرات الأداء وتصميم الهواتف الذكية",
          ],
        },
      ],
    },
    contact: {
      title: "تواصل معي",
      subtitle: "لديك مشروع في الذهن أو ترغب في التعاون؟ أرسل لي رسالة وسأجيبك في أقرب وقت!",
      nameLabel: "الاسم الكامل",
      namePlaceholder: "محمد علي",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "name@example.com",
      messageLabel: "الرسالة",
      messagePlaceholder: "أخبرني المزيد عن مشروعك أو استفسارك...",
      sendButton: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      successMessage: "شكراً لك! تم إرسال رسالتك بنجاح.",
      errorMessage: "حدث خطأ ما. يرجى المحاولة مرة أخرى أو مراسلتي مباشرة عبر البريد الإلكتروني.",
      directEmail: "البريد الإلكتروني المباشر",
      phone: "الهاتف / واتساب",
      location: "الموقع",
      locationValue: "المغرب (متاح عالمياً / عن بُعد)",
    },
    footer: {
      tagline: "بناء تطبيقات ويب عالية الأداء وقابلة للتوسع بكود نظيف ومعمارية حديثة.",
      quickLinks: "روابط سريعة",
      connect: "التواصل الاجتماعي",
      rights: "جميع الحقوق محفوظة.",
    },
    caseStudy: {
      backToProjects: "العودة للمشاريع",
      overview: "نظرة عامة على المشروع",
      technologies: "التقنيات المستعملة",
      featuresTitle: "المميزات الرئيسية للنظام",
      architectureTitle: "أبرز نقاط المعمارية والهندسة",
      challengesTitle: "التحديات التقنية والحلول",
      impactTitle: "التأثير التشغيلي والتجاري",
      livePreview: "معاينة حية",
      viewSource: "عرض المصدر الكودي",
    },
  },
};
