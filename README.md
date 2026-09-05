# Merkuri Smaragdus — Corporate Website

Premium marketing site for **Merkuri Smaragdus Construction & Contracts LLP**,
covering both business verticals: Construction, Real Estate & Infrastructure,
and IT, Software & Digital Technology.

## Stack

Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS · Framer Motion · Lucide React

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Centralized theming

All brand colors live in **two synced places**:

- `src/config/theme.ts` — token values consumed directly by components/logic
- `src/app/globals.css` (`:root` block) — the same values as CSS variables, read by Tailwind

Change a hex value in `globals.css` and every Tailwind color utility
(`bg-primary`, `text-secondary`, `border-border`, etc.) updates site-wide, since
`tailwind.config.ts` maps Tailwind's color keys straight to the CSS variables.

## Data-driven content

Nothing is hardcoded inside components:

- `src/config/navigation.ts` — nav links, footer categories
- `src/config/services.ts` — construction & technology service cards + offering lists
- `src/config/projects.ts` — project gallery, process timeline steps, "why us" features

## Reusable animation system

`src/lib/animations.ts` exports shared Framer Motion variants (`fadeUp`, `fadeIn`,
`slideLeft`, `slideRight`, `scaleIn`, `textReveal`, `stagger`) so no component
redefines its own transition config. `src/components/ui/Reveal.tsx` and
`StaggerGroup.tsx` wrap these into drop-in scroll-reveal components.

## What's built

The homepage (`src/app/page.tsx`) assembles every section from the brief:
cinematic hero with scroll-linked parallax, "Who We Are" intro, the two
interactive business-vertical panels, capability cards, a scroll-driven
horizontal project showcase (with a mobile grid fallback), the "Vision to
Reality" process timeline, the dark technology section, "Why Partner With
Us", the about/story section, a full-width CTA, and a working contact form UI.

The floating glassmorphism navbar, dark footer, page-transition wrapper,
desktop-only custom cursor, and custom scrollbar are all wired up globally
in `src/app/layout.tsx`.

`/about`, `/construction`, `/it-solutions`, `/projects`, `/services` and
`/contact` are referenced throughout the nav and CTAs as routes — add
`src/app/<route>/page.tsx` files reusing the same section components and
config data to build them out as standalone pages.

## Notes

- `prefers-reduced-motion` is respected globally (see `globals.css`).
- No fabricated company statistics are used — stat blocks use capability
  statements per the brief, ready to swap in real numbers later.
- Images are placeholder Unsplash photography referenced by URL in
  `src/config/projects.ts` and section files — swap in real project/brand
  photography before launch.
