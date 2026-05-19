# Implementation Plan: RankVillage Missing Pages

## Overview

Build 13 new public-facing marketing pages for RankVillage AI, plus shared reusable components, static data files, and footer link updates. All pages follow the existing Next.js 16 App Router pattern (async Server Components, `params` as `Promise`), use the `bg-[#080812]` / glassmorphism design system, and `lucide-react` icons throughout.

Implementation order: data layer first → shared components → pages (high-priority first) → footer updates.

---

## Tasks

- [x] 1. Create static data layer
  - [x] 1.1 Create `src/data/services.ts` with `ServiceData` interface, `SERVICES` array (9 entries), and `getServiceBySlug` function
    - Define `ServiceData` interface with all required fields: `slug`, `title`, `tagline`, `description`, `icon`, `color`, `heroStats`, `benefits`, `process`, `faqs`, `results`, `relatedServices`
    - Populate all 9 services: `web-development`, `seo-services`, `local-seo`, `technical-seo`, `google-ads`, `meta-ads`, `ui-ux-design`, `ecommerce-development`, `website-maintenance`
    - Each service must have at least 3 `heroStats`, 6 `benefits`, 5 `process` steps, 5–6 `faqs`, 3 `results`, and 3 `relatedServices` slugs
    - `getServiceBySlug` returns matching `ServiceData` or `undefined`
    - All slugs must match `^[a-z0-9]+(-[a-z0-9]+)*$`
    - _Requirements: 2.1, 2.2, 2.3, 2.4_

  - [ ]* 1.2 Write property tests for `getServiceBySlug` and `generateStaticParams`
    - **Property 1: getServiceBySlug lookup correctness** — for any slug in `SERVICES`, returns defined object with matching slug field
    - **Property 2: getServiceBySlug returns undefined for unknown slugs** — for any string not in SERVICES slugs, returns `undefined`
    - **Property 3: generateStaticParams produces one entry per service with no duplicates** — length equals `SERVICES.length`, all slugs distinct
    - **Property 4: All service slugs are URL-safe kebab-case strings** — each slug matches `^[a-z0-9]+(-[a-z0-9]+)*$`
    - **Property 5: All service data entries have all required fields populated** — no null/undefined/empty required fields
    - **Validates: Requirements 2.1, 2.2, 2.3, 2.4, 5.2**

  - [x] 1.3 Create `src/data/portfolio.ts` with `PortfolioProject` interface and sample data array
    - Define `PortfolioProject` interface: `id`, `title`, `client`, `category` (`"web" | "ecommerce" | "seo" | "local-seo" | "ui-ux"`), `industry`, `techStack`, `results`, `description`
    - Include at least 6 sample projects covering all 5 categories
    - _Requirements: 2.5_

  - [x] 1.4 Create `src/data/case-studies.ts` with `CaseStudy` interface and sample data array
    - Define `CaseStudy` interface: `id`, `slug`, `clientName`, `industry`, `challenge`, `solution`, `metrics` (trafficGrowth, rankingImprovement, lighthouseScore, revenueImpact, timeframe), optional `testimonial`
    - Include at least 4 sample case studies from different Indian industries
    - _Requirements: 2.5_

  - [x] 1.5 Create `src/data/testimonials.ts` with `Testimonial` interface and sample data array
    - Define `Testimonial` interface: `id`, `name`, `role`, `business`, `city`, `rating` (1–5), `quote`, optional `avatar`/`logo`/`videoUrl`, `service`
    - Include at least 12 testimonials covering multiple services and Indian cities
    - _Requirements: 2.5_

  - [x] 1.6 Create `src/data/industries.ts` with `Industry` interface and data array
    - Define `Industry` interface: `slug`, `name`, `icon`, `description`, `useCases`, `stats`, `color`
    - Include all 10 required industries: restaurant, dairy, real-estate, coaching, retail, medical, gym, hotel, automobile, salon
    - _Requirements: 2.5, 11.4_

  - [x] 1.7 Create `src/data/blog.ts` with `BlogPost` interface and sample data array
    - Define `BlogPost` interface: `id`, `slug`, `title`, `excerpt`, `category` (`"seo-tips" | "web-dev" | "ai-tools" | "local-business" | "speed"`), `publishedAt`, `readTime`, `featured`
    - Include at least 8 sample posts covering all 5 categories, with one marked `featured: true`
    - _Requirements: 2.5_

  - [x] 1.8 Create `src/data/careers.ts` with `CareerRole` interface and sample data array
    - Define `CareerRole` interface: `id`, `title`, `department`, `type` (`"remote" | "hybrid" | "on-site"`), `location`, `description`, `requirements`
    - Include at least 4 open roles across different departments
    - _Requirements: 2.5_

