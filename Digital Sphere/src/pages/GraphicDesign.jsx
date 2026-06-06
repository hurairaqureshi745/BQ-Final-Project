import { useState } from 'react'
import { FiCheck, FiChevronDown, FiMail, FiPhone, FiMapPin, FiCpu, FiAward, FiActivity, FiShoppingBag, FiBriefcase, FiLayers, FiGlobe, FiMonitor, FiCompass, FiTarget } from 'react-icons/fi'
import { Container } from '../components/common/Container'
import { SectionHeader } from '../components/common/SectionHeader'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import styles from './GraphicDesign.module.css'
/* ==========================================================================
   Page Datasets
   ========================================================================= */
const stats = [
  { value: '94%', label: 'First impressions are design-related' },
  { value: '80%', label: 'Brand recognition boost from consistency' },
  { value: '75%', label: 'Credibility judged based on visual design' },
  { value: '+34%', label: 'Landing page conversion with custom elements' }
]

const servicesList = [
  {
    icon: FiCpu,
    title: 'Brand Identity Design',
    description: 'We develop comprehensive visual styles containing color maps, typography, layout rules, and usage restrictions.',
    deliverables: 'Brand style guides, core typography settings, visual guidelines book.'
  },
  {
    icon: FiAward,
    title: 'Logo Design',
    description: 'Premium custom vector logos designed to tell your brand story and command attention on any scale.',
    deliverables: 'Vector master source files, secondary logo variations, social media badges.'
  },
  {
    icon: FiGlobe,
    title: 'Social Media Graphics',
    description: 'Beautiful, branded post designs, story layouts, and covers that keep your visual channels consistent.',
    deliverables: 'Instagram/Facebook templates, LinkedIn covers, custom highlight graphics.'
  },
  {
    icon: FiBriefcase,
    title: 'Marketing Materials',
    description: 'Clean marketing assets designed to share your business details and services professionally.',
    deliverables: 'Brochure layouts, premium business card files, corporate booklets.'
  },
  {
    icon: FiLayers,
    title: 'Print Design',
    description: 'High-resolution vector print assets optimized for clean physical printing and professional paper stocks.',
    deliverables: 'CMYK print-ready files, PDF proof files, master design files.'
  },
  {
    icon: FiShoppingBag,
    title: 'Packaging Design',
    description: 'Stunning physical box layouts, merchandise wraps, and bottle stickers designed to capture buyers eyes.',
    deliverables: 'Die-line vector templates, high-fidelity 3D mockups, print-ready files.'
  },
  {
    icon: FiMonitor,
    title: 'Presentation Design',
    description: 'Custom pitch decks, investor slides, and sales templates formatted matching your corporate style guide.',
    deliverables: 'Interactive slide decks, Figma slide templates, master PDF documents.'
  },
  {
    icon: FiTarget,
    title: 'Advertising Creatives',
    description: 'High-conversion banner ad visuals designed to fit paid advertising campaigns and display networks.',
    deliverables: 'Display banner assets, social media ad layouts, creative overlays.'
  },
  {
    icon: FiCompass,
    title: 'Corporate Branding',
    description: 'Unified company items, official stationery sets, letterheads, and email signatures matching your brand.',
    deliverables: 'Stationery sets, custom email templates, official invoice templates.'
  },
  {
    icon: FiActivity,
    title: 'Event & Promotional Graphics',
    description: 'Large-format banners, roll-up stands, posters, and ticket visuals for marketing campaigns and events.',
    deliverables: 'Standee layouts, billboard layouts, event banner graphics.'
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Brand Discovery',
    description: 'We sit down with you to review business goals, explore core target audiences, and map initial brand values.'
  },
  {
    step: '02',
    title: 'Research & Strategy',
    description: 'Conducting in-depth reviews of competitor branding styles, design gaps, and visual trends in your industry.'
  },
  {
    step: '03',
    title: 'Concept Creation',
    description: 'Developing mood boards, color mappings, and initial concept sketches to align on creative direction.'
  },
  {
    step: '04',
    title: 'Design Exploration',
    description: 'Refining selected visual directions into high-fidelity logo assets, templates, and mockup assets.'
  },
  {
    step: '05',
    title: 'Feedback & Refinement',
    description: 'Presenting visual drafts and iterating details based on your feedback to polish color balances and typography.'
  },
  {
    step: '06',
    title: 'Final Delivery',
    description: 'Exporting fully structured vector files, printing formats (CMYK), and master digital files (RGB).'
  },
  {
    step: '07',
    title: 'Brand Guidelines',
    description: 'Compiling a comprehensive guide listing color codes, font rules, spacing rules, and usage constraints.'
  }
]

