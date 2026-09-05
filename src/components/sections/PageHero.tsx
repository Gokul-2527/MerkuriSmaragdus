"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

// Shared interior-page header — light version with subtle grid and dark text
export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-40 text-slate-900 sm:pt-48">
      {/* Light subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#00674F 1px, transparent 1px), linear-gradient(90deg, #00674F 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Top subtle emerald gradient blur for warmth */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-96 -translate-x-1/2 rounded-full bg-[#00674F]/10 blur-3xl" />

      <div className="relative mx-auto max-w-content px-6 sm:px-10">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="eyebrow text-[#00674F]"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
          className="mt-5 max-w-2xl font-display text-4xl leading-[1.1] text-slate-900 sm:text-6xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            {description}
          </motion.p>
        )}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
          className="mt-10 h-px w-32 origin-left bg-gradient-to-r from-[#00674F] to-transparent"
        />
      </div>
    </section>
  );
}
