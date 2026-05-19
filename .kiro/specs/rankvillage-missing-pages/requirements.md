# Requirements Document

## Introduction

RankVillage AI is a Next.js 16 App Router SaaS platform targeting Indian local businesses. The platform currently has a home page, pricing, contact, privacy, terms, and an auth-protected dashboard. This feature adds 13 new public-facing marketing pages — covering agency identity, services, portfolio, social proof, lead generation, and content — to complete the marketing site and improve SEO coverage.

All new pages must conform to the existing design system (`bg-[#080812]` dark background, purple/blue/cyan gradients, glassmorphism CSS classes), use `lucide-react` icons in place of real images, and follow Next.js 16 App Router conventions (async Server Components, `params` as `Promise`, `generateStaticParams` for dynamic routes).

---

## Glossary

- **System**: The RankVillage AI Next.js 16 web application
- **Page**: A Next.js App Router Server Component at a specific route
- **ServiceData**: A typed object representing a single service offering (slug, title, tagline, description, icon, color, heroStats, benefits, process, faqs, results, relatedServices)
- **SERVICES**: The static array of all 9 `ServiceData` objects defined in `src/data/services.ts`
- **AuditForm**: The `"use client"` React component that collects lead-generation data and submits to `/api/contact`
- **PageHero**: A reusable Server Component rendering a badge, headline, and subtitle at the top of each new page
- **Navbar**: The existing `src/components/Navbar.tsx` component
- **Footer**: The existing `src/components/Footer.tsx` component
- **Design_System**: The shared set of Tailwind CSS classes (`bg-[#080812]`, `glass`, `glass-card`, `btn-glow`, `gradient-text`) used across all pages
- **Contact_API**: The existing Next.js Route Handler at `/api/contact`
- **FAQAccordion**: A reusable accessible expand/collapse component for FAQ items
- **PortfolioGrid**: The `"use client"` component that manages category filter state for the portfolio page
- **ROICalculator**: The `"use client"` interactive calculator component on the client results page
- **Static_Data**: TypeScript constant arrays in `src/data/*.ts` that provide content for pages without a database

---

## Requirements

### Requirement 1: Page Shell and Design System Consistency

**User Story:** As a visitor to the RankVillage AI website, I want every page to have a consistent look and feel with navigation and footer, so that I can easily browse the site and trust the brand.

#### Acceptance Criteria

1. THE System SHALL render both `<Navbar />` and `<Footer />` on every new public-facing page.
2. THE System SHALL apply `bg-[#080812]` as the background color on the `<main>` element of every new page.
3. THE System SHALL apply `overflow-x-hidden` and `min-h-screen` to the `<main>` element of every new page.
4. WHEN a new page is rendered, THE System SHALL export a `metadata` object containing a non-empty `title` and `description` field.
5. THE System SHALL add `pt-16` padding to the content wrapper inside each new page to account for the fixed Navbar height.

---

### Requirement 2: Static Data Layer

**User Story:** As a developer, I want all page content to be defined in typed static data files, so that content is easy to update and pages can be statically generated at build time.

#### Acceptance Criteria

1. THE System SHALL define a `ServiceData` interface and a `SERVICES` constant array in `src/data/services.ts` containing exactly 9 service entries: `web-development`, `seo-services`, `local-seo`, `technical-seo`, `google-ads`, `meta-ads`, `ui-ux-design`, `ecommerce-development`, and `website-maintenance`.
2. FOR ALL entries in `SERVICES`, THE System SHALL populate every required field: `slug`, `title`, `tagline`, `description`, `icon`, `color`, `heroStats`, `benefits`, `process`, `faqs`, `results`, and `relatedServices`.
3. FOR ALL entries in `SERVICES`, THE System SHALL ensure the `slug` field is a non-empty URL-safe kebab-case string matching the pattern `^[a-z0-9]+(-[a-z0-9]+)*$`.
4. THE System SHALL define a `getServiceBySlug(slug: string): ServiceData | undefined` function in `src/data/services.ts` that returns the matching `ServiceData` when the slug exists in `SERVICES` and returns `undefined` when it does not.
5. THE System SHALL define typed data files for portfolio projects (`src/data/portfolio.ts`), case studies (`src/data/case-studies.ts`), testimonials (`src/data/testimonials.ts`), industries (`src/data/industries.ts`), blog posts (`src/data/blog.ts`), and careers (`src/data/careers.ts`).
6. WHEN a data file contains no entries, THE System SHALL render a "Coming soon" placeholder state on the corresponding page rather than crashing.

---

### Requirement 3: About Us Page (`/about`)

**User Story:** As a prospective client, I want to learn about RankVillage AI's mission, team, and expertise, so that I can decide whether to trust them with my business.

#### Acceptance Criteria