- [ ] 2. Build shared reusable components
  - [x] 2.1 Create `src/components/PageHero.tsx` Server Component
    - Accept props: `badge?: string`, `badgeIcon?: LucideIcon`, `title: React.ReactNode`, `subtitle: string`, `cta?: { label, href, variant }`
    - Render badge pill (glass + border), h1 with optional `gradient-text` span, subtitle paragraph
    - Match visual style of existing section headers in `Features.tsx` and `WhyChooseUs.tsx`
    - _Requirements: 1.1, 3.2, 4.2, 5.6_

  - [x] 2.2 Create `src/components/ServiceCard.tsx` Server Component
    - Accept props: `icon: LucideIcon`, `title`, `description`, `href`, `features: string[]`, `color`
    - Render as a `glass-card` with icon, title, 3–4 feature bullets, and a "Learn More →" link
    - Color prop drives icon background and border accent (purple/blue/cyan/pink)
    - _Requirements: 4.3, 5.11_

  - [x] 2.3 Create `src/components/FAQAccordion.tsx` Client Component
    - Accept props: `items: Array<{ question: string; answer: string }>`, optional `allowMultiple?: boolean`
    - Implement expand/collapse toggle per item using local state
    - Single-open mode by default (clicking open item closes it)
    - Use `Plus`/`Minus` icons from `lucide-react`, matching existing `FAQ.tsx` visual style
    - Accessible: `aria-expanded`, `aria-controls`, `id` attributes on button/panel pairs
    - _Requirements: 8.5, 8.6, 5.10_

  - [ ]* 2.4 Write property test for `FAQAccordion` toggle idempotency
    - **Property 11: FAQ accordion toggle is idempotent over two clicks** — clicking an item twice returns it to its original state
    - **Validates: Requirements 8.5, 8.6**

  - [x] 2.5 Create `src/components/TestimonialCard.tsx` Server Component
    - Accept `Testimonial` object as prop
    - Render: avatar placeholder (initials in gradient circle), name, role, business, city, star rating, quote
    - Use `glass-card` styling with subtle star color accent
    - _Requirements: 9.5_

  - [x] 2.6 Create `src/components/CaseStudyCard.tsx` Server Component
    - Accept `CaseStudy` object as prop
    - Render: client name, industry badge, challenge summary, before/after metric pills (trafficGrowth, rankingImprovement, lighthouseScore), optional testimonial quote
    - _Requirements: 7.4_

  - [x] 2.7 Create `src/components/PortfolioCard.tsx` Server Component
    - Accept `PortfolioProject` object as prop
    - Render: CSS illustration placeholder (icon + gradient bg), title, client, category badge, tech stack chips, result metrics
    - _Requirements: 6.3_

  - [x] 2.8 Create `src/components/IndustryCard.tsx` Server Component
    - Accept `Industry` object as prop
    - Render: lucide icon, industry name, description, use-cases list (3 items), stat badges
    - _Requirements: 11.3_

  - [x] 2.9 Create `src/components/BlogCard.tsx` Server Component
    - Accept `BlogPost` object as prop
    - Render: category badge, title, excerpt, read time, published date, "Read More →" link to `/blog/${post.slug}`
    - _Requirements: 13.5_

  - [x] 2.10 Create `src/components/CareerCard.tsx` Server Component
    - Accept `CareerRole` object as prop
    - Render: role title, department, employment type badge (remote/hybrid/on-site), location, description summary, "Apply Now" CTA linking to `mailto:careers@rankvillage.ai`
    - _Requirements: 14.4_

- [ ] 3. Checkpoint — verify data and components compile
  - Ensure all data files export valid TypeScript with no type errors
  - Ensure all new components render without runtime errors when passed sample data
  - Ask the user if questions arise before proceeding to pages.

