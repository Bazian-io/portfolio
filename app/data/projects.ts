export type Project = {
  slug: string;
  title: string;
  technologies: string[];
  summary?: string;
  overview?: string;
  businessProblem?: string;
  implementation?: string;
  screenshot?: {
    src: string;
    alt: string;
  };
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "gcc-healthtech-news",
    title: "GCC HealthTech News",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    summary:
      "An automated GCC HealthTech briefing combining multi-source news, regional filters, and weekly topic trends in one reading experience.",
    overview:
      "GCC HealthTech News is a regional news-monitoring application covering digital health, medical AI, telemedicine, and related developments across the six GCC countries. It combines automated article collection with a searchable news stream, weekly theme analysis, original-source links, and a browser-local reading list.",
    businessProblem:
      "Monitoring a specialist sector across several markets involves checking multiple publishers and separating repeated coverage from distinct stories. The project brings GCC HealthTech updates into one place, with country and topic filters, original-source links, and saved stories to support a more focused review.",
    implementation:
      "Next.js, TypeScript, and Tailwind CSS power the interface, with Supabase storing articles and Vercel hosting the application. A collector searches FreeNewsAPI.ai, applies basic GCC HealthTech keyword checks, and handles duplicate URLs and matching headlines. Vercel Cron is configured for daily collection through a protected endpoint. RSS and GDELT collectors save drafts, while a separate, optional Claude tool assesses relevance. Published stories feed the reading interface; saved stories stay in the reader’s browser.",
    screenshot: {
      src: "/projects/gcc-healthtech-news.webp",
      alt: "GCC HealthTech News homepage with its regional briefing and weekly trend analysis.",
    },
    liveUrl: "https://health-tech-news-gcc.vercel.app/",
    githubUrl: "https://github.com/Bazian-io/HealthTechNews-GCC",
  },
  {
    slug: "institutional-ownership-tracker",
    title: "Institutional Ownership & Short Interest Tracker",
    technologies: ["Next.js", "TypeScript", "Supabase"],
  },
];
