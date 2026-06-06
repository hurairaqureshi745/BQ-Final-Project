import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatedStat } from '../components/common/AnimatedStat'
import { FiCheck, FiChevronDown, FiMail, FiPhone, FiMapPin, FiCpu, FiAward, FiShield, FiTrendingUp, FiSliders, FiMessageSquare, FiShoppingBag, FiBriefcase, FiLayers, FiGlobe, FiMonitor, FiLayout, FiSmartphone, FiHeart, FiUsers } from 'react-icons/fi'
import { Container } from '../components/common/Container'
import { SectionHeader } from '../components/common/SectionHeader'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { ROUTES } from '../utils/routes'
import styles from './UiUxDesignService.module.css'

/* ==========================================================================
   Page Datasets
   ========================================================================== */
const stats = [
  { value: 'User-Centered', label: 'Design' },
  { value: 'Conversion', label: 'Focused Solutions' },
  { value: 'Modern', label: 'Design Systems' },
  { value: 'Responsive', label: 'Experiences' }
]

const benefits = [
  {
    icon: FiHeart,
    title: 'Improve User Experience',
    description: 'We map out friction-free pathways that guide users toward answers smoothly, making interaction a delight.'
  },
  {
    icon: FiMonitor,
    title: 'Increase Engagement',
    description: 'Captivating visuals and interactive micro-animations keep users exploring your product longer.'
  },
  {
    icon: FiShield,
    title: 'Build Trust',
    description: 'Polished design signals credibility and security, reducing anxiety and validating your company.'
  },
  {
    icon: FiCpu,
    title: 'Strengthen Brand Identity',
    description: 'A unified visual language (colors, fonts, layout grids) establishes consistency across all touchpoints.'
  },
  {
    icon: FiTrendingUp,
    title: 'Boost Conversions',
    description: 'Clear hierarchies, logical CTA positions, and smooth form fields directly increase lead checkouts.'
  },
  {
    icon: FiAward,
    title: 'Reduce User Frustration',
    description: 'Auditing and eliminating confusing layouts, nested menus, and slow workflows prevents drop-offs.'
  }
]

const servicesWeOffer = [
  {
    icon: FiGlobe,
    title: 'User Research',
    description: 'Auditing behaviors and mapping demographic preferences to design around real user habits.',
    outcomes: 'User Personas & Behavior Maps'
  },
  {
    icon: FiLayers,
    title: 'Wireframing',
    description: 'Low-fidelity layout blueprints to validate content organization and basic interface structuring.',
    outcomes: 'Structural Blueprints & Flows'
  },
  {
    icon: FiMonitor,
    title: 'UI Design',
    description: 'Crafting the visual layer of your product, selecting typography, color palettes, and styled grids.',
    outcomes: 'Pixel-Perfect Visual Layouts'
  },
  {
    icon: FiHeart,
    title: 'UX Design',
    description: 'Optimizing journeys, interactive states, form inputs, and overall ease of digital usage.',
    outcomes: 'Intelligent Frictionless Journeys'
  },
  {
    icon: FiCpu,
    title: 'Design Systems',
    description: 'Building comprehensive libraries of reusable elements to speed up future development cycles.',
    outcomes: 'Figma Libraries & Style Tokens'
  },
  {
    icon: FiBriefcase,
    title: 'Product Design',
    description: 'End-to-end strategy, wireframing, and visual engineering for digital products and startups.',
    outcomes: 'Deploy-Ready Strategy & Screens'
  },
  {
    icon: FiSliders,
    title: 'Dashboard Design',
    description: 'Simplifying complex data grids, charts, and control flows into clear visual panels.',
    outcomes: 'Intuitive Analytics Interfaces'
  },
  {
    icon: FiLayout,
    title: 'Website Design',
    description: 'Marketing-centric web pages engineered to tell your brand story and capture incoming traffic.',
    outcomes: 'High-Conversion Marketing Templates'
  },
  {
    icon: FiSmartphone,
    title: 'Mobile App Design',
    description: 'Touch-optimized application view designs for seamless iOS, Android, or cross-platform devices.',
    outcomes: 'Mobile-Native Styled Viewports'
  },
  {
    icon: FiShoppingBag,
    title: 'Landing Page Design',
    description: 'Laser-focused single layouts built to support marketing campaigns and lead generation.',
    outcomes: 'Lead-Generating Landing Pages'
  }
]

