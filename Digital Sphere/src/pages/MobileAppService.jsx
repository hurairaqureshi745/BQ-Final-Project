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
  FiArrowRight,
  FiHeart,
  FiUsers,
  FiBookOpen,
  FiCompass,
  FiSettings
} from 'react-icons/fi'
import { Container } from '../components/common/Container'
import { SectionHeader } from '../components/common/SectionHeader'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { ROUTES } from '../utils/routes'
import styles from './MobileAppService.module.css'

/* ==========================================================================
   Page Datasets
   ========================================================================= */
const stats = [
  { value: 'Cross-Platform', label: 'Solutions' },
  { value: 'User-Focused', label: 'Experiences' },
  { value: 'Scalable', label: 'Architectures' },
  { value: 'Secure', label: 'Mobile Applications' }
]

const benefits = [
  {
    icon: FiMessageSquare,
    title: 'Improve Customer Engagement',
    description: 'Mobile apps create a direct channel of communication with your audience through real-time notifications, messaging systems, and instant services.'
  },
  {
    icon: FiHeart,
    title: 'Increase Brand Loyalty',
    description: 'An app icon on a user\'s home screen strengthens your brand identity and creates a continuous visual connection that drives repeat customer interaction.'
  },
  {
    icon: FiSmartphone,
    title: 'Provide Better Accessibility',
    description: 'Users can interact with your services, browse catalog listings, or send requests anywhere and anytime, even with limited internet connections.'
  },
  {
    icon: FiTrendingUp,
    title: 'Generate New Revenue Opportunities',
    description: 'Integrate secure catalog shopping gateways, subscription-based gates, in-app purchases, or dynamic advertising layouts to monetize your app.'
  },
  {
    icon: FiSliders,
    title: 'Improve Business Efficiency',
    description: 'Custom internal apps help field employees submit updates, track company inventories, coordinate routes, and streamline overall business operations.'
  },
  {
    icon: FiBriefcase,
    title: 'Support Long-Term Growth',
    description: 'Our mobile applications are backed by cloud APIs that scale dynamically as your user active connections and database sizes expand.'
  }
]

const servicesWeOffer = [
  {
    icon: FiCpu,
    title: 'Android App Development',
    description: 'Custom Android applications designed for high performance, maximum layout responsiveness, and compatibility across diverse Android devices.'
  },
  {
    icon: FiMonitor,
    title: 'iOS App Development',
    description: 'High-quality applications tailored specifically for Apple devices, satisfying strict App Store compliance and visual benchmarks.'
  },
  {
    icon: FiGlobe,
    title: 'Cross-Platform App Development',
    description: 'Applications that work seamlessly on both Android and iOS from a single, unified codebase using React Native or Flutter frameworks.'
  },
  {
    icon: FiBriefcase,
    title: 'Business Applications',
    description: 'Custom workflow apps designed to improve employee collaboration, coordinate logistics, and manage dashboard databases on the go.'
  },
  {
    icon: FiShoppingBag,
    title: 'E-Commerce Applications',
    description: 'Mobile shopping experiences featuring smooth checkouts, safe payment integration, order tracking, and high client retention.'
  },
  {
    icon: FiSettings,
    title: 'App Maintenance & Support',
    description: 'Continuous library upgrades, database security monitoring, OS compliance adjustments, and quick feature additions.'
  }
]

const websiteTypes = [
  {
    title: 'Business Applications',
    description: 'Custom mobile portals designed to organize internal coordination, catalog sharing, and remote file management.',
    useCase: 'Best for sales teams, logistics groups, and consultation firms.',
    bizValue: 'Reduces coordination costs and speeds up internal business operations.'
  },
  {
    title: 'E-Commerce Apps',
    description: 'Interactive storefront apps equipped with secure cart systems, user profiles, order tracking, and push notifications.',
    useCase: 'Best for retail brands, physical product sellers, and subscription services.',
    bizValue: 'Drives repeat purchase conversion and keeps customers visually connected.'
  },
  {
    title: 'Healthcare Apps',
    description: 'Protected healthcare portals allowing secure doctor chat, symptom logging, advice resources, and calendar scheduling.',
    useCase: 'Best for clinics, virtual wellness brands, and tracking logs.',
    bizValue: 'Ensures data protection standards and simplifies client booking channels.'
  },
  {
    title: 'Educational Apps',
    description: 'Interactive classrooms with video streaming pipelines, assignment folders, student grades, and quiz routes.',
    useCase: 'Best for universities, schools, training coaches, and e-learning startups.',
    bizValue: 'Engages remote learners and delivers structured courses directly to touch screens.'
  },
  {
    title: 'Startup Products',
    description: 'High-velocity MVP app designs built to validate unique software concepts and gather real-world user metrics.',
    useCase: 'Best for early-stage startup teams launching a first product version.',
    bizValue: 'Saves initial development cost and speeds up time-to-market.'
  },
  {
    title: 'Custom Enterprise Applications',
    description: 'Highly secure enterprise mobile platforms incorporating offline sync, LDAP authentication, and legacy system bridges.',
    useCase: 'Best for large organizations requiring custom database integrations.',
    bizValue: 'Protects system assets and synchronizes remote coordination streams.'
  }
]