const solutionPackages = [
  {
    title: 'Startup Branding',
    idealFor: 'Startups looking for a professional start',
    features: [
      'Logo Concept Variations',
      'Primary Color Palette Map',
      'Typography Rule Card',
      'Basic Brand Assets Package',
      'Social Profile Avatars'
    ],
    ctaText: 'Get Custom Quote',
    featured: false
  },
  {
    title: 'Business Growth',
    idealFor: 'Growing brands needing a complete identity',
    features: [
      'Complete Visual Brand System',
      'Core Marketing Materials',
      'Social Feed Post Templates',
      'Comprehensive Guidelines Book',
      'Stationery & Business Card Layouts'
    ],
    ctaText: 'Request Proposal',
    featured: true
  },
  {
    title: 'Enterprise Creative',
    idealFor: 'Organizations requiring custom design systems',
    features: [
      'Complete Visual Brand Ecosystem',
      'Paid Campaign Visual Assets',
      'Corporate Presentation Decks',
      'Dedicated Design Strategy Support',
      'Ongoing Monthly Design Retainer'
    ],
    ctaText: 'Schedule Consultation',
    featured: false
  }
]

const portfolioCategories = ['All', 'Branding', 'Logo Design', 'Social Media', 'Print Design', 'Packaging', 'Advertising']

const portfolioItems = [
  {
    name: 'Aether Capital',
    category: 'Branding',
    industry: 'Finance',
    description: 'Premium dark-futuristic brand identity, stationery cards, and investor slide guidelines.'
  },
  {
    name: 'Lumora Skincare',
    category: 'Packaging',
    industry: 'Retail',
    description: 'Clean visual packaging boxes, wrap elements, and product bottle stickers for skin sets.'
  },
  {
    name: 'Vortex Tech',
    category: 'Logo Design',
    industry: 'Technology Startups',
    description: 'Sleek abstract custom vector symbol representing database speed and cloud connections.'
  },
  {
    name: 'Pulse Fitness',
    category: 'Social Media',
    industry: 'Health & Wellness',
    description: 'High-contrast grid templates, posters, and story reels for monthly campaign feeds.'
  },
  {
    name: 'Quantum Summit',
    category: 'Print Design',
    industry: 'Education & Events',
    description: 'Large-scale rollup stands, event banners, posters, and print invitation sets.'
  },
  {
    name: 'Neon Horizon',
    category: 'Advertising',
    industry: 'E-commerce',
    description: 'Paid display banners, social story overlays, and conversion ad creatives for campaign scaling.'
  }
]

const capabilities = [
  { name: 'Adobe Illustrator', level: 98, description: 'Mastery in vector shapes, typography, logo guidelines, and path rendering.' },
  { name: 'Adobe Photoshop', level: 95, description: 'Expert photo editing, collage graphics, shadow adjustments, and visual mockups.' },
  { name: 'Figma', level: 95, description: 'Modern interface designs, components systems, styles syncing, and vector grids.' },
  { name: 'Adobe InDesign', level: 90, description: 'High-quality layout structures, brochure booklets, pages numbering, and booklets.' },
  { name: 'Canva Pro', level: 95, description: 'Fast, high-velocity template setups and content schedules for client social feeds.' },
  { name: 'Motion Graphics Tools', level: 85, description: 'Dynamic visual mockups, micro-animations, transitions, and ad video overlay graphics.' }
]

const industriesServed = [
  'Technology',
  'Healthcare',
  'Education',
  'Real Estate',
  'Finance',
  'E-commerce',
  'Startups',
  'Manufacturing',
  'Hospitality',
  'Professional Services'
]

