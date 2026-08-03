# Bombaywala Project Brain
> Single source of truth for all context. Read this before any work in this repo.

---

## 1. Workspace Layout

```
bombaywala/               ← root repo (Next.js scaffold, mostly cleared)
├── bombaywala-marketing/ ← MAIN SITE: Bombaywala Marketing Agency website (Vite + React)
├── seven-seas/           ← CLIENT SITE: Seven Seas Hotel, New Delhi (Next.js)
├── velorah-hero/         ← PROTOTYPE: another marketing/client site (Vite + React)
├── ramkishan-agri/       ← CLIENT SITE: Ramkishan Agri Innovate Pvt Ltd, agri-machinery manufacturer (Vite + React)
├── pdf-assets/           ← Extracted logo/product photos sourced from RKAI catalogue PDF (used by ramkishan-agri)
├── TBW_Profile_2026.pdf  ← Company profile document
└── Bombaywala_Detailed_Case_Studies (1).pdf ← Client case studies PDF
```

Each sub-directory is a standalone app with its own `package.json`, `node_modules`, and separate git history. Always `cd` into the right sub-project before running commands.

---

## 2. Bombaywala Marketing LLP — Company Profile

### Identity
- **Legal Name**: Tushita Bombaywala Marketing LLP
- **Brand Name**: Bombaywala Marketing
- **Tagline**: "We Don't Do Marketing. We Drive Results."
- **Type**: Performance-first digital marketing & tech agency
- **HQ**: G7, Tamanna Tower, Vaishali Nagar, Jaipur, Rajasthan 302021
- **Website**: https://www.bombaywalamarketing.com

### Contact
| Channel | Detail |
|---------|--------|
| Phone | +91 9892907955 |
| Email | bombaywalamarketing@gmail.com |
| Instagram | @bombaywala_marketing |
| Facebook | Bombaywala Digital Marketing Agency (p/61555082440013) |
| LinkedIn | /company/bombaywala-digital-marketing-agency |

### Key Stats (shown site-wide)
| Metric | Value |
|--------|-------|
| Brands Scaled | 10+ |
| Peak ROAS | 54x |
| Revenue Generated | ₹10L+ |
| Leads Delivered | 1,500+ |
| Social Reach | 400K+ |
| Event Attendees | 5,000+ |

### Mission & Values
- **Story**: Every brand has a story worth telling; every rupee deserves measurable returns.
- **Mission**: Be the growth partner that e-commerce brands and Indian businesses trust for compounding results — not vanity metrics.
- **Values**: Results First · Radical Transparency · Full Ownership · Built for India

---

## 3. Services Catalogue

### Marketing Services
| Service | Slug | Key sub-services |
|---------|------|-----------------|
| E-Commerce Marketing | /services/ecommerce-marketing | SEO, Meta+Google Ads, Email/WhatsApp Automation, Marketplace (Amazon/Flipkart/Meesho), Content |
| PPC / Paid Ads | /services/ppc | Google Search, Shopping, PMax, Meta, YouTube, Remarketing, Local PPC |
| Social Media Marketing | /services/smm | Reels, Carousels, Community, Influencer, Paid Social |
| Social Media Optimization | /services/smo | Profile Optimization, Hashtag Strategy, Community Building, Competitor Audit |
| SEO | /services/seo | On-Page, Local SEO/GBP, Off-Page/Link Building, E-Commerce SEO, Content |
| Influencer Marketing | /services/smm | UGC Strategy, Creator Partnerships, Performance Tracking |
| Product Photography | /services/marketing | Studio, Lifestyle, Creative Direction, Post-Production |

### Tech Services
| Service | Key details |
|---------|------------|
| Shopify Development | Custom themes, product setup, payment gateways, speed/SEO optimization |
| Website Development | WordPress / Next.js / Custom; SEO-ready, mobile-first; 7–15 day delivery |
| App Development | React Native / Flutter; Android & iOS; MVP to production |
| Tech Maintenance | Monthly retainer; bug fixes, security patches, hosting, content updates |
| Freelance & Custom | MVPs, APIs, automation, CRM/ERP integrations |

---

## 4. Client Case Studies (11 total)

