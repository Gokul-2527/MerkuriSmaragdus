"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { viewportOnce } from "@/lib/animations";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark-green to-dark py-28 text-white">
      <div className="mx-auto max-w-content px-6 text-center sm:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl leading-[1.15] sm:text-5xl"
        >
          Have a Vision?
          <br />
          Let&rsquo;s Build It.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          Whether you are planning a property development, construction
          project or digital product, let&rsquo;s turn your vision into
          something real.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-10 h-px w-32 origin-center bg-gradient-to-r from-transparent via-secondary to-transparent"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="/contact">Start a Conversation</Button>
          <Button href="/services" variant="light">View Our Services</Button>
        </motion.div>
      </div>
    </section>
  );
}