- [-] 4. Build the About Us page (`/about`)
  - [ ] 4.1 Create `src/app/about/page.tsx` Server Component with metadata export
    - Shell: `<main className="min-h-screen bg-[#080812] overflow-x-hidden">`, `<Navbar />`, `<div className="pt-16">`, `<Footer />`
    - Export `metadata` with title `"About Us | RankVillage AI"` and description
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 3.1_

  - [ ] 4.2 Implement Mission & Vision section in `about/page.tsx`
    - Two `glass-card` cards side by side (grid-cols-2 on desktop, stacked on mobile)
    - Mission card: Target/Crosshair icon, mission statement copy
    - Vision card: Telescope/Eye icon, vision statement copy
    - _Requirements: 3.3_

  - [ ] 4.3 Implement Founder Story section in `about/page.tsx`
    - Left: narrative text block with founder background (RankVillage AI origin story, Indian local business focus)
    - Right: vertical timeline with 4–5 milestones (founding year, first 100 clients, product launches, current scale)
    - Use `lucide-react` icons for timeline dots
    - _Requirements: 3.4_

  - [ ] 4.4 Implement Stats Strip section in `about/page.tsx`
    - 4 stat cards in a horizontal row: "500+ Clients Served", "50+ Cities Covered", "340% Avg Ranking Improvement", "3+ Years in Operation"
    - Each card: large `gradient-text` number, label below, subtle icon
    - _Requirements: 3.5_

  - [ ] 4.5 Implement Skills & Expertise and Team sections in `about/page.tsx`
    - Skills grid: 6 icon cards — SEO (`Search`), Web Dev (`Code2`), Local SEO (`MapPin`), Ads (`Megaphone`), Analytics (`BarChart3`), AI (`Brain`) from `lucide-react`
    - Team section: one founder `glass-card` (avatar initials, name, role, bio), plus a "We're Hiring" CTA card linking to `/careers`
    - Append existing `<CTA />` component at the bottom of the page
    - _Requirements: 3.6, 3.7, 3.8_

- [ ] 5. Build the Services main page (`/services`)
  - [ ] 5.1 Create `src/app/services/page.tsx` Server Component with metadata export
    - Import `SERVICES` from `src/data/services.ts`
    - Render `<PageHero>` with badge "Our Services"
    - Render 3-column responsive grid of `<ServiceCard>` for each entry in `SERVICES` (3-col desktop, 2-col tablet, 1-col mobile)
    - _Requirements: 1.1–1.5, 4.1, 4.2, 4.3_

  - [ ] 5.2 Implement Process Overview and Industries strip in `services/page.tsx`
    - 4-step horizontal timeline: Discovery → Strategy → Execute → Report; each step has a number badge, icon, and short description
    - Compact icon strip of 6 industry icons linking to `/industries`
    - CTA section: "Get a Free Audit" button linking to `/free-audit`
    - _Requirements: 4.4, 4.5, 4.6_

- [ ] 6. Build the individual Service detail pages (`/services/[slug]`)
  - [ ] 6.1 Create `src/app/services/[slug]/page.tsx` with `generateStaticParams` and `generateMetadata`
    - `generateStaticParams`: return `SERVICES.map(s => ({ slug: s.slug }))` — 9 static routes
    - `generateMetadata`: `await params` (Next.js 16 convention), call `getServiceBySlug`, return `{ title: "${service.title} | RankVillage AI", description: service.description }` or `{}` for unknown slug
    - Default export: async Server Component, `await params`, call `getServiceBySlug`, call `notFound()` from `next/navigation` if undefined
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

  - [ ] 6.2 Implement ServiceHero section in `services/[slug]/page.tsx`
    - Service-specific headline using `service.title` and `service.tagline`
    - 3 stat badges from `service.heroStats` (value + label pills)
    - Two CTA buttons: "Get Started" → `/free-audit`, "View All Services" → `/services`
    - Color accent driven by `service.color`
    - _Requirements: 5.6_

  - [ ] 6.3 Implement Benefits Grid, Process Steps, and Results Showcase in `services/[slug]/page.tsx`
    - Benefits Grid: 6 `glass-card` cards from `service.benefits`, each with lucide icon, title, description
    - Process Steps: numbered 5-step list from `service.process`, alternating left/right layout on desktop
    - Results Showcase: 3 metric cards from `service.results` with large `gradient-text` value, metric label, client name
    - _Requirements: 5.7, 5.8, 5.9_

  - [ ] 6.4 Implement FAQ Accordion and Related Services in `services/[slug]/page.tsx`
    - FAQ section: render `<FAQAccordion items={service.faqs} />` with 5–6 service-specific questions
    - Related Services: 3 `<ServiceCard>` components for slugs in `service.relatedServices`
    - CTA section at bottom: "Start with [service.title]" → `/free-audit`
    - _Requirements: 5.10, 5.11, 5.12_

  - [ ]* 6.5 Write property test for `generateStaticParams` output
    - **Property 3: generateStaticParams produces one entry per service with no duplicates**
    - **Property 6: Services grid renders exactly SERVICES.length cards**
    - **Property 7: generateMetadata returns correct title and description for valid slugs**
    - **Validates: Requirements 5.2, 5.3, 4.3**

