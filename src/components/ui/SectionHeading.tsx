import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "mt-4 font-display text-4xl leading-[1.1] sm:text-5xl",
            light ? "text-white" : "text-foreground"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-5 text-base leading-relaxed sm:text-lg",
              light ? "text-white/70" : "text-muted"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
