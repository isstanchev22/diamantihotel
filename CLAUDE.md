# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server (http://localhost:5173)
npm run build      # Type-check (tsc -b) then build to dist/
npm run lint       # ESLint check
npm run preview    # Preview production build locally
```

There is no test suite. TypeScript strict mode (`noUnusedLocals`, `noUnusedParameters`) acts as the primary correctness check — `npm run build` will catch type errors.

## Architecture

This is a static React 19 SPA (no backend) for Hotel Diamanti, a hotel in Sozopol, Bulgaria.

**Routing:** Single route (`/`) renders `HomePage.tsx`, which composes 11 section components in order. Navigation is hash-based (`#rooms`, `#restaurant`, etc.) using `scrollToSection()` from `src/lib/scroll.ts`.

**Localization:** All user-facing text is bilingual (Bulgarian/English). Every string is typed as `LocalizedString = { bg: string; en: string }`. The active locale (`'bg' | 'en'`) is stored in `LanguageContext` (`src/context/LanguageContext.tsx`) and consumed via `useLanguage()`. All data files in `src/data/` use this pattern.

**Data layer:** All content is static — no API calls. Content lives in `src/data/`:
- `siteData.ts` — navigation, CTAs, contact info, booking engine URL
- `roomsData.ts` — room types with amenities, gallery images, occupancy
- `reviewsData.ts`, `faqData.ts`, `guideData.ts`, `schemaData.ts`, `imageData.ts`

**Forms:** Three Formspree forms (contact, wedding, restaurant). Submissions go through `submitFormEnquiry()` in `src/lib/formSubmission.ts`. Validation functions live alongside in `src/lib/`. Endpoints must be configured in `.env` (see `.env.example`).

**Booking:** Reservations open the Clock Software booking engine via an external URL defined in `siteData.ts`. The `<BookingCta>` component wraps this link.

**Styling:** Tailwind CSS with a custom Diamanti palette defined in `tailwind.config.js`:
- `diamanti-ivory` #F6F2EB · `diamanti-navy` #153248 · `diamanti-sea` #5F7D86
- `diamanti-sand` #DCC7A6 · `diamanti-stone` #D7D3CC · `diamanti-terracotta` #B97A5B

Fonts: Cormorant Garamond (display), Manrope/Inter (body) — loaded via Google Fonts in `index.html`.

**Key shared components:** `SmartImage` (image with error fallback), `RevealOnScroll` (IntersectionObserver fade-in, respects `prefers-reduced-motion`), `BookingCta` (booking button), `MobileBookingBar` (sticky bottom bar on mobile only).

## Known TODOs in the codebase

- GA4 measurement ID is not yet inserted in `index.html` (placeholder comment exists)
- Room/gallery images are hosted on imgbb (external CDN), not self-hosted
