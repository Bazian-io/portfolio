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
  technicalFlow?: {
    label: string;
    technologies: string;
  }[];
  technicalFlowNote?: string;
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
    technicalFlow: [
      { label: "Data sources", technologies: "FreeNewsAPI.ai · RSS · GDELT" },
      { label: "Collection", technologies: "API collectors · Vercel Cron" },
      { label: "Database", technologies: "Supabase" },
      { label: "Interface", technologies: "Next.js · TypeScript · Tailwind CSS" },
    ],
    technicalFlowNote:
      "RSS and GDELT feed drafts into the database. Only published articles appear in the reading interface.",
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
    technologies: [
      "TypeScript",
      "JavaScript",
      "SQL",
      "HTML/JSX",
      "CSS",
      "Next.js",
      "React",
      "CSS Modules",
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "Vercel",
      "Cursor",
      "OpenAI Codex",
      "Anthropic Claude Code",
    ],
    summary:
      "A stock research platform built with Next.js, React and TypeScript, with validated SEC filings, historical holdings, quarterly changes and investor comparisons.",
    cardProblem:
      "Comparing institutional holdings means working through quarterly filings, amendments, and different security identifiers.",
    cardSolution:
      "A stock research platform with validated SEC filings, interactive dashboards, custom charts, quarterly changes and investor comparisons.",
    overview:
      "Built a stock research platform using Next.js, React and TypeScript, backed by Supabase/PostgreSQL and hosted on Vercel. Collectors import and validate SEC financial filings, alongside dashboards for exploring institutional holdings, quarterly changes and investor comparisons. Created in Cursor with AI-assisted development using OpenAI Codex and Anthropic Claude Code. The dashboards show reported holdings and changes rather than confirmed trades.",
    businessProblem:
      "Quarterly filings spread portfolio information across many documents, including amendments and different security identifiers. Comparing them by hand makes it harder to follow an investor’s history or see which institutions report holding the same stock. The project organizes validated filings into connected investor and stock views, with links back to the SEC source documents.",
    technicalFlow: [
      { label: "Data sources", technologies: "SEC EDGAR · OpenFIGI · Nasdaq" },
      { label: "Collection", technologies: "Node.js · fast-xml-parser" },
      { label: "Database", technologies: "Supabase · PostgreSQL" },
      { label: "Interface", technologies: "Next.js · React · TypeScript" },
    ],
    technicalFlowNote:
      "Collectors run through local commands, and the public web application has read-only database access. Short-interest collection and scheduled automation remain planned.",
    implementation: [
      {
        title: "Interface",
        description:
          "Next.js and React power the pages, interactive dashboards and navigation, using TypeScript, JavaScript, HTML/JSX and CSS. CSS Modules and responsive CSS adapt the layouts across phones, tablets and computers. Dashboards cover institutional holdings, quarterly changes, historical portfolios and investor comparisons.",
      },
      {
        title: "Charts",
        description:
          "Custom SVG and CSS charts display historical holdings and portfolio values.",
      },
      {
        title: "Database",
        description:
          "Supabase and PostgreSQL store investors, securities, filings and historical holdings. SQL migrations manage the schema; research views expose research data, while validation triggers and row-level security protect data integrity and access. The public web application has read-only access.",
      },
      {
        title: "Data collection and processing",
        description:
          "Node.js collectors retrieve, process and validate SEC EDGAR filings, using JSON, XML and fast-xml-parser to read external financial data. They check row counts and reported values, reconcile amendments and preserve source records. OpenFIGI and Nasdaq reference data help verify stock identities.",
      },
      {
        title: "Testing and quality",
        description:
          "The Node.js test runner and PGlite check calculations and database rules. ESLint and TypeScript checks help maintain code quality, while headless Chrome verifies responsive layouts.",
      },
      {
        title: "Development workflow",
        description:
          "Created in Cursor with OpenAI Codex and Anthropic Claude Code assisting with planning, coding, debugging and reviews. Git and GitHub track and manage source changes; npm manages dependencies and development commands.",
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
