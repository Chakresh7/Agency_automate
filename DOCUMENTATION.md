# AutoScale Agency Website - Documentation

## Project Overview

AutoScale is a modern, responsive agency website built with React, TypeScript, and Tailwind CSS. The website showcases AI-powered growth agency services including websites, AI chatbots, automations, landing pages, CRM integrations, and lead generation systems.

---

## Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS with custom design system
- **Routing:** React Router DOM v6
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Icons:** Lucide React
- **Build Tool:** Vite
- **State Management:** React Query (TanStack Query)

---

## Project Structure

```
src/
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── Navbar.tsx             # Navigation bar
│   ├── Footer.tsx             # Footer component
│   ├── HeroSection.tsx        # Home page hero
│   ├── AboutSection.tsx       # Home page about section
│   ├── ServicesSection.tsx    # Home page services
│   ├── WorkSection.tsx        # Home page portfolio preview
│   ├── ProcessSection.tsx     # Home page process steps
│   ├── TestimonialsSection.tsx # Client testimonials carousel
│   ├── TrustSection.tsx       # Trusted clients marquee
│   └── CTASection.tsx         # Call-to-action section
├── pages/
│   ├── Index.tsx              # Home page
│   ├── Work.tsx               # Portfolio listing page
│   ├── ProjectDetail.tsx      # Individual project page
│   ├── Services.tsx           # Services listing page
│   ├── ServiceDetail.tsx      # Individual service page
│   ├── Process.tsx            # Process page
│   ├── About.tsx              # About page
│   ├── Contact.tsx            # Contact/Book a Call page
│   └── NotFound.tsx           # 404 page
├── App.tsx                    # Main app with routing
├── index.css                  # Global styles & animations
└── main.tsx                   # Entry point
```

---

## Pages & Routes

### 1. Home Page (`/`)
**File:** `src/pages/Index.tsx`

**Sections:**
- **Hero Section** - Main headline with 3-line text layout, CTA buttons, social proof with user avatars and star rating
- **About Section** - Company overview with stats and team image
- **Work Section** - Portfolio preview (4 projects) with links to full portfolio
- **Services Section** - 6 services displayed on yellow background
- **Process Section** - 5-step process with square number boxes
- **Testimonials Section** - Sliding carousel with 9 testimonials, navigation arrows
- **Trust Section** - Dark background with animated logo marquee
- **CTA Section** - Book a call section

---

### 2. Work/Portfolio Page (`/work`)
**File:** `src/pages/Work.tsx`

**Features:**
- Hero section with page title
- 8 project cards in grid layout
- Each card links to individual project detail page
- FAQ section (10 questions) with image on left
- CTA card with calendar mockup

**Projects:**
1. Real Estate Lead System with Auto Follow-ups
2. E-commerce AI Support Bot
3. Coach Booking & CRM Integration
4. Local Gym Membership Funnel
5. SaaS Onboarding Automation
6. Law Firm Lead Qualification Bot
7. Restaurant Reservation System
8. Insurance Agency CRM Overhaul

---

### 3. Project Detail Page (`/work/:slug`)
**File:** `src/pages/ProjectDetail.tsx`

**Features:**
- Back navigation link
- Project title and overview
- Service type, Client name, Year info
- Main project image
- Key Features list
- Project Goals
- Project Gallery (multiple images)
- Technologies sidebar
- Results Achieved
- CTA to book a call
- FAQ section (10 questions) with image
- Related Works section (links to other projects)

**Available Project Slugs:**
- `real-estate-lead-system`
- `ecommerce-ai-support-bot`
- `coach-booking-crm`
- `gym-membership-funnel`
- `saas-onboarding-automation`
- `law-firm-lead-bot`
- `restaurant-reservation-system`
- `insurance-agency-crm`

---

### 4. Services Page (`/services`)
**File:** `src/pages/Services.tsx`

**Features:**
- Hero section
- 6 service cards in grid (clickable, linking to detail pages)
- Each card has icon, title, description, "Read More" link
- FAQ section (8 questions) with image
- CTA card with calendar mockup

**Services:**
1. Websites
2. AI Chatbots
3. Automations
4. Landing Pages
5. CRM Automations
6. Lead Systems

