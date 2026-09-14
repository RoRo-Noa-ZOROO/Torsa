# TORSA Website — Development Checklist

## Phase 1: Project Setup
- [x] Initialize React + Vite project
- [x] Configure package.json (react, react-dom, react-router-dom, framer-motion)
- [x] Set up index.html with proper meta tags
- [x] Create src/main.jsx entry point
- [x] Move content.json to src/data/content.json

## Phase 2: Global Foundation
- [x] Create src/index.css (reset, CSS variables, light/dark themes, utilities)
- [x] Implement ThemeProvider (context, localStorage, system preference)
- [x] Create ScrollToTop component
- [x] Create AnimatedSection components (FadeIn, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, PageTransition)

## Phase 3: Layout Components
- [x] Build Navbar (desktop links, mobile hamburger, theme toggle, glassmorphism)
- [x] Create Navbar.css (responsive, mobile overlay menu)
- [x] Build Footer (navigation, services, CTA, copyright)
- [x] Create Footer.css

## Phase 4: Pages
- [x] Build Home page (hero, positioning, pillars, why TORSA, DimenServe feature, delivery, services preview, CTA)
- [x] Create Home.css
- [x] Build About page (story, values, founder, metrics, certifications)
- [x] Create About.css
- [x] Build Services page (grid listing of all services)
- [x] Create Services.css
- [x] Build ServiceDetail page (dynamic route with slug)
- [x] Create ServiceDetail.css
- [x] Build DimenServe GRC page (platform features, supports, outcome)
- [x] Create DimenServe.css
- [x] Build Training page (courses, tracks, certifications)
- [x] Create Training.css
- [x] Build Contact page (form, info sidebar)
- [x] Create Contact.css
- [x] Build 404/NotFound page
- [x] Create NotFound.css

## Improvement Phase 2: Visual Redesign & DimenServe Expansion

- [x] Merge dimenserve-content.json into content.json (capabilities, delivery models, comparison, etc.)
- [x] Update aboutMetrics to 20+, 70+, 6+, 10+
- [x] Replace red palette with warm ivory / forest green / muted gold design system
- [x] Remove dark-mode code, toggle, ThemeProvider, and all dark theme CSS
- [x] Make light mode only — single theme
- [x] Reduce heading sizes (H1 hero, H1 page, H2 section) with clear hierarchy
- [x] Add muted gold (#B88A44) for section labels, links, hover states, accents
- [x] Use deep forest green (#1F3D36) for headings, buttons, footer
- [x] Remove emojis from Home Core Service Pillars
- [x] Remove emojis from Training delivery format cards
- [x] Remove numbering from Home Core Service Pillars (no icons/numbers)
- [x] Remove numbering from Home Our Difference section
- [x] Remove numbering from Home Services Preview cards
- [x] Remove numbering from About What We Do section
- [x] Remove numbering from Services page cards
- [x] Remove numbering from ServiceDetail page hero
- [x] Remove numbering from Training Boot Camp topics
- [x] Fix About metrics: 20+ Years, 70+ Projects, 6+ Countries, 10+ Capabilities
- [x] Fix mobile header/navigation — logo, hamburger, overlay, close, overflow
- [x] Remove theme toggle from desktop navbar
- [x] Remove theme toggle from mobile menu
- [x] Add mobile logo in mobile menu header
- [x] Fix mobile menu width to full-screen on small devices
- [x] Redesign DimenServe page: Overview → Capabilities → Solution → Value → Deployment → Delivery Models → Model Comparison → Scalable Partnership → At-a-Glance Table → Discovery CTA
- [x] DimenServe: include all 3 delivery models with torsaProvides/clientManages
- [x] DimenServe: include deployment options (Cloud, On-Prem, Private Cloud)
- [x] DimenServe: include at-a-glance comparison table
- [x] DimenServe: include scalable partnership section
- [x] DimenServe: GRC discovery CTA
- [x] Smooth hover states with gold accents on all cards
- [x] Consistent border radius across all components
- [x] Update accent-line to gold
- [x] Update checkmark icons to gold color
- [x] Update footer headings to gold color
- [x] Update footer text colors for readability on dark background
- [x] Refine page-hero background to soft stone
- [x] Improve button sizing and padding for executive feel
- [x] Production build passes: 349 modules, 0 errors
- [ ] Visual QA via dev server (manual)
- [ ] Test all routes (manual)
- [ ] Test mobile navigation at common widths (manual)
- [ ] Verify no red accents remain in UI (manual)
