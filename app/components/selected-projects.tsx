import Link from "next/link";
import { projects } from "../data/projects";
import ProjectShowcase from "./project-showcase";
import ProjectScreenshot from "./project-screenshot";
import ProjectTechnologies from "./project-technologies";

export default function SelectedProjects({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;
  const isProjectsPage = headingLevel === "h1";
  const CardHeading = isProjectsPage ? "h2" : "h3";
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

  const items = projects.map((project) => {
    const headingId = `${project.slug}-heading`;
    const href = `/projects/${project.slug}`;

    return {
      slug: project.slug,
      screenshot: (
        <Link className="showcase-screenshot" href={href} aria-labelledby={headingId}>
          <ProjectScreenshot
            title={project.title}
            screenshot={project.screenshot}
            sizes="(min-width: 900px) and (min-height: 640px) min(55vw, 590px), (min-width: 1130px) 1080px, 100vw"
          />
        </Link>
      ),
      stack: (
        <div className="project-card-stack" role="group" aria-label="Tech stack">
          <p className="project-card-stack-heading">Tech stack</p>
          <ProjectTechnologies groups={project.technologyGroups} variant="card" />
        </div>
      ),
      text: (
        <div className="project-card-content" data-reveal>
          {project.category && <p className="project-card-category">{project.category}</p>}
          <CardHeading className="project-card-title" id={headingId}>
            {project.title}
          </CardHeading>
          <p className="project-card-lead">{project.cardLead ?? project.summary}</p>
          <dl className="project-card-description">
            {project.cardMotivation && (
              <div>
                <dt>Why I built it</dt>
                <dd>{project.cardMotivation}</dd>
              </div>
            )}
          </dl>
        </div>
      ),
      action: (
        <Link className="project-card-action" href={href} aria-describedby={headingId} data-reveal>
          View case study <span aria-hidden="true">→</span>
        </Link>
      ),
    };
  });

  return (
    <section
      className="selected-projects container"
      id="projects"
      aria-labelledby="selected-projects-heading"
      tabIndex={-1}
    >
      <Heading
        className="section-heading"
        id="selected-projects-heading"
        data-opening={isProjectsPage ? "0" : undefined}
        data-reveal={isProjectsPage ? undefined : true}
      >
        Selected Projects
      </Heading>
      <p
        className="selected-projects-intro"
        data-opening={isProjectsPage ? "1" : undefined}
        data-reveal={isProjectsPage ? undefined : true}
      >
        Both projects started from a real need of a specific group of users. That is also how I approach sales.
      </p>
      <ProjectShowcase items={items} />
    </section>
  );
}
