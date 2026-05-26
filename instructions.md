You are a senior frontend engineer, product designer, SaaS conversion strategist, and brand-focused web developer.

Your task is to build a production-quality, mobile-first landing page for SchoolaPay.

Use the attached SchoolaPay brand identity board and landing page render as the visual source of truth. Recreate the design direction in clean, responsive code rather than merely approximating it.

SchoolaPay is a mobile-first EdTech + FinTech platform that helps schools manage extracurricular activity payments, parent coordination, QR ticketing, reminders, digital receipts, attendance validation, and school activity administration.

The page must feel:
- Trustworthy
- Simple
- Warm
- Secure
- Modern
- Parent-friendly
- School-approved
- Operationally efficient
- Calm and professional

The page must not feel:
- Overhyped
- Generic SaaS
- Crypto/fintech aggressive
- Childish
- Corporate and cold
- Cluttered
- Like a fake startup page

Primary positioning:
“The simplest way for schools to manage activity payments and parent coordination.”

Primary CTA:
“Request a Demo”

Important CTA rule:
Use “Request a Demo” as the only primary CTA across the entire page.

Do not use:
- Start Free
- Get Started
- Sign Up
- Try Now
- Revolutionary
- Game-changing
- Fake traction claims
- Fake app store ratings
- Fake customer logos
- Fake testimonials presented as real

Use honest, pilot-ready language. Where traction or proof is needed, use clearly marked placeholders such as:
- “Pilot metrics measured during onboarding”
- “Case studies coming soon”
- “Pilot testimonial placeholder”

Do not invent real customer names, real numbers, real ratings, or real institutional claims.

---

TECH STACK

First inspect the existing project.

If this is an existing app:
- Use the existing framework and conventions.
- Preserve the existing structure unless there is a strong reason to change it.
- Do not introduce unnecessary dependencies.

If this is a new or mostly empty project:
Use:
- Next.js App Router
- TypeScript
- Tailwind CSS
- React
- Framer Motion for subtle animation
- Lucide React for icons
- Zod for validation
- Resend for email submission if an email provider is not already configured

Target file structure for a new project:

/app
  /api
    /demo
      route.ts
  layout.tsx
  page.tsx
  globals.css

/components
  Header.tsx
  MobileNav.tsx
  Button.tsx
  SectionHeading.tsx
  HeroSection.tsx
  ProductMockup.tsx
  DashboardMockup.tsx
  ProblemSection.tsx
  SolutionSection.tsx
  HowItWorksSection.tsx
  FeaturesSection.tsx
  QRTicketingSection.tsx
  BenefitsSection.tsx
  TrustSecuritySection.tsx
  ProofSection.tsx
  FAQSection.tsx
  DemoFormSection.tsx
  DemoForm.tsx
  Footer.tsx

/lib
  demo-schema.ts
  email.ts
  utils.ts

Use reusable components and structured content arrays where appropriate.

---

BRAND SYSTEM

Use the SchoolaPay branding from the attached design.

Colors:
- Primary Blue: #2563EB
- Deep Navy: #0F172A
- Secondary Blue: #1E40AF
- Emerald: #10B981
- Warm Orange: #F59E0B
- Soft Coral: #F9738F
- Slate: #64748B
- Light Background: #F8FAFC
- White Cards: #FFFFFF
- Border: #E2E8F0

Typography:
- Prefer Poppins for headings and UI if available.
- Use Inter as fallback.
- Headings should be bold, rounded, clean, and trustworthy.
- Body text should be readable, calm, and professional.

Visual style:
- White and very light blue page background
- Deep navy text
- Blue primary CTA buttons
- Rounded white cards
- Soft shadows
- Clean fintech-style dashboard cards
- Friendly school/parent visual language
- Rounded colorful line icons
- Subtle dotted background patterns
- Soft blue abstract background shapes
- Large whitespace
- Clear hierarchy
- Card-based layout
- Mobile-first spacing

