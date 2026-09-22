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
  // TODO: replace with your real email
  email: "hello@example.com",
  // Drop your PDF resume in /public/cv/ and update the filename below
  resumeUrl: "/cv/Charisse-Villarama-CV.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/your-username" },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-username" },
    { label: "Email", href: "mailto:hello@example.com" },
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

// Sample/placeholder projects — replace with your real work.
export const projects: Project[] = [
  {
    id: "project-one",
    title: "Project One: Replace With Your Project Title",
    date: "Month Year",
    description:
      "A short, clear summary of the problem this project solves and the role you played in building it. Mention the outcome or impact if you can.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "#",
    featured: true,
  },
  {
    id: "project-two",
    title: "Project Two: Replace With Your Project Title",
    date: "Month Year",
    description:
      "A short, clear summary of the problem this project solves and the role you played in building it. Mention the outcome or impact if you can.",
    tags: ["React", "Firebase", "REST API"],
    link: "#",
    featured: true,
  },
  {
    id: "project-three",
    title: "Project Three: Replace With Your Project Title",
    date: "Month Year",
    description:
      "A short, clear summary of the problem this project solves and the role you played in building it. Mention the outcome or impact if you can.",
    tags: ["Node.js", "Express", "PostgreSQL"],
    link: "#",
    featured: false,
  },
];

export type Achievement = {
  id: string;
  title: string;
  date: string;
  description?: string;
};

// Sample/placeholder achievements — replace with your real ones.
export const achievements: Achievement[] = [
  {
    id: "achievement-one",
    title: "Achievement or Award Title",
    date: "Month Year",
    description: "One sentence of context — organization, scope, or why it mattered.",
  },
  {
    id: "achievement-two",
    title: "Achievement or Award Title",
    date: "Month Year",
    description: "One sentence of context — organization, scope, or why it mattered.",
  },
  {
    id: "achievement-three",
    title: "Achievement or Award Title",
    date: "Month Year",
    description: "One sentence of context — organization, scope, or why it mattered.",
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
