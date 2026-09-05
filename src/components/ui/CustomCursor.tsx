"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Desktop-only custom cursor. Disabled entirely on touch devices and
// respects prefers-reduced-motion by rendering nothing.
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40 });
  const springY = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduced) return;

    setEnabled(true);
    document.body.classList.add("cursor-enabled");

    function move(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [data-cursor-hover]"));
    }

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("cursor-enabled");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      style={{ translateX: springX, translateY: springY }}
      className="pointer-events-none fixed left-0 top-0 z-[100] -ml-2 -mt-2 h-4 w-4 rounded-full border border-secondary mix-blend-difference"
      animate={{
        scale: hovering ? 2.2 : 1,
        backgroundColor: hovering ? "rgba(156,124,36,0.5)" : "rgba(0,103,79,0.4)",
      }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}