| Client | Industry | Services | Key Result |
|--------|----------|----------|-----------|
| **Siddhohum** | Women's Clothing | Shopify Dev, Branding, Product Photography, Meta Ads | 108+ orders M1 → 200+ M2, 3–4x ROAS |
| **Diya Seating Chair** | Café & Restaurant Furniture | Shopify Dev, Performance Marketing, Meta Ads | 40x+ ROAS consistently, long-term client |
| **Newturn Furniture** ⭐ | Office Furniture | Meta Ads, Performance Marketing | 54x ROAS, 99 purchases, 551 add-to-carts, 367 checkouts |
| **Poshpankh** ⭐ | Women's Ethnic Wear | Influencer Marketing, Meta Ads, SMM | ₹12K Week1 → ₹40K March → ₹1.6L April, ~4x ROAS |
| **Tanya Dance & Music School** ⭐ | Education | Branding, SMM, Meta Ads, PR | 1K→5.5K+ IG followers, +18K FB, 400K+ reach, IIT Roorkee collab |
| **Ramkishan Agri Innovates** | Agriculture | Lead Generation, Meta Ads | 1,000–1,500 qualified leads, WhatsApp funnels |
| **DS Pet Care** ⭐ | Pet Food & Care | SEO, Facebook Ads | ₹9L organic (SEO) + ₹1L paid (FB) = ₹10L total, 25+ keywords ranked |
| **MRC Chair** | Office Furniture | SEO, Meta Ads | ₹1.5L SEO + ₹98K Meta on ₹9,730 spend = ₹2.48L total |
| **Tejaji Mahakumbh** | Event & Community | Event Promotion, SMM | 1,000 followers in 15 days, viral reels, 5,000+ attendees |
| **Deepak Dhama – Renatus** | Nutrition & Wellness | Facebook Lead Gen, Meta Ads | 586 leads at ₹12/lead, 85% qualified |
| **Wood Item Wala** | Home Décor & Woodwork | Product Photography, Creative Direction | Premium product shoot, stronger brand perception |

⭐ = Featured case study on website

### Full Client List (17)
Siddhohum · Diya Seating Chair · Newturn Furniture · Poshpankh · Tanya Dance & Music School · Ramkishan Agri Innovates · DS Pet Care · MRC Chair · Tejaji Mahakumbh · Renatus/Deepak Dhama · Wood Item Wala · Blue Wing · Himashi · Liceria Co · Lava · Ganpat Gurukul · Rinipo

### Testimonials
> "Revenue from near-zero to over ₹10 lakhs in organic sales alone." — DS Pet Care

> "Viral reels, 18K Facebook followers, and real students walking through the door." — Tanya Dance & Music School

> "₹12 per lead and 85% qualified. We'd lost faith in digital marketing before." — Deepak Dhama, Renatus

> "₹2.48 lakh in revenue on less than ₹10K ad spend." — MRC Chair

---

## 5. bombaywala-marketing (Main Site)

**Path**: `/Users/kulshresthjangid/Projects/bombaywala/bombaywala-marketing/`

### Stack
- **Framework**: Vite + React 19 + TypeScript
- **Routing**: React Router v7 (`react-router-dom`)
- **Styling**: Tailwind CSS v3 (`tailwind.config.js`)
- **Animation**: Framer Motion
- **SEO**: react-helmet-async (`<HelmetProvider>`)
- **Icons**: lucide-react
- **Dev server**: `npm run dev` (Vite)
- **Build**: `npm run build`

### File Structure
```
src/
├── App.tsx                    ← Router setup with all routes
├── main.tsx                   ← Entry point
├── index.css                  ← ALL global styles + CSS variables
├── lib/
│   ├── config.ts              ← ALL site content/data (single source of truth)
│   ├── blog.ts                ← All blog posts (10+ articles, SEO-focused)
│   └── utils.ts               ← cn() utility
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── PageLoader.tsx
│   └── shared/
│       ├── Cursor.tsx         ← Custom cursor (hidden on touch devices)
│       ├── FadeInUp.tsx       ← Framer Motion wrapper
│       └── SEO.tsx            ← Helmet wrapper
│   └── ui/
│       └── button.tsx
└── pages/
    ├── Home.tsx
    ├── About.tsx
    ├── CaseStudies.tsx
    ├── Blog.tsx
    ├── BlogPost.tsx
    ├── Contact.tsx
    ├── Privacy.tsx / Terms.tsx / Cookies.tsx
    └── services/
        ├── Marketing.tsx
        ├── Tech.tsx
        ├── SEO.tsx
        ├── PPC.tsx
        ├── SMM.tsx
        ├── SMO.tsx
        └── EcommerceMarketing.tsx
```

### Routes
| Path | Component |
|------|-----------|
| `/` | Home |
| `/about` | About |
| `/case-studies` | CaseStudies |
| `/blog` | Blog |
| `/blog/:slug` | BlogPost |
| `/contact` | Contact |
| `/services/marketing` | Marketing |
| `/services/tech` | Tech |
| `/services/seo` | SEO |
| `/services/ppc` | PPC |
| `/services/smm` | SMM |
| `/services/smo` | SMO |
| `/services/ecommerce-marketing` | EcommerceMarketing |
| `/privacy` | Privacy |
| `/terms` | Terms |
| `/cookies` | Cookies |
| `*` | Home (catch-all) |

