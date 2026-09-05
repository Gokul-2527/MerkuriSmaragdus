"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/StaggerGroup";
import { whyUs } from "@/config/projects";

export function WhyUs({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="mx-auto max-w-content px-6 py-28 sm:px-10">
      {showHeading && <SectionHeading eyebrow="Why Partner With Us" title="Why Partner With Us?" />}

      <StaggerGroup
        className={showHeading ? "mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3" : "grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"}
        staggerChildren={0.08}
      >
        {whyUs.map((f) => (
          <StaggerItem key={f.number} className="border-t border-border pt-6">
            <span className="font-display text-sm text-secondary">{f.number}</span>
            <h3 className="mt-3 font-display text-xl text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{f.description}</p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
