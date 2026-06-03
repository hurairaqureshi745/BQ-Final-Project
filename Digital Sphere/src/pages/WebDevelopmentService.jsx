import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FiCheck,
  FiChevronDown,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCpu,
  FiAward,
  FiShield,
  FiTrendingUp,
  FiSliders,
  FiMessageSquare,
  FiActivity,
  FiShoppingBag,
  FiBriefcase,
  FiLayers,
  FiGlobe,
  FiMonitor,
  FiLayout,
  FiSmartphone,
  FiRefreshCw,
  FiSettings
} from 'react-icons/fi'
import { Container } from '../components/common/Container'
import { SectionHeader } from '../components/common/SectionHeader'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { ROUTES } from '../utils/routes'
import styles from './WebDevelopmentService.module.css'

/* ==========================================================================
   Page Datasets
   ========================================================================== */
const stats = [
  { value: '100+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: 'Fast', label: 'Responsive Solutions' },
  { value: 'Modern', label: 'Technology Stack' }
]

const benefits = [
  {
    icon: FiAward,
    title: 'Build Credibility',
    description: 'A polished, modern website signals professionalism and instantly builds trust with new visitors.'
  },
  {
    icon: FiGlobe,
    title: 'Reach More Customers',
    description: 'Optimize your online footprint to allow global and local clients to discover your offerings 24/7.'
  },
  {
    icon: FiMonitor,
    title: 'Improve Brand Visibility',
    description: 'Consistency in visual aesthetics establishes your authority and ensures memorable brand awareness.'
  },
  {
    icon: FiMessageSquare,
    title: 'Generate Leads',
    description: 'Integrated strategic CTA links, newsletter subscriptions, and contact paths capture buyer interest.'
  },
  {
    icon: FiTrendingUp,
    title: 'Increase Conversions',
    description: 'Blazing-fast load speeds and frictionless checkout workflows significantly reduce visitor drop-off rates.'
  },
  {
    icon: FiCpu,
    title: 'Support Business Growth',
    description: 'A scalable website is ready to integrate database tools, CMS systems, and custom workflows as you expand.'
  }
]

const servicesWeOffer = [
  {
    icon: FiBriefcase,
    title: 'Business Websites',
    description: 'Professional, marketing-ready corporate profiles designed to showcase services and establish brand trust.'
  },
  {
    icon: FiShoppingBag,
    title: 'E-Commerce Solutions',
    description: 'High-performance online stores optimized for product catalog scaling, safe gateways, and friction-free buying.'
  },
  {
    icon: FiCpu,
    title: 'Web Applications',
    description: 'Custom, highly interactive web portals engineered around specific internal operations and digital workflows.'
  },
  {
    icon: FiLayout,
    title: 'Landing Pages',
    description: 'Conversion-driven layouts built to support marketing campaigns, advertising groups, and lead generation.'
  },
  {
    icon: FiRefreshCw,
    title: 'Website Redesign',
    description: 'Upgrade outdated platforms to modern standards, optimizing codebases, visual elements, and responsive states.'
  },
  {
    icon: FiSettings,
    title: 'Website Maintenance',
    description: 'Ongoing technical audits, core framework updates, cloud performance tuning, and database monitoring.'
  }
]

const websiteTypes = [
  {
    title: 'Corporate Websites',
    description: 'Custom informational architectures designed to strengthen public relation statements and corporate positioning.',
    useCase: 'Best for established businesses, consultation firms, and service agencies.'
  },
  {
    title: 'Startup Websites',
    description: 'High-velocity MVP interfaces built to grab investor focus, validate concepts, and sign up beta waitlists.',
    useCase: 'Best for early-stage teams launching SaaS products or digital tools.'
  },
  {
    title: 'Portfolio Websites',
    description: 'Immersive visual showcases designed to emphasize media work, creative assets, and professional cases.',
    useCase: 'Best for designers, architects, photographers, and studios.'
  },
  {
    title: 'E-Commerce Stores',
    description: 'Secure, database-driven stores equipped with seamless payment options, inventory tracking, and client accounts.',
    useCase: 'Best for retailers, merchandise brands, and physical product sellers.'
  },
  {
    title: 'Educational Platforms',
    description: 'Learning management portals with student profiles, course video streaming, and quiz/assignment pipelines.',
    useCase: 'Best for universities, online academies, and training coaches.'
  },
  {
    title: 'Custom Web Applications',
    description: 'Tailored platforms incorporating authentication roles, interactive data tables, and client dashboard portals.',
    useCase: 'Best for platforms requiring unique computational logic and tools.'
  }
]

const techStack = [
  {
    category: 'Frontend',
    items: ['React', 'Vite', 'JavaScript', 'HTML5', 'CSS3']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js']
  },
  {
    category: 'Database',
    items: ['MongoDB']
  },
  {
    category: 'Tools & Design',
    items: ['Git', 'GitHub', 'Figma']
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Consultation',
    description: 'We research your target audience, analyze competitor positions, and outline the technical scope.'
  },
  {
    step: '02',
    title: 'Planning & Strategy',
    description: 'Defining complete website routing structures, wireframe diagrams, and technical delivery roadmaps.'
  },
  {
    step: '03',
    title: 'UI/UX Design',
    description: 'Drafting premium visual layouts in Figma matching your brand values and visual style tokens.'
  },
  {
    step: '04',
    title: 'Development',
    description: 'Writing high-efficiency, clean, and scalable frontend and backend code backed by React modules.'
  },
  {
    step: '05',
    title: 'Testing & Optimization',
    description: 'Running responsive cross-browser audits, security penetration checks, and page speed diagnostics.'
  },
  {
    step: '06',
    title: 'Launch & Support',
    description: 'Production deployment to reliable cloud servers, setup of analytics tools, and ongoing performance support.'
  }
]

const whyChooseUs = [
  {
    icon: FiSliders,
    title: 'Custom Solutions',
    description: 'We build tailored platforms designed around your target metrics, rejecting generic templates and layouts.'
  },
  {
    icon: FiCpu,
    title: 'Modern Technologies',
    description: 'We leverage Vite, React, Node, and optimized styling scripts to ensure maximum load speeds and high SEO ranks.'
  },
  {
    icon: FiShield,
    title: 'Security-Focused Development',
    description: 'Integrating data protection, database encryption, SSL parameters, and secure coding practices on all layers.'
  },
  {
    icon: FiMessageSquare,
    title: 'Long-Term Support',
    description: 'Providing framework updates, cloud performance tuning, database monitoring, and quick content iterations.'
  }
]

const solutionPackages = [
  {
    title: 'Starter Solution',
    idealFor: 'Small Businesses',
    features: [
      'Responsive Website Layout',
      'Essential Informational Pages',
      'Interactive Contact Forms',
      'Basic SEO & Meta Configuration',
      'Mobile Optimization Checks'
    ],
    ctaText: 'Get Custom Quote',
    featured: false
  },
  {
    title: 'Business Solution',
    idealFor: 'Growing Businesses',
    features: [
      'Custom Unique UI Design',
      'Advanced Functionalities',
      'CMS / Blog Integration',
      'Premium Speed Optimization',
      'Security-First Best Practices',
      'Priority Email Support'
    ],
    ctaText: 'Request Proposal',
    featured: true
  },
  {
    title: 'Enterprise Solution',
    idealFor: 'Large Organizations',
    features: [
      'Custom Web Application Portal',
      'Advanced API / DB Integrations',
      'Highly Scalable Cloud Architecture',
      'Dedicated Strategy Consultations',
      'Ongoing Security Hardening',
      '24/7 Priority Support'
    ],
    ctaText: 'Schedule Consultation',
    featured: false
  }
]

const faqItems = [
  {
    q: 'How long does a website project take?',
    a: 'Timeline varies by project size. A standard informational business website typically takes 3 to 4 weeks. Complex e-commerce systems or custom web applications can require 6 to 10 weeks from discovery to deployment.'
  },
  {
    q: 'Can you redesign an existing website?',
    a: 'Yes, we provide website redesign services. We inspect your existing website structure, optimize visual patterns, audit speed issues, and build it on top of Vite and React to improve conversion rates and SEO rankings.'
  },
  {
    q: 'Do you provide website maintenance?',
    a: 'Absolutely. We offer ongoing maintenance agreements that cover critical security patches, core library updates, database backups, cloud hosting tuning, and content updates.'
  },
  {
    q: 'Will my website be mobile-friendly?',
    a: 'Yes, every single layout we build uses responsive CSS grids and media queries to adapt to screen sizes. We verify responsive parameters across various mobile devices and tablet sizes before launch.'
  },
  {
    q: 'Can you build custom web applications?',
    a: 'Yes. Beyond standard landing pages, we build complex web application portals incorporating authentication roles, user dashboards, interactive tables, and API integrations tailored to your workflows.'
  },
  {
    q: 'How do I get started?',
    a: 'Simply fill out the project consultation form at the bottom of this page or contact us at hello@digitalsphere.studio. We will schedule a strategy call to map out your goals and provide a custom proposal.'
  }
]

export function WebDevelopmentService() {
  useDocumentTitle('Web Development Service | Digital Sphere')

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
    projectType: 'web-development',
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
      setFormData({ name: '', email: '', business: '', projectType: 'web-development', message: '' })
    }
  }

  return (
    <article className={styles.page}>
      {/* SECTION 1: SERVICE HERO */}
      <section className={styles.hero} aria-labelledby="service-hero-title">
        <Container>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Web Development</span>
            <h1 id="service-hero-title">
              Custom Web Development Solutions <span>Built For Growth</span>
            </h1>
            <p className={styles.heroDescription}>
              We build modern, responsive, high-performance websites and web applications designed to help businesses establish a strong online presence, improve customer engagement, and achieve long-term growth.
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
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 2: WHAT IS WEB DEVELOPMENT */}
      <section className={`${styles.section} ${styles.introSection}`} aria-labelledby="intro-title">
        <Container>
          <div className={styles.introContent}>
            <div className={styles.introLeft}>
              <h2 id="intro-title">What Is Web Development?</h2>
              <div className={styles.introText}>
                <p>
                  Web development represents the underlying engineering that powers digital experiences across the web. While UI design outlines the visual patterns and user workflows, web development brings those designs to life using clean code, database integrations, authentication roles, and responsive layouts.
                </p>
                <p>
                  In today's digital landscape, a website acts as the primary storefront and trust indicator for your business. Generic templates with bloated scripts often lead to slow load speeds and high visitor drop-off. Professional development ensures your website is highly optimized, loads instantly, and delivers frictionless conversion flows.
                </p>
                <p>
                  At Digital Sphere, we build with security, performance, and scaling in mind. We develop custom web properties using Vite and React, ensuring clean markup, modular elements, and robust data protection across all user touchpoints.
                </p>
              </div>
            </div>
            <div className={styles.introRight}>
              <blockquote>
                <p className={styles.introQuote}>
                  "A fast, secure, and user-centric web platform isn't just an expense; it is a critical business asset that directly drives leads, conversions, and growth."
                </p>
                <cite className={styles.storyAuthor}>— Team Digital Sphere</cite>
              </blockquote>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: WHY YOUR BUSINESS NEEDS A PROFESSIONAL WEBSITE */}
      <section className={styles.section} aria-labelledby="benefits-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="benefits-title"
              title="Why Your Business Needs A Professional Website"
              description="Generic templates lead to slow load speeds and high visitor drop-off. Here is how a custom solution positions your brand for growth."
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

      {/* SECTION 4: WEB DEVELOPMENT SERVICES WE OFFER */}
      <section className={`${styles.section} ${styles.introSection}`} aria-labelledby="services-offer-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="services-offer-title"
              title="Our Web Development Services"
              description="From single campaign landing pages to complex corporate portals, we build to suit your goals."
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
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 5: TYPES OF WEBSITES WE BUILD */}
      <section className={styles.section} aria-labelledby="web-types-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="web-types-title"
              title="Solutions For Every Business"
              description="We design and build custom web properties fitted to specific organizational scales."
            />
          </div>
          <div className={styles.grid3}>
            {websiteTypes.map((type) => (
              <div className={styles.card} key={type.title}>
                <h3>{type.title}</h3>
                <p>{type.description}</p>
                <span className={styles.useCase}>
                  Ideal: <span>{type.useCase}</span>
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 6: TECHNOLOGY STACK */}
      <section className={`${styles.section} ${styles.introSection}`} aria-labelledby="tech-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="tech-title"
              title="Technologies We Use"
              description="We choose frameworks and databases that prioritize speed, security, and developer efficiency."
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

      {/* SECTION 7: OUR DEVELOPMENT PROCESS */}
      <section className={styles.section} aria-labelledby="process-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="process-title"
              title="How We Build Successful Websites"
              description="A structured workflow that ensures high-fidelity results and transparent checkpoints."
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
      <section className={`${styles.section} ${styles.introSection}`} aria-labelledby="choose-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="choose-title"
              title="Why Choose Digital Sphere For Web Development"
              description="We align modern engineering practices with a focus on long-term client results."
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
      <section className={styles.section} aria-labelledby="packages-title">
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
                  <a href="#discuss-project">{pkg.ctaText}</a>
                </div>
              </div>
            ))}
          </div>
          <p className={styles.packagesNote}>
            * Every project is unique. Final recommendations, technical integrations, and pricing are provided after fully mapping out your business requirements.
          </p>
        </Container>
      </section>

      {/* SECTION 10: FAQ SECTION */}
      <section className={`${styles.section} ${styles.faqSection}`} aria-labelledby="faq-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="faq-title"
              title="Web Development FAQ"
              description="Common questions about our development workflow, maintenance, security, and timelines."
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
      <section className={`${styles.section} ${styles.ctaSection}`} aria-label="CTA">
        <Container>
          <div className={styles.ctaCard}>
            <h2>Ready To Build A Website That Drives Results?</h2>
            <p>
              Partner with Digital Sphere to create a modern web presence that strengthens your brand, engages customers, and supports long-term growth.
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
      <section className={styles.section} id="discuss-project" aria-labelledby="form-heading">
        <Container>
          <div className={styles.contactLayout}>
            <div className={styles.contactFormCard}>
              <h2 id="form-heading" className={styles.contactCardTitle} style={{ marginBottom: 'var(--space-md)' }}>
                Discuss Your Project
              </h2>
              {formSubmitted ? (
                <div style={{ padding: 'var(--space-md)', background: 'rgba(6, 182, 212, 0.1)', border: '1px solid var(--color-secondary)', borderRadius: 'var(--radius-sm)', color: 'var(--color-text)' }}>
                  <strong>Thank you!</strong> Your project inquiry has been received. Our team will review and get back to you shortly.
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
                        <option value="web-development">Web Development</option>
                        <option value="ui-ux-design">UI/UX Design</option>
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

