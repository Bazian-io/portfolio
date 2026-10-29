import type { Metadata } from "next";
import SelectedProjects from "../components/selected-projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Projects() {
  return <SelectedProjects headingLevel="h1" />;
}