### Design System (`src/index.css`)

**CSS Variables (dark warm theme):**
```css
--background:        hsl(32 10% 6%)    /* near-black warm */
--foreground:        hsl(36 14% 97%)   /* near-white */
--muted:             hsl(32 8% 11%)
--orange:            hsl(20 94% 52%)   /* brand orange */
--orange-light:      hsl(24 95% 62%)
--orange-dark:       hsl(18 90% 40%)
--gold:              #C59B3C
```

**Fonts:**
- Display: `Instrument Serif` (serif)
- Body: `Inter` (sans-serif)
- Script: `Dancing Script` (cursive)

**Utility Classes:**
| Class | Purpose |
|-------|---------|
| `.liquid-glass` | Glassmorphism card (backdrop-blur + gradient border) |
| `.overline` | Small orange all-caps label (0.68rem, letter-spacing 0.22em) |
| `.tag-pill` | Small bordered tag chip |
| `.metric-card` | Stats card with orange hover border |
| `.form-input` | Styled input/textarea |
| `.ticker-track` | Auto-scrolling results ticker (28s) |
| `.marquee-track` | Left-scrolling client logos (30s) |
| `.marquee-track-reverse` | Right-scrolling variant (26s) |
| `.orange-rule` | 48px × 2px orange-to-gold gradient line |
| `.pg-hero` | Inner page header (140px top padding) |
| `.pg-section` | Standard section (7rem padding) |
| `.pg-section-alt` | Alt background section |
| `.max-w` | 1200px max-width centered wrapper |
| `.cards-grid` | `auto-fill minmax(260px, 1fr)` grid |
| `.stats-grid` | `auto-fill minmax(160px, 1fr)` grid |
| `.hero-content` | Hero wrapper (130px/90px padding) |
| `.hero-grid` | Two-column `1fr 1fr` layout |
| `.contact-grid` | `1fr 1.6fr` contact layout |
| `.footer-grid` | `2fr 1fr 1fr 1fr` footer columns |
| `.process-step` | `80px 1fr` process step row |
| `.nav-inner` | 1200px navbar wrapper (68px height) |

**Breakpoints:** 480px (phone) · 640px (phone landscape) · 768px (tablet) · 1024px (footer collapse)

**Animations:**
- `fade-rise` — opacity 0 + translateY(24px) → visible
- `ticker` — infinite left scroll (28s)
- `marquee-left` / `marquee-right` — client logo rows
- `slideDown` — dropdown open

### Content Source of Truth
All site content lives in **`src/lib/config.ts`**. To update anything (contact info, stats, case studies, services, clients, testimonials, about content) — edit that file only.

Blog posts live in **`src/lib/blog.ts`** as an array of `BlogPost` objects with slug, title, category, description, date, readTime, content.

---

## 6. seven-seas (Client Site)

**Path**: `/Users/kulshresthjangid/Projects/bombaywala/seven-seas/`

### Client: Seven Seas Hotel
- **Tagline**: "Signature Hospitality, True Luxury In Victorian Era Design"
- **Address**: 12, Mangalam Place, Sector 3, Rohini, New Delhi 110085
- **Website**: https://sevenseashotel.com
- **Established**: 1995 | **Star Rating**: 5-star

### Contact Numbers
| Dept | Number |
|------|--------|
| Main | +91 11434 00000 |
| Dining | +91 11434 00007 |
| Events | +91 11434 00008 |
| Sales | +91 99902 00002 |
| Membership | +91 99995 39343 |
| Booking | +91 95852 81818 |

### Stats
100+ Luxury Rooms · 13 Event Venues · 1L+ Sq.Ft. Event Space · 4,000 Guest Capacity · 5 Dining Venues

### Rooms
| Room | Size | Tagline |
|------|------|---------|
| Royal Rooms | 40 sq.m | "Elegant comfort for a royal affair" |
| Elite Rooms | 45 sq.m | "Opulent spaces for a memorable stay" |
| Luxury Suites | 60 sq.m | "Comfort and luxury amalgamated" |
| Presidential Suite | 120 sq.m | "Epitome of luxury" (butler service, jacuzzi) |

