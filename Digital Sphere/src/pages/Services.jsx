import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMonitor, FiLayout, FiSmartphone, FiTrendingUp, FiShield, FiLayers, FiUsers, FiBookOpen, FiCompass, FiBriefcase, FiActivity, FiGlobe, FiChevronDown, FiArrowRight, FiHeart, FiCpu } from 'react-icons/fi'
import { Container } from '../components/common/Container'
import { SectionHeader } from '../components/common/SectionHeader'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { ROUTES } from '../utils/routes'
import styles from './Services.module.css'

import webDevImg from '../assets/services/web-dev.png'
import uiUxImg from '../assets/services/ui-ux.png'
import mobileAppImg from '../assets/services/mobile-app.png'
import marketingImg from '../assets/services/marketing.png'
import securityImg from '../assets/services/security.png'
import graphicImg from '../assets/services/graphic.png'

/* ==========================================================================
   Page Datasets
   ========================================================================== */
const coreServices = [
  {
    icon: FiMonitor,
    image: webDevImg,
    title: 'Web Development',
    route: ROUTES.webDevelopment,
    description: 'Custom websites, web applications, and scalable digital platforms engineered for speed, responsiveness, and safety.'
  },
  {
    icon: FiLayout,
    image: uiUxImg,
    title: 'UI/UX Design',
    route: ROUTES.uiUxDesign,
    description: 'User-centered design experiences, Figma interactive prototypes, and interface layouts that improve engagement.'
  },
  {
    icon: FiSmartphone,
    image: mobileAppImg,
    title: 'Mobile App Development',
    route: ROUTES.mobileApps,
    description: 'High-performance mobile solutions built on modern application frameworks to serve mobile-first consumers.'
  },
  {
    icon: FiTrendingUp,
    image: marketingImg,
    title: 'Digital Marketing',
    route: ROUTES.digitalMarketing,
    description: 'Growth-focused marketing campaigns, SEO improvements, and visual marketing assets designed to drive conversion rates.'
  },
  {
    icon: FiShield,
    image: securityImg,
    title: 'Cyber Security',
    route: ROUTES.cyberSecurity,
    description: 'Robust server penetration checks, database protection routines, and secure cloud credentials setup.'
  },
  {
    icon: FiLayers,
    image: graphicImg,
    title: 'Graphic Design',
    route: ROUTES.graphicDesign,
    description: 'Professional visual communication, premium branding systems, logo packages, and social media marketing creatives.'
  }
]

const whyChooseUs = [
  {
    icon: FiUsers,
    title: 'Multi-Disciplinary Team',
    description: 'We bring together developers, designers, cyber security experts, and digital marketers under one collaborative roof, eliminating coordination gaps and accelerating product launches.'
  },
  {
    icon: FiCompass,
    title: 'Modern Technologies',
    description: 'We build with high-velocity tools like React, Vite, Node.js, and MongoDB, ensuring that your website features blazing fast load times, robust data layers, and strong SEO rankings.'
  },
  {
    icon: FiHeart,
    title: 'Client-Focused Approach',
    description: 'We reject generic templates and one-size-fits-all strategies. Every single visual element and line of code is custom-built around your unique business objectives and target conversion metrics.'
  },
  {
    icon: FiBriefcase,
    title: 'Long-Term Partnership',
    description: 'Our engagement does not end at product launch. We provide ongoing technical audits, hosting maintenance, security updates, database monitoring, and layout improvements as you scale.'
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Consultation',
    description: 'We sit down with your team to review business goals, identify target demographic habits, and outline technical parameters.'
  },
  {
    step: '02',
    title: 'Research & Planning',
    description: 'Conducting in-depth competitor audits and drafting sitemaps, system user journeys, and initial wireframes.'
  },
  {
    step: '03',
    title: 'Design',
    description: 'Creating high-fidelity UI design mockups in Figma, setting up cohesive colors and typography, and building clickable layouts.'
  },
  {
    step: '04',
    title: 'Development',
    description: 'Writing clean, component-driven React frontend files and implementing database APIs and secure backend structures.'
  },
  {
    step: '05',
    title: 'Testing',
    description: 'Running responsive layout audits across multiple mobile browsers, validating forms, and running penetration checks.'
  },
  {
    step: '06',
    title: 'Launch & Growth',
    description: 'Production deployment to premium cloud hosts, configuring Google Analytics, and monitoring search console indexes.'
  }
]

const technologies = [
  {
    category: 'Frontend',
    items: ['React', 'Vite', 'JavaScript', 'HTML5', 'CSS Modules']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs']
  },
  {
    category: 'Database',
    items: ['MongoDB', 'Mongoose']
  },
  {
    category: 'Design',
    items: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator']
  },
  {
    category: 'Security',
    items: ['SSL Encryption', 'Penetration Testing', 'Secure Authentication']
  }
]

