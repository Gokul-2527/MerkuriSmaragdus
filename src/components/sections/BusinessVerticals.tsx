"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Building2, Cpu } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { constructionOfferings, technologyOfferings } from "@/config/services";

const panels = [
  {
    key: "construction",
    icon: Building2,
    title: "Construction & Real Estate",
    image:
      "https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=1600&auto=format&fit=crop",
    href: "/construction",
    offerings: constructionOfferings,
  },
  {
    key: "technology",
    icon: Cpu,
    title: "IT & Digital Technology",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop",
    href: "/it-solutions",
    offerings: technologyOfferings,
  },
];

export function BusinessVerticals() {
  return (
    <section className="bg-dark py-28 text-white">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <SectionHeading
          eyebrow="Two Industries"
          title="Two Industries. One Vision."
          light
        />
      </div>

      <div className="mt-16 grid gap-[1px] bg-white/10 lg:grid-cols-2">
        {panels.map((panel) => (
          <motion.a
            key={panel.key}
            href={panel.href}
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="group relative flex min-h-[520px] flex-col justify-end overflow-hidden bg-dark p-8 sm:p-12"
          >
            <motion.div
              className="absolute inset-0"
              variants={{ rest: { scale: 1.02 }, hover: { scale: 1.1 } }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image src={panel.image} alt={panel.title} fill className="object-cover" />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-dark/20"
              variants={{ rest: { opacity: 0.9 }, hover: { opacity: 0.75 } }}
              transition={{ duration: 0.5 }}
            />

            <div className="relative z-10">
              <motion.div
                variants={{ rest: { rotate: 0 }, hover: { rotate: -8 } }}
                transition={{ duration: 0.4 }}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-secondary/40 bg-dark/60 backdrop-blur"
              >
                <panel.icon className="h-5 w-5 text-secondary" />
              </motion.div>

              <motion.h3
                variants={{ rest: { y: 0 }, hover: { y: -8 } }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 font-display text-3xl sm:text-4xl"
              >
                {panel.title}
              </motion.h3>

              <motion.ul
                initial="rest"
                variants={{
                  rest: { height: 0, opacity: 0, marginTop: 0 },
                  hover: { height: "auto", opacity: 1, marginTop: 20 },
                }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 gap-x-6 gap-y-1.5 overflow-hidden text-sm text-white/70 sm:grid-cols-2"
              >
                {panel.offerings.map((o) => (
                  <li key={o} className="truncate">{o}</li>
                ))}
              </motion.ul>

              <motion.span
                variants={{ rest: { x: 0 }, hover: { x: 6 } }}
                transition={{ duration: 0.3 }}
                className="mt-6 inline-flex items-center gap-2 border-b border-secondary pb-1 text-sm text-secondary"
              >
                View capabilities
                <ArrowUpRight className="h-4 w-4" />
              </motion.span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
