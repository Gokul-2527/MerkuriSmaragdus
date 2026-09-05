"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/config/projects";
import { viewportOnce } from "@/lib/animations";

// Filtered project teaser for the Construction and IT Solutions pages —
// shows only the projects relevant to that vertical, with a link through
// to the full /projects explorer.
export function ProjectsPreview({
  categories,
  eyebrow = "Related Work",
  title = "Related Projects",
}: {
  categories: string[];
  eyebrow?: string;
  title?: string;
}) {
  const filtered = projects.filter((p) => categories.includes(p.category));

  if (filtered.length === 0) return null;

  return (
    <section className="mx-auto max-w-content px-6 py-24 sm:px-10">
      <SectionHeading eyebrow={eyebrow} title={title} />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      <div className="mt-10">
        <Button href="/projects" variant="ghost">View All Projects</Button>
      </div>
    </section>
  );
}
