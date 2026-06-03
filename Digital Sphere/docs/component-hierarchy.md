# Digital Sphere Component Hierarchy

## Application Shell

- `App`
- `AppRouter`
- `MainLayout`
- `Header`
- `Outlet`
- `Footer`

## Pages

- `Home`
- `About`
- `Services`
- `Blog`
- `Contact`
- `NotFound`

## Home Page Sections

1. `HeroSection`
2. `TrustedCompaniesSection`
3. `ServicesOverviewSection`
4. `WhyChooseUsSection`
5. `PortfolioShowcaseSection`
6. `TeamMembersSection`
7. `ClientTestimonialsSection`
8. `CallToActionBanner`
9. `ContactPreviewSection`
10. `Footer` from `MainLayout`

## Reusable Components

- `Container` wraps page and section content.
- `SectionHeader` standardizes eyebrow, title, and supporting copy.
- `Button` centralizes internal and external call-to-action links.
- `ServiceCard` can be reused on Home and Services pages.
- `PortfolioCard` can be reused on Home and future case-study pages.
- `TeamMemberCard` can be reused on Home and About pages.
- `TestimonialCard` can be reused on Home, case-study, and landing pages.
- `BlogPostCard` can be reused on Blog, Home, and related-content sections.
- `ContactForm` can be reused on Contact and campaign landing pages.

## Data Modules

- `navigation.js` controls primary and footer navigation.
- `services.js` stores Web Development, Graphic Design, Digital Marketing, Cyber Security, and App Development content.
- `companies.js` stores trusted company names.
- `portfolio.js` stores selected project placeholders.
- `team.js` stores team member placeholders.
- `testimonials.js` stores client testimonial placeholders.
- `whyChooseUs.js` stores agency differentiators.
- `blogPosts.js` stores blog preview content.

## Scalability Notes

- Add future route pages in `src/pages` and register them in `src/router/AppRouter.jsx`.
- Add repeatable UI in `src/components/cards` or `src/components/common`.
- Add page-specific or campaign-specific sections in `src/components/sections`.
- Keep editable content in `src/data` until a CMS or API is introduced.
