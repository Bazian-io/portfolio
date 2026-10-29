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
    technologies: ["Next.js", "TypeScript", "Node.js", "Supabase", "PostgreSQL"],
    summary:
      "Institutional ownership research built from SEC 13F filings, with investor dashboards, stock-level comparisons, and historical holdings.",
    overview:
      "A research application for exploring institutional ownership in U.S.-listed stocks using SEC Form 13F filings. Investor dashboards show quarterly portfolio history and reported positions, while stock pages compare holdings across tracked investors. The current release focuses on reported holdings rather than confirmed trades; short-interest collection is planned.",
    businessProblem:
      "Quarterly filings spread portfolio information across many documents, including amendments and different security identifiers. Comparing them by hand makes it harder to follow an investor’s history or see which institutions report holding the same stock. The project organizes validated filings into connected investor and stock views, with links back to the SEC source documents.",
    implementation:
      "Next.js and TypeScript render the research pages on the server, with Supabase/PostgreSQL storing validated filings and Vercel hosting the application. Node.js collectors fetch SEC EDGAR filings, check row counts and reported values, and reconcile amendments while preserving source records. SEC and OpenFIGI reference data support security identification. The web app has read-only database access. Collection currently runs through local commands; scheduled imports remain planned.",
    screenshot: {
      src: "/projects/institutional-ownership-tracker.webp",
      alt: "Stock Positioning Tracker showing Berkshire Hathaway’s quarterly portfolio history and reported institutional holdings.",
    },
    liveUrl: "https://stock-positioning-tracker.vercel.app/",
    githubUrl: "https://github.com/Bazian-io/stock-positioning-tracker",
  },
];