const designDeliverables = [
  {
    title: 'User Flows',
    description: 'Step-by-step visual pathways that outline exactly how a user navigates from entry to target goal completion.'
  },
  {
    title: 'Wireframes',
    description: 'Structural guides showing content layout, menu structure, and CTA locations without visual styling distractors.'
  },
  {
    title: 'High-Fidelity Designs',
    description: 'Pixel-perfect mockups showing correct colors, actual brand typography, photography, and styled icons.'
  },
  {
    title: 'Interactive Prototypes',
    description: 'Clickable transitions in Figma that simulate software actions to gather user feedback before coding.'
  },
  {
    title: 'Design Systems',
    description: 'Central library containing color values, button patterns, input box properties, and visual guidelines.'
  },
  {
    title: 'Developer Handoff Files',
    description: 'Exportable files containing CSS coordinate properties, image elements, and layout specifications to speed up engineering.'
  }
]

const techStack = [
  {
    category: 'Core Design Tools',
    items: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator']
  },
  {
    category: 'Brainstorming & Flows',
    items: ['Miro', 'FigJam']
  },
  {
    category: 'Design Systems & Grids',
    items: ['Tailored Component Libraries', 'Responsive Grid Systems']
  },
  {
    category: 'Core Principles',
    items: ['Responsive Web Design', 'Touch Target Optimization', 'WCAG Accessibility']
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Defining client project goals, establishing brand styles, and aligning design roadmap milestones.'
  },
  {
    step: '02',
    title: 'Research',
    description: 'Auditing competitors, conducting user surveys, and outlining behavioral target personas.'
  },
  {
    step: '03',
    title: 'Wireframing',
    description: 'Drafting content hierarchies and wireframe blocks to map structural flows before styling.'
  },
  {
    step: '04',
    title: 'Visual Design',
    description: 'Applying premium visual elements, colors, brand styles, and gradients to create high-fidelity layouts.'
  },
  {
    step: '05',
    title: 'Prototyping',
    description: 'Setting up interactive click-through paths in Figma to test navigation layouts in real time.'
  },
  {
    step: '06',
    title: 'Testing & Refinement',
    description: 'Collecting user feedback, conducting user testing, and polishing visual bottlenecks.'
  },
  {
    step: '07',
    title: 'Developer Handoff',
    description: 'Exporting CSS assets, sharing color variables, and providing Figma developer links.'
  }
]

const whyChooseUs = [
  {
    icon: FiUsers,
    title: 'User-Centered Design',
    description: 'Every layout element, card border, and click route is engineered to serve the end user.'
  },
  {
    icon: FiTrendingUp,
    title: 'Business-Focused Strategy',
    description: 'We optimize interfaces to support your conversion metrics, sales targets, and brand positioning.'
  },
  {
    icon: FiAward,
    title: 'Modern Design Standards',
    description: 'Leveraging glassmorphism, glowing micro-animations, and clean dark interfaces to wow visitors.'
  },
  {
    icon: FiMessageSquare,
    title: 'Collaborative Workflow',
    description: 'Direct iterations, live Figma design links, and clear milestone checkpoints throughout the project.'
  }
]

const solutionPackages = [
  {
    title: 'Design Foundation',
    idealFor: 'Startups & Prototypes',
    features: [
      'Responsive UI Sitemaps',
      'Low-Fidelity Wireframes',
      'Basic Branding & Styles',
      'Core Landing Page UI Design',
      'Mobile-Friendly Checks'
    ],
    ctaText: 'Get Custom Quote',
    featured: false
  },
  {
    title: 'Business Experience',
    idealFor: 'Growing Businesses',
    features: [
      'Custom Design System Setup',
      'Advanced UX User Research',
      'High-Fidelity UI Screen Designs',
      'Interactive Figma Prototypes',
      'Developer Handoff Files',
      'Priority Email Consulting'
    ],
    ctaText: 'Request Proposal',
    featured: true
  },
  {
    title: 'Enterprise Product',
    idealFor: 'Large Complex Platforms',
    features: [
      'Tailored Web Application Design',
      'Complete Mobile & Dashboard UI',
      'Complex Figma Component Libraries',
      'Usability Testing & Audit Reports',
      'Direct Design Consultant Access',
      'Ongoing Component Scaling'
    ],
    ctaText: 'Schedule Consultation',
    featured: false
  }
]

const faqItems = [
  {
    q: 'What is the difference between UI and UX?',
    a: 'UI (User Interface) refers to the visual look and feel of a product: the buttons, color schemes, font weights, and spacing cards. UX (User Experience) is the logical feel of the product: sitemaps, user flows, friction audits, and how easily a client completes a purchase or sign-up.'
  },
  {
    q: 'Do you redesign existing products?',
    a: 'Yes. We audit your existing web properties, identify user drop-off pages, analyze mobile responsive layout issues, and redesign the UI/UX structures to improve brand perception and increase conversions.'
  },
  {
    q: 'Can you design mobile applications?',
    a: 'Absolutely. We design touch-optimized responsive screens for iOS, Android, and web portals using mobile-native navigation layouts and figma-based design standards.'
  },
  {
    q: 'Do you create design systems?',
    a: 'Yes, we specialize in building figma component libraries complete with color tokens, button sizes, form states, and input constraints, ensuring visual consistency as your product expands.'
  },
  {
    q: 'How long does a design project take?',
    a: 'Timelines vary. A single landing page layout or simple startup prototype can take 2 weeks. Comprehensive product design systems or application dashboard portfolios typically require 4 to 8 weeks.'
  },
  {
    q: 'How do I get started?',
    a: 'Fill out our consultation form at the bottom of this page. We will organize a project scoping call to define your requirements, explore style inspirations, and provide a custom strategy.'
  }
]

