"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/config/projects";
import { viewportOnce } from "@/lib/animations";

export function Projects({ showHeading = true }: { showHeading?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Desktop-only horizontal translate driven by vertical scroll progress.
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-115%"]);

  return (
    <section className="bg-background py-28">
      {showHeading && (
        <div className="mx-auto max-w-content px-6 sm:px-10">
          <SectionHeading
            eyebrow="Selected Projects"
            title="Selected Projects"
            description="A portfolio spanning residential, commercial, infrastructure and digital work."
          />
        </div>
      )}

      {/* Desktop: scroll-linked horizontal showcase */}
      <div ref={containerRef} className={`relative hidden h-[260vh] lg:block ${showHeading ? "mt-14" : ""}`}>
        <div className="sticky top-24 overflow-hidden">
          <motion.div style={{ x }} className="flex gap-6 pl-6 sm:pl-10">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} fixedWidth />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile / tablet: vertical grid */}
      <div className="mt-10 grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 sm:px-10 lg:hidden">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
