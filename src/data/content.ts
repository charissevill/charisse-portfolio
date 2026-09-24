// ─────────────────────────────────────────────────────────────────────────
// All of the portfolio's content lives in this one file.
// Edit the values below with your real information — nothing else in the
// codebase needs to change for text/content updates.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Charisse Villarama",
  initials: "CV",
  // TODO: set your preferred title/role — leave empty to hide it
  role: "",
  tagline:
    "I build responsive, scalable, and user-focused web and mobile apps.",
  email: "villaramacharisse01@gmail.com",
  // Drop your PDF resume in /public/cv/, set the filename below, and
  // the "Download CV" button will reappear automatically.
  resumeUrl: "",
  // Add a LinkedIn entry here once you have a real profile URL —
  // it'll show up in the footer automatically.
  socials: [
    { label: "GitHub", href: "https://github.com/charissevill" },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=villaramacharisse01@gmail.com",
    },
  ],
};

export const about = {
  paragraphs: [
    "I specialize in building modern web and mobile applications that are clean, efficient, and user-centered. I enjoy transforming ideas into functional solutions with thoughtful design, smooth performance, and strong usability.",
    "With hands-on experience across the full development lifecycle — from planning and design to implementation, testing, and deployment — I focus on writing maintainable, well-structured code and creating intuitive interfaces that deliver seamless user experiences.",
    "My goal is to continuously grow as a developer while creating meaningful digital products that solve real-world problems and make a practical, lasting impact.",
  ],
};

// Grouped by category for a cleaner presentation than one long flat list.
// Add, remove, or re-group items freely. Item names here are matched to
// brand icons in Technologies.tsx — keep spelling in sync with techIcons.
export const technologyGroups = [
  {
    category: "Languages",
    items: ["Dart", "JavaScript", "Python", "PHP", "HTML", "CSS"],
  },
  {
    category: "Mobile & Frontend",
    items: ["Flutter", "React", "Material Design", "Provider"],
  },
  {
    category: "Backend & Cloud",
    items: ["Firebase", "Node.js", "Google Maps Platform"],
  },
  {
    category: "AI & Integrations",
    items: ["OpenAI", "Groq", "Meshy 3D", "Azure AI", "PayMongo", "Lalamove"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "GitHub Actions"],
  },
];

export type Project = {
  id: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  link?: string;
  // Optional Android app download page, shown as a "Download App" link.
  downloadUrl?: string;
  featured?: boolean;
  // Optional app icon/logo. Put files in /public/projects and use
  // the project's id as the filename, e.g. "/projects/mix-and-blooms.png"
  image?: string;
  // Optional UI screenshots shown via a "View Screenshots" button.
  // Put files in /public/projects/screenshots, e.g.
  // "/projects/screenshots/mix-and-blooms-1.jpg"
  screenshots?: string[];
};

