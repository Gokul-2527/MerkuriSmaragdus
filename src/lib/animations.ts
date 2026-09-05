import type { Variants } from "framer-motion";

// Reusable Framer Motion variants — imported wherever a section needs
// entrance motion, instead of redefining transitions per component.
// Easing follows the brief: smooth, premium, no bounce.
const EASE = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: EASE } },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: EASE } },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: EASE },
  },
};

export const textReveal: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.9, ease: EASE },
  },
};

// Stagger container — pass staggerChildren/delayChildren via `custom`
// or just spread the defaults below.
export const stagger = (staggerChildren = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

export const viewportOnce = { once: true, margin: "-80px" };
