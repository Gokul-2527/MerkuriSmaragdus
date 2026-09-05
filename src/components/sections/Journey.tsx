"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/StaggerGroup";
import { journey } from "@/config/about";

export function Journey() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <SectionHeading
          eyebrow="Our Journey"
          title="How We Got Here"
          description="From a contracting foundation to an integrated construction and technology group."
        />

        <StaggerGroup
          className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
          staggerChildren={0.1}
        >
          {journey.map((step) => (
            <StaggerItem key={step.number} className="border-t border-border pt-6">
              <span className="font-display text-sm text-secondary">{step.number}</span>
              <h3 className="mt-3 font-display text-xl text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
