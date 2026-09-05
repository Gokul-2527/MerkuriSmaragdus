"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/config/projects";
import { viewportOnce } from "@/lib/animations";

const categories = ["All", "Residential", "Commercial", "Infrastructure", "Technology"];

// Full, filterable project grid for the standalone /projects page.
// The homepage keeps its scroll-linked horizontal teaser (Projects.tsx);
// this is the browsing experience for people who click through to see everything.
export function ProjectsExplorer() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section className="mx-auto max-w-content px-6 py-24 sm:px-10">
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full border px-5 py-2 text-sm transition-colors duration-300",
              active === cat
                ? "border-primary bg-primary text-white"
                : "border-border text-muted hover:border-primary hover:text-primary"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.map((project, i) => (
          <motion.div
            key={project.title}
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-10 text-sm text-muted">No projects in this category yet.</p>
      )}
    </section>
  );
}
