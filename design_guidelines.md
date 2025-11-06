# Ambivers Landing Page Design Guidelines

## Design Approach
**Reference-Based Approach** inspired by education and social impact platforms like Coursera, Duolingo, and Notion, emphasizing trust, accessibility, and student success. The design should feel modern, approachable, and achievement-oriented.

## Core Design Principles
1. **Trust & Credibility** - Prominent social proof, statistics, and testimonials
2. **Accessibility First** - Clear hierarchy for student audience (ages 15-18)
3. **Achievement-Focused** - Celebrate success stories and student outcomes
4. **Modern & Clean** - Contemporary design that appeals to Gen Z students

---

## Typography System

**Font Families:**
- Primary: Inter (headings, UI elements)
- Secondary: Plus Jakarta Sans (body text, descriptions)

**Type Scale:**
- Hero Headline: text-5xl lg:text-7xl, font-bold
- Section Titles: text-3xl lg:text-5xl, font-bold
- Subsection Headers: text-2xl lg:text-3xl, font-semibold
- Program Cards: text-xl, font-semibold
- Body Text: text-base lg:text-lg, font-normal
- Captions/Meta: text-sm, font-medium
- Statistics Numbers: text-4xl lg:text-6xl, font-bold

---

## Layout System

**Spacing Primitives:**
Use Tailwind units of **4, 6, 8, 12, 16, 20** for consistency
- Component gaps: gap-6 to gap-8
- Section padding: py-16 lg:py-24
- Container padding: px-4 lg:px-8
- Card padding: p-6 lg:p-8

**Container Strategy:**
- Full-width sections with inner max-w-7xl mx-auto
- Content sections: max-w-6xl for optimal reading
- Grid layouts: max-w-7xl for program cards and statistics

---

## Component Library

### Navigation
- Fixed/sticky header with backdrop blur
- Logo on left, menu items center-right
- Desktop: horizontal menu with hover states
- Mobile: hamburger menu with slide-in drawer
- CTA buttons (Daftar, Masuk) with distinct styling
- Height: h-20, with py-4 inner spacing

### Hero Section
**Layout:** Full-height section (min-h-screen) with large hero image
- Background: Large impactful photo showing students/education success
- Content overlay with backdrop blur on button container
- Headline centered with max-w-4xl
- Subtext: max-w-2xl, centered
- CTA button: large, prominent with px-8 py-4
- Social proof line below CTA

**Image Requirements:**
- Hero background: Wide, inspiring photo of diverse students studying/celebrating
- Aspect ratio: 16:9 or wider
- Position: center or slightly above center focus

### About Section
- Two-column layout (lg:grid-cols-2)
- Left: Background image with text overlay
- Right: 2x2 or 3x3 photo grid with gap-4
- Section padding: py-20 lg:py-32

### Statistics Section
**Layout:** 5-column grid on desktop (grid-cols-2 md:grid-cols-3 lg:grid-cols-5)
- Each stat card: text-center with py-12
- Number emphasis: Large, bold typography
- Label below: smaller, medium weight
- Subtle dividers between cards (optional border-r)

### Programs Showcase
**Layout:** 3-column grid on desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Card structure:
  - Image placeholder at top (aspect-square or aspect-video)
  - Title: text-xl font-semibold, mt-4
  - Description: text-base, mt-2, line-clamp-3
  - Cards with hover lift effect
- Card padding: p-6
- Grid gap: gap-8
- "Coming Soon" cards: distinct styling with opacity or overlay

### Partners Section
- Auto-scrolling logo marquee
- Two rows of logos
- Logo containers: grayscale with hover color transition
- Each logo: h-12 to h-16, object-contain
- Infinite loop animation with smooth scrolling
- Background: subtle contrast to main sections

### Testimonials Carousel
**Layout:** Carousel with 2 testimonials per slide on desktop
- Card structure:
  - Profile photo: rounded-full, w-16 h-16 or w-20 h-20
  - Name: text-lg font-bold
  - University/School: text-sm, distinct styling
  - Testimonial text: text-base, line-clamp-4 or -6
- Slide controls: dots/arrows below carousel
- Card padding: p-8
- Card background: subtle elevation
- Grid: grid-cols-1 lg:grid-cols-2 gap-6 per slide

### Footer
**Layout:** 3-column grid on desktop (grid-cols-1 md:grid-cols-3)
- Column 1: Logo and company name
- Column 2: Address block
- Column 3: Social media icons in row
- Footer padding: pt-16 pb-8
- Social icons: w-6 h-6, hover scale effect
- Icon gap: gap-4

---

## Images Specification

**Required Images:**
1. **Hero Background:** Large, inspiring photo of Indonesian students in educational setting - studying together, celebrating success, or collaborative learning (16:9 ratio, full-width)
2. **About Section Grid:** 4-6 placeholder photos showing team, activities, students (square format)
3. **About Background:** Wide photo with text overlay capability
4. **Program Cards:** 6 placeholder images representing each program (4:3 or square ratio)
5. **Testimonial Photos:** 10 student profile photos (circular crops, 400x400px)
6. **Partner Logos:** Multiple company/school logos (transparent PNG, various sizes)

All images should use placeholder services initially with descriptive alt text.

---

## Responsive Behavior

**Breakpoints:**
- Mobile: base (< 768px) - single column, stacked layout
- Tablet: md (768px+) - 2-column grids
- Desktop: lg (1024px+) - full multi-column layouts

**Mobile Adjustments:**
- Navigation: Collapse to hamburger menu
- Hero: Reduce text sizes, maintain single-column
- Statistics: 2-column grid max
- Programs: Single column cards
- Testimonials: 1 per slide
- Footer: Stack vertically

**Critical:** All text must be readable on mobile (minimum text-sm for body)

---

## Interaction Patterns

**Minimal Animations:**
- Hover states: Subtle scale (scale-105) on cards
- Button hovers: Native button component states
- Scroll reveal: Fade-in for sections (optional, subtle)
- Partner logos: Smooth continuous scroll
- Carousel: Smooth slide transitions

**No Complex Animations:** Avoid excessive motion to maintain focus on content and accessibility.