1. THE System SHALL create a Server Component page at `src/app/about/page.tsx` with the route `/about`.
2. THE System SHALL render a `PageHero` section with the badge "About Us", a headline, and a subtitle describing RankVillage AI's mission.
3. THE System SHALL render a Mission & Vision section with two glassmorphism cards displayed side by side.
4. THE System SHALL render a Founder Story section containing a narrative text block and a timeline.
5. THE System SHALL render a Stats Strip section with at least 4 animated counters (clients served, cities covered, average ranking improvement, years in operation).
6. THE System SHALL render a Skills & Expertise section as an icon grid using `lucide-react` icons for SEO, Web Development, Local SEO, Ads, Analytics, and AI capabilities.
7. THE System SHALL render a Team section containing at least one founder card and a "We're hiring" call-to-action linking to `/careers`.
8. THE System SHALL render a CTA section at the bottom of the page.

---

### Requirement 4: Services Main Page (`/services`)

**User Story:** As a prospective client, I want to see all services RankVillage AI offers in one place, so that I can quickly identify which service fits my business needs.

#### Acceptance Criteria

1. THE System SHALL create a Server Component page at `src/app/services/page.tsx` with the route `/services`.
2. THE System SHALL render a `PageHero` section with the badge "Our Services".
3. THE System SHALL render a Services Grid containing exactly one `ServiceCard` component for each entry in `SERVICES`, displayed in a 3-column responsive grid (3-col desktop, 2-col tablet, 1-col mobile).
4. THE System SHALL render a Process Overview section showing a 4-step horizontal timeline: Discovery → Strategy → Execute → Report.
5. THE System SHALL render an Industries Served section as a compact icon strip linking to `/industries`.
6. THE System SHALL render a CTA section linking to `/free-audit` with the label "Get a Free Audit".

---

### Requirement 5: Individual Service Detail Pages (`/services/[slug]`)

**User Story:** As a prospective client, I want to read detailed information about a specific service, so that I can understand what RankVillage AI will do for my business and what results to expect.

#### Acceptance Criteria

1. THE System SHALL create a dynamic Server Component page at `src/app/services/[slug]/page.tsx`.
2. THE System SHALL export a `generateStaticParams` function that returns one `{ slug: string }` object for each entry in `SERVICES`, producing exactly 9 static routes.
3. THE System SHALL export a `generateMetadata` function that `await`s the `params` Promise (Next.js 16 convention), calls `getServiceBySlug`, and returns a `Metadata` object with `title` set to `"${service.title} | RankVillage AI"` and `description` set to `service.description` for a valid slug.
4. WHEN `generateMetadata` receives a slug that does not match any entry in `SERVICES`, THE System SHALL return an empty `Metadata` object `{}`.
5. THE System SHALL export a default async Server Component that `await`s the `params` Promise, calls `getServiceBySlug`, and calls `notFound()` from `next/navigation` when the slug does not match any entry in `SERVICES`.
6. WHEN a valid slug is provided, THE System SHALL render a ServiceHero section with the service-specific headline, tagline, at least 3 stat badges, and two CTA buttons.
7. WHEN a valid slug is provided, THE System SHALL render a Benefits Grid section with 6 benefit cards using `lucide-react` icons.
8. WHEN a valid slug is provided, THE System SHALL render a Process Steps section with a numbered 5-step process specific to the service.
9. WHEN a valid slug is provided, THE System SHALL render a Results Showcase section with at least 3 metric cards.
10. WHEN a valid slug is provided, THE System SHALL render a FAQ Accordion section with 5 to 6 service-specific questions using the `FAQAccordion` component.
11. WHEN a valid slug is provided, THE System SHALL render a Related Services section with 3 `ServiceCard` links derived from `service.relatedServices`.
12. WHEN a valid slug is provided, THE System SHALL render a CTA section linking to `/free-audit`.

---

### Requirement 6: Portfolio Page (`/portfolio`)

**User Story:** As a prospective client, I want to browse RankVillage AI's past work, so that I can evaluate the quality and range of their output before hiring them.

#### Acceptance Criteria

1. THE System SHALL create a Server Component page at `src/app/portfolio/page.tsx` with the route `/portfolio`.
2. THE System SHALL render a `PageHero` section with the badge "Our Work".
3. THE System SHALL render a `PortfolioGrid` Client Component that manages category filter state with tabs: All, Web, E-commerce, SEO, and UI-UX.
4. WHEN a category filter tab is selected, THE `PortfolioGrid` SHALL display only `PortfolioCard` components whose `category` field matches the selected filter.
5. WHEN the "All" filter tab is selected, THE `PortfolioGrid` SHALL display all `PortfolioCard` components regardless of category.
6. THE System SHALL render a Tech Stack Strip section displaying technology badges for the technologies used across projects.
7. THE System SHALL render a CTA section with the label "Start Your Project".

---

