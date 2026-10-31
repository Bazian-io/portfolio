import Link from "next/link";
import { projects, type Project } from "../data/projects";
import CaseStudyNavigation from "./case-study-navigation";
import ProjectScreenshot from "./project-screenshot";
import ScreenshotViewer from "./screenshot-viewer";
import TechnicalFlow from "./technical-flow";

export default function ProjectCaseStudy({ project }: { project: Project }) {
  const relatedProject = projects.find(
    (candidate) => candidate.slug !== project.slug,
  );
  const resources = [
    { label: "Live application", url: project.liveUrl, primary: true },
    { label: "GitHub repository", url: project.githubUrl, primary: false },
  ];

  return (
    <article className="case-study" aria-labelledby="case-study-title">
      <Link className="case-study-back" href="/projects">
        <span aria-hidden="true">←</span> All projects
      </Link>
      <header className="case-study-header">
        <p className="hero-eyebrow">Project case study</p>
        <h1 className="case-study-title" id="case-study-title">
          {project.title}
        </h1>
        <ul className="project-resources" aria-label="Explore the project">
          {resources.map(({ label, url, primary }) => (
            <li key={label}>
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
      <CaseStudyNavigation />
      {project.screenshot ? (
        <ScreenshotViewer title={project.title} screenshot={project.screenshot} />
      ) : (
        <ProjectScreenshot
          title={project.title}
          sizes="(min-width: 1216px) 1120px, 90vw"
          className="case-study-screenshot"
        />
      )}
      <div className="case-study-sections">
        <section
          className="case-study-section"
          id="overview"
          tabIndex={-1}
          aria-labelledby="overview-heading"
        >
          <h2 id="overview-heading">Project overview</h2>
          <div className="case-study-body">
            <p>
              {project.overview ??
                "Overview coming soon. This section will introduce the project, its purpose, and its intended users."}
            </p>
          </div>
        </section>
        <section
          className="case-study-section"
          id="business-problem"
          tabIndex={-1}
          aria-labelledby="problem-heading"
        >
          <h2 id="problem-heading">Business problem</h2>
          <div className="case-study-body">
            <p>
              {project.businessProblem ??
                "Business context coming soon. This section will explain why the project was created and the problem it addresses."}
            </p>
          </div>
        </section>
        <section
          className="case-study-section"
          id="technical-implementation"
          tabIndex={-1}
          aria-labelledby="implementation-heading"
        >
          <h2 id="implementation-heading">Technical implementation</h2>
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
                  <li key={title}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                Implementation details coming soon. This section will describe the
                technologies, AI tools, automation, APIs, and infrastructure used,
                where applicable.
              </p>
            )}
            <section
              className="technology-stack tools-group"
              aria-labelledby="technology-stack-heading"
            >
              <div className="tools-group-header">
                <h3 id="technology-stack-heading">Built with</h3>
              </div>
              <ul className="tool-list" aria-label="Technologies">
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </section>
          </div>
        </section>
      </div>
      {relatedProject && (
        <section
          className="related-project"
          aria-labelledby="related-project-heading"
        >
          <h2 id="related-project-heading">Explore another project</h2>
          <Link
            className="related-project-link"
            href={`/projects/${relatedProject.slug}`}
            aria-labelledby="related-project-title"
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
              {relatedProject.summary && <p>{relatedProject.summary}</p>}
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
