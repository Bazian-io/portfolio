type ToolGroup = {
  id: string;
  title: string;
  tools: string[];
  learning?: boolean;
};

export const toolGroups: ToolGroup[] = [
  {
    id: "build-with-ai",
    title: "Build with AI",
    tools: ["Cursor", "Anthropic Claude Code", "OpenAI Codex", "VS Code"],
  },
  {
    id: "languages",
    title: "Languages",
    tools: ["TypeScript", "JavaScript", "Python", "SQL", "HTML/JSX", "CSS"],
  },
  {
    id: "front-end",
    title: "Front end",
    tools: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "CSS Modules",
      "Responsive CSS",
      "Custom SVG charts",
      "CSS charts",
    ],
  },
  {
    id: "back-end-data",
    title: "Back end and data",
    tools: [
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "REST APIs",
      "SEC EDGAR",
      "OpenFIGI",
      "Nasdaq",
      "JSON",
      "XML",
      "fast-xml-parser",
      "SQL migrations",
      "Research views",
      "Validation triggers",
      "Row-level security",
    ],
  },
  {
    id: "deployment",
    title: "Deployment and testing",
    tools: [
      "Vercel",
      "Git",
      "GitHub",
      "npm",
      "Node.js test runner",
      "PGlite",
      "ESLint",
      "TypeScript checks",
      "Headless Chrome",
    ],
  },
  {
    id: "automation-data",
    title: "Automation and data",
    tools: ["Clay", "n8n", "KNIME"],
    learning: true,
  },
  {
    id: "ai-assistants",
    title: "AI assistants",
    tools: ["ChatGPT", "Claude", "Kimi", "Perplexity", "Gemini"],
  },
];
