import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ProjectsExplorer } from "@/components/sections/ProjectsExplorer";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Projects | Merkuri Smaragdus",
  description:
    "A portfolio of residential, commercial, infrastructure and digital technology projects delivered by Merkuri Smaragdus.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected Projects"
        title="Our Project Portfolio"
        description="A growing body of work across residential, commercial, infrastructure and digital technology."
      />
      <ProjectsExplorer />
      <CTA />
    </>
  );
}