export const projects: Project[] = [
  {
    id: "mix-and-blooms",
    title:
      "Mix & Blooms — Smart AI System for Personalized and Eco-friendly Flower Arrangements",
    date: "Aug 2026 – Sep 2026",
    description:
      "Full-stack Flutter/Firebase marketplace connecting customers with local florists in the Philippines, featuring AI-generated bouquet designs (DALL-E, 3D previews via Meshy), automated florist business verification (geospatial trust scoring + Azure Document Intelligence/Vision), and integrated Lalamove delivery logistics; built end-to-end (client, florist, admin, and rider-facing apps plus all Cloud Functions) as the sole developer, now live and in active use.",
    tags: ["Flutter", "Dart", "Firebase", "OpenAI DALL-E", "Meshy 3D", "Lalamove API"],
    link: "https://mixblooms-ea632.web.app",
    downloadUrl: "https://charissevill.github.io/mix-and-blooms-app/",
    image: "/projects/mix-and-blooms.png",
    screenshots: ["/projects/screenshots/mix-and-blooms-1.png"],
    featured: true,
  },
  {
    id: "toolflow",
    title: "ToolFlow — Hardware E-Commerce Website",
    date: "August 2026 – September 2026",
    description:
      "A full-stack e-commerce web app for a hardware/tools retailer, built solo as a BSIT capstone project to replace manual, in-person-only sales with online browsing, checkout, and store management. Designed and built the entire system end-to-end — Flutter Web frontend, Firebase backend (Auth, Firestore, Cloud Functions, Storage), PayMongo payment integration, Lalamove shipping rates, PhilSMS notifications, and an admin panel for inventory, orders, staff, and analytics/reporting (PDF/Excel/CSV export).",
    tags: ["Flutter", "Dart", "Firebase", "Node.js", "PayMongo", "GitHub Actions CI"],
    link: "https://toolflow-hardware-ph.web.app/",
    image: "/projects/toolflow.png",
    screenshots: ["/projects/screenshots/toolflow-1.png"],
    featured: true,
  },
  {
    id: "tripnest-ph",
    title: "TripNest PH – AI-Powered Local Tourism Discovery App",
    date: "July 2026 – September 2026",
    description:
      "A Flutter mobile app that helps travelers discover Philippine destinations and plan trips through AI-generated itineraries grounded in real Places and Firestore data, location-based recommendations, budget tracking, and an AI travel chatbot; I designed and built the full app end-to-end (UI, Firebase backend, AI integration, admin/business management tools), including responsive layouts, security hardening, and automated tests.",
    tags: ["Flutter", "Dart", "Firebase", "Google Places API", "AI/LLM Integration"],
    link: "https://github.com/charissevill/TripNestPH",
    downloadUrl: "https://charissevill.github.io/tripnest-ph-app/",
    image: "/projects/tripnest-ph.png",
    featured: true,
  },
  {
    id: "flipsnap",
    title: "FlipSnap — AI-Powered Study & Spaced Repetition App",
    date: "January 2026 – May 2026",
    description:
      "A Flutter mobile app I designed and built solo to help students combat forgetfulness and low study motivation, combining flashcards, spaced repetition, and quizzes with an AI tutor (Llama 3 via Groq) for on-demand explanations and auto-generated decks. I handled the full stack — Firebase Auth/Firestore/Storage backend, offline-first sync, push notifications, and the Material 3 UI — resulting in a fully offline-capable app with cloud sync, streak-based gamification, and AI content generation from user notes/files.",
    tags: ["Flutter", "Dart", "Firebase", "Groq API", "Llama 3"],
    link: "https://github.com/charissevill/FlipSnap",
    downloadUrl: "https://charissevill.github.io/flipsnap-download/",
    image: "/projects/flipsnap.png",
    featured: false,
  },
];

export type Achievement = {
  id: string;
  title: string;
  date: string;
  year: string;
  description?: string;
  images?: string[]; // put files in /public/achievements, e.g. "/achievements/cert1.jpg"
};

export const achievements: Achievement[] = [
  {
    id: "deans-list-third-term-2025-2026",
    title: "Dean's List Award — Second Honors",
    date: "Third Term",
    year: "AY 2025–2026",
  },
  {
    id: "deans-list-second-term-2025-2026",
    title: "Dean's List Award — Second Honors",
    date: "Second Term",
    year: "AY 2025–2026",
  },
  {
    id: "deans-list-third-term-2023-2024",
    title: "Dean's List Award — First Honors",
    date: "Third Term",
    year: "AY 2023–2024",
    images: ["/achievements/cert2.jpg"],
  },
  {
    id: "deans-list-second-term-2023-2024",
    title: "Dean's List Award — Second Honors",
    date: "Second Term",
    year: "AY 2023–2024",
    images: ["/achievements/cert1.jpg"],
  },
];

export type GalleryItem = {
  id: string;
  caption: string;
  src?: string; // put files in /public/gallery and set the path, e.g. "/gallery/1.jpg"
};

// Placeholder tiles — add images to /public/gallery and fill in `src`.
export const gallery: GalleryItem[] = [
  { id: "gallery-1", caption: "Gallery photo 1", src: "/gallery/1.jpg" },
  ...Array.from({ length: 7 }).map((_, i) => ({
    id: `gallery-${i + 2}`,
    caption: `Gallery photo ${i + 2}`,
  })),
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];
