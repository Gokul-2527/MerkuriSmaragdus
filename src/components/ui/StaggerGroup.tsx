"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

// Wrap a list of children that should stagger in as a unit — used for
// service cards, why-us features, process steps, etc.
export function StaggerGroup({
  children,
  className,
  staggerChildren = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={stagger(staggerChildren)}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}
