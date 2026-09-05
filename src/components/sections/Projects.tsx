"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/config/projects";
import { viewportOnce } from "@/lib/animations";

function ProjectCard({
  project,
  fixedWidth = false,
}: {
  project: (typeof projects)[number];
  fixedWidth?: boolean;
}) {
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      className={
        fixedWidth
          ? "group relative h-[420px] w-[320px] flex-shrink-0 overflow-hidden rounded-2xl sm:w-[380px]"
          : "group relative h-[380px] w-full overflow-hidden rounded-2xl"
      }
    >
      <motion.div
        className="absolute inset-0"
        variants={{ rest: { scale: 1 }, hover: { scale: 1.08 } }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/30 to-transparent"
        variants={{ rest: { opacity: 0.85 }, hover: { opacity: 0.95 } }}
      />
      <motion.div
        className="absolute inset-x-0 bottom-0 p-6"
        variants={{ rest: { y: 0 }, hover: { y: -6 } }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="h-px w-10 origin-left bg-secondary"
          variants={{ rest: { scaleX: 0.5 }, hover: { scaleX: 1 } }}
          transition={{ duration: 0.4 }}
        />
        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-secondary">
          {project.category}
        </p>
        <h3 className="mt-1 font-display text-xl text-white">
          {project.title}
        </h3>
        <div className="mt-2 flex items-center justify-between text-xs text-white/60">
          <span>
            {project.location} · {project.year}
          </span>
          <ArrowUpRight className="h-4 w-4 text-white/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Desktop-only horizontal translate driven by vertical scroll progress.
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-150%"]);

  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <SectionHeading
          eyebrow="Selected Projects"
          title="Selected Projects"
          description="A portfolio spanning residential, commercial, infrastructure and digital work."
        />
      </div>

      {/* Desktop: scroll-linked horizontal showcase */}
      <div
        ref={containerRef}
        className="relative mt-14 hidden h-[260vh] lg:block"
      >
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
            transition={{
              duration: 0.6,
              delay: (i % 2) * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