### Requirement 7: Case Studies Page (`/case-studies`)

**User Story:** As a prospective client, I want to read detailed case studies with real metrics, so that I can see the measurable impact RankVillage AI has delivered for businesses like mine.

#### Acceptance Criteria

1. THE System SHALL create a Server Component page at `src/app/case-studies/page.tsx` with the route `/case-studies`.
2. THE System SHALL render a `PageHero` section with the badge "Real Results".
3. THE System SHALL render a Featured Case Study section as a full-width hero card displaying before/after metrics for one highlighted case study.
4. THE System SHALL render a Case Studies Grid section with `CaseStudyCard` components for each entry in the case studies data.
5. THE System SHALL render an Aggregate Stats section displaying summary metrics across all clients (e.g., average traffic growth, average ranking position).
6. THE System SHALL render a CTA section with the label "Get Similar Results".

---

### Requirement 8: FAQ Page Extension (`/faq`)

**User Story:** As a prospective client, I want to find answers to common questions organized by topic, so that I can quickly resolve my doubts without contacting support.

#### Acceptance Criteria

1. THE System SHALL extend the existing `src/app/faq/page.tsx` in-place rather than creating a new route.
2. THE System SHALL render a `PageHero` section with the headline "Frequently Asked Questions".
3. THE System SHALL render category tabs for: SEO, Web Dev, Pricing, Support, and Refund.
4. THE System SHALL render a `FAQAccordion` component with at least 30 questions distributed across the 5 categories.
5. WHEN a `FAQAccordion` item is clicked, THE `FAQAccordion` SHALL toggle the expanded state of that item.
6. WHEN a `FAQAccordion` item is expanded and clicked again, THE `FAQAccordion` SHALL collapse that item, returning it to its original closed state.
7. THE System SHALL render a "Still Have Questions?" section containing a contact card and a WhatsApp CTA link.

---

### Requirement 9: Testimonials Page (`/testimonials`)

**User Story:** As a prospective client, I want to read verified reviews from other Indian business owners, so that I can build confidence in RankVillage AI before purchasing.

#### Acceptance Criteria

1. THE System SHALL create a Server Component page at `src/app/testimonials/page.tsx` with the route `/testimonials`.
2. THE System SHALL render a `PageHero` section with the headline "What Our Clients Say".
3. THE System SHALL render an Aggregate Rating section displaying a prominent star rating and total review count.
4. THE System SHALL render a Featured Video Review section as a placeholder video embed card using `lucide-react` icons (no real video required).
5. THE System SHALL render a Testimonials Grid with `TestimonialCard` components and a filter control allowing filtering by service.
6. WHEN a service filter is selected, THE System SHALL display only `TestimonialCard` components whose `service` field matches the selected filter.
7. THE System SHALL render a Client Logos Strip section as a grid of glassmorphism logo cards.
8. THE System SHALL render a CTA section with the label "Join 10,000+ Businesses".

---

### Requirement 10: Free Audit / Consultation Page (`/free-audit`)

**User Story:** As a local business owner, I want to request a free SEO audit, so that I can understand my website's current performance and get expert recommendations without upfront cost.

#### Acceptance Criteria

1. THE System SHALL create a page at `src/app/free-audit/page.tsx` with the route `/free-audit`, using a Server Component shell that renders the `AuditForm` Client Component.
2. THE System SHALL render a `PageHero` section with the headline "Get Your Free SEO Audit" and an urgency badge.
3. THE System SHALL render a "What You Get" section with 4 cards: SEO Audit, Speed Audit, Competitor Analysis, and Strategy Call.
4. THE `AuditForm` SHALL collect the following fields: name, email, phone, website URL, business type, city, audit type (radio: seo / speed / full / strategy-call), and message.
5. WHEN the user submits the `AuditForm` with all required fields filled, THE `AuditForm` SHALL POST a JSON payload to `/api/contact` that includes `formType: "audit"` along with all collected field values.
6. WHEN the `/api/contact` endpoint returns a successful response, THE `AuditForm` SHALL transition to a success/thank-you state.
7. IF the `/api/contact` endpoint returns a non-2xx response or a network error occurs, THEN THE `AuditForm` SHALL display an inline error message and preserve all form field values in state.
8. WHEN the user attempts to submit the `AuditForm` with one or more required fields empty, THE `AuditForm` SHALL prevent submission and indicate which fields are required.
9. THE System SHALL render a Trust Signals section below the form displaying response time, privacy note, and no-spam guarantee.
10. THE System SHALL render a "What happens next" section as a 3-step timeline.

---

### Requirement 11: Industries Page (`/industries`)

**User Story:** As a local business owner in a specific industry, I want to see how RankVillage AI serves businesses like mine, so that I can understand the relevance of their services to my sector.

#### Acceptance Criteria

