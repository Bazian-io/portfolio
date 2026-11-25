import type { ToolGroup } from "./tools";

export type Project = {
  slug: string;
  title: string;
  category?: string;
  technologyGroups: ToolGroup[];
  summary?: string;
  metaDescription?: string;
  cardLead?: string;
  cardProblem?: string;
  cardSolution?: string;
  cardMotivation?: string;
  overview?: string;
  overviewPoints?: string[];
  overviewClosing?: string;
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
    category: "Market monitoring",
    technologyGroups: [
      {
        id: "build-with-ai",
        title: "Build with AI",
        tools: ["Cursor", "Claude Code", "Codex"],
      },
      {
        id: "languages",
        title: "Languages",
        tools: ["TypeScript", "SQL"],
      },
      {
        id: "front-end",
        title: "Front end",
        tools: ["Next.js", "React", "Tailwind CSS"],
      },
      {
        id: "back-end-data",
        title: "Back end and data",
        tools: ["Node.js", "Supabase", "PostgreSQL", "Claude API"],
      },
      {
        id: "deployment",
        title: "Deployment and version control",
        tools: ["Vercel", "GitHub"],
      },
    ],
    summary:
      "An automated GCC HealthTech briefing combining multi-source news, regional filters, and weekly topic trends in one reading experience.",
    metaDescription:
      "Market monitoring platform for international consultants and companies following the GCC healthtech market.",
    cardLead:
      "A specialized market monitoring platform for consultants and companies working in GCC health tech.",
    cardProblem:
      "Following GCC HealthTech news means checking multiple publishers and separating repeated coverage.",
    cardSolution:
      "A news application with automated collection, country and topic filters, weekly trends, and saved stories.",
    cardMotivation:
      "Working from abroad, they need more than a general news feed. I built it for them, and for myself, to follow the region’s technology and policy news.",
    overview:
      "Market monitoring platform for international consultants and companies operating in or exploring the GCC healthtech market. It brings news from hundreds of publishers into one place. The project makes it easier to follow, across the GCC:",
    overviewPoints: [
      "Market developments",
      "Technological advancements",
      "Regulatory changes",
    ],
    businessProblem:
      "Market intelligence across the GCC healthtech sector is fragmented across hundreds of sources. It is time-consuming for business professionals to stay informed.",
    technicalFlow: [
      {
        label: "Data sources",
        technologies: "FreeNewsAPI.ai · GDELT · Saudi Ministry of Health RSS feed",
      },
      { label: "Collection", technologies: "Node.js" },
      { label: "Database", technologies: "Supabase · PostgreSQL" },
      {
        label: "Interface",
        technologies: "Next.js · React · TypeScript · Tailwind CSS",
      },
    ],
    implementation: [
      {
        title: "Data Collection",
        description:
          "The platform automatically collects news every day through APIs and RSS feeds. Duplicate articles are filtered out, and missing publication details are left blank rather than guessed.",
      },
      {
        title: "Database",
        description:
          "Supabase and PostgreSQL store and organise articles, publication dates, sources and categories. This allows news to be filtered by country, topic and publication date.",
      },
      {
        title: "Weekly Trends and AI Review",
        description:
          "The platform identifies common topics across news sources and highlights weekly trends. Claude can review headlines, assess their relevance and suggest a category. The final publishing decision remains with a human.",
      },
      {
        title: "Development and Hosting",
        description:
          "Next.js, React and TypeScript power the website and its news feed. The platform was built in Cursor with AI-assisted development, GitHub keeps track of changes, and Vercel hosts the application.",
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
    title: "Institutional Ownership Tracker",
    category: "Ownership research",
    technologyGroups: [
      {
        id: "build-with-ai",
        title: "Build with AI",
        tools: ["Cursor", "Claude Code", "Codex"],
      },
      {
        id: "languages",
        title: "Languages",
        tools: ["TypeScript", "SQL"],
      },
      {
        id: "front-end",
        title: "Front end",
        tools: ["Next.js", "React"],
      },
      {
        id: "back-end-data",
        title: "Back end and data",
        tools: ["Node.js", "Supabase", "PostgreSQL"],
      },
      {
        id: "deployment",
        title: "Deployment and version control",
        tools: ["Vercel", "GitHub"],
      },
    ],
    summary:
      "A stock research platform built with Next.js, React and TypeScript, with validated SEC filings, historical holdings, quarterly changes and investor comparisons.",
    metaDescription:
      "An investment research platform for following institutional investors and their portfolios, based on SEC filings.",
    cardLead:
      "A research tool that follows institutional investors and the stocks they hold.",
    cardProblem:
      "Comparing institutional holdings means working through quarterly filings, amendments, and different security identifiers.",
    cardSolution:
      "A stock research platform with validated SEC filings, interactive dashboards, custom charts, quarterly changes and investor comparisons.",
    cardMotivation:
      "Our investor group needed one tool to follow them quarter by quarter. I built it to our exact needs, so we do our own analysis instead of digging through filings.",
    overview:
      "An investment research platform built for our investor group to follow institutional investors and their portfolios. It allows us to:",
    overviewPoints: [
      "Explore which stocks institutions hold",
      "Track changes in their portfolios over time",
      "Compare investment positions across different institutions",
    ],
    overviewClosing: "All holdings data is based on publicly reported SEC filings.",
    businessProblem:
      "Although institutional investment data is publicly available, it is scattered across thousands of financial documents. Analyzing these documents manually makes it difficult to track changes in investment portfolios, identify common holdings across institutions and spot broader investment trends.",
    technicalFlow: [
      { label: "Data sources", technologies: "SEC EDGAR · OpenFIGI · Nasdaq" },
      { label: "Collection", technologies: "Node.js" },
      { label: "Database", technologies: "Supabase · PostgreSQL" },
      { label: "Interface", technologies: "Next.js · React · TypeScript" },
    ],
    implementation: [
      {
        title: "Data Collection",
        description:
          "Holdings are collected from SEC EDGAR filings. Each import is checked against the filing’s totals to catch incomplete data, and amended filings are reconciled, so comparisons use the corrected numbers. OpenFIGI and Nasdaq reference data help match the same stock across different identifiers.",
      },
      {
        title: "Database",
        description:
          "Supabase and PostgreSQL store investors, stocks, filings and historical holdings in linked tables, so every position can be traced back to its investor and source filing. Visitors can explore the data but can’t change it.",
      },
      {
        title: "Changes shown over time",
        description:
          "Next.js, React and TypeScript power the website and its dashboards. Charts show historical holdings and portfolio values over time, so quarters can be compared visually.",
      },
      {
        title: "Development and Hosting",
        description:
          "Built in Cursor with Claude Code and Codex. Automated tests check the calculations and data rules, so changes don’t silently alter results. GitHub keeps track of changes, and Vercel hosts the platform.",
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
