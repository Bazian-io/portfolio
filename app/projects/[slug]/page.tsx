import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectCaseStudy from "../../components/project-case-study";
import { projects } from "../../data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);

  if (!project) notFound();

  return {
    title: project.title,
    description:
      project.summary ??
      project.overview ??
      `Project case study for ${project.title}.`,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);

  if (!project) notFound();

  return <ProjectCaseStudy project={project} />;
}