export function UiUxDesignService() {
  useDocumentTitle('UI/UX Design Service | Digital Sphere')

  // FAQ Accordion State
  const [expandedFaq, setExpandedFaq] = useState(null)

  const toggleFaq = (idx) => {
    setExpandedFaq(expandedFaq === idx ? null : idx)
  }

  // Form Submission State
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    projectType: 'ui-ux-design',
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
      setFormData({ name: '', email: '', business: '', projectType: 'ui-ux-design', message: '' })
    }
  }

  return (
    <article className={`reveal-trigger ${styles.page}`}>
      {/* SECTION 1: SERVICE HERO */}
      <section className={`reveal-trigger ${styles.hero}`} aria-labelledby="service-hero-title">
        <Container>
          <div className={styles.heroContent}>
            <span className={styles.badge}>UI/UX Design</span>
            <h1 id="service-hero-title">
              Design Experiences <span>Users Love</span>
            </h1>
            <p className={styles.heroDescription}>
              We create intuitive, visually engaging, and user-focused digital experiences that help businesses improve engagement, strengthen their brand, and increase conversions.
            </p>
            <div className={styles.heroActions}>
              <div className={styles.primaryBtn}>
                <a href="#discuss-project">Get A Custom Quote</a>
              </div>
              <div className={styles.secondaryBtn}>
                <Link to={ROUTES.about}>Explore Our Story</Link>
              </div>
            </div>
          </div>

          <div className={styles.heroStats}>
            {stats.map((stat) => (
              <div className={styles.heroStatCard} key={stat.label}>
                <AnimatedStat value={stat.value} />
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 2: WHAT IS UI/UX DESIGN */}
      <section className={`reveal-trigger ${`${styles.section}`} ${styles.introSection}`} aria-labelledby="intro-title">
        <Container>
          <div className={styles.introContent}>
            <div className={styles.introLeft}>
              <h2 id="intro-title">What Is UI/UX Design?</h2>
              <div className={styles.introText}>
                <p>
                  UI (User Interface) design maps the visual layers of a digital product—the color palettes, typography layout, button capsules, cards, and input fields. It is what users see and interact with directly, establishing the aesthetic alignment and premium perception of your brand.
                </p>
                <p>
                  UX (User Experience) design is the architectural logic that governs how easily a user traverses that interface. It focuses on user flows, wireframes, interaction structures, and usability audits. Excellent UX ensures that users can achieve their target goals with the least effort.
                </p>
                <p>
                  A successful digital product requires both. Beautiful visuals without clear UX lead to confusion and drop-offs, while a highly functional flow with poor UI fails to command authority. We align both parameters in Figma to deliver products that are delightful, modern, and conversion-focused.
                </p>
              </div>
            </div>
            <div className={styles.introRight}>
              <blockquote>
                <p className={styles.introQuote}>
                  "Design is not just what it looks like and feels like. Design is how it works."
                </p>
                <cite className={styles.storyAuthor}>— Steve Jobs</cite>
              </blockquote>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: WHY GREAT DESIGN MATTERS */}
      <section className={`reveal-trigger ${styles.section}`} aria-labelledby="benefits-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="benefits-title"
              title="Why Great Design Matters"
              description="A professional UI/UX strategy transforms first-time visitors into loyal advocates by making interaction frictionless."
            />
          </div>
          <div className={styles.grid3}>
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div className={styles.card} key={benefit.title}>
                  <div className={styles.iconBox} aria-hidden="true">
                    <Icon />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 4: UI/UX SERVICES WE OFFER */}
      <section className={`reveal-trigger ${`${styles.section}`} ${styles.introSection}`} aria-labelledby="services-offer-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="services-offer-title"
              title="UI/UX Design Services We Offer"
              description="From fast sitemaps to high-fidelity dashboard visualizations, our team designs deploy-ready products."
            />
          </div>
          <div className={styles.grid3}>
            {servicesWeOffer.map((srv) => {
              const Icon = srv.icon
              return (
                <div className={styles.card} key={srv.title}>
                  <div className={styles.iconBox} aria-hidden="true">
                    <Icon />
                  </div>
                  <h3>{srv.title}</h3>
                  <p>{srv.description}</p>
                  <span className={styles.keyOutcomes}>
                    Deliverable: <span>{srv.outcomes}</span>
                  </span>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 5: DESIGN DELIVERABLES */}
      <section className={`reveal-trigger ${styles.section}`} aria-labelledby="deliverables-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="deliverables-title"
              title="Design Deliverables"
              description="We deliver clean, organized Figma design files structured to speed up the developer handoff."
            />
          </div>
          <div className={styles.grid3}>
            {designDeliverables.map((item) => (
              <div className={styles.card} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 6: DESIGN TOOLS & TECHNOLOGIES */}
      <section className={`reveal-trigger ${`${styles.section}`} ${styles.introSection}`} aria-labelledby="tech-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="tech-title"
              title="Tools & Design Systems"
              description="We use industry-standard design tools and accessibility checkpoints to craft compliant layouts."
            />
          </div>
          <div className={styles.techGrid}>
            {techStack.map((tech) => (
              <div className={styles.techCard} key={tech.category}>
                <h3>{tech.category}</h3>
                <div className={styles.techBadges}>
                  {tech.items.map((item) => (
                    <span className={styles.techBadge} key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 7: OUR DESIGN PROCESS */}
      <section className={`reveal-trigger ${styles.section}`} aria-labelledby="process-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="process-title"
              title="Our Design Process"
              description="A proven sitemap, wireframe, and prototyping workflow that guarantees top-tier interfaces."
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

      {/* SECTION 8: WHY CHOOSE DIGITAL SPHERE */}
      <section className={`reveal-trigger ${`${styles.section}`} ${styles.introSection}`} aria-labelledby="choose-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="choose-title"
              title="Why Choose Digital Sphere For UI/UX Design"
              description="We align visual aesthetics with business goals to build products that deliver results."
            />
          </div>
          <div className={styles.grid3}>
            {whyChooseUs.map((item) => {
              const Icon = item.icon
              return (
                <div className={styles.card} key={item.title}>
                  <div className={styles.iconBox} aria-hidden="true">
                    <Icon />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 9: SOLUTION PACKAGES */}
      <section className={`reveal-trigger ${styles.section}`} aria-labelledby="packages-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="packages-title"
              title="Design Packages"
              description="Explore starter packages to initiate design. We shape custom plans for every client requirement."
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
                  <a href="#discuss-project">{pkg.ctaText}</a>
                </div>
              </div>
            ))}
          </div>
          <p className={styles.packagesNote}>
            * Every design project is unique. Final layout counts, prototyping scopes, and estimates are provided after fully mapping out your business requirements.
          </p>
        </Container>
      </section>

      {/* SECTION 10: FAQ SECTION */}
      <section className={`reveal-trigger ${`${styles.section}`} ${styles.faqSection}`} aria-labelledby="faq-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="faq-title"
              title="UI/UX Design FAQ"
              description="Common questions about visual direction, design systems, handoffs, and timelines."
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

      {/* SECTION 11: FINAL CTA */}
      <section className={`reveal-trigger ${`${styles.section}`} ${styles.ctaSection}`} aria-label="CTA">
        <Container>
          <div className={styles.ctaCard}>
            <h2>Ready To Create Better User Experiences?</h2>
            <p>
              Partner with Digital Sphere to design products that users enjoy, trust, and return to.
            </p>
            <div className={styles.ctaActions}>
              <div className={styles.primaryBtn}>
                <a href="#discuss-project">Get A Custom Quote</a>
              </div>
              <div className={styles.secondaryBtn}>
                <Link to={ROUTES.contact}>Contact Us</Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 12: CONTACT FORM */}
      <section className={`reveal-trigger ${styles.section}`} id="discuss-project" aria-labelledby="form-heading">
        <Container>
          <div className={styles.contactLayout}>
            <div className={styles.contactFormCard}>
              <h2 id="form-heading" className={styles.contactCardTitle} style={{ marginBottom: 'var(--space-md)' }}>
                Discuss Your Project
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
                      <label htmlFor="businessName">Business Name</label>
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
                      <label htmlFor="projectSelect">Project Type</label>
                      <select
                        id="projectSelect"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                      >
                        <option value="ui-ux-design">UI/UX Design</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-apps">Mobile Apps</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="cyber-security">Cyber Security</option>
                        <option value="branding">Graphic Designing</option>
                      </select>
                    </div>
                    <div className={`${styles.formField} ${styles.formFieldFull}`}>
                      <label htmlFor="projectMessage">Message / Goals</label>
                      <textarea
                        id="projectMessage"
                        name="message"
                        placeholder="Share your goals, timeline, and what success should look like."
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className={styles.formSubmit}>
                      <button type="submit">Request Consultation</button>
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
