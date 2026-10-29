export type Project = {
  slug: string;
  title: string;
  technologies: string[];
  summary?: string;
  overview?: string;
  businessProblem?: string;
  implementation?: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "gcc-healthtech-news",
    title: "GCC HealthTech News",
    technologies: ["Next.js", "TypeScript", "Supabase"],
  },
  {
    slug: "institutional-ownership-tracker",
    title: "Institutional Ownership & Short Interest Tracker",
    technologies: ["Next.js", "TypeScript", "Supabase"],
  },
];
