import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { VerticalIntro } from "@/components/sections/VerticalIntro";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceGrid } from "@/components/ui/ServiceGrid";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { CTA } from "@/components/sections/CTA";
import { technologyOfferings } from "@/config/services";

export const metadata: Metadata = {
  title: "IT & Digital Technology | Merkuri Smaragdus",
  description:
    "Mobile, web, cloud, software and digital transformation services from Merkuri Smaragdus Construction & Contracts LLP's technology vertical.",
};

export default function ITSolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="IT & Digital Technology"
        title="IT & Digital Technology"
        description="Mobile, web, cloud and software solutions built with the same engineering discipline that shapes everything we construct."
      />

      <VerticalIntro
        image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Team collaborating around laptops and digital dashboards"
        description="Our technology vertical builds and supports digital products end to end — mobile apps, websites, cloud infrastructure and enterprise software — backed by IT consulting, cybersecurity and ongoing technical support."
        offerings={technologyOfferings}
        reverse
      />

      <section className="mx-auto max-w-content px-6 py-24 sm:px-10">
        <SectionHeading eyebrow="Capabilities" title="Technology Capabilities" />
        <div className="mt-12">
          <ServiceGrid vertical="technology" />
        </div>
      </section>

      <TechnologySection />
      <ProjectsPreview
        categories={["Technology"]}
        eyebrow="Related Work"
        title="Technology Projects"
      />
      <CTA />
    </>
  );
}
