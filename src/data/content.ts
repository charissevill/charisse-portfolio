// ─────────────────────────────────────────────────────────────────────────
// All of the portfolio's content lives in this one file.
// Edit the values below with your real information — nothing else in the
// codebase needs to change for text/content updates.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Charisse Villarama",
  initials: "CV",
  // TODO: set your preferred title/role
  role: "Full-Stack Developer",
  tagline:
    "I build responsive, scalable, and user-focused web and mobile apps.",
  email: "villaramacharisse01@gmail.com",
  // Drop your PDF resume in /public/cv/ and update the filename below
  resumeUrl: "/cv/Charisse-Villarama-CV.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/charissevill" },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-username" },
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
// Add, remove, or re-group items freely.
export const technologyGroups = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST API"],
  },
  {
    category: "Database & Cloud",
    items: ["MySQL", "PostgreSQL", "Firebase"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Figma", "Postman", "Vite"],
  },
];

export type Project = {
  id: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  link?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "mix-and-blooms",
    title:
      "Mix & Blooms — Smart AI System for Personalized and Eco-friendly Flower Arrangements",
    date: "Aug 2026 – Sep 2026",
    description:
      "Full-stack Flutter/Firebase marketplace connecting customers with local florists in the Philippines, featuring AI-generated bouquet designs (DALL-E, 3D previews via Meshy), automated florist business verification (geospatial trust scoring + Azure Document Intelligence/Vision), and integrated Lalamove delivery logistics; built end-to-end (client, florist, admin, and rider-facing apps plus all Cloud Functions) as the sole developer, now live and in active use.",
    tags: [
      "Flutter",
      "Dart",
      "Firebase (Auth, Firestore, Storage, Cloud Functions, App Check, FCM)",
      "Node.js",
      "Google Maps/Places API",
      "Geolocation",
      "OpenAI DALL-E",
      "Meshy 3D",
      "Azure Document Intelligence/Vision",
      "Lalamove API",
      "PDF Generation",
    ],
    link: "https://mixblooms-ea632.web.app",
    featured: true,
  },
  {
    id: "toolflow",
    title: "ToolFlow — Hardware E-Commerce Website",
    date: "August 2026 – September 2026",
    description:
      "A full-stack e-commerce web app for a hardware/tools retailer, built solo as a BSIT capstone project to replace manual, in-person-only sales with online browsing, checkout, and store management. Designed and built the entire system end-to-end — Flutter Web frontend, Firebase backend (Auth, Firestore, Cloud Functions, Storage), PayMongo payment integration, Lalamove shipping rates, PhilSMS notifications, and an admin panel for inventory, orders, staff, and analytics/reporting (PDF/Excel/CSV export).",
    tags: [
      "Flutter",
      "Dart",
      "Firebase",
      "Cloud Firestore",
      "Firebase Auth",
      "Cloud Functions",
      "Node.js",
      "PayMongo",
      "Google Maps API",
      "fl_chart",
      "Material 3",
      "GitHub Actions CI",
    ],
    link: "https://github.com/charissevill/ToolFlow",
    featured: true,
  },
  {
    id: "tripnest-ph",
    title: "TripNest PH – AI-Powered Local Tourism Discovery App",
    date: "July 2026 – September 2026",
    description:
      "A Flutter mobile app that helps travelers discover Philippine destinations and plan trips through AI-generated itineraries grounded in real Places and Firestore data, location-based recommendations, budget tracking, and an AI travel chatbot; I designed and built the full app end-to-end (UI, Firebase backend, AI integration, admin/business management tools), including responsive layouts, security hardening, and automated tests.",
    tags: [
      "Flutter",
      "Dart",
      "Firebase (Auth, Firestore, Storage, Cloud Functions, Messaging, Analytics, Crashlytics)",
      "Google Maps API",
      "Google Places API",
      "AI/LLM Integration",
      "Provider (state management)",
      "go_router",
    ],
    link: "https://github.com/charissevill/TripNestPH",
    featured: true,
  },
  {
    id: "flipsnap",
    title: "FlipSnap — AI-Powered Study & Spaced Repetition App",
    date: "January 2026 – May 2026",
    description:
      "A Flutter mobile app I designed and built solo to help students combat forgetfulness and low study motivation, combining flashcards, spaced repetition, and quizzes with an AI tutor (Llama 3 via Groq) for on-demand explanations and auto-generated decks. I handled the full stack — Firebase Auth/Firestore/Storage backend, offline-first sync, push notifications, and the Material 3 UI — resulting in a fully offline-capable app with cloud sync, streak-based gamification, and AI content generation from user notes/files.",
    tags: [
      "Flutter",
      "Dart",
      "Firebase (Auth, Firestore, Storage, FCM)",
      "Provider",
      "Groq API",
      "Llama 3",
      "Material 3",
      "Google Sign-In",
    ],
    link: "https://github.com/charissevill/FlipSnap",
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
export const gallery: GalleryItem[] = Array.from({ length: 8 }).map((_, i) => ({
  id: `gallery-${i + 1}`,
  caption: `Gallery photo ${i + 1}`,
}));

export const nav = [
  { label: "About", href: "#about" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];
