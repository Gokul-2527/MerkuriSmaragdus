"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

const EASE = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.6 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.28]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={ref}
      className="relative h-[110vh] w-full overflow-hidden bg-dark"
    >
      {/* Background image — slow zoom on load, continues scaling on scroll */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 2.2, ease: EASE }}
        style={{ scale: imageScale }}
      >
        <Image
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2400&auto=format&fit=crop"
          alt="Modern architectural structure under a clear sky"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Dark overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/70 to-dark"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: EASE }}
      />

      {/* Architectural decorative lines — draw themselves on load, drift on scroll */}
      <motion.svg
        style={{ y: gridY }}
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        {[120, 340, 620, 980, 1260].map((x, i) => (
          <motion.line
            key={x}
            x1={x}
            y1="0"
            x2={x}
            y2="900"
            stroke="#F7F8F5"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, delay: 0.4 + i * 0.1, ease: EASE }}
          />
        ))}
      </motion.svg>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-content flex-col justify-center px-6 sm:px-10"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.span variants={item} className="eyebrow ">
            Construction • Real Estate • Technology
          </motion.span>

          <div className="mt-6 overflow-hidden">
            <motion.h1
              variants={item}
              className="font-display text-4xl leading-[1.08] text-primary sm:text-6xl lg:text-7xl"
            >
              Building Spaces.
              <br />
              <span className="text-secondary">Engineering Progress.</span>
              <br />
              Creating <span className="text-secondary">Tomorrow.</span>
            </motion.h1>
          </div>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg"
          >
            Merkuri Smaragdus Construction &amp; Contracts LLP delivers
            integrated construction, real estate, infrastructure and technology
            solutions built around quality, innovation and long-term value.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="/services">Explore Our Services</Button>
            <Button
              href="/contact"
              variant="light"
              className="text-primary font-bold"
            >
              Start a Project
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-14 h-px w-40 origin-left bg-gradient-to-r from-secondary to-transparent"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-[11px] uppercase text-primary font-bold tracking-[0.28em]">
            Scroll
          </span>
          <ArrowDown className="h-4 w-4 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
