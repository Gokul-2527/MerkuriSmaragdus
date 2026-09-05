"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/config/projects";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.4"],
  });

  return (
    <section className="mx-auto max-w-content px-6 py-28 sm:px-10">
      <SectionHeading eyebrow="Our Process" title="From Vision to Reality" />

      <div ref={ref} className="relative mt-16">
        {/* Track */}
        <div className="absolute left-[15px] top-2 h-[calc(100%-16px)] w-px bg-border sm:left-1/2 sm:-translate-x-1/2" />
        {/* Progress fill */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-[15px] top-2 h-[calc(100%-16px)] w-px origin-top bg-primary sm:left-1/2 sm:-translate-x-1/2"
        />

        <div className="space-y-10 sm:space-y-0">
          {processSteps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={step.number}
                className="relative sm:grid sm:grid-cols-2 sm:gap-10 sm:py-8"
              >
                <div className={isLeft ? "sm:pr-14 sm:text-right" : "sm:col-start-2 sm:pl-14"}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="pl-10 sm:pl-0"
                  >
                    <span className="font-display text-3xl text-secondary">{step.number}</span>
                    <h3 className="mt-2 font-display text-xl text-foreground">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted">{step.description}</p>
                  </motion.div>
                </div>

                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-[9px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background sm:left-1/2 sm:-translate-x-1/2"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
