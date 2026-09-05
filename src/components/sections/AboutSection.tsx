"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { slideRight, viewportOnce } from "@/lib/animations";

const capabilities = [
  { label: "Construction", detail: "End-to-End" },
  { label: "Technology", detail: "Digital Solutions" },
  { label: "Projects", detail: "Growing Portfolio" },
  { label: "Industries", detail: "Multiple Sectors" },
];

export function AboutSection({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="mx-auto max-w-content px-6 py-28 sm:px-10">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div className="relative h-[420px] overflow-hidden rounded-2xl sm:h-[520px]">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop"
            alt="Architectural blueprint detail of a building elevation"
            fill
            className="object-cover"
          />
          {/* Subtle animated blueprint overlay */}
          <motion.svg
            className="absolute inset-0 h-full w-full opacity-25"
            viewBox="0 0 400 500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.25 }}
            viewport={viewportOnce}
            transition={{ duration: 1.2 }}
          >
            <rect x="40" y="60" width="320" height="380" fill="none" stroke="#F7F8F5" strokeWidth="1" />
            <line x1="40" y1="220" x2="360" y2="220" stroke="#9C7C24" strokeWidth="1" />
            <line x1="200" y1="60" x2="200" y2="440" stroke="#F7F8F5" strokeWidth="1" />
          </motion.svg>
        </div>

        <div>
          {showHeading && (
            <>
              <Reveal>
                <span className="eyebrow">About Us</span>
              </Reveal>
              <Reveal delay={0.08} variants={slideRight}>
                <h2 className="mt-5 font-display text-4xl leading-[1.12] sm:text-5xl">
                  Building More Than Structures
                </h2>
              </Reveal>
            </>
          )}
          <Reveal delay={0.16}>
            <p className={showHeading ? "mt-6 text-base leading-relaxed text-muted sm:text-lg" : "text-base leading-relaxed text-muted sm:text-lg"}>
              Merkuri Smaragdus was founded on a simple premise: that
              construction and technology are not separate disciplines, but
              two expressions of the same engineering mindset. From
              architectural planning to software delivery, every project is
              approached with the same rigor, transparency and long-term
              commitment to the people who rely on it.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-8 border-t border-border pt-8">
            {capabilities.map((c, i) => (
              <Reveal key={c.label} delay={0.1 + i * 0.06}>
                <p className="font-display text-2xl text-primary">{c.label}</p>
                <p className="mt-1 text-sm text-muted">{c.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
