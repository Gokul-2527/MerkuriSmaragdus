"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceGrid } from "@/components/ui/ServiceGrid";
import { constructionServices, technologyServices } from "@/config/services";

export function Services({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="services" className="mx-auto max-w-content px-6 py-28 sm:px-10">
      {showHeading && (
        <SectionHeading
          eyebrow="Our Capabilities"
          title="Our Capabilities"
          description="A single organization, two disciplines — every service built to the same standard of execution."
        />
      )}

      <div className={showHeading ? "mt-14" : ""}>
        <ServiceGrid vertical="construction" label="Construction & Real Estate" />
      </div>

      <div className="mt-16">
        <ServiceGrid vertical="technology" label="IT & Digital Technology" />
      </div>
    </section>
  );
}
