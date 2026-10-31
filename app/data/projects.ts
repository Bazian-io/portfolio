export type Project = {
  slug: string;
  title: string;
  category?: string;
  technologies: string[];
  summary?: string;
  cardProblem?: string;
  cardSolution?: string;
  overview?: string;
  businessProblem?: string;
  implementation?: {
    title: string;
    description: string;
  }[];
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
    category: "News automation",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    summary:
      "An automated GCC HealthTech briefing combining multi-source news, regional filters, and weekly topic trends in one reading experience.",
    cardProblem:
      "Following GCC HealthTech news means checking multiple publishers and separating repeated coverage.",
    cardSolution:
      "A news application with automated collection, country and topic filters, weekly trends, and saved stories.",
    overview:
      "GCC HealthTech News is a regional news-monitoring application covering digital health, medical AI, telemedicine, and related developments across the six GCC countries. It combines automated article collection with a searchable news stream, weekly theme analysis, original-source links, and a browser-local reading list.",
    businessProblem:
      "Monitoring a specialist sector across several markets involves checking multiple publishers and separating repeated coverage from distinct stories. The project brings GCC HealthTech updates into one place, with country and topic filters, original-source links, and saved stories to support a more focused review.",
    implementation: [
      {
        title: "Interface",
        description:
          "Next.js, TypeScript, and Tailwind CSS power the reading interface, including country and topic filters, weekly trends, and original-source links. Saved stories stay in the reader’s browser.",
      },
      {
        title: "Database",
        description:
          "Supabase stores the articles. Published stories feed the reading interface, while RSS and GDELT collectors save drafts.",
      },
      {
        title: "Data collection and automation",
        description:
          "A collector searches FreeNewsAPI.ai, applies basic GCC HealthTech keyword checks, and handles duplicate URLs and matching headlines. Vercel Cron is configured for daily collection through a protected endpoint. A separate, optional Claude tool assesses relevance.",
      },
      {
        title: "Hosting",
        description: "Vercel hosts the application.",
      },
    ],
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
    category: "Ownership research",
    technologies: ["Next.js", "TypeScript", "Node.js", "Supabase", "PostgreSQL"],
    summary:
      "Institutional ownership research built from SEC 13F filings, with investor dashboards, stock-level comparisons, and historical holdings.",
    cardProblem:
      "Comparing institutional holdings means working through quarterly filings, amendments, and different security identifiers.",
    cardSolution:
      "A research application with validated SEC filings, investor dashboards, stock comparisons, and historical holdings.",
    overview:
      "A research application for exploring institutional ownership in U.S.-listed stocks using SEC Form 13F filings. Investor dashboards show quarterly portfolio history and reported positions, while stock pages compare holdings across tracked investors. The current release focuses on reported holdings rather than confirmed trades; short-interest collection is planned.",
    businessProblem:
      "Quarterly filings spread portfolio information across many documents, including amendments and different security identifiers. Comparing them by hand makes it harder to follow an investor’s history or see which institutions report holding the same stock. The project organizes validated filings into connected investor and stock views, with links back to the SEC source documents.",
    implementation: [
      {
        title: "Interface",
        description:
          "Next.js and TypeScript render the research pages on the server, including investor dashboards, stock comparisons, and quarterly portfolio history.",
      },
      {
        title: "Database",
        description:
          "Supabase/PostgreSQL stores validated filings. The web app has read-only database access, and SEC and OpenFIGI reference data support security identification.",
      },
      {
        title: "Data collection and automation",
        description:
          "Node.js collectors fetch SEC EDGAR filings, check row counts and reported values, and reconcile amendments while preserving source records. Collection currently runs through local commands; scheduled imports remain planned.",
      },
      {
        title: "Hosting",
        description: "Vercel hosts the application.",
      },
    ],
    screenshot: {
      src: "/projects/institutional-ownership-tracker.webp",
      alt: "Stock Positioning Tracker showing Berkshire Hathaway’s quarterly portfolio history and reported institutional holdings.",
    },
    liveUrl: "https://stock-positioning-tracker.vercel.app/",
    githubUrl: "https://github.com/Bazian-io/stock-positioning-tracker",
  },
];
