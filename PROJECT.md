# TORSA Consulting — Website Project

## Overview
A modern, responsive single-page application (SPA) website for **TORSA Consulting**, a technology advisory, transformation and delivery firm based in Africa. Built with React + Vite, styled with CSS custom properties, and animated with Framer Motion.

## Tech Stack
- **Framework:** React 18 + Vite 5
- **Routing:** React Router DOM v6
- **Animations:** Framer Motion v10
- **Styling:** CSS with CSS custom properties (no Tailwind/Bootstrap)
- **Fonts:** Inter (Google Fonts)
- **Content:** Centralized `src/data/content.json`

## Architecture
```
src/
├── components/
│   ├── AnimatedSection.jsx   — Reusable animation wrappers (FadeIn, Stagger, etc.)
│   ├── Footer.jsx / Footer.css
│   ├── Navbar.jsx / Navbar.css
│   ├── ScrollToTop.jsx       — Scrolls to top on route change
│   └── ThemeProvider.jsx     — Light-only theme context (no dark mode)
├── data/
│   └── content.json          — All site content (single source of truth)
├── pages/
│   ├── Home.jsx / Home.css
│   ├── About.jsx / About.css
│   ├── Services.jsx / Services.css
│   ├── ServiceDetail.jsx / ServiceDetail.css
│   ├── DimenServe.jsx / DimenServe.css
│   ├── Training.jsx / Training.css
│   ├── Contact.jsx / Contact.css
│   └── NotFound.jsx / NotFound.css
├── App.jsx                   — Router + layout shell
├── main.jsx                  — Entry point
└── index.css                 — Global reset, CSS variables, utilities
```

## Pages
| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, positioning, pillars, why TORSA, services preview, CTA |
| `/about` | About | Story, values, metrics, experience, commitment |
| `/services` | Services | Grid of all 10 services |
| `/services/:slug` | ServiceDetail | Individual service deep-dive |
| `/dimenserve-grc` | DimenServe | Full GRC product page with models, comparison, CTA |
| `/training` | Training | Training & capability development |
| `/contact` | Contact | Contact form + information |
| `*` | NotFound | 404 page |

## Design System

### Color Palette
- **Warm ivory:** `#F7F4EE` — main background
- **Soft cream:** `#FFFDF8` — card/surface background
- **Soft stone:** `#E8E3DA` — borders, subtle backgrounds
- **Deep forest green:** `#1F3D36` — headings, buttons, footer, primary text
- **Forest green:** `#2F5D50` — secondary green, hover states
- **Muted gold:** `#B88A44` — highlights, links, hover states, section labels, accents
- **Warm grey:** `#B7B0A5` — muted text, borders
- **Red:** Reserved exclusively for the TORSA logo — not used in UI

### Typography
- **Font:** Inter (Google Fonts), weights 300–900
- **H1 (hero):** clamp(2.4rem, 4.5vw, 3.4rem), weight 800
- **H1 (page hero):** clamp(2rem, 4vw, 3rem), weight 800
- **H2 (section):** clamp(1.5rem, 2.5vw, 2rem), weight 700
- **H3 (card):** 0.95–1.15rem, weight 700
- **Body:** 0.9–1rem, line-height 1.7–1.8
- **Labels:** 0.7rem, weight 600, letter-spacing 0.12em, uppercase, gold color

### Layout
- **Containers:** max-width 1200px (default), 1400px (wide)
- **Section spacing:** 120px (desktop), 80px (tablet), 64px (mobile)
- **Nav height:** 72px

### Design Principles
- **Theme:** Light only (no dark mode)
- **Border radius:** 6px (sm), 10px (md), 16px (lg), 24px (xl)
- **Navigation:** Fixed top nav with glassmorphism on scroll, mobile slide-out menu
- **Animations:** Scroll-triggered fade-in, staggered reveals, page transitions
- **Accessibility:** ARIA labels, focus-visible states, reduced-motion support

## Getting Started
```bash
npm install
npm run dev       # Development server
npm run build     # Production build
npm run preview   # Preview production build
```

## Content Management
All text content lives in `src/data/content.json`. To update copy, edit that single file — no code changes needed for content updates.
