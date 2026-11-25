import Link from "next/link";
import { projects, type Project } from "../data/projects";
import CaseStudyNavigation from "./case-study-navigation";
import ProjectScreenshot from "./project-screenshot";
import ProjectTechnologies from "./project-technologies";
import ScreenshotViewer from "./screenshot-viewer";
import TechnicalFlow from "./technical-flow";

export default function ProjectCaseStudy({ project }: { project: Project }) {
  const relatedProject = projects.find(
    (candidate) => candidate.slug !== project.slug,
  );
  const relatedProjectLead = relatedProject?.cardLead ?? relatedProject?.summary;
  const resources = [
    { label: "Live application", url: project.liveUrl, primary: true },
    { label: "GitHub repository", url: project.githubUrl, primary: false },
  ];
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
      hypothesisId: "E",
      location: "project-case-study.tsx:render",
      message: "Case study Codex placement",
      data: {
        slug: project.slug,
        hasCodexInTechnologies: project.technologyGroups.some((group) =>
          group.tools.includes("Codex"),
        ),
        technicalFlow: project.technicalFlow ?? [],
        technicalFlowHasCodex: (project.technicalFlow ?? []).some((step) =>
          step.technologies.includes("Codex"),
        ),
      },
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion

  return (
    <article className="case-study" aria-labelledby="case-study-title">
      <div className="container">
        <Link className="case-study-back" href="/projects" data-opening={0}>
          <span aria-hidden="true">←</span> All projects
        </Link>
        <header className="case-study-header">
          <p className="hero-eyebrow" data-opening={1}>Project case study</p>
          <h1 className="case-study-title" id="case-study-title" data-opening={2}>
            {project.title}
          </h1>
          <ul className="project-resources" aria-label="Explore the project">
            {resources.map(({ label, url, primary }, index) => (
              <li key={label} data-opening={3 + index}>
                {url ? (
                  <a
                    className={`project-resource${primary ? " project-resource-primary" : ""}`}
                    href={url}
                  >
                    <span className="project-resource-label">{label}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <div className="project-resource">
                    <span className="project-resource-label">{label}</span>
                    <span className="project-resource-status">Link coming soon</span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </header>
      </div>
      <CaseStudyNavigation />
      <div
        className="case-study-media container"
        data-reveal={project.screenshot ? undefined : true}
      >
        {project.screenshot ? (
          <ScreenshotViewer title={project.title} screenshot={project.screenshot} />
        ) : (
          <ProjectScreenshot
            title={project.title}
            sizes="(min-width: 1216px) 1120px, 90vw"
            className="case-study-screenshot"
          />
        )}
      </div>
      <div className="band--light">
        <section
          className="case-study-section"
          id="overview"
          tabIndex={-1}
          aria-labelledby="overview-heading"
          data-reveal-stagger
        >
          <h2 id="overview-heading">Project overview</h2>
          <div className="case-study-body">
            <p>
              {project.overview ??
                "Overview coming soon. This section will introduce the project, its purpose, and its intended users."}
            </p>
            {!!project.overviewPoints?.length && (
              <ol className="case-study-overview-list" role="list">
                {project.overviewPoints.map((point, index) => (
                  <li key={point}>
                    <span className="case-study-overview-number" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {point}
                  </li>
                ))}
              </ol>
            )}
            {project.overviewClosing && <p>{project.overviewClosing}</p>}
          </div>
        </section>
        <section
          className="case-study-section"
          id="business-problem"
          tabIndex={-1}
          aria-labelledby="problem-heading"
          data-reveal-stagger
        >
          <h2 id="problem-heading">Business problem</h2>
          <div className="case-study-body">
            <p>
              {project.businessProblem ??
                "Business context coming soon. This section will explain why the project was created and the problem it addresses."}
            </p>
          </div>
        </section>
      </div>
      <section
        className="case-study-section container"
        id="technical-implementation"
        tabIndex={-1}
        aria-labelledby="implementation-heading"
      >
        <h2 id="implementation-heading" data-reveal>Technical implementation</h2>
        <div className="case-study-body">
          {!!project.technicalFlow?.length && (
            <TechnicalFlow
              steps={project.technicalFlow}
              note={project.technicalFlowNote}
            />
          )}
          {project.implementation?.length ? (
            <ul className="implementation-list">
              {project.implementation.map(({ title, description }) => (
                <li key={title} data-reveal>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p data-reveal>
              Implementation details coming soon. This section will describe the
              technologies, AI tools, automation, APIs, and infrastructure used,
              where applicable.
            </p>
          )}
          <section
            className="technology-stack tools-group"
            aria-labelledby="technology-stack-heading"
            data-reveal
          >
            <div className="tools-group-header">
              <h3 id="technology-stack-heading">Built with</h3>
            </div>
            <ProjectTechnologies
              groups={project.technologyGroups}
              variant="case-study"
            />
          </section>
        </div>
      </section>
      {relatedProject && (
        <section
          className="related-project container"
          aria-labelledby="related-project-heading"
        >
          <h2 id="related-project-heading" data-reveal>Explore another project</h2>
          <Link
            className="related-project-link reveal-settle"
            href={`/projects/${relatedProject.slug}`}
            aria-labelledby="related-project-title"
            data-reveal
          >
            <ProjectScreenshot
              title={relatedProject.title}
              screenshot={relatedProject.screenshot}
              sizes="(min-width: 768px) 240px, 90vw"
              className="related-project-preview"
            />
            <div className="related-project-content">
              {relatedProject.category && (
                <p className="project-card-category">{relatedProject.category}</p>
              )}
              <h3 id="related-project-title">{relatedProject.title}</h3>
              {relatedProjectLead && <p>{relatedProjectLead}</p>}
              <span className="project-card-action">
                View case study <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        </section>
      )}
    </article>
  );
}
