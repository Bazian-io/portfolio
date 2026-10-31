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