const comparisonData = [
  {
    topic: 'Strategy',
    traditional: 'Often focus on aesthetic elements only without detailed target planning.',
    digitalSphere: 'Every graphic asset is custom-designed to support target marketing conversion metrics.'
  },
  {
    topic: 'Consistency',
    traditional: 'Styles can look disconnected across print sheets, social posts, and websites.',
    digitalSphere: 'Strict visual style guide handbooks protect your identity across all mediums.'
  },
  {
    topic: 'Research',
    traditional: 'Skip target demographic research to immediately rush into sketching layouts.',
    digitalSphere: 'In-depth buyer persona audits and competitor audits guide color schemes.'
  },
  {
    topic: 'Branding',
    traditional: 'Create simple standalone logo designs without checking total user interfaces.',
    digitalSphere: 'Develop full visual design systems that build complete client brand trust.'
  },
  {
    topic: 'Scalability',
    traditional: 'Visual assets don\'t easily scale to print billboards or digital display banners.',
    digitalSphere: 'Deliver fully responsive vectors and high-res master source packages.'
  },
  {
    topic: 'Marketing Integration',
    traditional: 'Designs look beautiful but lack clear conversion focus or CTA pathways.',
    digitalSphere: 'Layout hierarchies and text weights are structured to drive customer inquiries.'
  }
]

const testimonials = [
  {
    quote: 'Digital Sphere transformed our startup logo and visual assets. Our conversions went up, and we immediately looked like an established market leader to investors.',
    author: 'Sarah Jenkins',
    initials: 'SJ',
    role: 'CEO, Finova Tech'
  },
  {
    quote: 'The brand guidelines they created saved our marketing team hours. Complete consistency across print brochures, social media post campaigns, and our React app.',
    author: 'David Miller',
    initials: 'DM',
    role: 'Marketing Director, HealthAlign'
  },
  {
    quote: 'Their product packaging design helped our items stand out on store shelves. The visual identity perfectly tells our brand story and drives customer repeat buying.',
    author: 'Aisha Rahman',
    initials: 'AR',
    role: 'Founder, GreenBite Organics'
  }
]

const faqItems = [
  {
    q: 'Do you provide logo design?',
    a: 'Yes. We offer custom vector logo design packages. We create multiple concept variations, iterate details based on your feedback, and deliver master source files (AI, EPS, SVG) along with PNG guides.'
  },
  {
    q: 'Can you redesign an existing brand?',
    a: 'Absolutely. We specialize in brand refactoring. We analyze your existing style guidelines, audit competitor aesthetics, modernize your logo, and align visual assets with current market expectations.'
  },
  {
    q: 'Do you create print-ready files?',
    a: 'Yes. Every print design we deliver is exported in high-resolution CMYK vector formats with bleeding guides, ready for immediate delivery to any professional printing facility.'
  },
  {
    q: 'What industries do you work with?',
    a: 'We work across diverse industries including technology startups, healthcare platforms, real estate firms, educational entities, e-commerce stores, and corporate consultancies.'
  },
  {
    q: 'Can you create social media designs?',
    a: 'Yes. We design post templates, story mockups, cover banners, and ad campaign visuals matching your color palette, ready for scheduling across LinkedIn, Instagram, or Facebook.'
  },
  {
    q: 'Do you provide brand guidelines?',
    a: 'Yes. Our Business and Enterprise packages include a comprehensive style manual outlining colors, typography settings, logo rules, spacing rules, and layout constraints.'
  },
  {
    q: 'How does the revision process work?',
    a: 'We operate with open iterations. After sharing initial drafts, you can provide feedback on colors, sizes, and formatting. We implement refinement cycles to ensure the final design matches your target requirements.'
  },
  {
    q: 'Can you support long-term design needs?',
    a: 'Yes. We offer monthly design retainers for established organizations requiring ongoing visuals, presentation slides, display ads, packaging edits, and social templates.'
  }
]

/* ==========================================================================
   GraphicDesign Component
   ========================================================================= */
