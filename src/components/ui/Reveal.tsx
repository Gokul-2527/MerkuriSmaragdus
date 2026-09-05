"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";

type RevealProps = {
  children: React.ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
  as?: "div" | "span";
};

// Generic scroll-triggered reveal wrapper. Swap `variants` for any
// preset from lib/animations.ts (fadeIn, slideLeft, scaleIn, ...).
export function Reveal({
  children,
  variants = fadeUp,
  delay = 0,
  className,
  as = "div",
}: RevealProps) {
  const Component = motion[as];
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </Component>
  );
}