Avoid:
- Harsh gradients
- Over-animation
- Dense text blocks
- Generic stock-style sections
- Dark crypto-like fintech visuals
- Cluttered dashboard UI
- Broken placeholder images

If there are no real image assets available:
- Do not use broken images.
- Create polished CSS-based app mockups, dashboard cards, icons, and illustration-style placeholders.
- Use abstract cards and UI mockups instead of unreliable image URLs.

---

PAGE GOAL

The page’s only major conversion goal is demo request submission.

The user should understand within 3 seconds:
1. What SchoolaPay does
2. Who it is for
3. Why it matters
4. What action to take next

The landing page should communicate:
SchoolaPay helps schools replace fragmented workflows such as cash collection, spreadsheets, WhatsApp follow-ups, lost receipts, paper tickets, and manual event entry with one secure, organized platform.

---

GLOBAL UX REQUIREMENTS

- Fully responsive: mobile, tablet, desktop, large desktop
- Mobile-first design
- Sticky desktop header
- Mobile hamburger navigation
- Sticky bottom mobile CTA: “Request a Demo”
- Smooth scrolling to page sections
- All CTAs should scroll to or open the demo form section
- Accessible color contrast
- Semantic HTML
- Keyboard-accessible controls
- Proper labels for form fields
- Visible focus states
- FAQ accordions should be accessible
- No hydration errors
- No TypeScript errors
- No lint errors
- No console errors
- Fast loading
- No layout shift from missing assets

---

SEO AND METADATA

Add strong metadata:

Title:
SchoolaPay | School Activity Payments Made Simple

Description:
SchoolaPay helps schools manage extracurricular payments, QR ticketing, receipts, reminders, and parent coordination in one secure platform.

Open Graph:
- title
- description
- site name: SchoolaPay
- type: website

Use clean semantic sections with proper headings.

---

PAGE STRUCTURE

Build the following complete landing page.

---

1. HEADER

Desktop header:
- Left: SchoolaPay logo
- Center nav:
  - Features
  - How It Works
  - For Schools
  - For Parents
  - Security
  - FAQ
- Right:
  - Request a Demo button

Mobile header:
- Logo
- Hamburger menu
- Slide-down or drawer menu
- Request a Demo CTA inside menu

Header style:
- White or translucent white
- Subtle border on scroll
- Sticky at top
- Professional SaaS feel

Logo:
Use the available SchoolaPay logo asset if present.
If no logo asset exists, create a clean temporary logo mark using CSS or inline SVG inspired by the brand board:
- Geometric cube/school/payment icon
- Blue, navy, and emerald
- Wordmark: SchoolaPay
Do not make it look cartoonish.

---

2. HERO SECTION

Badge:
“Built for Schools. Loved by Parents.”

Headline:
“The simplest way for schools to manage activity payments and parent coordination.”

Visually emphasize the word “simplest” in primary blue.

Subheadline:
“SchoolaPay helps schools simplify payments, reminders, QR ticketing, receipts, and communication — all in one secure platform.”

Primary CTA:
“Request a Demo”

Secondary CTA:
“See How It Works”

Trust row:
- Mobile-first
- QR Ticketing
- Digital Receipts
- Secure & Reliable

Hero visual:
Create a high-quality product mockup area inspired by the render:
- Large mobile phone mockup
- Dashboard card to the side
- Soft blue abstract background shape
- Dotted pattern accent

Phone mockup content:
- “Good morning, Sarah”
- Child profile card: Emma Johnson
- Upcoming activity: Spring Theatre Show
- Amount: $25.00
- Pay Now button
- My Ticket card with QR-style placeholder
- Bottom app navigation

Dashboard mockup content:
- Dashboard Overview
- Total Collected: use “Measured during pilot” instead of fake revenue if necessary
- Pending Payments
- Total Activities
- Recent Payments list
- Payment status badges

Important:
If using metrics in mockups, make them clearly illustrative and not presented as real company traction. Prefer realistic UI labels over claims.

Hero layout:
- Desktop: text left, product visual right
- Mobile: text first, visual below
- Ensure hero feels premium and spacious