export function GraphicDesign() {
  useDocumentTitle('Graphic Design Service | Digital Sphere')

  // FAQ Accordion State
  const [expandedFaq, setExpandedFaq] = useState(null)
  const toggleFaq = (idx) => {
    setExpandedFaq(expandedFaq === idx ? null : idx)
  }

  // Portfolio Filters State
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredPortfolio = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter)

  // Form Submission State
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    serviceNeeded: 'branding',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email) {
      setFormSubmitted(true)
      setFormData({ name: '', email: '', business: '', serviceNeeded: 'branding', message: '' })
    }
  }

  return (
    <article className={`reveal-trigger ${styles.page}`}>
      {/* SECTION 1: HERO */}
      <section className={`reveal-trigger ${styles.hero}`} aria-labelledby="service-hero-title">
        <Container>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Graphic Design</span>
            <h1 id="service-hero-title">
              Graphic Design That Makes <span>Brands Impossible To Ignore</span>
            </h1>
            <p className={styles.heroDescription}>
              We create powerful visual identities, marketing assets, and creative designs that help businesses stand out, communicate effectively, and leave lasting impressions across digital and print platforms.
            </p>
            <div className={styles.heroActions}>
              <div className={styles.primaryBtn}>
                <a href="#discuss-design">Request Proposal</a>
              </div>
              <div className={styles.secondaryBtn}>
                <a href="#showcase">View Portfolio</a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: WHY VISUAL DESIGN MATTERS */}
      <section className={`reveal-trigger ${`${styles.section}`} ${styles.introSection}`} aria-labelledby="intro-title">
        <Container>
          <div className={styles.introContent}>
            <div className={styles.introLeft}>
              <h2 id="intro-title">Why Visual Design Matters</h2>
              <div className={styles.introText}>
                <p>
                  Visual design acts as the primary trust indicator for your business. Before a user reads your paragraphs or reviews your service packages, they judge your credibility based on visual elements. Excellent layout structures, clean logo alignments, and professional typography suggest authority and reliability.
                </p>
                <p>
                  Consistency plays a critical role in brand recognition. If your print brochures, social media graphics, and React application layouts feature disconnected color schemes, it weakens brand recall. Enforcing a strict visual style handbook ensures memorable brand awareness across all user touchpoints.
                </p>
                <p>
                  At Digital Sphere, we don\'t just sketch logos; we build cohesive visual ecosystems. We align colors and layouts with your target customer demographics to support paid ad metrics, increase customer trust, and directly boost conversion rates across marketing platforms.
                </p>
              </div>
            </div>
            <div className={styles.introRight}>
              <blockquote>
                <p className={styles.introQuote}>
                  "Design is the silent ambassador of your brand. It speaks to your customers before you write a single word."
                </p>
                <cite className={styles.storyAuthor}>— Team Digital Sphere</cite>
              </blockquote>
            </div>
          </div>

          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <div className={styles.statCard} key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 3: OUR GRAPHIC DESIGN SERVICES */}
      <section className={`reveal-trigger ${styles.section}`} aria-labelledby="services-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="services-title"
              title="Our Graphic Design Services"
              description="Explore our core creative solutions built to grow visual brand recognition across print and digital media."
            />
          </div>
          <div className={styles.grid3}>
            {servicesList.map((service) => {
              const Icon = service.icon
              return (
                <article className={`reveal-trigger ${styles.card}`} key={service.title}>
                  <div className={styles.iconBox} aria-hidden="true">
                    <Icon />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className={styles.keyDeliverables}>
                    Deliverable: <span>{service.deliverables}</span>
                  </span>
                </article>
              )
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 4: BRAND IDENTITY PROCESS */}
      <section className={`reveal-trigger ${`${styles.section}`} ${styles.introSection}`} aria-labelledby="process-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="process-title"
              title="Our Brand Identity Process"
              description="A proven structured design strategy that guarantees visual consistency and high-fidelity mockups."
            />
          </div>
          <div className={styles.processGrid}>
            {processSteps.map((step) => (
              <div className={styles.processCard} key={step.title}>
                <span className={styles.stepNum} aria-hidden="true">
                  Step {step.step}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 5: DESIGN SOLUTIONS */}
      <section className={`reveal-trigger ${styles.section}`} aria-labelledby="packages-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="packages-title"
              title="Solution Frameworks"
              description="Explore structured framework starting points. Custom plans are tailored to your requirements."
            />
          </div>
          <div className={styles.packagesGrid}>
            {solutionPackages.map((pkg) => (
              <div
                className={`${styles.packageCard} ${pkg.featured ? styles.featuredCard : ''}`}
                key={pkg.title}
              >
                {pkg.featured && (
                  <span className={styles.featuredBadge} aria-hidden="true">
                    Recommended
                  </span>
                )}
                <h3>{pkg.title}</h3>
                <span className={styles.packageIdeal}>For: {pkg.idealFor}</span>
                <ul className={styles.packageFeatures} aria-label={`${pkg.title} features`}>
                  {pkg.features.map((feat) => (
                    <li key={feat}>
                      <FiCheck aria-hidden="true" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <div className={styles.packageCta}>
                  <a href="#discuss-design">{pkg.ctaText}</a>
                </div>
              </div>
            ))}
          </div>
          <p className={styles.packagesNote}>
            * Every business has unique goals, audiences, and challenges. Recommendations and project estimates are provided after understanding your specific requirements.
          </p>
        </Container>
      </section>

      {/* SECTION 6: PORTFOLIO SHOWCASE */}
      <section className={`reveal-trigger ${`${styles.section}`} ${styles.portfolioShowcase}`} id="showcase" aria-labelledby="portfolio-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="portfolio-title"
              title="Creative Showcase"
              description="A curated gallery of visual identity, print sheets, and advertising campaigns built by our creative team."
            />
          </div>

          <div className={styles.filtersWrapper}>
            {portfolioCategories.map((category) => (
              <button
                className={`${styles.filterBtn} ${activeFilter === category ? styles.activeFilter : ''}`}
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className={styles.showcaseGrid}>
            {filteredPortfolio.map((item) => (
              <article className={`reveal-trigger ${styles.showcaseCard}`} key={item.name}>
                <div className={styles.showcaseImageWrapper} aria-hidden="true">
                  <span className={styles.showcaseImagePlaceholder}>{item.category}</span>
                </div>
                <div className={styles.showcaseDetails}>
                  <h3>{item.name}</h3>
                  <span className={styles.showcaseIndustry}>{item.industry}</span>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 7: CREATIVE DESIGN CAPABILITIES */}
      <section className={`reveal-trigger ${`${styles.section}`} ${styles.introSection}`} aria-labelledby="capabilities-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="capabilities-title"
              title="Creative Design Capabilities"
              description="The modern design tools and software packages we master to construct premium visual layouts."
            />
          </div>
          <div className={styles.skillGrid}>
            {capabilities.map((cap) => (
              <div className={styles.skillCard} key={cap.name}>
                <div className={styles.skillCardHeader}>
                  <h3>{cap.name}</h3>
                  <span className={styles.skillProficiency}>{cap.level}% Mastery</span>
                </div>
                <div className={styles.skillProgress} aria-hidden="true">
                  <div className={styles.skillBar} style={{ width: `${cap.level}%` }} />
                </div>
                <p>{cap.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 8: INDUSTRIES WE SERVE */}
      <section className={`reveal-trigger ${styles.section}`} aria-labelledby="industries-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="industries-title"
              title="Industries We Serve"
              description="We provide vertical expertise and customized solutions across multiple key industry domains."
            />
          </div>
          <div className={styles.industryGrid}>
            {industriesServed.map((ind) => (
              <div className={styles.industryCard} key={ind}>
                <h3>{ind}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 9: OUR CREATIVE DIFFERENCE */}
      <section className={`reveal-trigger ${`${styles.section}`} ${styles.introSection}`} aria-labelledby="difference-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="difference-title"
              title="Our Creative Difference"
              description="How Digital Sphere stands apart from traditional design freelancers by aligning graphics with marketing KPIs."
            />
          </div>

          <div className={styles.comparisonGrid}>
            <div className={`${styles.comparisonHeader} ${styles.traditionalCol}`}>Branding Focus</div>
            <div className={styles.comparisonHeader}>Traditional Designers</div>
            <div className={`${styles.comparisonHeader} ${styles.versusCol}`}>Digital Sphere</div>

            {comparisonData.map((row) => (
              <div key={row.topic} style={{ display: 'contents' }}>
                <div className={`${styles.comparisonCell} ${styles.traditionalCol} ${styles.versusCell}`}>{row.topic}</div>
                <div className={styles.comparisonCell}>{row.traditional}</div>
                <div className={`${styles.comparisonCell} ${styles.versusCell} ${styles.versusCol}`}>{row.digitalSphere}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 10: TESTIMONIALS */}
      <section className={`reveal-trigger ${styles.section}`} aria-labelledby="testimonials-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="testimonials-title"
              title="Client Testimonials"
              description="What businesses say about our visual designs, logo guidelines, and brand transformations."
            />
          </div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t) => (
              <article className={`reveal-trigger ${styles.testimonialCard}`} key={t.author}>
                <p className={styles.testimonialQuote}>"{t.quote}"</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorInitials} aria-hidden="true">{t.initials}</div>
                  <div className={styles.authorDetails}>
                    <h4>{t.author}</h4>
                    <span>{t.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 11: FAQ */}
      <section className={`reveal-trigger ${`${styles.section}`} ${styles.faqSection}`} aria-labelledby="faq-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="faq-title"
              title="Graphic Design FAQ"
              description="Common questions about our file exports, layout revisions, guidelines books, and retainer support."
            />
          </div>
          <div className={styles.faqWrapper}>
            {faqItems.map((item, idx) => {
              const isOpen = expandedFaq === idx
              return (
                <div
                  className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
                  key={item.q}
                >
                  <button
                    className={styles.faqHeader}
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleFaq(idx)}
                  >
                    <h3>{item.q}</h3>
                    <FiChevronDown
                      className={`${styles.faqIcon} ${isOpen ? styles.faqIconRotated : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    className={`${styles.faqBody} ${isOpen ? styles.faqBodyOpen : ''}`}
                    aria-hidden={!isOpen}
                  >
                    <div className={styles.faqContent}>
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 12: FINAL CTA */}
      <section className={`reveal-trigger ${`${styles.section}`} ${styles.ctaSection}`} aria-label="CTA">
        <Container>
          <div className={styles.ctaCard}>
            <h2>Transform Your Brand Into A Powerful Visual Experience</h2>
            <p>
              Whether you're launching a startup, refreshing your identity, or scaling your business, our creative team can help build a visual presence that drives recognition and growth.
            </p>
            <div className={styles.ctaActions}>
              <div className={styles.primaryBtn}>
                <a href="#discuss-design">Get Custom Quote</a>
              </div>
              <div className={styles.secondaryBtn}>
                <a href="#discuss-design">Talk To Our Team</a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 13: CONTACT FORM */}
      <section className={`reveal-trigger ${styles.section}`} id="discuss-design" aria-labelledby="form-heading">
        <Container>
          <div className={styles.contactLayout}>
            <div className={styles.contactFormCard}>
              <h2 id="form-heading" className={styles.contactCardTitle} style={{ marginBottom: 'var(--space-md)' }}>
                Discuss Your Graphic Design Requirements
              </h2>
              {formSubmitted ? (
                <div style={{ padding: 'var(--space-md)', background: 'rgba(6, 182, 212, 0.1)', border: '1px solid var(--color-secondary)', borderRadius: 'var(--radius-sm)', color: 'var(--color-text)' }}>
                  <strong>Thank you!</strong> Your design inquiry has been received. Our team will review and get back to you shortly.
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleFormSubmit}>
                  <div className={styles.formGrid}>
                    <div className={styles.formField}>
                      <label htmlFor="fullName">Full Name</label>
                      <input
                        id="fullName"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className={styles.formField}>
                      <label htmlFor="emailAddress">Email Address</label>
                      <input
                        id="emailAddress"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className={styles.formField}>
                      <label htmlFor="businessName">Company Name</label>
                      <input
                        id="businessName"
                        name="business"
                        type="text"
                        placeholder="Your company name"
                        value={formData.business}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className={styles.formField}>
                      <label htmlFor="designSelect">Service Needed</label>
                      <select
                        id="designSelect"
                        name="serviceNeeded"
                        value={formData.serviceNeeded}
                        onChange={handleInputChange}
                      >
                        <option value="branding">Brand Identity Design</option>
                        <option value="logo-design">Logo Design</option>
                        <option value="social-graphics">Social Media Graphics</option>
                        <option value="print-design">Print / Packaging Design</option>
                        <option value="retainer">Long-Term Design Retainer</option>
                      </select>
                    </div>
                    <div className={`${styles.formField} ${styles.formFieldFull}`}>
                      <label htmlFor="designMessage">Project Details</label>
                      <textarea
                        id="designMessage"
                        name="message"
                        placeholder="Share details about your design requirements, desired timeline, and key goals."
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className={styles.formSubmit}>
                      <button className={styles.submitPrimary} type="submit">Request Proposal</button>
                      <button className={styles.submitSecondary} type="button" onClick={() => window.location.href='#discuss-design'}>Schedule Consultation</button>
                    </div>
                  </div>
                </form>
              )}
            </div>

            <div className={styles.contactInfoCard}>
              <h2 className={styles.contactCardTitle}>Contact Details</h2>
              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <FiMail aria-hidden="true" />
                  <a href="mailto:digitalsphereteam@gmail.com">digitalsphereteam@gmail.com</a>
                </li>
                <li className={styles.contactItem}>
                  <FiPhone aria-hidden="true" />
                  <a href="tel:+923445038278">+92 344 5038278</a>
                </li>
                <li className={styles.contactItem}>
                  <FiMapPin aria-hidden="true" />
                  <span>Pakistan</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </article>
  )
}
