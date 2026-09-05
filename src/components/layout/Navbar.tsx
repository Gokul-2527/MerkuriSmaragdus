"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-6">
      <motion.nav
        animate={{
          width: scrolled ? "min(1080px, 94%)" : "min(1240px, 96%)",
          paddingTop: scrolled ? 8 : 14,
          paddingBottom: scrolled ? 8 : 14,
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "flex w-full items-center justify-between rounded-full px-4 sm:px-6 backdrop-blur-xl transition-all duration-300",
          scrolled
            ? "border border-[#00674F]/40 bg-[#090909]/85 text-white shadow-[0_8px_32px_rgba(0,103,79,0.37)]"
            : "border border-[#00674F]/20 bg-white/60 text-[#00674F] shadow-sm"
        )}
      >
        <Link href="/" className="flex items-center gap-2 sm:gap-2.5">
          <div className="relative h-7 w-7 shrink-0 sm:h-8 sm:w-8">
            <Image
              src="/images/Logo.png"
              alt="Merkuri Smaragdus Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex items-baseline gap-1 sm:gap-1.5">
            <span
              className={cn(
                "font-display text-base font-semibold tracking-wide transition-colors duration-300 sm:text-lg",
                scrolled ? "text-white" : "text-[#00674F]"
              )}
            >
              MERKURI
            </span>
            <span
              className={cn(
                "hidden text-[10px] uppercase tracking-[0.28em] transition-colors duration-300 sm:inline",
                scrolled ? "text-emerald-200" : "text-[#00674F]/70"
              )}
            >
              Smaragdus
            </span>
          </div>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "group relative text-sm font-medium transition-colors duration-300",
                  scrolled
                    ? "text-white/90 hover:text-white"
                    : "text-[#00674F]/90 hover:text-[#00674F]"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 ease-premium group-hover:w-full",
                    scrolled ? "bg-emerald-300" : "bg-[#00674F]"
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button
            href="/contact"
            variant={scrolled ? "light" : "primary"}
            className="px-5 py-2.5 text-xs"
          >
            Let&rsquo;s Build Together
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-full p-1.5 transition-colors duration-300 lg:hidden",
            scrolled
              ? "text-white hover:bg-white/10"
              : "text-[#00674F] hover:bg-[#00674F]/10"
          )}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-3 right-3 top-16 z-50 max-w-md rounded-2xl border border-white/15 bg-[#090909]/95 p-5 text-white shadow-2xl backdrop-blur-2xl sm:left-6 sm:right-6 sm:top-20 lg:hidden"
            >
              <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                  Navigation
                </span>
                <span className="text-[10px] uppercase tracking-widest text-white/50">
                  Merkuri Smaragdus
                </span>
              </div>

              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3.5 py-2.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div
                className="mt-4 pt-2 border-t border-white/10"
                onClick={() => setOpen(false)}
              >
                <Button
                  href="/contact"
                  variant="light"
                  className="w-full justify-center text-xs py-2.5"
                >
                  Let&rsquo;s Build Together
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