---

3. PROBLEM SECTION

Eyebrow:
“The Challenge”

Headline:
“Managing school activities shouldn’t be this hard.”

Copy:
“Schools and parent coordinators often rely on outdated, fragmented tools that create more work and more confusion.”

Problem cards:
- Cash collection friction
- Manual payment tracking
- WhatsApp coordination chaos
- Spreadsheet administration
- Lost receipts & confirmations
- Parent follow-ups & reminders
- Paper tickets & manual entry
- Payment visibility issues
- High administrative overhead
- Event entry management

Design:
- Use a clean grid of soft cards
- Each card has a rounded icon
- Use blue, emerald, orange, and coral accents
- Include a small “Request a Demo” CTA

---

4. SOLUTION SECTION

Eyebrow:
“Our Solution”

Headline:
“One platform. Total clarity.”

Copy:
“SchoolaPay centralizes every part of your activity management workflow so schools save time, parents stay informed, and students have a better experience.”

Feature highlights:
- Mobile Payments
  “Parents pay securely from their phones.”
- Digital Receipts
  “Every payment is recorded and accessible.”
- QR Ticketing
  “Instant, secure entry to school events.”
- Admin Dashboard
  “Real-time visibility into payments, activities, and participation.”
- Smart Reminders
  “Automated notifications reduce manual follow-ups.”
- Attendance Tracking
  “Track attendance and participation with confidence.”

Layout:
- Left: headline and copy
- Center: feature list
- Right: polished card or illustration showing a parent/school admin workflow
If no image asset exists, create a clean UI illustration instead of using a random stock image.

---

5. HOW IT WORKS SECTION

Eyebrow:
“How It Works”

Headline:
“Designed to fit your existing workflow.”

Five-step flow:
1. School creates an activity
   “Add activity details, fees, and schedule.”
2. Parents receive a notification
   “Instant alerts about new activities and payments.”
3. Parent completes payment
   “Secure mobile payment in just a few taps.”
4. Receipt & QR ticket are generated
   “Instant digital receipt and unique QR ticket.”
5. School validates attendance
   “Scan QR code and track participation in real time.”

Design:
- Desktop: horizontal flow with numbered circular icons
- Mobile: stacked vertical cards
- Use subtle connectors on desktop only

---

6. FEATURES SECTION

Eyebrow:
“Powerful Features”

Headline:
“Everything you need, in one platform.”

Feature cards:
- Payments
  “Secure, mobile-first payments for every activity.”
- QR Ticketing
  “Unique QR tickets for fast and secure event entry.”
- Reminders
  “Automated reminders reduce follow-ups and no-shows.”
- Receipts
  “Digital receipts accessible anytime, anywhere.”
- Admin Dashboard
  “Real-time overview of payments, activities, and attendance.”
- Reconciliation
  “Simplify reporting and financial reconciliation.”
- Attendance Tracking
  “Track participation with accurate scan validation.”
- Parent Management
  “Manage multiple children and activities with ease.”

Design:
- 4-column grid on desktop
- 2-column tablet
- Single column mobile
- Rounded cards with icons

---

7. QR TICKETING SECTION

Eyebrow:
“QR Ticketing”

Headline:
“Modern event access that saves time and increases security.”

Copy:
“SchoolaPay generates unique QR tickets linked to confirmed payments, helping schools streamline event entry and improve attendance visibility.”

Benefits:
- Faster Entry
  “Reduce lines and speed up check-ins.”
- Scan Validation
  “Instantly verify tickets with secure scans.”
- Reduced Duplicate Use
  “Unique QR codes help prevent repeated scans.”
- Attendance Visibility
  “Track participation in real time.”
- Offline Fallback
  “Support validation even when connectivity is unstable.”

Visual:
- Phone with QR ticket
- Scan pulse or subtle animation
- Event entry card
- Clean, premium layout

---

8. BENEFITS BY USER TYPE SECTION

Eyebrow:
“Benefits for Everyone in the School Community”