---

### 5. Service Detail Page (`/services/:slug`)
**File:** `src/pages/ServiceDetail.tsx`

**Features:**
- Back navigation link
- Service title and main image
- Detailed overview
- Multiple content sections with bullet points
- "Our Approach" section
- "Get in Touch" CTA
- "Other Services" section (2 related services)

**Available Service Slugs:**
- `websites`
- `ai-chatbots`
- `automations`
- `landing-pages`
- `crm-automations`
- `lead-systems`

---

### 6. Process Page (`/process`)
**File:** `src/pages/Process.tsx`

**Features:**
- Hero section
- 5 detailed process steps with icons and bullet points
- Timeline visual (yellow section showing 8-week breakdown)
- FAQ section (8 questions) with image
- CTA card with calendar mockup

**Process Steps:**
1. Discovery Call
2. Strategy & System Design
3. Build & Integrate
4. Launch & Train
5. Ongoing Optimization

---

### 7. About Page (`/about`)
**File:** `src/pages/About.tsx`

**Features:**
- Hero section with image
- "Our Story" section - Company origin
- Values section (4 core values)
- Team section (4 team members with photos)
- FAQ section (8 questions) with image
- CTA card with calendar mockup

**Core Values:**
1. Results-Focused
2. Innovation-Driven
3. Partnership Mindset
4. Genuine Care

---

### 8. Contact Page (`/contact`)
**File:** `src/pages/Contact.tsx`

**Features:**
- Hero section
- Contact form with:
  - Name, Email, Company, Message fields
  - Form validation
  - Loading state with spinner
  - Success state with animation
  - Error handling
- "Book a Free Strategy Call" card (yellow)
- Contact information:
  - Email
  - Phone
  - Location
  - Response time

---

## Components

### Navbar (`src/components/Navbar.tsx`)
- Fixed position with blur backdrop
- Logo linking to home
- Desktop navigation with dropdown for Services
- Mobile hamburger menu
- "Book a Call" button linking to Contact page

### Footer (`src/components/Footer.tsx`)
- Company branding
- Navigation links
- Social links
- Copyright

### TrustSection (`src/components/TrustSection.tsx`)
- Dark background
- "Trusted by 40+ worldwide clients" text
- Animated logo marquee (infinite scroll)
- White space below section

### TestimonialsSection (`src/components/TestimonialsSection.tsx`)
- 9 client testimonials
- Sliding carousel (3 cards visible)
- Navigation arrows
- Counter showing position (e.g., "1-3 of 9")

---

## Design System

### Colors (CSS Variables)
- **Primary:** Yellow/Gold (`hsl(48 96% 53%)`)
- **Background:** White/Light (`hsl(0 0% 100%)`)
- **Foreground:** Dark (`hsl(0 0% 5%)`)
- **Muted:** Light gray (`hsl(0 0% 96%)`)
- **Brand Black:** `hsl(0 0% 5%)`

### Typography
- **Heading Font:** Space Grotesk
- **Body Font:** System fonts

### Design Principles
- Solid corners (no border radius on cards)
- Yellow/black color scheme
- Clean, minimal aesthetic
- Consistent spacing

---

## Animations

### CSS Animations (defined in `index.css`)
- `fadeUp` - Fade in from bottom
- `fadeIn` - Simple fade in
- `scaleIn` - Scale up while fading in
- `marquee` - Infinite horizontal scroll

### Stagger Classes
- `.stagger-1` through `.stagger-6` for delayed animations

---

## Key Features

### Scroll to Top
- Implemented via `ScrollToTop` component in `App.tsx`
- Automatically scrolls to top on route change

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Mobile navigation menu
- Responsive grids and typography

### Form Handling
- Contact form with state management
- Validation for required fields
- Email format validation
- Loading and success states
- Error message display

### Image Handling
- External images from Unsplash
- Proper aspect ratios
- Object-fit cover
- Hover zoom effects on cards

---

## Routes Summary

| Route | Page | Description |
|-------|------|-------------|
| `/` | Index | Home page |
| `/work` | Work | Portfolio listing |
| `/work/:slug` | ProjectDetail | Individual project |
| `/services` | Services | Services listing |
| `/services/:slug` | ServiceDetail | Individual service |
| `/process` | Process | Process/How we work |
| `/about` | About | About the company |
| `/contact` | Contact | Contact & book a call |
| `*` | NotFound | 404 page |