- [ ] 7. Checkpoint — verify service pages render correctly
  - Confirm all 9 static routes build without errors
  - Confirm `/services/nonexistent` triggers the 404 page
  - Ask the user if questions arise before proceeding.

- [ ] 8. Build the Portfolio page (`/portfolio`)
  - [ ] 8.1 Create `src/app/portfolio/page.tsx` Server Component with metadata export
    - Import `PORTFOLIO` from `src/data/portfolio.ts`, pass to `<PortfolioGrid>`
    - Render `<PageHero>` with badge "Our Work"
    - Render Tech Stack Strip: technology name badges (React, Next.js, Tailwind, Node.js, MongoDB, etc.) as `glass` pills
    - CTA section: "Start Your Project" → `/free-audit`
    - _Requirements: 1.1–1.5, 6.1, 6.2, 6.6, 6.7_

  - [ ] 8.2 Create `src/components/PortfolioGrid.tsx` Client Component
    - Accept `projects: PortfolioProject[]` as prop
    - Manage active category filter state: All / Web / E-commerce / SEO / UI-UX
    - Filter tabs rendered as pill buttons; "All" selected by default
    - Render filtered `<PortfolioCard>` components in a 3-col (desktop) / 2-col (tablet) / 1-col (mobile) grid
    - _Requirements: 6.3, 6.4, 6.5_

  - [ ]* 8.3 Write property test for `PortfolioGrid` category filter
    - **Property 8: Portfolio filter shows only matching category projects** — for any non-"All" filter, only cards with matching `category` are displayed
    - **Validates: Requirements 6.4**

- [ ] 9. Build the Case Studies page (`/case-studies`)
  - Create `src/app/case-studies/page.tsx` Server Component with metadata export
  - Render `<PageHero>` with badge "Real Results"
  - Featured Case Study: full-width `glass` hero card for `CASE_STUDIES[0]` with before/after metric pills
  - Case Studies Grid: `<CaseStudyCard>` for each remaining entry in `CASE_STUDIES`
  - Aggregate Stats strip: 4 summary metrics (e.g. "Avg +280% Traffic", "Avg #2.1 Ranking", "50+ Clients", "30-Day Results")
  - CTA section: "Get Similar Results" → `/free-audit`
  - _Requirements: 1.1–1.5, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6_

- [ ] 10. Build the Testimonials page (`/testimonials`)
  - [ ] 10.1 Create `src/app/testimonials/page.tsx` Server Component with metadata export
    - Import `TESTIMONIALS` from `src/data/testimonials.ts`, pass to `<TestimonialsGrid>`
    - Render `<PageHero>` with headline "What Our Clients Say"
    - Aggregate Rating section: large "4.9★" display, "500+ Reviews" count, 5 filled star icons
    - Featured Video Review: placeholder card with `Play` icon, gradient background, "Video Review" label
    - Client Logos Strip: 6–8 `glass` cards with business name initials as logo placeholders
    - CTA section: "Join 10,000+ Businesses" → `/auth/signup`
    - _Requirements: 1.1–1.5, 9.1, 9.2, 9.3, 9.4, 9.7, 9.8_

  - [ ] 10.2 Create `src/components/TestimonialsGrid.tsx` Client Component
    - Accept `testimonials: Testimonial[]` as prop
    - Manage active service filter state; "All" selected by default
    - Render filter tabs for each unique `service` value in the data
    - Render filtered `<TestimonialCard>` components in a 3-col (desktop) / 2-col (tablet) / 1-col (mobile) grid
    - _Requirements: 9.5, 9.6_

  - [ ]* 10.3 Write property test for `TestimonialsGrid` service filter
    - **Property 12: Testimonials filter shows only matching service testimonials** — for any selected service filter, only cards with matching `service` field are displayed
    - **Validates: Requirements 9.6**

