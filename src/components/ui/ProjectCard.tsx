"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/config/projects";

// Shared project tile — used in the homepage horizontal showcase, the
// full /projects explorer, and the filtered previews on the
// Construction and IT Solutions pages.
export function ProjectCard({
  project,
  fixedWidth = false,
}: {
  project: Project;
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
        <Image src={project.image} alt={project.title} fill className="object-cover" />
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
        <h3 className="mt-1 font-display text-xl text-white">{project.title}</h3>
        <div className="mt-2 flex items-center justify-between text-xs text-white/60">
          <span>{project.location} · {project.year}</span>
          <ArrowUpRight className="h-4 w-4 text-white/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </motion.div>
    </motion.div>
  );
}
