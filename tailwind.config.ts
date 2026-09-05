import type { Config } from "tailwindcss";

// Tailwind reads the same tokens as src/config/theme.ts via CSS variables,
// so a change to one source of truth (theme.ts -> globals.css vars) updates
// both plain CSS and every Tailwind utility across the site.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-deep": "var(--primary-deep)",
        secondary: "var(--secondary)",
        dark: "var(--dark)",
        "dark-green": "var(--dark-green)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        border: "var(--border)",
        "emerald-light": "var(--emerald-light)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      maxWidth: {
        content: "1440px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        drawLine: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        drawLine: "drawLine 1.1s cubic-bezier(0.16,1,0.3,1) forwards",
        floatSlow: "floatSlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
