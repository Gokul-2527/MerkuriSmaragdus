import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { VerticalIntro } from "@/components/sections/VerticalIntro";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceGrid } from "@/components/ui/ServiceGrid";
import { Process } from "@/components/sections/Process";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { CTA } from "@/components/sections/CTA";
import { constructionOfferings } from "@/config/services";

export const metadata: Metadata = {
  title: "Construction & Real Estate | Merkuri Smaragdus",
  description:
    "Real estate development, turnkey construction, infrastructure and project management consultancy from Merkuri Smaragdus Construction & Contracts LLP.",
};

export default function ConstructionPage() {
  return (
    <>
      <PageHero
        eyebrow="Construction & Real Estate"
        title="Construction & Real Estate"
        description="Development, turnkey construction and infrastructure delivery — planned, built and managed with long-term value in mind."
      />

      <VerticalIntro
        image="https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Construction site with structural framework under a clear sky"
        description="From real estate development and joint development to turnkey construction and facility management, our construction and real estate vertical covers the full lifecycle of a built asset — grounded in planning discipline and delivered with accountability at every stage."
        offerings={constructionOfferings}
      />

      <section className="mx-auto max-w-content px-6 py-24 sm:px-10">
        <SectionHeading eyebrow="Capabilities" title="Construction Capabilities" />
        <div className="mt-12">
          <ServiceGrid vertical="construction" />
        </div>
      </section>

      <Process />
      <ProjectsPreview
        categories={["Residential", "Commercial", "Infrastructure"]}
        eyebrow="Related Work"
        title="Construction Projects"
      />
      <CTA />
    </>
  );
}
