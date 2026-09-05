"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/StaggerGroup";
import { slideRight } from "@/lib/animations";

// Shared "what we offer" block for the Construction and IT Solutions
// pages — a description plus the full offerings list from services.ts,
// so nothing is duplicated between the business-vertical config data
// and what's rendered here.
export function VerticalIntro({
  image,
  imageAlt,
  description,
  offerings,
  reverse = false,
}: {
  image: string;
  imageAlt: string;
  description: string;
  offerings: string[];
  reverse?: boolean;
}) {
  return (
    <section className="mx-auto max-w-content px-6 py-24 sm:px-10">
      <div className={`grid gap-14 lg:grid-cols-2 lg:items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="relative h-[380px] overflow-hidden rounded-2xl sm:h-[460px]">
          <Image src={image} alt={imageAlt} fill className="object-cover" />
        </div>

        <div>
          <Reveal variants={slideRight}>
            <p className="text-base leading-relaxed text-muted sm:text-lg">{description}</p>
          </Reveal>

          <StaggerGroup
            className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 border-t border-border pt-8 sm:grid-cols-2"
            staggerChildren={0.04}
          >
            {offerings.map((o) => (
              <StaggerItem key={o} className="flex items-center gap-2.5 text-sm text-foreground">
                <Check className="h-4 w-4 flex-shrink-0 text-primary" strokeWidth={2} />
                {o}
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
