import Link from "next/link";
import { projects } from "../data/projects";
import ProjectScreenshot from "./project-screenshot";
import ProjectTechnologies from "./project-technologies";

export default function SelectedProjects({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;
  const CardHeading = headingLevel === "h1" ? "h2" : "h3";
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
      hypothesisId: "D",
      location: "selected-projects.tsx:render",
      message: "Project card technologies",
      data: {
        headingLevel,
        cards: projects.map((project) => {
          const technologies = project.technologyGroups.flatMap(
            (group) => group.tools,
          );
          return {
            slug: project.slug,
            tagCount: technologies.length,
            lastTag: technologies.at(-1),
            hasCodex: technologies.includes("Codex"),
            technologies,
          };
        }),
      },
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion

  return (
    <section
      className="selected-projects"
      id="projects"
      aria-labelledby="selected-projects-heading"
      tabIndex={-1}
    >
      <Heading className="section-heading" id="selected-projects-heading">
        Selected Projects
      </Heading>
      <p className="selected-projects-intro">
        Both projects started from a real need of a specific group of users. That is also how I approach sales.
      </p>
      <div className="project-grid">
        {projects.map((project) => (
          <article
            className="project-card"
            key={project.slug}
            aria-labelledby={`${project.slug}-heading`}
          >
            <Link
              className="project-card-link"
              href={`/projects/${project.slug}`}
              aria-labelledby={`${project.slug}-heading`}
            >
              <ProjectScreenshot
                title={project.title}
                screenshot={project.screenshot}
              />
              <div className="project-card-content">
                {project.category && (
                  <p className="project-card-category">{project.category}</p>
                )}
                <CardHeading
                  className="project-card-title"
                  id={`${project.slug}-heading`}
                >
                  {project.title}
                </CardHeading>
                <p className="project-card-lead">
                  {project.cardLead ?? project.summary}
                </p>
                <dl className="project-card-description">
                  {project.cardMotivation && (
                    <div>
                      <dt>Why I built it</dt>
                      <dd>{project.cardMotivation}</dd>
                    </div>
                  )}
                </dl>
                <div className="project-card-stack" role="group" aria-label="Tech stack">
                  <p className="project-card-stack-heading">Tech stack</p>
                  <ProjectTechnologies
                    groups={project.technologyGroups}
                    variant="card"
                  />
                </div>
                <span className="project-card-action">
                  View case study <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
