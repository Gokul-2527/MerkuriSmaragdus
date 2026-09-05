"use client";

import { motion } from "framer-motion";
import { Smartphone, Globe, Cloud, Cpu, ShoppingCart, Building2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { viewportOnce } from "@/lib/animations";

const capabilities = [
  { icon: Smartphone, label: "Mobile" },
  { icon: Globe, label: "Web" },
  { icon: Cloud, label: "Cloud" },
  { icon: Cpu, label: "AI-ready Infrastructure" },
  { icon: ShoppingCart, label: "E-Commerce" },
  { icon: Building2, label: "Enterprise Software" },
];

export function TechnologySection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark-green to-dark py-28 text-white">
      {/* Subtle grid + glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(#F7F8F5 1px, transparent 1px), linear-gradient(90deg, #F7F8F5 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <motion.div
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/30 blur-[120px]"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-content px-6 sm:px-10">
        <SectionHeading
          eyebrow="Technology"
          title="Engineering the Digital Future"
          description="We build digital products that help businesses operate, connect and scale."
          light
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-8 text-center backdrop-blur-sm"
            >
              <cap.icon className="h-6 w-6 text-secondary" strokeWidth={1.5} />
              <span className="text-sm text-white/80">{cap.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <Button href="/it-solutions" variant="light">Explore IT Solutions</Button>
        </div>
      </div>
    </section>
  );
}
