# Content Mapping & Component Architecture

## Complete Site Content Inventory & Rendering Elements

---

## TABLE OF CONTENTS

1. [Navigation Bar](#1-navigation-bar)
2. [Hero Section](#2-hero-section)
3. [Domain Tags/Pills Section](#3-domain-tagspills-section)
4. [Who We Are Section](#4-who-we-are-section)
5. [Our Domains of Expertise](#5-our-domains-of-expertise)
6. [Our Mission Section](#6-our-mission-section)
7. [Our Core Values](#7-our-core-values)
8. [Call to Action Section](#8-call-to-action-section)
9. [Footer Section](#9-footer-section)
10. [Background Elements](#10-background-elements)

---

## 1. NAVIGATION BAR

**Component Name:** `Navigation` / `NavBar`
**Type:** Sticky Header Component
**Position:** Fixed at top (z-index: high)
**Styling:** Glass Morphism Effect

### Content Elements:

| Element | Type | Content | Position | Component |
|---------|------|---------|----------|-----------|
| Logo | Image | AISPIRE Logo (White) | Left: 117px | `LogoImage` |
| Nav Item 1 | Text Link | "About" | Left: 868px, Top: 53px | `NavLink` |
| Nav Item 2 | Text Link | "Work" | Left: 996px, Top: 53px | `NavLink` |
| Nav Item 3 | Text Link | "Ventures" | Left: 1117px, Top: 53px | `NavLink` |
| Nav Item 4 | Text Link | "Contact" | Left: 1265px, Top: 53px | `NavLink` |

### Styling Details:
- **Background:** Semi-transparent with backdrop blur
- **Color:** White text on transparent background
- **Font:** Avenir Next LT Pro, Regular, 15px
- **Height:** 67px
- **Width:** Full viewport width (1440px)
- **Behavior:** 
  - Sticky positioning (remains visible on scroll)
  - Glass morphism with blur effect (backdrop-filter: blur(10px))
  - Semi-transparent background (rgba(255, 255, 255, 0.1))

```jsx
<nav className="sticky top-0 z-50 bg-white/10 backdrop-blur-md">
  {/* Logo */}
  {/* Navigation Links */}
</nav>
```

---

## 2. HERO SECTION

**Component Name:** `HeroSection`
**Type:** Landing Section with CTA
**Position:** Top of page (after nav)
**Contains:** Heading, Subheading, Decorative Image

### Content Elements:

| Element | Type | Content | Position | Size |
|---------|------|---------|----------|------|
| Main Heading | Large Text | "We build what comes next." | Left: 117px, Top: 179px | 115px font |
| Sub Heading | Body Text | "A multi-domain technology company engineering solutions across hardware, software, SaaS — and reaching toward healthcare and robotics." | Left: 117px, Top: 554px | 20px font, 438px width |
| Decorative Image | Image | Design element/shape | Right: 996px, Top: 228px | 232px × 289px |

### Styling:
- **Main Text Color:** White (#FFFFFF)
- **Font Weight:** Bold (Roc Grotesk Wide Bold)
- **Background:** Gradient with animation (see Background Elements)
- **Layout:** Flex with content on left, image on right

```jsx
<section className="relative w-full h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700">
  <div className="container mx-auto">
    <h1 className="text-white font-bold text-9xl">We build what comes next.</h1>
    <p className="text-white text-xl max-w-md">
      A multi-domain technology company...
    </p>
  </div>
</section>
```

---

## 3. DOMAIN TAGS/PILLS SECTION

**Component Name:** `DomainTabs` / `DomainNavigation`
**Type:** Horizontal Navigation/Tabs
**Position:** Below Hero Section (Top: 771px)
**Behavior:** Acts as quick navigation to domain cards below

### Content Elements:

| Element | Type | Content | Position | Interactive |
|---------|------|---------|----------|-------------|
| Domain Tab 1 | Button/Link | "Hardware Engineering" | Left: 38px, Top: 797px | Yes |
| Separator Icon 1 | Icon | Divider | Left: 349px | No |
| Domain Tab 2 | Button/Link | "Software Development" | Left: 468px, Top: 797px | Yes |
| Separator Icon 2 | Icon | Divider | Left: 795px | No |
| Domain Tab 3 | Button/Link | "SaaS Platforms" | Left: 914px, Top: 797px | Yes |
| Logo/Brand Element | Image | Company logo mark | Right: 1233px, Top: 796px | No |

### Styling:
- **Background:** Black bar (#000000)
- **Height:** 67px
- **Text Color:** White
- **Font:** Roc Grotesk Wide Bold, 15px
- **Hover State:** Text highlight / underline effect
- **Border-radius:** None (hard edges)

```jsx
<div className="bg-black w-full h-16 flex items-center px-8 gap-4">
  <DomainTab active={true}>Hardware Engineering</DomainTab>
  <Separator />
  <DomainTab>Software Development</DomainTab>
  {/* ... more tabs ... */}
</div>
```

---

## 4. WHO WE ARE SECTION

**Component Name:** `AboutSection` / `WhoWeAre`
**Type:** Content Section with Gradient Background
**Position:** Starts at Top: 960px
**Contains:** Heading, Body Text, Gradient Background

### Content Elements:

| Element | Type | Content | Position | Font Size |
|---------|------|---------|----------|-----------|
| Section Label | Overline | "WHO WE ARE" | Left: 121px, Top: 960px | 15px, Orange (#f06222) |
| Main Heading Pt 1 | Text | "Driven by curiosity." | Left: 117px, Top: 996px | 64px Bold |
| Main Heading Pt 2 | Colored Text | "Built to last." | Same | 64px Bold, Orange (#f06222) |
| Body Text | Paragraph | Multi-paragraph description | Left: 720px, Top: 967px | 14px Regular, Black |

### Body Text Content:
```
Aispire Pvt Ltd is a technology company with ambition written into its name — 
AI-driven aspiration. We are a team of engineers, designers, and thinkers working 
across disciplines to build products and platforms that solve real problems at real scale.

We don't confine ourselves to a single lane. Our work spans physical hardware, 
enterprise software, cloud SaaS platforms, and emerging frontiers in healthcare 
technology and intelligent robotics. We believe the most powerful innovations happen 
at the intersection of domains — and that's exactly where we operate.

Founded with the conviction that great technology should be purposeful, we pursue 
every project with precision, creativity, and a long-term mindset. Whether shipping 
a product or exploring a research-stage idea, we hold ourselves to the same standard: 
build things that matter.
```

### Styling:
- **Section Background:** Light/White with gradient animation
- **Text Alignment:** Left for heading, Left for body
- **Width:** Heading 476px, Body 630px
- **Height:** Section height 541px (approximately)
- **Gradient Layer:** Below content (animated)

```jsx
<section className="relative bg-white py-16 px-8">
  <div className="container">
    <h2 className="text-black text-5xl font-bold">
      Driven by curiosity. <span className="text-orange">Built to last.</span>
    </h2>
    <div className="text-black text-sm leading-relaxed w-96">
      {/* Body content */}
    </div>
  </div>
  <AnimatedGradient className="absolute inset-0 z-0" />
</section>
```

---

## 5. OUR DOMAINS OF EXPERTISE

**Component Name:** `DomainsSection` / `ExpertiseGrid`
**Type:** Card Grid with Column Hover Effect
**Position:** Starts at Top: 1618px
**Contains:** Section heading, 5 domain cards with descriptions

### Section Header:

| Element | Type | Content | Position | Font |
|---------|------|---------|----------|------|
| Label | Overline | "WHAT WE DO" | Left: 125px, Top: 1583px | 15px Orange |
| Main Title | Heading | "Our Domains of Expertise" | Left: 121px, Top: 1618px | 96px Bold White |
| Subtitle | Body | "From circuits to cloud — we build across the full stack..." | Right: 1106px, Top: 1685px | 14px White, 218px width |

### Domain Cards (Arranged in Columns):

**Column 1: Hardware Engineering**
- **Number:** 01
- **Title:** Hardware Engineering
- **Description:** "Designing and manufacturing purpose-built hardware — from embedded systems to custom devices. Built for durability, performance, and the real world."
- **Position:** Left: 117-627px, Top: 1851-1882px
- **Status:** Active

**Column 2: Software Development**
- **Number:** 02
- **Title:** Software Development
- **Description:** "End-to-end software solutions built with clean architecture, scalability in mind, and a sharp focus on delivering exceptional user experiences."
- **Position:** Left: 117-627px, Top: 1966-1997px
- **Status:** Active

**Column 3: SaaS Platforms**
- **Number:** 03
- **Title:** SaaS Platforms
- **Description:** "Cloud-native products for businesses. Subscription-ready, infrastructure-resilient, designed to grow alongside the people who use them."
- **Position:** Left: 117-627px, Top: 2081-2112px
- **Status:** Active

**Column 4: Healthcare Technology**
- **Number:** 04
- **Title:** Healthcare Technology
- **Description:** "Applying intelligent systems to healthcare — improving diagnostics, accessibility, and clinical workflows through responsible, thoughtful innovation."
- **Position:** Left: 117-627px, Top: 2196-2227px
- **Status:** COMING SOON (orange badge)

**Column 5: Robotics & Automation**
- **Number:** 05
- **Title:** Robotics & Automation
- **Description:** "Engineering autonomous systems that bridge the physical and digital worlds — from research prototypes to deployable machines that redefine what's possible."
- **Position:** Left: 117-627px, Top: 2311-2342px
- **Status:** COMING SOON (orange badge)

### Card Styling:
- **Layout:** 5 vertical cards in column layout
- **Number Font:** 15px, White/Greyed
- **Title Font:** 36px Bold, White/Greyed (Roc Grotesk)
- **Description Font:** 14px Regular, White/Greyed
- **Row Height:** ~130px each
- **Hover Behavior:** 
  - Entire column highlights
  - Background color change
  - Subtle glow effect
  - Other columns dim slightly
  - Smooth transition (0.3-0.5s)

```jsx
<section className="bg-black text-white py-20 px-8">
  <h2 className="text-9xl font-bold mb-12">Our Domains of Expertise</h2>
  
  <div className="flex flex-col gap-8">
    {domains.map((domain, idx) => (
      <DomainCard
        key={idx}
        number={domain.number}
        title={domain.title}
        description={domain.description}
        status={domain.status}
        onHover={() => highlightColumn(idx)}
      />
    ))}
  </div>
</section>
```

---

## 6. OUR MISSION SECTION

**Component Name:** `MissionSection`
**Type:** Statement Section with Background Logo
**Position:** Starts at Top: 2495px
**Contains:** Mission statement, translucent background logo

### Content Elements:

| Element | Type | Content | Position | Font |
|---------|------|---------|----------|------|
| Label | Overline | "OUR MISSION" | Center, Top: 2495px | 15px Orange |
| Main Statement | Heading | "Harness intelligent systems and human creativity to build technology that changes the world." | Center, Top: 2553px | 70px Bold White |

### Background Element:
- **Logo:** Aispire Logo (Translucent)
- **Opacity:** 0.08-0.15 (very faint)
- **Position:** Fixed/Absolute, centered behind all content
- **Size:** 120vw × 120vh (larger than viewport)
- **Z-index:** -1 (behind content)
- **Rendering:** As background image or SVG with low opacity

### Styling:
- **Section Background:** Black or dark gradient
- **Text Alignment:** Center
- **Max Width:** 1192px
- **Line Height:** 69px
- **Letter Spacing:** Default
- **Logo Watermark:** 
  - Semi-transparent overlay
  - Positioned absolutely
  - Behind all page content
  - Does not interfere with readability

```jsx
<section className="relative bg-black text-white py-24 text-center overflow-hidden">
  {/* Translucent Background Logo */}
  <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
    <AispireLogo className="w-full h-full" />
  </div>
  
  {/* Content */}
  <div className="relative z-10">
    <p className="text-orange text-sm mb-4">OUR MISSION</p>
    <h2 className="text-7xl font-bold text-center max-w-5xl mx-auto">
      Harness intelligent systems and human creativity to build technology 
      that changes the world.
    </h2>
  </div>
</section>
```

---

## 7. OUR CORE VALUES

**Component Name:** `ValuesSection` / `CoreValues`
**Type:** 4-Column Grid Section
**Position:** Starts at Top: 3091px
**Contains:** Section title, 4 value cards in 2×2 grid

### Section Header:

| Element | Type | Content | Position | Font |
|---------|------|---------|----------|------|
| Title | Heading | "Our Core Values" | Left: 117px, Top: 3091px | 96px Bold White |
| Subtitle | Overline | "WHAT WE STAND FOR" | Left: 124px, Top: 3054px | 15px White |

### Value Cards (2×2 Grid Layout):

**Card 1: Breadth with Depth**
- **Number:** 01
- **Title:** Breadth with Depth
- **Description:** "We work across many fields, but go deep in every one. Being multi-domain never means being shallow — it means being uniquely positioned to connect dots others can't."
- **Position:** Left: 219px, Top: 3315px
- **Size:** 470px × 251px
- **Background:** Black (#000000)
- **Border Radius:** 10px

**Card 2: Purposeful Innovation**
- **Number:** 02
- **Title:** Purposeful Innovation
- **Description:** "We build with intent. Every product, every feature, every line of code is tied to a real human need — not novelty for its own sake."
- **Position:** Left: 752px, Top: 3315px
- **Size:** 470px × 251px
- **Background:** Black (#000000)
- **Border Radius:** 10px

**Card 3: Long-Term Thinking**
- **Number:** 03
- **Title:** Long-Term Thinking
- **Description:** "Short-term shortcuts don't interest us. We're building a company and a body of work meant to compound and endure over time."
- **Position:** Left: 219px, Top: 3601px
- **Size:** 470px × 251px
- **Background:** Black (#000000)
- **Border Radius:** 10px

**Card 4: Responsible Technology**
- **Number:** 04
- **Title:** Responsible Technology
- **Description:** "As we move into healthcare and autonomous systems, we hold ourselves accountable to the highest standards of safety, ethics, and transparency."
- **Position:** Left: 753px, Top: 3601px
- **Size:** 470px × 251px
- **Background:** Black (#000000)
- **Border Radius:** 10px

### Card Styling:
- **Text Color:** White
- **Number Font:** 15px Regular
- **Title Font:** 36px Bold (Roc Grotesk)
- **Description Font:** 14px Regular, line-height: 1.68
- **Padding:** 40px internal
- **Hover State:** Optional subtle scale/shadow effect
- **Transition:** Smooth 0.3s

```jsx
<section className="bg-black text-white py-24 px-8">
  <h2 className="text-9xl font-bold mb-16">Our Core Values</h2>
  
  <div className="grid grid-cols-2 gap-8">
    {values.map((value) => (
      <ValueCard
        key={value.id}
        number={value.number}
        title={value.title}
        description={value.description}
      />
    ))}
  </div>
</section>
```

---

## 8. CALL TO ACTION SECTION

**Component Name:** `CTASection` / `JoinJourney`
**Type:** CTA Hero Section
**Position:** Starts at Top: 4205px
**Contains:** Large heading, CTA buttons, decorative image

### Content Elements:

| Element | Type | Content | Position | Font |
|---------|------|---------|----------|------|
| Label | Overline | "Join the Journey" | Center, Top: 4205px | 24px White |
| Main Heading | Large Text | "Let's Build Together" | Center, Top: 4253px | 128px Bold White |
| CTA Button 1 | Button | "GET IN TOUCH" | Left: 410px, Top: 4648px | 16px Bold Black |
| CTA Button 2 | Button | "VIEW OUR WORK" | Left: 729px, Top: 4648px | 16px Bold White |
| Decorative Image | Image | Design element | Right: 1091px, Top: 4908px | 232px × 289px |

### Button Styling:
- **Button 1 (GET IN TOUCH):**
  - Background: Orange (#f37124)
  - Text: Black
  - Border Radius: 10px
  - Size: 302px × 64px
  - Font: Roc Grotesk Medium

- **Button 2 (VIEW OUR WORK):**
  - Background: Transparent
  - Border: 2px solid White
  - Text: White
  - Border Radius: 10px
  - Size: 302px × 64px
  - Font: Roc Grotesk Medium

### Styling:
- **Section Background:** Black with orange gradient
- **Text Alignment:** Center
- **Buttons Alignment:** Center, side by side
- **Spacing:** Gap between buttons ~50px

```jsx
<section className="bg-black text-white py-32 text-center relative">
  <h2 className="text-8xl font-bold mb-8">Let's Build Together</h2>
  
  <div className="flex gap-8 justify-center">
    <Button 
      variant="primary" 
      className="bg-orange text-black px-12 py-4"
    >
      GET IN TOUCH
    </Button>
    <Button 
      variant="outline" 
      className="border-2 border-white text-white px-12 py-4"
    >
      VIEW OUR WORK
    </Button>
  </div>
</section>
```

---

## 9. FOOTER SECTION

**Component Name:** `Footer`
**Type:** Footer Navigation & Contact
**Position:** Starts at Top: 4017px (orange bar) and extends below
**Contains:** Navigation tabs, contact info, social links

### Content Areas:

**Footer Navigation Bar (Orange):**

| Element | Type | Content | Position | Color |
|---------|------|---------|----------|-------|
| Domain Link 1 | Link | "Hardware Engineering" | Left: 39px, Top: 4043px | Black |
| Domain Link 2 | Link | "Software Development" | Left: 469px, Top: 4043px | Black |
| Domain Link 3 | Link | "SaaS Platforms" | Left: 915px, Top: 4043px | Black |
| Logo Icon 1 | Icon | Separator | Left: 350px | Black |
| Logo Icon 2 | Icon | Separator | Left: 796px | Black |
| Logo Icon 3 | Icon | Separator | Left: 1132px | Black |
| Logo/Brand | Image | Company logo | Right: 1233px, Top: 4042px | - |

- **Background:** Orange (#f37124)
- **Height:** 67px
- **Text Font:** Roc Grotesk Bold, 15px, Black

**Contact Section:**

| Element | Type | Content | Position | Font |
|---------|------|---------|----------|------|
| Label 1 | Overline | "Connect Now" | Left: 117px, Top: 4908px | 16px Bold White |
| Sub Label 1 | Link | "Contact" | Left: 117px, Top: 5100px | 16px Bold White |
| Email 1 | Email | business@aispire.co.in | Left: 117px, Top: 5133px | 16px Regular White |
| Label 2 | Overline | "Support" | Center, Top: 5097px | 16px Bold White |
| Email 2 | Email | business@aispire.co.in | Center, Top: 5130px | 16px Regular White |

**Social Links:**

| Element | Type | Content | Position | Size |
|---------|------|---------|----------|------|
| Label | Overline | "Socials" | Left: 117px, Top: 5186px | 16px Bold White |
| Instagram | Icon/Link | Instagram Icon | Left: 117px, Top: 5220px | 40×40px |
| Facebook | Icon/Link | Facebook Icon | Left: 176px, Top: 5220px | 40×40px |
| Reddit | Icon/Link | Reddit Icon | Left: 235px, Top: 5220px | 40×40px |
| Twitter | Icon/Link | Twitter Icon | Left: 294px, Top: 5220px | 40×40px |

### Footer Styling:
- **Orange Bar Background:** #f37124
- **Footer Content Background:** Black (#000000)
- **Text Color (Black Bar):** White
- **Text Color (Orange Bar):** Black
- **Social Icons:** Clickable links to social profiles

```jsx
<footer className="bg-black text-white">
  {/* Orange Navigation Bar */}
  <div className="bg-orange text-black py-4 px-8 flex gap-12">
    {domains.map(domain => <a key={domain}>{domain}</a>)}
  </div>
  
  {/* Contact & Social Section */}
  <div className="py-16 px-8">
    <div className="grid grid-cols-3 gap-12">
      {/* Contact 1 */}
      {/* Support */}
      {/* Socials */}
    </div>
  </div>
</footer>
```

---

## 10. BACKGROUND ELEMENTS

**Component Name:** `BackgroundLayers` / `AnimatedGradients`
**Type:** Decorative Background Elements
**Position:** Various absolute positions behind content
**Contains:** Animated gradients, SVG vectors, texture overlays

### Gradient Animations:

**Gradient 1 (Hero Section Background):**
- **Position:** Absolute, Top: -262px to 429px, Left: -1386px
- **Size:** 4432px × 1287px (oversized for animation)
- **Assets:** 4 vector graphics (imgVector1, imgVector4, imgRectangle2, imgVector5)
- **Animation:** Continuous wiggle/rotation
- **Duration:** 10-12 seconds
- **Direction:** Subtle clockwise rotation
- **Blend Mode:** Overlay mix (mix-blend-overlay)
- **Z-Index:** Behind content (negative)

**Gradient 2 (Who We Are Section):**
- **Position:** Absolute, Top: 1248px to 1358px, Left: -61px
- **Size:** 1590px × 321px (repeating)
- **Assets:** 3 vector graphics (imgVector12, imgVector13, imgVector14)
- **Animation:** Wave/ripple effect
- **Duration:** 12 seconds
- **Color:** Orange/warm tones

**Gradient 3 (Domain Section):**
- **Position:** Absolute, Top: 2920px to 3002px, Left: -298px
- **Size:** 1986px × 451px (repeating)
- **Assets:** 3 vector graphics (imgVector6, imgVector7, imgVector8)
- **Animation:** Upward scroll with opacity fade
- **Duration:** 8 seconds loop
- **Color:** Dark gradients

**Gradient 4 (Mission Section):**
- **Position:** Absolute, Top: 4205px to 4290px, Left: -362px
- **Size:** 2198px × 462px (repeating)
- **Assets:** 3 vector graphics (imgVector9, imgVector10, imgVector11)
- **Animation:** Pulsing opacity with movement
- **Duration:** 10 seconds loop
- **Opacity:** 95% (slightly visible)
- **Color:** Orange/warm blend

### Background Logo Watermark:

**Component:** `LogoWatermark` / `BackgroundLogo`
- **Position:** Fixed or Absolute, centered on page
- **Asset:** Aispire Logo SVG
- **Opacity:** 0.08 (8% - very subtle)
- **Size:** 120vw × 120vh (oversized)
- **Z-Index:** -1 (behind everything)
- **Pointer Events:** None (non-interactive)
- **Transform:** Centered with transform: translate(-50%, -50%)

```jsx
{/* Background Gradients */}
<div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
  <AnimatedGradient 
    variant="hero" 
    duration={10} 
    className="absolute top-0 left-0"
  />
  <AnimatedGradient 
    variant="mission" 
    duration={12} 
    className="absolute top-1/2"
  />
</div>

{/* Logo Watermark */}
<div className="fixed inset-0 opacity-10 z-0 pointer-events-none">
  <div className="absolute inset-0 flex items-center justify-center">
    <AispireLogo className="w-96 h-96" />
  </div>
</div>
```

---

## CONTENT SUMMARY TABLE

### Total Content Elements: 50+

| Section | Components | Cards/Items | Interactive |
|---------|-----------|-------------|-------------|
| Navigation | 1 | 4 links + 1 logo | 5 |
| Hero | 1 | 2 text blocks + 1 image | 0 |
| Domain Tabs | 1 | 3 tabs + 2 separators | 3 |
| About | 1 | 2 headings + body text | 0 |
| Domains Grid | 5 | 5 domain cards | 5 (hover) |
| Mission | 1 | 1 heading + 1 logo | 0 |
| Values | 4 | 4 value cards | 4 (optional) |
| CTA | 1 | 1 heading + 2 buttons + 1 image | 2 |
| Footer | 1 | 3 domain links + social icons | 6 |
| **TOTAL** | **17** | **50+** | **25+** |

---

## RENDERING PRIORITY & LOAD ORDER

### Critical (Above Fold):
1. Navigation Bar (sticky)
2. Hero Section heading & CTA
3. Domain Tabs navigation
4. Hero image

### High Priority:
5. Who We Are section
6. Domains of Expertise cards
7. Core Values cards

### Medium Priority:
8. Mission statement
9. CTA section
10. Footer navigation

### Background & Effects:
- Gradient animations (all sections)
- Logo watermark
- Hover states
- Transitions

---

## COMPONENT DEPENDENCY TREE

```
Page
├── Navigation
│   ├── Logo
│   └── NavLinks (4)
├── HeroSection
│   ├── Heading
│   ├── Subheading
│   ├── CTA
│   └── DecorativeImage
├── DomainTabs
│   ├── DomainTab (3)
│   └── Separators (2)
├── AboutSection
│   ├── Heading
│   └── BodyText
├── DomainsGrid
│   ├── SectionHeading
│   └── DomainCard (5)
│       ├── Number
│       ├── Title
│       ├── Description
│       └── Status Badge
├── MissionSection
│   ├── Label
│   ├── MainStatement
│   └── BackgroundLogo
├── ValuesSection
│   ├── SectionHeading
│   └── ValueCard (4)
│       ├── Number
│       ├── Title
│       └── Description
├── CTASection
│   ├── Heading
│   ├── CTAButton (2)
│   └── DecorativeImage
├── Footer
│   ├── FooterNav
│   │   ├── DomainLinks (3)
│   │   └── Logo
│   ├── ContactSection
│   │   ├── ContactLink (2)
│   │   └── Email (2)
│   └── SocialLinks (4)
├── BackgroundLayers
│   ├── GradientAnimation (4)
│   └── LogoWatermark
```

---

## COLOR PALETTE

| Color | Hex Code | Usage |
|-------|----------|-------|
| Black | #000000 | Backgrounds, cards, text |
| White | #FFFFFF | Text, navigation |
| Orange/Accent | #f37124 / #f06222 | Labels, badges, buttons, accents |
| Dark Background | #0a0a0a | Primary page background |
| Greyed Text | #606060 | Secondary/inactive text |
| Transparent | rgba(255, 255, 255, 0.1) | Glass morphism |

---

## TYPOGRAPHY

| Element | Font Family | Weight | Size | Line Height |
|---------|------------|--------|------|------------|
| Navigation | Avenir Next LT Pro | Regular | 15px | Normal |
| Main Heading | Roc Grotesk | Wide Bold | 115px | 88px |
| Section Title | Roc Grotesk | Wide Bold | 96px | 80px |
| Card Title | Roc Grotesk | Wide Bold | 36px | 43px |
| Body Text | Avenir Next LT Pro | Regular | 14px | 1.68 |
| Overline/Label | Avenir Next LT Pro | Regular | 15px | Normal |
| CTA Button | Roc Grotesk | Wide Medium | 16px | Normal |

---

## INTERACTIVE ELEMENTS BEHAVIOR

### Navigation Links
- **Behavior:** Smooth scroll to section
- **Active State:** Underline or highlight
- **Hover:** Text color change or slight glow

### Domain Tabs
- **Behavior:** Switch active tab
- **Hover:** Highlight domain, dim others
- **Active:** Orange underline or background

### Domain Cards (Column Hover)
- **Behavior:** Entire column highlights on hover
- **Effect:** Background color + shadow
- **Other Columns:** Slight opacity reduction
- **Transition:** 0.3-0.5s ease-in-out

### CTA Buttons
- **GET IN TOUCH:** 
  - Hover: Darker orange, slight shadow
  - Click: Submit form or navigate
- **VIEW OUR WORK:**
  - Hover: White background, text color invert
  - Click: Navigate to portfolio

### Social Links
- **Behavior:** Open in new tab
- **Hover:** Icon scale/rotate effect
- **Color:** White, hover: orange

### Scroll Behavior
- **Navigation:** Sticky, remains visible
- **Hero:** Parallax effect (optional)
- **Gradients:** Continuous animation
- **Infinite Scroll:** Load more content at bottom

---

## RESPONSIVE BREAKPOINTS

| Breakpoint | Width | Adjustments |
|-----------|-------|------------|
| Mobile | < 640px | Single column, hamburger nav, larger fonts |
| Tablet | 640px - 1024px | 2-column grid, adjusted spacing |
| Desktop | > 1024px | Full layout, multi-column grids |
| Large | > 1440px | Extended layouts, increased spacing |

---

## PERFORMANCE NOTES

1. **Sticky Navigation:** Use `position: sticky` with GPU acceleration
2. **Animations:** Use CSS keyframes or Framer Motion for 60fps
3. **Gradients:** Use CSS gradients with background-position animation (not transform)
4. **Logo Watermark:** Fixed positioning, opacity layer only (no repaints)
5. **Images:** Lazy load domain cards and decorative images
6. **Scroll Events:** Debounce hover handlers for column highlights
7. **Infinite Scroll:** Implement intersection observer for load triggers

---

## ACCESSIBILITY CHECKLIST

- [ ] Navigation links have proper ARIA labels
- [ ] Color contrast meets WCAG AA standards
- [ ] Images have descriptive alt text
- [ ] Keyboard navigation fully supported
- [ ] Focus indicators visible on all interactive elements
- [ ] Reduced motion respected (prefers-reduced-motion media query)
- [ ] Form inputs properly labeled
- [ ] Social links have descriptive text/labels

---

## IMPLEMENTATION FILES MAPPING

```
src/
├── components/
│   ├── Navigation.jsx          → NavBar component
│   ├── HeroSection.jsx         → Hero + Domain Tabs
│   ├── AboutSection.jsx        → Who We Are
│   ├── DomainsSection.jsx      → Domains Grid + Cards
│   ├── MissionSection.jsx      → Mission Statement + Logo
│   ├── ValuesSection.jsx       → Core Values Grid
│   ├── CTASection.jsx          → Call to Action
│   ├── Footer.jsx              → Footer with contact & socials
│   └── BackgroundLayers.jsx    → Gradients & Watermark
├── styles/
│   ├── globals.css             → Base + animations
│   ├── glass-morphism.css      → Nav styling
│   ├── animations.css          → Wiggle, transitions, keyframes
│   └── responsive.css          → Media queries
├── assets/
│   ├── logo.svg                → Aispire logo
│   ├── images/                 → Decorative images
│   └── icons/                  → Social & separator icons
└── pages/
    └── index.jsx               → Main landing page
```

