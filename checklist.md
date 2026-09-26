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

## Phase 5: Content & Layout Updates (2026-09-26)

### Root Cause Findings
- **Vercel logo 404**: there was no `public/` directory. The logo sat at the repo root as
  `torsa logo.png` (with a space) and was never copied into the build output. Vite only serves
  root-relative URLs (`/torsa-logo.png`) from `public/`. Fixed by creating `public/` and moving
  the asset to `public/torsa-logo.png` — it now emits as an unhashed `dist/torsa-logo.png`.
- **Blank homepage block**: the hero's right-hand column rendered `.hero__card`, a decorative
  placeholder made of three empty grey bars. Removed it and collapsed the hero to one column.
- **Card size asymmetry**: `StaggerItem` wrappers are direct grid children, so cards sized to
  their own content instead of the row. Added `align-items: stretch` + flex wrappers.

### Homepage
- [x] Fix logo not loading in Vercel production — moved asset into `public/torsa-logo.png`
- [x] Change hero title: → "Technology Partner that moves your organisation forward"
- [x] Change hero body: replace "organisations across Africa" with "organizations"
- [x] Swap positions of "AI Governance" with "Agile, Lean" in coreServicePillars
- [x] Swap positions of "DimenServe GRC" with "Bespoke Software" in coreServicePillars
- [x] Left-align "How We Work" and "Delivery Approach" section headings (shared styles kept)
- [x] Remove blank block on home page (removed empty `.hero__card` placeholder)
- [x] Fix box sizes symmetry across site — equal-height grid cards

### About Page
- [x] Standardize CTA: "Talk to TORSA" → "Start a Conversation"

### Services Page
- [x] Change page hero title: → "Technology Capability, Advisory & Delivery"
- [x] Swap "Fractional CIO" with "Agile, Lean..." in services grid
- [x] Swap "Specialist Resource" with "Strategic Technology Partnership..." in services grid
- [x] Standardize CTA: "Start a Conversation" (replaced "Talk to TORSA")
- [x] Fix "Back to Services" button alignment
- [x] Convert "Back to Services" from a plain text link into a real themed button (`btn btn--secondary`)
- [x] Force a line break after the "Back to Services" button so the "— Service" gold label renders below it
- [x] Add responsive rule so the back button goes full-width under 480px

### Training Page
- [x] Update CTA body text to bespoke-programme wording
- [x] Standardize CTA button text: "Get in Touch" → "Start a Conversation"
- [x] Add training calendar placeholder (data-driven `calendar` block + UI)

### Global Fixes
- [x] Fix Vercel logo loading issue (created `public/`, corrected all asset paths)
- [x] Add `vercel.json` SPA rewrite so deep links don't 404 in production
- [x] Ensure consistent box/card sizes across all pages
- [x] Standardize CTA text across all pages ("Start a Conversation")
- [x] Remove temp scripts (`apply-content.mjs`, `fix-content.js`, logs)
- [x] Rewrite `.gitignore` as UTF-8 (it was UTF-16) and add `node_modules/`, `dist/`, logs, `.env*`
- [x] Confirm `node_modules/` no longer appears in `git status` (verified via `git check-ignore`)
- [x] Document local run + manual GitHub push workflow in `README.md`
- [x] **Fix dev-server 500 (corrupted `node_modules`)** — `node-releases` and `isexe` were installed
      with missing files, so Babel failed at pre-transform. Reinstalled from scratch (289 packages).
- [x] Add missing `.eslintrc.cjs` (the `lint` script had no config file, so it always errored)
- [x] Production build passes: 349 modules, 0 errors
- [x] Verified `/torsa-logo.png` → HTTP 200, all routes → HTTP 200
- [x] Verified all 11 routes + modules return 200 on the dev server (port 3000)
- [ ] Decide whether to `git rm -r --cached dist` (build output is currently tracked from an earlier commit)
- [ ] Visual QA via dev server (manual)
- [ ] Test all routes (manual)
- [ ] Test mobile navigation at common widths (manual)
- [ ] Verify no red accents remain in UI (manual)
- [ ] **TODO: supply real training calendar dates** to replace the placeholder
- [ ] **TODO: redeploy to Vercel and confirm the logo resolves on the live URL**
