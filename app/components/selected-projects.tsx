import Link from "next/link";
import { projects } from "../data/projects";
import ProjectScreenshot from "./project-screenshot";

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
        cards: projects.map((project) => ({
          slug: project.slug,
          tagCount: project.technologies.length,
          lastTag: project.technologies.at(-1),
          hasCodex: project.technologies.includes("Codex"),
          technologies: project.technologies,
        })),
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
                <dl className="project-card-description">
                  <div>
                    <dt>Business problem</dt>
                    <dd>{project.cardProblem ?? "Business context coming soon."}</dd>
                  </div>
                  <div>
                    <dt>What I built</dt>
                    <dd>
                      {project.cardSolution ??
                        project.summary ??
                        "Project details coming soon."}
                    </dd>
                  </div>
                </dl>
                <ul className="project-tags" aria-label="Technologies">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
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
