import type { Metadata } from "next";
import SelectedProjects from "../components/selected-projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Bazian Prudens’s practical projects in regional news monitoring, institutional ownership research, and business technology.",
};

export default function Projects() {
  return <SelectedProjects headingLevel="h1" />;
}
