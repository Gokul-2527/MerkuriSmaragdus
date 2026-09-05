"use client";

import { Reveal } from "@/components/ui/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/StaggerGroup";
import { slideRight } from "@/lib/animations";

const pillars = [
  { label: "Real Estate", detail: "Development & Promotion" },
  { label: "Construction", detail: "Turnkey Execution" },
  { label: "Technology", detail: "Digital Solutions" },
  { label: "Infrastructure", detail: "Project Development" },
];

export function Intro() {
  return (
    <section className="mx-auto max-w-content px-6 py-28 sm:px-10">
      <div className="grid gap-14 lg:grid-cols-[1fr_1px_1fr]">
        <div>
          <Reveal>
            <span className="eyebrow">Who We Are</span>
          </Reveal>
          <Reveal delay={0.08} variants={slideRight}>
            <h2 className="mt-5 font-display text-4xl leading-[1.12] sm:text-5xl">
              Where Construction Meets Technology
            </h2>
          </Reveal>
        </div>

        <div className="hidden lg:block">
          <div className="gold-rule h-full w-px bg-gradient-to-b from-transparent via-secondary to-transparent" />
        </div>

        <div className="flex flex-col justify-center">
          <Reveal delay={0.12}>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              Merkuri Smaragdus Construction &amp; Contracts LLP operates across
              two integrated verticals — construction, real estate and
              infrastructure, and IT, software and digital technology. The same
              discipline that shapes a building shapes a codebase: careful
              planning, precise execution, and a long-term view of the value
              being created.
            </p>
          </Reveal>

          <StaggerGroup className="mt-10 grid grid-cols-2 gap-8" staggerChildren={0.08}>
            {pillars.map((p) => (
              <StaggerItem key={p.label}>
                <p className="font-display text-2xl text-primary">{p.label}</p>
                <p className="mt-1 text-sm text-muted">{p.detail}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