const techStack = [
  {
    category: 'Frontend Mobile',
    items: ['React Native', 'Flutter', 'JavaScript', 'TypeScript']
  },
  {
    category: 'Backend APIs',
    items: ['Node.js', 'Express.js', 'RESTful APIs']
  },
  {
    category: 'Cloud & Database',
    items: ['MongoDB', 'Firebase', 'AWS']
  },
  {
    category: 'Tools & IDEs',
    items: ['Git', 'GitHub', 'Figma', 'Android Studio', 'VS Code']
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Requirements Gathering',
    description: 'We align with your team to review app goals, map user demographics, and draft detailed functional specifications.'
  },
  {
    step: '02',
    title: 'Research & Planning',
    description: 'Defining app structures, database schemas, cloud API pathways, and creating sitemaps and wireframe screen flows.'
  },
  {
    step: '03',
    title: 'UI/UX Design',
    description: 'Creating high-fidelity mobile mockups in Figma, emphasizing touch-friendly targets, easy navigation, and premium dark theme styles.'
  },
  {
    step: '04',
    title: 'App Development',
    description: 'Writing clean modular React Native or Flutter frontend code and setting up secure backend APIs and data connections.'
  },
  {
    step: '05',
    title: 'Testing & Quality Assurance',
    description: 'Running manual and automated tests on physical Android and iOS devices to verify speed, safety, and visual layouts.'
  },
  {
    step: '06',
    title: 'Deployment & Launch',
    description: 'Handling packaging, signing, and submission pipelines to list your app correctly on the Google Play Store and Apple App Store.'
  },
  {
    step: '07',
    title: 'Maintenance & Growth',
    description: 'Monitoring database performance, delivering critical OS update patches, and iterating new features based on feedback.'
  }
]

const whyChooseUs = [
  {
    icon: FiUsers,
    title: 'User-Centered Experiences',
    description: 'We focus deeply on mobile interaction logic—ensuring clear touch zones, fast transitions, and readable layouts for target users.'
  },
  {
    icon: FiCompass,
    title: 'Cross-Platform Expertise',
    description: 'Leveraging React Native and Flutter allows us to build apps for both Android and iOS simultaneously, saving you development costs.'
  },
  {
    icon: FiCpu,
    title: 'Scalable Development',
    description: 'Our cloud architectures and API databases are built to handle high concurrency, ensuring that your app performs as user traffic scales.'
  },
  {
    icon: FiShield,
    title: 'Long-Term Support',
    description: 'We stand by our code post-launch, providing database backups, dependency upgrades, store monitoring, and compliance reviews.'
  }
]

const solutionPackages = [
  {
    title: 'Starter App Solution',
    idealFor: 'Startups and small businesses',
    features: [
      'Basic Mobile Application',
      'Core Features Listing',
      'Responsive Mobile UI Layout',
      'Standard Device Testing',
      'App Store Deployment Guidance'
    ],
    ctaText: 'Get Custom Quote',
    featured: false
  },
  {
    title: 'Business App Solution',
    idealFor: 'Growing Businesses',
    features: [
      'Custom Unique UI Screens',
      'Advanced Feature Options',
      'Secure Backend API Integration',
      'High-Speed Performance Audit',
      'Security & Authentication Safeguards'
    ],
    ctaText: 'Request Proposal',
    featured: true
  },
  {
    title: 'Enterprise App Solution',
    idealFor: 'Organizations requiring custom mobile ecosystems',
    features: [
      'Advanced API Architecture',
      'Custom Database Integrations',
      'Highly Scalable Cloud Setup',
      'Dedicated Strategy Consulting',
      '24/7 Priority Support Plan'
    ],
    ctaText: 'Schedule Consultation',
    featured: false
  }
]

