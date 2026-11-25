import type { ToolGroup } from "./tools";

export type Project = {
  slug: string;
  title: string;
  category?: string;
  technologyGroups: ToolGroup[];
  summary?: string;
  cardLead?: string;
  cardProblem?: string;
  cardSolution?: string;
  cardMotivation?: string;
  overview?: string;
  overviewPoints?: string[];
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
        title: "Clean Data",
        description:
          "The platform automatically collects news every day, removes duplicate articles and leaves missing information blank rather than guessing.",
      },
      {
        title: "Weekly Trends",
        description:
          "The platform identifies common topics across different news sources. A topic is only highlighted as a trend when at least two different publishers have covered it.",
      },
      {
        title: "AI-Assisted Review",
        description:
          "Claude can check whether news headlines are relevant to the platform, suggest a category and explain its reasoning. The final publishing decision remains with a human.",
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
    cardLead:
      "A research tool that follows institutional investors and the stocks they hold.",
    cardProblem:
      "Comparing institutional holdings means working through quarterly filings, amendments, and different security identifiers.",
    cardSolution:
      "A stock research platform with validated SEC filings, interactive dashboards, custom charts, quarterly changes and investor comparisons.",
    cardMotivation:
      "Our investor group needed one tool to follow them quarter by quarter. I built it to our exact needs, so we do our own analysis instead of digging through filings.",
    overview:
      "A research tool built for our investor group to follow institutional investors and the stocks they hold. It turns SEC filings into connected investor and stock views: what each tracked investor reports holding, how that changes from quarter to quarter, and how two portfolios compare. It lets us do our own analysis instead of digging through filings. The figures show reported holdings, not confirmed trades.",
    businessProblem:
      "Quarterly filings spread portfolio information across many documents, including amendments and different security identifiers. Comparing them by hand makes it harder to follow an investor’s history or see which institutions report holding the same stock. The project organizes validated filings into connected investor and stock views, with links back to the SEC source documents.",
    technicalFlow: [
      { label: "Data sources", technologies: "SEC EDGAR · OpenFIGI · Nasdaq" },
      { label: "Collection", technologies: "Node.js" },
      { label: "Database", technologies: "Supabase · PostgreSQL" },
      { label: "Interface", technologies: "Next.js · React · TypeScript" },
    ],
    technicalFlowNote:
      "Collectors run through local commands, and the public web application has read-only database access. Short-interest collection and scheduled automation remain planned.",
    implementation: [
      {
        title: "Interface",
        description:
          "Next.js and React provide the pages, dashboards and navigation. TypeScript checks that data is used consistently, helping catch mistakes before release. CSS Modules keep styles separate between pages, and responsive CSS adapts the interface to phones, tablets and computers.",
      },
      {
        title: "Charts",
        description:
          "Custom SVG graphics and CSS charts show historical holdings and portfolio values over time, so readers can compare quarters visually.",
      },
      {
        title: "Database",
        description:
          "Supabase and PostgreSQL store investors, securities, filings and historical holdings in linked tables, so each position can be traced to its investor and source filing. SQL migrations record database changes so the structure can be updated consistently. Research views combine stored records into useful summaries. Validation triggers check rules when data is written, helping prevent inconsistent records. Row-level security controls access to records; together with read-only permissions, it lets the public read research data without changing it.",
      },
      {
        title: "Data collection and processing",
        description:
          "Node.js collectors import filings from SEC EDGAR, the data source for reported holdings. JSON and XML are the formats in which external data arrives; fast-xml-parser reads XML into records the application can process. Row counts and reported values are checked against filing totals to catch incomplete imports. Amendments are reconciled so comparisons account for corrected filings, while original source records remain available for tracing the data. OpenFIGI and Nasdaq are reference data sources used to help match stock identities.",
      },
      {
        title: "Testing and quality",
        description:
          "The Node.js test runner checks calculations and data-processing rules, so changes do not silently alter results. PGlite runs PostgreSQL database tests locally, checking that validation and access rules behave as intended. ESLint flags common code problems, and TypeScript checks for inconsistent data types before release. Headless Chrome runs browser checks without an open browser window, verifying that pages work and fit different screen sizes.",
      },
      {
        title: "Development workflow",
        description:
          "Built in Cursor, using Claude Code and Codex to assist with planning, coding, debugging and reviews. Git and GitHub keep a history of source changes, making updates traceable. npm manages dependencies and repeatable development commands.",
      },
      {
        title: "Hosting",
        description:
          "Vercel hosts the web application, making the research dashboards available through a browser.",
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
