import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "light";
  className?: string;
};

// Single source of truth for CTA styling across the site.
export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 ease-premium";

  const variants: Record<string, string> = {
    primary: "bg-primary text-white hover:bg-primary-deep",
    ghost:
      "border border-border text-foreground hover:border-secondary hover:text-secondary",
    light:
      "border border-white/25 text-white hover:border-secondary hover:bg-white/5",
  };

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
