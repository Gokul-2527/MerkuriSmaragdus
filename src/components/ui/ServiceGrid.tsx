"use client";

import { motion } from "framer-motion";
import { constructionServices, technologyServices, type ServiceCard } from "@/config/services";
import { viewportOnce } from "@/lib/animations";

function Card({ service, index }: { service: ServiceCard; index: number }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_20px_60px_-20px_rgba(0,103,79,0.35)]"
    >
      <div className="flex items-start justify-between">
        <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
        <span className="font-display text-xs text-border">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mt-6 font-display text-lg text-foreground">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
    </motion.div>
  );
}

// Reusable service-card grid, used on the homepage capabilities section
// and standalone on the Construction / IT Solutions pages.
//
// `vertical` (rather than a raw `services` array prop) is used deliberately:
// service icons are React components, and React Server Components can't pass
// component references as props into a Client Component. Selecting the data
// from config *inside* this client component sidesteps that boundary issue.
export function ServiceGrid({
  vertical,
  label,
}: {
  vertical: "construction" | "technology";
  label?: string;
}) {
  const services = vertical === "construction" ? constructionServices : technologyServices;

  return (
    <div>
      {label && <p className="text-sm font-medium text-primary">{label}</p>}
      <div className={`grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 ${label ? "mt-6" : ""}`}>
        {services.map((s, i) => (
          <Card key={s.title} service={s} index={i} />
        ))}
      </div>
    </div>
  );
}