- [ ] 11. Build the Free Audit page (`/free-audit`)
  - [ ] 11.1 Create `src/app/free-audit/page.tsx` Server Component shell with metadata export
    - Render `<PageHero>` with headline "Get Your Free SEO Audit" and urgency badge ("Limited Slots — Book Today")
    - "What You Get" section: 4 `glass-card` cards — SEO Audit (`Search`), Speed Audit (`Zap`), Competitor Analysis (`Users`), Strategy Call (`Phone`)
    - Render `<AuditForm />` Client Component
    - Trust Signals section: 3 inline badges — "Response within 4 hours", "100% Private", "No Spam Guarantee"
    - "What happens next" section: 3-step timeline — Receive Audit → Review Call → Action Plan
    - _Requirements: 1.1–1.5, 10.1, 10.2, 10.3, 10.9, 10.10_

  - [ ] 11.2 Create `src/components/AuditForm.tsx` Client Component
    - Collect fields: name (required), email (required), phone (required), websiteUrl (required), businessType (select, required), city (required), auditType radio (seo / speed / full / strategy-call, required), message (optional)
    - On submit: validate all required fields; if any empty, prevent submission and mark fields with error state
    - POST `{ formType: "audit", ...fields }` to `/api/contact`
    - On success: transition to thank-you state (matching `ContactForm` success pattern in `contact/page.tsx`)
    - On error: display inline error message, preserve all field values in state
    - Match input styling from `contact/page.tsx` (`inputCls`, `Field` wrapper pattern)
    - _Requirements: 10.4, 10.5, 10.6, 10.7, 10.8_

  - [ ]* 11.3 Write property tests for `AuditForm` submission behavior
    - **Property 9: Audit form payload always includes formType "audit"** — for any valid `AuditFormData`, POST payload includes `formType: "audit"`
    - **Property 10: Audit form blocks submission when required fields are empty** — for any `AuditFormData` with one or more required fields empty, no POST is sent
    - **Validates: Requirements 10.5, 10.8**

- [ ] 12. Build the Industries page (`/industries`)
  - Create `src/app/industries/page.tsx` Server Component with metadata export
  - Render `<PageHero>` with headline "Industries We Serve"
  - Industries Grid: `<IndustryCard>` for each entry in `INDUSTRIES`, 2-col desktop / 1-col mobile layout
  - "Why Industry-Specific SEO?" section: 3 `glass-card` benefit cards with icons and descriptions
  - CTA section: "Find Your Industry Solution" → `/free-audit`
  - _Requirements: 1.1–1.5, 11.1, 11.2, 11.3, 11.4, 11.5, 11.6_

- [ ] 13. Build the custom 404 page (`src/app/not-found.tsx`)
  - Create `src/app/not-found.tsx` root-level Server Component (no `"use client"`)
  - Render `<Navbar />` and `<Footer />` with `<main className="min-h-screen bg-[#080812] overflow-x-hidden">`
  - Large "404" heading with `gradient-text` class and `animate-float` animation
  - Descriptive message: "Oops! This page doesn't exist." with subtitle
  - Quick navigation links grid: Home (`/`), Services (`/services`), Contact (`/contact`), Free Audit (`/free-audit`) — each as a `glass-card` with icon and label
  - _Requirements: 1.1, 1.2, 12.1, 12.2, 12.3, 12.4, 12.5_

- [ ] 14. Checkpoint — verify high-priority pages
  - Confirm `/about`, `/services`, `/services/[slug]`, `/portfolio`, `/case-studies`, `/testimonials`, `/free-audit`, `/industries`, and `not-found` all compile and render without errors
  - Ask the user if questions arise before proceeding.

- [ ] 15. Extend the FAQ page (`/faq`)
  - Rewrite `src/app/faq/page.tsx` in-place (keep existing route, replace content)
  - Add `<PageHero>` with headline "Frequently Asked Questions" at the top
  - Create `src/components/FAQPage.tsx` Client Component that:
    - Renders category tabs: SEO / Web Dev / Pricing / Support / Refund
    - Manages active category state; renders `<FAQAccordion>` filtered to active category
    - Contains at least 30 questions distributed across the 5 categories (extend existing 10 from `FAQ.tsx`)
    - "Still Have Questions?" section: contact card with email link + WhatsApp CTA (`https://wa.me/918800000000`)
  - Keep existing `<CTA />` at the bottom
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7_

- [ ] 16. Build the Blog page (`/blog`)
  - [ ] 16.1 Create `src/app/blog/page.tsx` Server Component with metadata export
    - Import `BLOG_POSTS` from `src/data/blog.ts`, pass to `<BlogGrid>`
    - Render `<PageHero>` with headline "RankVillage Blog"
    - Featured Post section: large `glass` hero card for the post with `featured: true` — title, excerpt, category badge, read time, "Read More →" link
    - Newsletter CTA section: static email input UI (no backend), "Subscribe" button, privacy note
    - _Requirements: 1.1–1.5, 13.1, 13.2, 13.4, 13.6_

  - [ ] 16.2 Create `src/components/BlogGrid.tsx` Client Component
    - Accept `posts: BlogPost[]` as prop
    - Manage active category filter state: All / SEO Tips / Web Dev / AI Tools / Local Business / Speed
    - Render filter tabs and filtered `<BlogCard>` components in a 3-col (desktop) / 2-col (tablet) / 1-col (mobile) grid
    - _Requirements: 13.3, 13.5_

