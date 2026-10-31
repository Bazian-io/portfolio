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
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "SQL",
      "Tailwind CSS",
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "Claude API",
      "Vercel",
      "GitHub",
      "Cursor",
      "Claude Code",
      "Codex",
    ],
    summary:
      "An automated GCC HealthTech briefing combining multi-source news, regional filters, and weekly topic trends in one reading experience.",
    cardProblem:
      "Following GCC HealthTech news means checking multiple publishers and separating repeated coverage.",
    cardSolution:
      "A news application with automated collection, country and topic filters, weekly trends, and saved stories.",
    overview:
      "A GCC HealthTech news-monitoring application that brings regional coverage, country and topic filters, weekly trends and a saved reading list into one place. Built with Next.js, React and TypeScript, using Tailwind CSS for the interface and Supabase/PostgreSQL for article storage. FreeNewsAPI.ai collection runs daily; separate collectors also support GDELT and the Saudi Ministry of Health RSS feed. A separate, optional Claude relevance check assesses whether an article fits the coverage rules.",
    businessProblem:
      "Monitoring a specialist sector across several markets involves checking multiple publishers and separating repeated coverage from distinct stories. The project brings GCC HealthTech updates into one place, with country and topic filters, original-source links, and saved stories to support a more focused review.",
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
    technicalFlowNote:
      "FreeNewsAPI.ai runs daily and publishes keyword matches. GDELT and RSS collection run separately and save drafts. The optional Claude relevance check is separate from daily collection.",
    implementation: [
      {
        title: "Interface",
        description:
          "Next.js and React provide the news pages, search and navigation. TypeScript checks that article data is used consistently, helping catch mistakes before release. Tailwind CSS adapts the layouts to phones, tablets and computers. Country and topic filters help readers find coverage; saved stories stay in the reader’s browser.",
      },
      {
        title: "Charts and trends",
        description:
          "Charts summarize weekly themes using published articles from the latest seven days. A theme needs at least two related stories from different publishers, so thin coverage is shown honestly. These signals follow explicit rules and are separate from the optional Claude relevance check.",
      },
      {
        title: "Database",
        description:
          "Supabase and PostgreSQL store articles, publisher details, source descriptions, publication status and collection timestamps. SQL migrations record changes to the table structure. Unique URL and slug constraints prevent duplicate records and conflicting article links. Row-level security limits public reads to published articles, while read-only permissions prevent readers from changing the database. Collector credentials stay in backend code. Publisher excerpts are kept separate from any future editorial or AI summary.",
      },
      {
        title: "Data collection and processing",
        description:
          "Node.js collectors use three data sources: FreeNewsAPI.ai, GDELT and the Saudi Ministry of Health RSS feed. Vercel Cron runs the FreeNewsAPI.ai collector daily through a secret-protected endpoint; GDELT and RSS collectors run separately and save drafts. Incoming links and text are cleaned, and missing publication details stay empty rather than being guessed. URL checks skip existing articles without overwriting them, while normalized headline fingerprints catch exact same-headline copies. Basic GCC HealthTech keyword matches from FreeNewsAPI.ai are published; this filter is not an AI relevance verdict.",
      },
      {
        title: "Optional Claude relevance check",
        description:
          "A separate, optional Claude API command checks an article’s headline and publisher description against written GCC HealthTech coverage rules. It returns a relevant/not-relevant verdict, a category and a short reason, so the decision can be reviewed. Responses must follow a defined format; missing verdicts and refusals are reported as errors. The check is read-only: it neither publishes articles nor changes the database, and it is not part of daily collection. Its accuracy has not yet been measured against the live API.",
      },
      {
        title: "Testing and quality",
        description:
          "The Node.js test runner uses example feeds, simulated HTTP responses, a fake database and a simulated Claude client, so collector and relevance tests run without live services or paid API calls. Tests cover duplicate handling, publication boundaries, metadata, failures and cron authorization. Reader tests cover saved stories, date grouping, filters and trend thresholds. ESLint checks common code problems, and TypeScript checks article data types before release.",
      },
      {
        title: "Development workflow",
        description:
          "Built in Cursor, using Claude Code and Codex to assist with planning, coding, debugging and reviews. Git and GitHub keep the source history traceable, and npm manages dependencies and repeatable development commands.",
      },
      {
        title: "Hosting",
        description:
          "Vercel hosts the public reading interface and the scheduled collection endpoint. The cron route checks a backend-only secret before running, so an unauthorized request cannot start collection. AI summaries and an editorial dashboard remain planned.",
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
      "Next.js",
      "React",
      "TypeScript",
      "SQL",
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "Vercel",
      "GitHub",
      "Cursor",
      "Claude Code",
      "Codex",
    ],
    summary:
      "A stock research platform built with Next.js, React and TypeScript, with validated SEC filings, historical holdings, quarterly changes and investor comparisons.",
    cardProblem:
      "Comparing institutional holdings means working through quarterly filings, amendments, and different security identifiers.",
    cardSolution:
      "A stock research platform with validated SEC filings, interactive dashboards, custom charts, quarterly changes and investor comparisons.",
    overview:
      "A stock research platform for exploring institutional holdings, quarterly changes and investor comparisons. Built with Next.js, React and TypeScript, backed by Supabase/PostgreSQL and hosted on Vercel. Collectors import and validate SEC financial filings before the data reaches the dashboards. The figures describe reported holdings and changes rather than confirmed trades.",
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
