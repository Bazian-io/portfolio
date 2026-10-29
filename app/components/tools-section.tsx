import { toolGroups } from "../data/tools";

export default function ToolsSection() {
  return (
    <section className="tools-section" aria-labelledby="tools-heading">
      <header className="tools-header">
        <h2 id="tools-heading">Tools I work with</h2>
        <p>
          The tools and technologies I use to explore ideas and build practical
          solutions.
        </p>
      </header>
      <div className="tools-grid">
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
              {group.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