- [ ] 17. Build the Careers page (`/careers`)
  - Create `src/app/careers/page.tsx` Server Component with metadata export
  - Render `<PageHero>` with headline "Join RankVillage AI"
  - Culture section: 3 `glass-card` value cards — Remote-first (`Wifi`), Learning (`BookOpen`), Impact (`TrendingUp`)
  - Open Positions section: `<CareerCard>` for each entry in `CAREERS`; if empty, render "No open positions right now — check back soon" placeholder
  - Internship Program section: dedicated `glass-card` with description, requirements, and "Apply for Internship" CTA
  - Final apply CTA: `mailto:careers@rankvillage.ai` link button
  - _Requirements: 1.1–1.5, 14.1, 14.2, 14.3, 14.4, 14.5, 14.6_

- [ ] 18. Build the Client Results page (`/client-results`)
  - [ ] 18.1 Create `src/app/client-results/page.tsx` Server Component with metadata export
    - Render `<PageHero>` with headline "Proven Results"
    - Aggregate Metrics section: 4 large `glass-card` stat cards — "+340% Avg Traffic Growth", "2.4 Avg Ranking Position", "500+ Clients", "30-Day Results"
    - Traffic Growth Charts section: static CSS bar chart (inline `div` bars with gradient backgrounds, no external library) showing 6-month growth trend
    - Lighthouse Scores section: before/after score cards for Performance, SEO, Accessibility — use colored circular score badges
    - Render `<ROICalculator />` Client Component
    - CTA section: "Get These Results" → `/free-audit`
    - _Requirements: 1.1–1.5, 15.1, 15.2, 15.3, 15.4, 15.5, 15.6, 15.8_

  - [ ] 18.2 Create `src/components/ROICalculator.tsx` Client Component
    - Inputs: monthly revenue (₹), current monthly leads, expected lead increase (%), average deal value (₹)
    - Compute: projected additional revenue = (current leads × lead increase % × avg deal value)
    - Display computed ROI value in a prominent `gradient-text` result card, updating on every input change
    - Validate: all inputs must be positive numbers; show "Enter valid values" if not; output is always ≥ 0
    - _Requirements: 15.6, 15.7_

  - [ ]* 18.3 Write property test for `ROICalculator` output
    - **Property 13: ROI calculator produces non-negative output for valid inputs** — for any set of valid positive numeric inputs, computed output ≥ 0
    - **Validates: Requirements 15.7**

- [x] 19. Update Footer links
  - Edit `src/components/Footer.tsx` to replace `"#"` placeholder hrefs with real routes:
    - `Resources` → `Blog`: `href: "/blog"`
    - `Resources` → `Case Studies`: `href: "/case-studies"`
    - `Resources` → `Local SEO Guide`: `href: "/blog"`
    - `Company` → `About Us`: `href: "/about"`
    - `Company` → `Careers`: `href: "/careers"`
  - _Requirements: 16.1, 16.2, 16.3, 16.4_

- [ ] 20. Final checkpoint — full site verification
  - Ensure all new pages export a `metadata` object with non-empty `title` and `description`
  - Ensure all new pages render `<Navbar />` and `<Footer />`
  - Ensure all new pages have `bg-[#080812]` on the `<main>` element
  - Ensure footer links point to real routes (no `"#"` placeholders for implemented pages)
  - Ensure all tests pass, ask the user if questions arise.

---

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- All pages are Server Components by default; only `AuditForm`, `PortfolioGrid`, `TestimonialsGrid`, `BlogGrid`, `FAQPage`, and `ROICalculator` are `"use client"`
- `params` must always be `await`-ed in async Server Components (Next.js 16 convention — see `node_modules/next/dist/docs/` for current API)
- No new npm packages — use only existing dependencies (`lucide-react`, `framer-motion`, Tailwind v4, `clsx`)
- If a data array is empty, render a "Coming soon" placeholder rather than crashing
- Property tests use `fast-check` (already available via existing dev dependencies or add as needed)
- Each task references specific requirements for traceability