const faqItems = [
  {
    q: 'How long does it take to build a mobile app?',
    a: 'Timelines depend on complexity. A starter app with core functionalities can take 4 to 8 weeks. Larger e-commerce or custom database applications typically require 10 to 16 weeks, from discovery call to store deployment.'
  },
  {
    q: 'Do you build Android and iOS apps?',
    a: 'Yes. We utilize cross-platform technologies (React Native and Flutter) to develop apps that compile natively for both Android and iOS devices, ensuring consistent layouts while reducing development costs.'
  },
  {
    q: 'Can you redesign an existing mobile app?',
    a: 'Absolutely. We audit your existing mobile application, analyze screen flows, resolve speed issues, refactor outdated dependency libraries, and redesign the user interface to align with modern design standards.'
  },
  {
    q: 'Do you provide app maintenance?',
    a: 'Yes, we provide ongoing support and maintenance. This covers security audits, database cleanups, critical bug fixes, cloud hosting optimizations, and OS upgrade compliance updates.'
  },
  {
    q: 'Will my app be scalable?',
    a: 'Yes, we build apps with scalability in mind. By integrating robust cloud backends, clean API routing, and modular database layers, your app will handle user database growth without performance delays.'
  },
  {
    q: 'How do I start my mobile app project?',
    a: 'Simply fill out the project consultation form at the bottom of this page or contact us at hello@digitalsphere.studio. We will schedule a strategy call to map your objectives and draft a proposal.'
  }
]

/* ==========================================================================
   MobileAppService Component
   ========================================================================= */
