import type { CSSProperties } from "react";
import { toolGroups } from "../data/tools";
import TagGroups from "./tag-groups";

export default function ToolsSection() {
  // #region agent log
  fetch("http://127.0.0.1:7502/ingest/4aebd9e1-8e57-4953-bc90-28d248b381c2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Debug-Session-Id": "bd92ce",
    },
    body: JSON.stringify({
      sessionId: "bd92ce",
      runId: "pre-fix",
      hypothesisId: "A",
      location: "tools-section.tsx:render",
      message: "Tools dashboard data",
      data: {
        groupCount: toolGroups.length,
        groups: toolGroups.map((group) => ({
          id: group.id,
          title: group.title,
          tools: group.tools,
          hasCodex: group.tools.includes("Codex"),
        })),
      },
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion
  return (
    <section className="tools-section container" aria-labelledby="tools-heading">
      <header className="tools-header">
        <h2 id="tools-heading" data-reveal>Tools I work with</h2>
      </header>
      <TagGroups className="tools-grid" staggerReveals>
        {toolGroups.map((group) => (
          <section
            className="tools-group"
            key={group.id}
            aria-labelledby={`${group.id}-heading`}
          >
            <div className="tools-group-header">
              <h3 id={`${group.id}-heading`}>{group.title}</h3>
              {group.learning && (
                <span className="tools-learning">Currently learning</span>
              )}
            </div>
            <ul className="tool-list">
              {group.tools.map((tool, index) => (
                <li key={tool} style={{ "--tag-index": index } as CSSProperties}>{tool}</li>
              ))}
            </ul>
          </section>
        ))}
      </TagGroups>
    </section>
  );
}
