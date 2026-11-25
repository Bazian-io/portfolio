import type { CSSProperties } from "react";
import type { Project } from "../data/projects";
import TagGroups from "./tag-groups";

export default function ProjectTechnologies({
  groups,
  variant,
}: {
  groups: Project["technologyGroups"];
  variant: "card" | "case-study";
}) {
  const Groups = variant === "card" ? "div" : TagGroups;

  return (
    <Groups
      className={`project-technology-groups${variant === "card" ? " project-technology-groups-card" : ""}`}
    >
      {groups.map((group, index) => (
        <div
          key={group.id}
          data-technology-group={group.id}
          style={variant === "card" ? { "--group-index": index } as CSSProperties : undefined}
          className={
            variant === "card"
              ? `project-technology-row${group.id === "build-with-ai" ? " project-technology-row-ai" : ""}`
              : undefined
          }
        >
          <p className="project-technology-group-label">{group.title}</p>
          <ul
            className={variant === "card" ? "project-tags" : "tool-list"}
            aria-label={group.title}
          >
            {group.tools.map((tool, tagIndex) => (
              <li
                key={tool}
                style={variant === "case-study" ? { "--tag-index": tagIndex } as CSSProperties : undefined}
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Groups>
  );
}
