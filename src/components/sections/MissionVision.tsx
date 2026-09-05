"use client";

import { Target, Eye } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { missionVision } from "@/config/about";

const icons = [Target, Eye];

export function MissionVision() {
  return (
    <section className="mx-auto max-w-content px-6 py-24 sm:px-10">
      <div className="grid gap-8 sm:grid-cols-2">
        {missionVision.map((item, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={item.label} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-border bg-white p-8 sm:p-10">
                <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                <h3 className="mt-6 font-display text-2xl text-foreground">
                  {item.label}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {item.statement}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