const industriesServed = [
  {
    icon: FiGlobe,
    title: 'E-Commerce',
    description: 'Conversion-optimized digital shops featuring smooth checkouts, secure database catalogs, and fast inventory pages.'
  },
  {
    icon: FiActivity,
    title: 'Healthcare',
    description: 'Secure, reliable patient information portals, appointment scheduling systems, and medical education directories.'
  },
  {
    icon: FiTrendingUp,
    title: 'Finance',
    description: 'High-security financial landing pages, analytics dashboards, custom charts, and transaction history visualizers.'
  },
  {
    icon: FiBookOpen,
    title: 'Education',
    description: 'E-learning resource portals, class video streaming, interactive dashboards, and online student registers.'
  },
  {
    icon: FiCpu,
    title: 'Technology Startups',
    description: 'Fast-loading MVP prototypes and modern landing pages designed to showcase SaaS platforms and attract investors.'
  },
  {
    icon: FiBriefcase,
    title: 'Corporate Businesses',
    description: 'Sleek corporate profiles, communication hubs, and digital portfolios that build authority and trust with visitors.'
  }
]

const faqItems = [
  {
    q: 'Which service is right for my business?',
    a: 'The right service depends on your current business goals. If you need to build trust and capture leads, web development and UI/UX design are key. If you need to increase brand traffic, digital marketing is critical. We recommend booking a free scoping call where we can audit your digital assets and recommend a custom roadmap.'
  },
  {
    q: 'Can I request multiple services?',
    a: 'Absolutely. Many of our clients integrate multiple disciplines into a single project roadmap. For example, a project can begin with UI/UX design, transition into React web development, integrate security features, and launch with a targeted digital marketing strategy.'
  },
  {
    q: 'How do project consultations work?',
    a: 'Our consultations are simple and collaborative. After you reach out via our contact forms, we organize a 15-to-30-minute discovery call to discuss your project requirements, goals, and timeline. Following this call, our team drafts a formal proposal containing pricing options, project milestones, and tech stack details.'
  },
  {
    q: 'Do you offer ongoing support?',
    a: 'Yes, we provide monthly maintenance packages that keep your digital products performing at their peak. These cover hosting optimization, security patches, database backups, module updates, and monthly layout iterations.'
  },
  {
    q: 'Can you work with existing systems?',
    a: 'Yes. We frequently work with businesses that have existing websites or apps. We can audit your current system, refactor older codebases, integrate modern React design components, set up secure REST APIs, or manage database migrations.'
  },
  {
    q: 'How do I get started?',
    a: 'Getting started is simple. You can fill out the contact form on our page or click any of the CTA buttons to visit our Contact page. Share your basic project details, and our team will get in touch with you within one business day.'
  }
]

/* ==========================================================================
   Memoized Card Components
   ========================================================================== */

const CoreServiceCard = React.memo(({ service }) => {
  return (
    <article className={`reveal-trigger ${styles.card}`}>
      <div className={styles.imageBox}>
        <img src={service.image} alt={service.title} loading="lazy" className={styles.serviceImage} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <Link to={service.route} className={styles.learnMoreLink}>
        <span>Learn More</span>
        <FiArrowRight aria-hidden="true" />
      </Link>
    </article>
  )
})
CoreServiceCard.displayName = 'CoreServiceCard'

const WhyChooseCard = React.memo(({ item }) => {
  const Icon = item.icon
  return (
    <div className={styles.whyCard}>
      <div className={styles.iconBox} aria-hidden="true">
        <Icon />
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  )
})
WhyChooseCard.displayName = 'WhyChooseCard'

/* ==========================================================================
   Services Component
   ========================================================================== */
