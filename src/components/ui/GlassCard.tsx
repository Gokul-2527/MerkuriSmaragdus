import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border backdrop-blur-xl transition-colors duration-300",
        dark
          ? "border-white/10 bg-white/5"
          : "border-border bg-white/70",
        className
      )}
    >
      {children}
    </div>
  );
}
