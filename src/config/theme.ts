// Centralized design tokens for Merkuri Smaragdus.
// Change a value here and it propagates everywhere — Tailwind classes,
// CSS variables, and any component that imports `theme` directly.

export const theme = {
  colors: {
    primary: "#00674F",       // Emerald — primary brand color
    primaryDeep: "#004D3B",   // Deep emerald
    secondary: "#9C7C24",     // Gold — accent / tagline color
    dark: "#071C17",          // Dark background
    darkGreen: "#0B2922",     // Secondary dark surface
    background: "#F7F8F5",    // Light background
    white: "#FFFFFF",
    foreground: "#16231F",    // Body copy on light surfaces
    muted: "#68736F",         // Secondary / muted text
    border: "rgba(0, 103, 79, 0.15)",
    emeraldLight: "#4FBFA0",  // Readable emerald tint for headings on dark backgrounds
  },
  gradients: {
    heroOverlay:
      "linear-gradient(180deg, rgba(7,28,23,0.35) 0%, rgba(7,28,23,0.75) 55%, rgba(7,28,23,0.96) 100%)",
    emeraldGlow:
      "radial-gradient(circle at 30% 20%, rgba(0,103,79,0.35), transparent 60%)",
    goldLine: "linear-gradient(90deg, transparent, #9C7C24, transparent)",
    darkPanel: "linear-gradient(160deg, #0B2922 0%, #071C17 100%)",
  },
  fonts: {
    display: "var(--font-display)",
    body: "var(--font-body)",
  },
} as const;

export type Theme = typeof theme;