Create four cards.

For Schools:
- Improve operational efficiency
- Increase payment visibility
- Enhance parent communication
- Streamline activity management

For Finance/Admin Staff:
- Easier reconciliation and reporting
- Reduce manual tracking
- Exportable financial records
- Better auditability

For Parents:
- Simple, secure mobile payments
- Digital receipts on demand
- Manage all children in one place
- Stay informed with reminders

For Event Coordinators:
- Fast check-ins with QR scanning
- Real-time attendance tracking
- Reduce entry errors
- Focus on a better event experience

Design:
- Calm white card section
- Checkmark bullets
- Friendly icons
- Strong mobile readability

---

9. TRUST AND SECURITY SECTION

Eyebrow:
“Trust & Security”

Headline:
“Your data. Your trust. Our responsibility.”

Copy:
“We follow industry best practices to protect your school community and keep activity workflows clear, traceable, and controlled.”

Security cards:
- Payment Reliability
  “Clear transaction workflows and confirmation records.”
- Data Protection
  “Designed to protect parent and student information.”
- Auditability
  “Centralized logs, receipts, and reporting.”
- Permission Controls
  “Role-based access for school staff.”
- Operational Transparency
  “Visibility across payments, attendance, and activity workflows.”

Visual:
- Large shield illustration
- Blue/navy/emerald accents
- Do not claim compliance certifications unless explicitly implemented.

Do not claim:
- PCI-DSS compliant
- GDPR compliant
- Bank-level security
unless the product genuinely has those compliance controls and legal review.

Instead use:
- “Designed with secure workflows”
- “Built for controlled access”
- “Clear records and auditability”

---

10. PROOF / PILOT-READY SECTION

Eyebrow:
“Pilot-Ready Proof”

Headline:
“Built to measure what matters during school pilots.”

Do not create fake stats.

Use honest cards:
- Payment completion
  “Measured during pilot”
- Parent activation
  “Measured during pilot”
- Admin time saved
  “Measured during pilot”
- Scan validation success
  “Measured during pilot”

Testimonial placeholder cards:
Clearly label them:
“Pilot testimonial placeholder”

Placeholder copy:
“Use this space for feedback from school operations teams after the pilot program.”

Case study button:
“Case Studies Coming Soon”

Design:
- Professional and credible
- No fake proof
- This section should still look polished

---

11. FAQ SECTION

Headline:
“Frequently asked questions.”

Use accessible accordions.

Questions and answers:

Q: How do parents make payments?
A: Parents receive an activity notification and can complete payment from their mobile device. After payment, they receive a digital receipt and, when needed, a QR ticket.

Q: Can schools issue refunds?
A: Yes. Refund workflows can be handled through the school admin process, with clear records for finance and operations teams.

Q: How does QR ticket validation work?
A: Each eligible activity or event can generate a unique QR ticket after payment confirmation. Staff can scan the ticket at entry to validate attendance and reduce duplicate use.

Q: Is SchoolaPay secure?
A: SchoolaPay is designed around secure payment workflows, role-based access, clear records, and responsible handling of parent and student information.

Q: Can parents manage multiple children?
A: Yes. Parents can manage activities, payments, receipts, and tickets for multiple children from one account.

Q: What reports are available?
A: Schools can track payment status, participation, receipts, activity records, attendance scans, and reconciliation exports.

Q: How does parent onboarding work?
A: The onboarding flow is designed to be simple and mobile-first, helping parents connect to their child profile and view assigned activities quickly.

Q: Does it work on mobile devices?
A: Yes. SchoolaPay is designed mobile-first for busy parents and staff who need quick access from their phones.

---

12. FINAL CTA AND DEMO FORM SECTION

Left panel:
Headline:
“See SchoolaPay in action.”

Copy:
“Let our team show you how SchoolaPay can simplify your school’s activity management and payment workflow.”

Bullets:
- We’ll contact you within 1 business day
- Personalized demo for your school
- No commitment required

Right panel:
Demo form.