### Dining
| Venue | Type | Capacity | Hours |
|-------|------|----------|-------|
| Seventh Sense | Multi-Cuisine (7 live kitchens) | 150 guests | 7AM–11PM |
| Safar Fine Dine | Authentic Indian | 80 guests | 11AM–11PM |
| Cake Boutique | Café & Patisserie | 40 guests | 8AM–10PM |
| Private Dining | Multi-Cuisine | Up to 30 | By reservation |
| The Bar | Cocktails & Spirits (English pub) | 50 guests | 11AM–11PM |

### Experiences
Spa · Fitness Centre · Infinity Pool (4th floor, 40m above city, built-in Jacuzzi) · Salon · Night Club (2 venues)

### Ballrooms / Event Venues
| Venue | Size | Capacity | Floor | Style |
|-------|------|----------|-------|-------|
| Wellington | 26,000 sq.ft. | 1,000 guests | Ground | European (3× 12×15 screens) |
| Bridewell | 22,000 sq.ft. | 800 guests | First | Royal Indian / Kashmiri silver-leaf |
| Hamilton | 18,000 sq.ft. | 600+ guests | Second | Venetian dome ceiling |
| Bougainvillea Terrace | Open | 300–350 guests | Terrace | Artificial waterfalls, bird's-eye view |
| Pool Venue | 14,000 sq.ft. | 200+ guests | Fourth | Poolside, 40m high |

### Membership: The Club Expedition
- 50% off all F&B · Complimentary stay · Complimentary cake · Complimentary house wine
- Contact: +91 99995 39343 / +91 95852 81818 · theclubexpedition@sevenseashotel.com

### Stack
- **Framework**: Next.js 16.2.7 + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Animation**: Framer Motion
- **Carousel**: Embla Carousel
- **Forms**: React Hook Form + Zod
- **UI Components**: Radix UI (Dialog, Select, Tabs)
- **Email**: Resend (set `RESEND_API_KEY` in `.env.local`)
- **Dev**: `npm run dev` (Next.js)

### Email Routing (seven-seas)
| Form | Goes To |
|------|---------|
| General contact | info@sevenseashotel.com |
| Booking enquiry | reservations@sevenseashotel.com |
| Events | events@sevenseashotel.com |
| Careers | hr@sevenseashotel.com |

### Content Source of Truth
All hotel content in **`src/lib/config.ts`** (siteConfig, rooms, diningVenues, experiences, ballrooms, membership).

### Pages / Routes
```
/           Home (Hero, Rooms teaser, Dining teaser, Events teaser, Experience teaser, Membership CTA)
/about
/dining
/stay
/experience
/gallery
/membership
/careers
/contact
/celebrations/weddings
/celebrations/corporate
/celebrations/ballrooms
```

### APIs (Next.js Route Handlers)
- `POST /api/contact` — general contact form
- `POST /api/enquiry` — room/event booking enquiry
- `POST /api/careers` — job application

---

## 7. velorah-hero (Prototype/Client)

**Path**: `/Users/kulshresthjangid/Projects/bombaywala/velorah-hero/`

Mirror structure of `bombaywala-marketing` (Vite + React + TypeScript + Tailwind v3 + Framer Motion). Has same pages + service pages structure. Appears to be a separate client site or an earlier prototype. Has its own `src/lib/config.ts` and `src/lib/blog.ts`.

---

## 8. ramkishan-agri (Client Site)

**Path**: `/Users/kulshresthjangid/Projects/bombaywala/ramkishan-agri/`

