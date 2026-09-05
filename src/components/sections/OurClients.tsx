"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  { name: "Ayil Logo", src: "/clients/AyilLogo.png" },
  { name: "Iatome", src: "/clients/iatome.png" },
  { name: "Mastery Abroad", src: "/clients/masteryabroad.png" },
  { name: "SK Wooden Lights", src: "/clients/skwoodenlights.png" },
];

export function ClientScroller() {
  // Duplicate array to enable seamless infinite looping
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="w-full overflow-hidden bg-white/5 py-12 backdrop-blur-sm border-y border-[#00674F]/10">
      <div className="mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00674F]">
          Trusted By Our Valued Clients
        </p>
      </div>

      <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex flex-nowrap items-center gap-16 py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="relative flex h-24 w-48 shrink-0 items-center justify-center grayscale opacity-75 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-105"
            >
              <Image
                src={client.src}
                alt={client.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