---

## Future Enhancements (Suggestions)

1. **Backend Integration** - Connect contact form to actual email service
2. **CMS Integration** - Add headless CMS for content management
3. **Blog Section** - Add blog/articles functionality
4. **Analytics** - Integrate Google Analytics or similar
5. **SEO** - Add meta tags, Open Graph, structured data
6. **Performance** - Image optimization, lazy loading
7. **Accessibility** - ARIA labels, keyboard navigation
8. **Dark Mode** - Theme toggle functionality
9. **Animations** - Add page transitions with Framer Motion
10. **Calendar Integration** - Embed Calendly widget directly

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## File Size Summary

- **Total Pages:** 9
- **Total Components:** 15+
- **Total Routes:** 9
- **Testimonials:** 9
- **Projects:** 8
- **Services:** 6
- **Process Steps:** 5
- **Team Members:** 4
- **FAQ Questions per section:** 8-10

---

## Recent Updates (Post-Documentation)

### Hero Section Enhancements
- **Added 1:1 Hero Image** - Square image on the right side of the hero section
  - Team collaboration image from Unsplash
  - Decorative yellow elements (solid square bottom-left, border square top-right)
  - Positioned to the right with `ml-auto`
- **Reduced Headline Size** - Made text slightly smaller for better balance
  - Changed from `text-3xl...xl:text-7xl` to `text-2xl...xl:text-6xl`

### Navbar Button Styling
- **Yellow "Book a Call" Button** - Changed from dark variant to primary (yellow)
  - Solid corners (no border radius)
  - Added right arrow icon (`ArrowRight`)
  - Hover animation on arrow (moves right)
  - Updated both desktop and mobile versions

### Design Consistency
- All buttons and cards now follow solid corner design principle
- Yellow/primary color used consistently for CTAs

### Text Highlight & Emphasis Styling
Added yellow background highlights and underlines to key text across sections for visual impact:

- **Hero Section** - "AI Automations" has yellow background highlight
  - `bg-primary text-primary-foreground px-2 py-1`
  
- **About Us Section** - "Helping founders" has yellow background highlight
  - Same styling as hero section
  
- **Portfolio Section** - "Real systems." has yellow background highlight
  - Same styling as hero section
  
- **Process Section** - "work together" has yellow underline
  - `underline decoration-primary decoration-4 underline-offset-8`

These highlight styles create visual consistency and draw attention to key phrases throughout the website.

### Portfolio Card Compact Design
Made portfolio cards more compact/minimal in height:

- **Image Aspect Ratio** - Changed from `aspect-[4/3]` to `aspect-[2/1]` (shorter/wider)
- **Content Padding** - Reduced from `p-6` to `p-4`
- **Spacing** - Reduced from `space-y-4` to `space-y-2`
- **Title Size** - Changed from `text-xl` to `text-lg`
- **Description** - Added `text-sm` and `line-clamp-2` to limit to 2 lines
- **Category Badge** - Reduced padding from `px-3 py-1` to `px-2 py-0.5`
- **Result Tags** - Reduced gaps and padding

Applied to both:
- `src/pages/Work.tsx` - Main portfolio page
- `src/components/WorkSection.tsx` - Home page portfolio preview

### Text Selection Color
Changed text selection highlight from default blue to yellow (brand color):

```css
/* In src/index.css */
::selection {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
}

::-moz-selection {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
}
```

When users select/highlight text anywhere on the website, it now appears with yellow background and dark text.

### Contact Information Updated
Updated contact details across the website:

**Contact Details:**
- **Email:** chakreshkumarvulli@foundersmate.in
- **Phone:** +91 8978715162
- **Address:** Vadodara, Gujarat, India

**Files Updated:**
- `src/components/Footer.tsx` - Footer contact column (visible on all pages)
- `src/pages/Contact.tsx` - "Other Ways to Reach Us" section

Both email and phone are now clickable links (`mailto:` and `tel:`).

---

*Documentation last updated: December 2024*