export function MobileAppService() {
  useDocumentTitle('Mobile App Development Service | Digital Sphere')

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
    projectType: 'mobile-apps',
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
      setFormData({ name: '', email: '', business: '', projectType: 'mobile-apps', message: '' })
    }
  }

  return (
    <article className={styles.page}>
      {/* SECTION 1: SERVICE HERO */}
      <section className={styles.hero} aria-labelledby="service-hero-title">
        <Container>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Mobile App Development</span>
            <h1 id="service-hero-title">
              Powerful Mobile Applications <span>Built For Modern Businesses</span>
            </h1>
            <p className={styles.heroDescription}>
              We design and develop mobile applications that help businesses engage customers, streamline operations, and create exceptional digital experiences across Android and iOS platforms.
            </p>
            <div className={styles.heroActions}>
              <div className={styles.primaryBtn}>
                <a href="#discuss-app">Get A Custom Quote</a>
              </div>
              <div className={styles.secondaryBtn}>
                <a href="#discuss-app">Discuss Your App Idea</a>
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

      {/* SECTION 2: WHAT IS MOBILE APP DEVELOPMENT */}
      <section className={`${styles.section} ${styles.introSection}`} aria-labelledby="intro-title">
        <Container>
          <div className={styles.introContent}>
            <div className={styles.introLeft}>
              <h2 id="intro-title">What Is Mobile App Development?</h2>
              <div className={styles.introText}>
                <p>
                  Mobile app development represents the specialized field of engineering focused on building software applications that run on mobile devices, such as smartphones and tablets. In a world where consumers spend hours on their phones, a custom app acts as a highly personalized storefront, providing a direct, fast connection to your services.
                </p>
                <p>
                  A major decision in app development is choosing between Native and Cross-Platform technologies. Native apps are written specifically for iOS (Swift) or Android (Kotlin), offering maximum hardware access. Cross-Platform apps leverage frameworks like React Native or Flutter to generate code for both systems simultaneously, ensuring visual consistency and lower development costs.
                </p>
                <p>
                  At Digital Sphere, we specialize in high-efficiency cross-platform development. We build with modern tools to ensure that your application features smooth touch gestures, fast load speeds, secure cloud databases, and offline accessibility parameters.
                </p>
                <p>
                  Whether you need an internal business application to coordinate employee workflows, a high-conversion e-commerce shopping portal, or a scalable MVP startup app, our development process ensures your digital asset is built to scale and grow.
                </p>
              </div>
            </div>
            <div className={styles.introRight}>
              <blockquote>
                <p className={styles.introQuote}>
                  "A premium mobile app is not just a digital tool; it is a direct connection to your users that strengthens loyalty and drives continuous business efficiency."
                </p>
                <cite className={styles.storyAuthor}>— Team Digital Sphere</cite>
              </blockquote>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: WHY MOBILE APPS MATTER FOR BUSINESSES */}
      <section className={styles.section} aria-labelledby="benefits-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="benefits-title"
              title="Why Businesses Invest In Mobile Applications"
              description="Custom mobile solutions help brands build authority, engage consumers, and optimize operations."
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

      {/* SECTION 4: MOBILE APP SERVICES WE OFFER */}
      <section className={`${styles.section} ${styles.introSection}`} aria-labelledby="services-offer-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="services-offer-title"
              title="Our Mobile App Development Services"
              description="From single startup MVPs to complex cloud-synced enterprise tools, we develop tailored solutions."
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

      {/* SECTION 5: TYPES OF MOBILE APPS WE BUILD */}
      <section className={styles.section} aria-labelledby="app-types-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="app-types-title"
              title="Mobile Solutions For Every Industry"
              description="We design and build custom applications configured around specific business verticals."
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
                <span className={styles.bizValue}>
                  Value: <span>{type.bizValue}</span>
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 6: TECHNOLOGIES & PLATFORMS */}
      <section className={`${styles.section} ${styles.introSection}`} aria-labelledby="tech-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="tech-title"
              title="Technologies We Use"
              description="We choose frameworks that guarantee high speeds, security, and developer efficiency."
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

      {/* SECTION 7: OUR APP DEVELOPMENT PROCESS */}
      <section className={styles.section} aria-labelledby="process-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="process-title"
              title="How We Build Successful Mobile Applications"
              description="A structured workflow that ensures high-fidelity results and transparent milestones."
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
              title="Why Choose Digital Sphere For Mobile Apps"
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
                  <a href="#discuss-app">{pkg.ctaText}</a>
                </div>
              </div>
            ))}
          </div>
          <p className={styles.packagesNote}>
            * Every mobile application is unique. Final recommendations, timelines, and project estimates are provided after understanding project requirements.
          </p>
        </Container>
      </section>

      {/* SECTION 10: FAQ SECTION */}
      <section className={`${styles.section} ${styles.faqSection}`} aria-labelledby="faq-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="faq-title"
              title="Mobile App FAQ"
              description="Common questions about our development workflows, store submissions, maintenance, and timelines."
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
            <h2>Ready To Turn Your App Idea Into Reality?</h2>
            <p>
              Partner with Digital Sphere to create mobile applications that engage users, support business growth, and deliver meaningful results.
            </p>
            <div className={styles.ctaActions}>
              <div className={styles.primaryBtn}>
                <a href="#discuss-app">Get A Custom Quote</a>
              </div>
              <div className={styles.secondaryBtn}>
                <Link to={ROUTES.contact}>Contact Us</Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 12: CONTACT FORM */}
      <section className={styles.section} id="discuss-app" aria-labelledby="form-heading">
        <Container>
          <div className={styles.contactLayout}>
            <div className={styles.contactFormCard}>
              <h2 id="form-heading" className={styles.contactCardTitle} style={{ marginBottom: 'var(--space-md)' }}>
                Discuss Your Mobile App Project
              </h2>
              {formSubmitted ? (
                <div style={{ padding: 'var(--space-md)', background: 'rgba(6, 182, 212, 0.1)', border: '1px solid var(--color-secondary)', borderRadius: 'var(--radius-sm)', color: 'var(--color-text)' }}>
                  <strong>Thank you!</strong> Your mobile app inquiry has been received. Our team will review and get back to you shortly.
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
                      <label htmlFor="appSelect">App Type</label>
                      <select
                        id="appSelect"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                      >
                        <option value="cross-platform">Cross-Platform (React Native / Flutter)</option>
                        <option value="android-app">Android Native App</option>
                        <option value="ios-app">iOS Native App</option>
                        <option value="business-app">Business / Workflow App</option>
                        <option value="ecommerce-app">E-Commerce Mobile App</option>
                      </select>
                    </div>
                    <div className={`${styles.formField} ${styles.formFieldFull}`}>
                      <label htmlFor="appMessage">Project Requirements</label>
                      <textarea
                        id="appMessage"
                        name="message"
                        placeholder="Share your app goals, desired features, timeline, and platforms."
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