export function Services() {
  useDocumentTitle('Services | Digital Sphere')

  // FAQ Accordion State
  const [expandedFaq, setExpandedFaq] = useState(null)

  const toggleFaq = (idx) => {
    setExpandedFaq(expandedFaq === idx ? null : idx)
  }

  return (
    <article className={`reveal-trigger ${`${styles.page}`}`}>
      {/* SECTION 1: SERVICES HERO */}
      <section className={`reveal-trigger ${styles.hero}`} aria-labelledby="services-hero-title">
        <Container>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Our Services</span>
            <h1 id="services-hero-title">
              Digital Solutions <span>Designed For Modern Growth</span>
            </h1>
            <p className={styles.heroDescription}>
              Digital Sphere provides comprehensive digital services that help businesses build stronger brands, improve online visibility, enhance customer experiences, and achieve sustainable growth.
            </p>
            <div className={styles.heroActions}>
              <div className={styles.primaryBtn}>
                <a href="#core-services">Explore Services</a>
              </div>
              <div className={styles.secondaryBtn}>
                <Link to={ROUTES.contact}>Start Your Project</Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: SERVICES INTRODUCTION */}
      <section className={`reveal-trigger ${`${styles.section}`} ${styles.introSection}`} aria-labelledby="intro-title">
        <Container>
          <div className={styles.introContent}>
            <div className={styles.introLeft}>
              <h2 id="intro-title">Everything You Need To Succeed Digitally</h2>
              <div className={styles.introText}>
                <p>
                  Modern businesses face significant challenges in an increasingly competitive online landscape. From changing customer expectations and device types to data protection rules and complex search engine algorithms, establishing an effective digital presence requires specialized technical expertise.
                </p>
                <p>
                  Simply setting up a template is no longer enough to win customer trust. Digital transformation requires a structured approach that combines visual storytelling, interactive user journeys, fast code engineering, and search engine visibility. If any of these aspects are neglected, the overall customer experience suffers.
                </p>
                <p>
                  At Digital Sphere, we integrate these core elements into a single workflow. Our services span design, development, marketing, and security. By keeping these disciplines under one roof, we eliminate communication gaps between designers and developers, ensuring faster launches and high-quality results.
                </p>
                <p>
                  Whether you are a startup looking to build a secure MVP database platform or an established corporate organization seeking a website redesign, our multidisciplinary team is equipped to guide you from initial planning to production-ready launch.
                </p>
              </div>
            </div>
            <div className={styles.introRight}>
              <blockquote>
                <p className={styles.introQuote}>
                  "The best digital experiences are built at the intersection of beautiful design, secure engineering, and clear growth strategy."
                </p>
                <cite className={styles.storyAuthor}>— Team Digital Sphere</cite>
              </blockquote>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: CORE SERVICES GRID */}
      <section className={`reveal-trigger ${styles.section}`} id="core-services" aria-labelledby="core-services-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="core-services-title"
              title="Our Core Capabilities"
              description="Explore our core service offerings. Click on any card to view detailed specifications, packages, FAQs, and processes."
            />
          </div>
          <div className={styles.grid3}>
            {coreServices.map((service) => (
              <CoreServiceCard key={service.title} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 4: WHY CHOOSE DIGITAL SPHERE */}
      <section className={`reveal-trigger ${`${styles.section}`} ${styles.whyChooseSection}`} aria-labelledby="why-choose-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="why-choose-title"
              title="Why Choose Digital Sphere"
              description="How we align modern technology decisions with visual craftsmanship to help brands scale with confidence."
            />
          </div>
          <div className={styles.grid3}>
            {whyChooseUs.map((item) => (
              <WhyChooseCard key={item.title} item={item} />
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 5: OUR WORKING PROCESS */}
      <section className={`reveal-trigger ${styles.section}`} aria-labelledby="process-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="process-title"
              title="Our Working Process"
              description="A transparent step-by-step workflow that ensures top-tier quality from consultation to long-term growth."
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

      {/* SECTION 6: TECHNOLOGIES & TOOLS */}
      <section className={`reveal-trigger ${`${styles.section}`} ${styles.introSection}`} aria-labelledby="tech-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="tech-title"
              title="Tools & Technologies We Use"
              description="We choose frameworks and databases that prioritize speed, modular scaling, and long-term security."
            />
          </div>
          <div className={styles.techGrid}>
            {technologies.map((tech) => (
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

      {/* SECTION 7: INDUSTRIES WE SERVE */}
      <section className={`reveal-trigger ${styles.section}`} aria-labelledby="industries-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="industries-title"
              title="Industries We Serve"
              description="We provide customized engineering and design solutions across multiple key industry domains."
            />
          </div>
          <div className={styles.industryGrid}>
            {industriesServed.map((ind) => {
              const Icon = ind.icon
              return (
                <div className={styles.industryCard} key={ind.title}>
                  <div className={styles.iconBox} aria-hidden="true">
                    <Icon />
                  </div>
                  <div className={styles.industryCardContent}>
                    <h3>{ind.title}</h3>
                    <p>{ind.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 8: FAQ SECTION */}
      <section className={`reveal-trigger ${`${styles.section}`} ${styles.faqSection}`} aria-labelledby="faq-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="faq-title"
              title="Frequently Asked Questions"
              description="Common questions about our services, support offerings, and project consultation workflows."
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

      {/* SECTION 9: FINAL CTA */}
      <section className={`reveal-trigger ${styles.section}`} aria-label="CTA">
        <Container>
          <div className={styles.ctaCard}>
            <h2>Ready To Grow Your Business Digitally?</h2>
            <p>
              Partner with Digital Sphere to create digital solutions that deliver measurable results and long-term success.
            </p>
            <div className={styles.ctaActions}>
              <div className={styles.primaryBtn}>
                <Link to={ROUTES.contact}>Get A Custom Quote</Link>
              </div>
              <div className={styles.secondaryBtn}>
                <Link to={ROUTES.contact}>Contact Us</Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </article>
  )
}