1. THE System SHALL create a Server Component page at `src/app/industries/page.tsx` with the route `/industries`.
2. THE System SHALL render a `PageHero` section with the headline "Industries We Serve".
3. THE System SHALL render an Industries Grid with one `IndustryCard` component for each entry in the industries data, displayed in a 2-column desktop layout.
4. THE System SHALL include industry cards for at least the following sectors: restaurant, dairy, real estate, coaching, retail, medical, gym, hotel, automobile, and salon.
5. THE System SHALL render a "Why Industry-Specific SEO?" section with 3 benefit cards.
6. THE System SHALL render a CTA section with the label "Find Your Industry Solution".

---

### Requirement 12: Custom 404 Page (`app/not-found.tsx`)

**User Story:** As a visitor who navigates to a non-existent URL, I want to see a helpful error page with navigation options, so that I can find what I was looking for without leaving the site.

#### Acceptance Criteria

1. THE System SHALL create a root-level Server Component at `src/app/not-found.tsx` that Next.js renders for all unmatched routes.
2. THE System SHALL render a large "404" display using `gradient-text` styling with a floating animation.
3. THE System SHALL render a descriptive message explaining the page was not found.
4. THE System SHALL render quick navigation links to: Home (`/`), Services (`/services`), Contact (`/contact`), and Free Audit (`/free-audit`).
5. THE System SHALL render both `<Navbar />` and `<Footer />` on the 404 page.

---

### Requirement 13: Blog Page (`/blog`)

**User Story:** As a local business owner, I want to read educational content about SEO and digital marketing, so that I can learn how to grow my business online.

#### Acceptance Criteria

1. THE System SHALL create a Server Component page at `src/app/blog/page.tsx` with the route `/blog`.
2. THE System SHALL render a `PageHero` section with the headline "RankVillage Blog".
3. THE System SHALL render category filter tabs for: SEO Tips, Web Dev, AI Tools, Local Business, and Speed.
4. THE System SHALL render a Featured Post section as a large hero card for the most recent or highlighted blog post.
5. THE System SHALL render a Posts Grid with `BlogCard` components for each entry in the blog data.
6. THE System SHALL render a Newsletter CTA section with an email input field (static UI; no backend submission required in this phase).

---

### Requirement 14: Careers Page (`/careers`)

**User Story:** As a job seeker interested in digital marketing and web development, I want to explore open positions at RankVillage AI, so that I can apply to join the team.

#### Acceptance Criteria

1. THE System SHALL create a Server Component page at `src/app/careers/page.tsx` with the route `/careers`.
2. THE System SHALL render a `PageHero` section with the headline "Join RankVillage AI".
3. THE System SHALL render a Culture section with 3 value cards: Remote-first, Learning, and Impact.
4. THE System SHALL render an Open Positions section with `CareerCard` components for each entry in the careers data, each displaying role title, employment type (remote/hybrid/on-site), and an apply CTA.
5. THE System SHALL render an Internship Program section as a dedicated card with an apply CTA.
6. THE System SHALL render a final apply CTA linking to `mailto:careers@rankvillage.ai`.

---

### Requirement 15: Client Results Page (`/client-results`)

**User Story:** As a prospective client, I want to see aggregated performance data and ROI projections, so that I can quantify the expected return on investment before signing up.

#### Acceptance Criteria

1. THE System SHALL create a Server Component page at `src/app/client-results/page.tsx` with the route `/client-results`.
2. THE System SHALL render a `PageHero` section with the headline "Proven Results".
3. THE System SHALL render an Aggregate Metrics section with 4 large stat cards.
4. THE System SHALL render a Traffic Growth Charts section as a static CSS/SVG bar chart visualization (no external charting library required).
5. THE System SHALL render a Lighthouse Scores section with before/after score cards.
6. THE System SHALL render a `ROICalculator` Client Component that accepts numeric inputs and computes a projected ROI value.
7. WHEN the `ROICalculator` receives valid positive numeric inputs, THE `ROICalculator` SHALL produce a non-negative numeric output.
8. THE System SHALL render a CTA section with the label "Get These Results".

---

### Requirement 16: Footer and Navbar Link Updates

**User Story:** As a visitor, I want all navigation links in the footer to point to real pages, so that I can discover and access all sections of the RankVillage AI website.

#### Acceptance Criteria

1. THE System SHALL update the `Resources` section of `<Footer />` so that the "Blog" link points to `/blog` and the "Case Studies" link points to `/case-studies`.
2. THE System SHALL update the `Company` section of `<Footer />` so that the "About Us" link points to `/about` and the "Careers" link points to `/careers`.
3. THE System SHALL update the `Resources` section of `<Footer />` so that the "Local SEO Guide" link points to `/blog`.
4. WHEN a footer link is updated, THE System SHALL replace the `"#"` placeholder `href` value with the correct route path.