Fields:
- School name, required
- Contact name, required
- Email, required
- Phone number, required
- Role at school, required
- Number of students, required
- School website, optional
- Current payment/admin challenges, optional but recommended

Submit button:
“Request a Demo”

Privacy note:
“Your information is only used to respond to your demo request.”

Success state:
“Thank you. Our team will contact you within 1 business day.”

Error state:
“Something went wrong. Please try again or email us directly.”

Validation:
- Use Zod schema
- Validate on client
- Validate again on server
- Email must be valid
- Required fields must not be empty
- Add a honeypot field for spam protection
- Do not expose secrets on the client

Email behavior:
Create an API route:
POST /api/demo

Expected env vars:
- RESEND_API_KEY
- CONTACT_TO_EMAIL
- CONTACT_FROM_EMAIL

If Resend is installed/configured:
- Send formatted email to CONTACT_TO_EMAIL
- Include all form fields
- Include timestamp
- Include page source: “SchoolaPay landing page”

If Resend is not installed:
- Add implementation with clear instructions
- Do not break the form
- Return a safe development response
- Add comments explaining what env vars are needed

Do not store form submissions in a database unless the existing project already has one and it is appropriate.

---

ANIMATION AND MICROINTERACTIONS

Use subtle motion only:
- Hero cards fade and slide in
- Cards lift slightly on hover
- Buttons have soft hover elevation
- FAQ opens smoothly
- QR scan visual has a subtle pulse
- Mobile menu animates cleanly

Avoid:
- Heavy parallax
- Excessive scroll animations
- Slow animations
- Distracting motion

Respect reduced motion preferences.

---

RESPONSIVE REQUIREMENTS

Mobile:
- Single-column layout
- Large headline but no overflow
- Sticky bottom Request a Demo button
- Product mockups scale down elegantly
- Cards stack cleanly
- Form is single-column
- No horizontal scrolling

Tablet:
- Balanced two-column sections
- Product mockups remain readable

Desktop:
- Premium SaaS layout
- Strong whitespace
- Full hero mockup visible
- Clean grid alignment

Large desktop:
- Max-width container
- Do not stretch content excessively

---

CONTENT QUALITY RULES

Write all copy in a calm, credible B2B SaaS tone.

Use clear operational language:
- simplify
- centralize
- reduce manual follow-ups
- improve visibility
- secure workflows
- clear records
- parent-friendly
- school-approved

Avoid hype:
- revolutionary
- world-class
- unmatched
- effortless transformation
- guaranteed
- 10x
- instant success
- bank-level security unless legally verified
- compliance claims unless verified

---

DEVELOPMENT PROCESS

Before coding:
1. Inspect the repository.
2. Identify the framework, package manager, and styling setup.
3. Briefly plan the implementation.
4. Then implement.

While coding:
- Keep components small and readable.
- Use static arrays for repeated content.
- Use semantic section IDs:
  - #features
  - #how-it-works
  - #schools
  - #parents
  - #security
  - #faq
  - #demo
- Make nav links scroll smoothly.
- Make every Request a Demo CTA scroll to #demo.
- Make “See How It Works” scroll to #how-it-works.

After coding:
1. Run the formatter if configured.
2. Run lint if configured.
3. Run typecheck if configured.
4. Run build if configured.
5. Fix all errors.
6. Check for console warnings.
7. Verify mobile responsiveness.
8. Verify the demo form validation.
9. Verify all CTAs work.
10. Verify there are no fake claims.

If build commands are unknown, inspect package.json and use the available scripts.

---

QUALITY BAR

The final result should look like a polished, investor-grade SaaS landing page inspired by Stripe, Notion, Linear, Revolut, and Headway, while following the SchoolaPay brand system exactly:
- Blue and white
- Poppins-style typography
- Rounded cards
- Clean icons
- Friendly but secure
- Fintech-quality UI
- School operations positioning
- Parent-friendly experience
- Demo-led conversion flow

The page should be good enough to send to school administrators, finance staff, and potential pilot schools.

Now implement the complete landing page.