import Link from "next/link";
import type { Project } from "../data/projects";
import ProjectScreenshot from "./project-screenshot";

export default function ProjectCaseStudy({ project }: { project: Project }) {
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
      <ProjectScreenshot
        title={project.title}
        screenshot={project.screenshot}
        sizes="(min-width: 1216px) 1120px, 90vw"
        className="case-study-screenshot"
      />
      <div className="case-study-sections">
        <section className="case-study-section" aria-labelledby="overview-heading">
          <h2 id="overview-heading">Project overview</h2>
          <div className="case-study-body">
            <p>
              {project.overview ??
                "Overview coming soon. This section will introduce the project, its purpose, and its intended users."}
            </p>
          </div>
        </section>
        <section className="case-study-section" aria-labelledby="problem-heading">
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
          aria-labelledby="implementation-heading"
        >
          <h2 id="implementation-heading">Technical implementation</h2>
          <div className="case-study-body">
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
            <ul className="project-tags" aria-label="Technologies">
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </article>
  );
}