### Client: Ramkishan Agri Innovate Pvt Ltd
- **Tagline**: "Energizing the Future of Farming" · **Motto**: "Our Culture is Agriculture"
- **Founded**: 2025, rooted in a 65-year family legacy (Hans Engineering Works, founded by Shri Ram Kishan Agarwal Ji)
- **Founder**: Sanket Jindal (bio, photo, and story in `src/lib/config.ts`)
- **Industry**: Tractor-mounted agricultural machinery manufacturer (Meerut/Hapur, UP)
- **Also a Bombaywala Marketing client** — see Ramkishan Agri Innovates entry in [Client Case Studies](#4-client-case-studies-11-total) (Lead Generation, Meta Ads).

### Contact
| Channel | Detail |
|---------|--------|
| Phone | +91 9045 333 332, +91 9479 333 332 |
| Email | support@agriequipments.com |
| Website | www.agriequipments.com |
| Registered Office | Plot No. 26, Harsh Commercial Park, Garh Road, Meerut-250002 |
| Factory | Khasra 39-41, Vill-Arifpur, Kithore Hapur Road, Hapur U.P.-201015 |

### Stack
- **Framework**: Vite + React 19 + TypeScript
- **Routing**: React Router v7
- **Styling**: Tailwind CSS v3 (green/orange/cream agri palette, `Oswald` display + `Inter` body fonts)
- **Animation**: Framer Motion (`FadeInUp` + `whileInView` throughout)
- **SEO**: react-helmet-async
- **Icons**: lucide-react
- **Dev server**: `npm run dev`

### Content Source
All 19 products (specs, features, images) and company content live in **`src/lib/config.ts`** — single source of truth, same pattern as `bombaywala-marketing`. Product categories: Tillers, Harrows, Sugarcane Equipment, Ploughs, Land Preparation, Power Tools.

### Assets
Product photos, logo, and founder photo were extracted from the client's Canva-exported PDF catalogue (`RKAI_catalouge_english_Jan2026.pdf`, sourced from Downloads) via `pdftoppm`/`pdfimages` (poppler) + Pillow crops. Raw extracted source images live in `/Users/kulshresthjangid/Projects/bombaywala/pdf-assets/` (kept as a reference source, not part of the site build); final web-optimized copies live in `ramkishan-agri/public/images/`.

### Pages / Routes
```
/                 Home (hero, why-choose-us, featured products, category band, CTA)
/about            Company profile, vision/mission, founder story, legacy, why-choose-us
/products         Full 19-product grid with category filter + search
/products/:slug   Product detail with full spec table + related products
/contact          Contact info + enquiry form
```

---

## 9. Blog Content Strategy

The blog targets Jaipur-focused, SEO-rich topics. Published articles include:

| Slug | Category | Date |
|------|----------|------|
| how-to-increase-organic-traffic-for-your-online-store-in-jaipur | Ecommerce Marketing | 2026-06-01 |
| audience-targeting-strategy-for-phonepe-ads | Programmatic Advertising | 2026-05-28 |
| best-linkedin-ads-strategy-for-service-based-businesses | PPC & Paid Ads | 2026-05-25 |
| chatgpt-seo-strategy-for-local-businesses-in-jaipur | SEO | 2026-05-22 |
| how-to-combine-paytm-ads-with-google-ads | Programmatic Advertising | 2026-05-20 |
| how-to-generate-100-leads-monthly-for-your-business | Lead Generation | 2026-05-18 |
| how-to-get-featured-in-google-ai-overviews | SEO | 2026-05-15 |
| how-to-get-your-business-mentioned-in-chatgpt-answers | SEO | 2026-05-12 |
| how-to-increase-organic-traffic-for-your-ecommerce-store | Ecommerce Marketing | 2026-05-10 |
| how-to-rank-in-chatgpt-ai-search-results-in-jaipur | SEO | 2026-05-08 |
| how-to-rank-1-on-google-maps-in-jaipur | Local SEO | 2026-05-05 |
| local-lead-generation-using-phonepe-ads | Programmatic Advertising | 2026-05-02 |

**Target keywords**: digital marketing agency in Jaipur · SEO services in Jaipur · local SEO Jaipur · D2C performance marketing · ecommerce growth · ROAS optimization

---

## 10. Dev Commands

### bombaywala-marketing
```bash
cd bombaywala-marketing
npm run dev      # Vite dev server
npm run build    # TypeScript check + Vite build → dist/
npm run preview  # Preview built site
npm run lint
```

### seven-seas
```bash
cd seven-seas
npm run dev      # Next.js dev server
npm run build
npm run start    # Production server
npm run lint
# Requires: .env.local with RESEND_API_KEY
```

### velorah-hero
```bash
cd velorah-hero
npm run dev
npm run build
```

### ramkishan-agri
```bash
cd ramkishan-agri
npm run dev      # Vite dev server
npm run build    # TypeScript check + Vite build → dist/
npm run preview
```

---

## 11. Important Notes

- **All content updates** for bombaywala-marketing go in `bombaywala-marketing/src/lib/config.ts` — not scattered across pages.
- **Seven-seas** uses **Next.js 16 + Tailwind v4** — these have breaking changes from common training data. Before editing, check `node_modules/next/dist/docs/` for current API.
- **Custom cursor** is active on non-touch devices — `cursor: none !important` is applied globally via CSS. Don't fight this.
- **Email in seven-seas** needs `RESEND_API_KEY` in `.env.local` — without it, form submissions silently fail.
- **Separate git repos**: `bombaywala-marketing/` and root have separate `.git` — commits must be made from the correct directory.
- **velorah-hero** has no CLAUDE.md — treat it like bombaywala-marketing structurally.
- **ramkishan-agri** has no CLAUDE.md either — same pattern, edit `src/lib/config.ts` for all content/product data. It has no `.git` of its own yet (not initialized as a separate repo like the others).
