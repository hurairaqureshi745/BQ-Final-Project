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
  FiAlertTriangle,
  FiLock,
  FiDatabase,
  FiRefreshCw,
  FiEye,
  FiSettings
} from 'react-icons/fi'
import { Container } from '../components/common/Container'
import { SectionHeader } from '../components/common/SectionHeader'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { ROUTES } from '../utils/routes'
import styles from './CyberSecurityService.module.css'

/* ==========================================================================
   Page Datasets
   ========================================================================= */
const stats = [
  { value: 'Secured', label: 'Security-Focused Solutions' },
  { value: 'Risk-Averse', label: 'Risk Reduction Strategies' },
  { value: 'Best Practices', label: 'Modern Protection Practices' },
  { value: '24/7 Monitoring', label: 'Long-Term Security Support' }
]

const benefits = [
  {
    icon: FiLock,
    title: 'Protect Sensitive Data',
    description: 'Secure customer contact details, login credentials, credit records, and business assets from database leaks.'
  },
  {
    icon: FiAlertTriangle,
    title: 'Reduce Business Risks',
    description: 'Identify and mitigate vulnerability entry points across websites, user accounts, and API gateways.'
  },
  {
    icon: FiUsers,
    title: 'Improve Customer Trust',
    description: 'Establish a strong safety reputation, letting customers know their personal records are protected.'
  },
  {
    icon: FiTrendingUp,
    title: 'Prevent Financial Losses',
    description: 'Avoid ransom costs, customer lawsuit penalties, and downtime sales losses from system breaches.'
  },
  {
    icon: FiAward,
    title: 'Support Compliance',
    description: 'Meet legal benchmarks and data protection compliance rules (such as GDPR or local laws).'
  },
  {
    icon: FiRefreshCw,
    title: 'Ensure Business Continuity',
    description: 'Keep systems running smoothly during attacks by setting up automated backups and redundant servers.'
  }
]

const servicesWeOffer = [
  {
    icon: FiShield,
    title: 'Security Assessments',
    description: 'Detailed vulnerability scanning and penetration audits across web layouts, APIs, and network systems.',
    outcome: 'Comprehensive Vulnerability Audit Report',
    benefit: 'Identify System Entry Points Before Hackers'
  },
  {
    icon: FiMonitor,
    title: 'Website Security Reviews',
    description: 'Auditing web server SSL setups, forms validation scripts, SQL query variables, and dependency libraries.',
    outcome: 'Secure Website Certifications & Upgrades',
    benefit: 'Prevent SQL Injection & Cross-Site Attacks'
  },
  {
    icon: FiBookOpen,
    title: 'Security Best Practice Consultation',
    description: 'Drafting complete internal policies, password rules, user authentication checks, and database guides.',
    outcome: 'Company-Wide Security Policy Handbooks',
    benefit: 'Build a Security-First Operational Culture'
  },
  {
    icon: FiActivity,
    title: 'Risk Analysis',
    description: 'Detailed analysis of operational pipelines, third-party integrations, and database access logs to reduce risks.',
    outcome: 'Detailed Risk Mitigation Roadmaps',
    benefit: 'Minimize Threat Exposure Across Operations'
  },
  {
    icon: FiBriefcase,
    title: 'Business Security Strategy',
    description: 'Developing disaster recovery, data backup architectures, and incident response guidelines.',
    outcome: 'Disaster Recovery & Business Continuity Plans',
    benefit: 'Ensure System Continuity Post-Incident'
  },
  {
    icon: FiSettings,
    title: 'Security Awareness Guidance',
    description: 'Educational walkthrough sessions and phishing simulations for team employees to prevent social engineering.',
    outcome: 'Trained Security-Aware Internal Teams',
    benefit: 'Eliminate Human-Error Security Vulnerabilities'
  }
]

const commonThreats = [
  {
    icon: FiMail,
    title: 'Phishing Attacks',
    description: 'Deceptive messages aimed at stealing employee credentials, logins, and billing ledger access.',
    risk: 'Can lead to full account takeovers and internal system compromises.'
  },
  {
    icon: FiDatabase,
    title: 'Data Breaches',
    description: 'Unauthorized exposure and leakage of company files, employee data, or client databases.',
    risk: 'Violates data protection laws and damages brand credibility.'
  },
  {
    icon: FiUsers,
    title: 'Weak Authentication',
    description: 'Relying on simple user passwords or failing to enforce MFA validation checks.',
    risk: 'Makes systems easy targets for brute-force entry and credential stuffing.'
  },
  {
    icon: FiAlertTriangle,
    title: 'Malware Risks',
    description: 'Malicious code, ransomware, or spyware sneaking into servers via unpatched libraries.',
    risk: 'Can encrypt server assets, halt operations, and hold data hostage.'
  },
  {
    icon: FiUsers,
    title: 'Social Engineering',
    description: 'Manipulating team members into sharing credentials or bypassing security protocols.',
    risk: 'Bypasses firewalls by exploiting human trust and lack of training.'
  },
  {
    icon: FiSettings,
    title: 'Configuration Mistakes',
    description: 'Misconfigured folders, open ports, or default cloud server settings.',
    risk: 'Exposes private system backends to public search engines.'
  }
]

const securityPractices = [
  {
    icon: FiCpu,
    title: 'Secure Development Practices',
    description: 'Enforcing input sanitation, parameterized SQL query bindings, and continuous library upgrades.',
    importance: 'Prevents SQL injection and cross-site scripting vulnerabilities.'
  },
  {
    icon: FiUsers,
    title: 'Access Control',
    description: 'Using Role-Based Access Control (RBAC) to limit file changes based on employee roles.',
    importance: 'Enforces the principle of least privilege across teams.'
  },
  {
    icon: FiLock,
    title: 'Authentication Methods',
    description: 'Setting up multi-factor validation checks (MFA) and secure single sign-ons.',
    importance: 'Protects account access from unauthorized device logins.'
  },
  {
    icon: FiDatabase,
    title: 'Data Protection',
    description: 'Enforcing SSL/TLS encryption for transit and database encryption for rest parameters.',
    importance: 'Protects user records and databases from interception.'
  },
  {
    icon: FiRefreshCw,
    title: 'Backup Strategies',
    description: 'Configuring regular automated database backups saved across distinct cloud instances.',
    importance: 'Ensures rapid system recovery in the event of ransomware.'
  },
  {
    icon: FiActivity,
    title: 'Security Monitoring',
    description: 'Setting up server log managers and real-time firewalls to block threats.',
    importance: 'Provides rapid threat detection and detailed security logs.'
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Assessment',
    description: 'We conduct a thorough audit of your current system structures, scan folders, and review API endpoints.'
  },
  {
    step: '02',
    title: 'Risk Identification',
    description: 'Analyzing entry points, identifying misconfigured servers, and locating weak code validations.'
  },
  {
    step: '03',
    title: 'Strategy Planning',
    description: 'Mapping out recommended security protocols, patch priorities, and disaster recovery strategies.'
  },
  {
    step: '04',
    title: 'Implementation Guidance',
    description: 'Helping your development team implement code sanitation, MFA configurations, and backups.'
  },
  {
    step: '05',
    title: 'Monitoring',
    description: 'Setting up automated threat alerts, tracking log activities, and monitoring cloud firewalls.'
  },
  {
    step: '06',
    title: 'Continuous Improvement',
    description: 'Regularly evaluating new vulnerabilities, auditing software, and adjusting defense parameters.'
  }
]

const whyChooseUs = [
  {
    icon: FiShield,
    title: 'Security-First Mindset',
    description: 'We treat data protection as a core foundation of all design and code execution rather than an afterthought.'
  },
  {
    icon: FiBriefcase,
    title: 'Business-Focused Approach',
    description: 'We align security frameworks with your daily operations, ensuring protection doesn\'t disrupt workflow speeds.'
  },
  {
    icon: FiCpu,
    title: 'Modern Best Practices',
    description: 'Leveraging updated encryption methods, secure token schemas, and compliance frameworks.'
  },
  {
    icon: FiCompass,
    title: 'Long-Term Partnership',
    description: 'Continuous adjustment of security configurations to defend against new digital threats.'
  }
]

const solutionPackages = [
  {
    title: 'Security Foundation',
    idealFor: 'Small Businesses',
    features: [
      'Basic Security Scan',
      'SSL Configuration Review',
      'Core Vulnerability Reports',
      'Compliance Audits Help',
      'Security Settings Review'
    ],
    ctaText: 'Get Custom Quote',
    featured: false
  },
  {
    title: 'Business Security Solution',
    idealFor: 'Growing Organizations',
    features: [
      'Full Vulnerability Scanning',
      'Security Implementation Help',
      'Access Control Setup',
      'Real-Time Alerts Configuration',
      'Staff Awareness Training Documents'
    ],
    ctaText: 'Request Proposal',
    featured: true
  },
  {
    title: 'Advanced Security Strategy',
    idealFor: 'Organizations With Complex Requirements',
    features: [
      'Penetration Auditing',
      'Disaster Recovery Setup',
      'Secure API Architecture Plan',
      'Dedicated Strategic Advice',
      'Continuous Log Monitoring Setup'
    ],
    ctaText: 'Schedule Consultation',
    featured: false
  }
]

const faqItems = [
  {
    q: 'Why is cyber security important?',
    a: 'Data leaks and security breaches can ruin brand reputation, incur heavy legal penalties, and cause business operations to halt completely. Securing your infrastructure is a critical business asset that builds trust and compliance.'
  },
  {
    q: 'Can you review website security?',
    a: 'Yes. We audit SQL queries, input validation fields, SSL certificates setups, and dependency libraries to find and resolve potential vulnerabilities.'
  },
  {
    q: 'Do you provide security consultation?',
    a: 'Yes. We help organizations build strong internal security policies, covering password management, file access guidelines, and backup architectures.'
  },
  {
    q: 'How often should businesses assess security?',
    a: 'We recommend carrying out security assessments at least once a year, or whenever major updates are deployed to your digital assets.'
  },
  {
    q: 'Can you help improve security practices?',
    a: 'Absolutely. We provide step-by-step guidance on how to integrate security controls into your software workflows and train staff on security awareness.'
  },
  {
    q: 'How do I get started?',
    a: 'Getting started is simple. Fill out our consultation form at the bottom of this page. Share your basic security concerns, and our team will get in touch with you within one business day.'
  }
]

/* ==========================================================================
   CyberSecurityService Component
   ========================================================================= */
export function CyberSecurityService() {
  useDocumentTitle('Cyber Security Service | Digital Sphere')

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
    concerns: 'data-protection',
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
      setFormData({ name: '', email: '', business: '', concerns: 'data-protection', message: '' })
    }
  }

  return (
    <article className={styles.page}>
      {/* SECTION 1: SERVICE HERO */}
      <section className={styles.hero} aria-labelledby="service-hero-title">
        <Container>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Cyber Security</span>
            <h1 id="service-hero-title">
              Protecting Businesses <span>In An Evolving Digital World</span>
            </h1>
            <p className={styles.heroDescription}>
              Digital threats continue to evolve, making cyber security a critical part of every modern business. We help organizations strengthen their digital defenses, reduce risks, and protect valuable assets.
            </p>
            <div className={styles.heroActions}>
              <div className={styles.primaryBtn}>
                <a href="#discuss-security">Get A Security Consultation</a>
              </div>
              <div className={styles.secondaryBtn}>
                <a href="#discuss-security">Discuss Your Security Needs</a>
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

      {/* SECTION 2: WHAT IS CYBER SECURITY */}
      <section className={`${styles.section} ${styles.introSection}`} aria-labelledby="intro-title">
        <Container>
          <div className={styles.introContent}>
            <div className={styles.introLeft}>
              <h2 id="intro-title">What Is Cyber Security?</h2>
              <div className={styles.introText}>
                <p>
                  Cyber security is the practice of protecting systems, networks, programs, devices, and data from digital attacks. As businesses move operations to the cloud and handle larger databases, they become attractive targets for cyber criminals looking to exploit vulnerabilities.
                </p>
                <p>
                  Every modern business requires strong digital defenses. A security breach is not just a technical issue; it can lead to severe data leaks, operational downtime, legal penalties, and a permanent loss of customer trust. Prevention is far more cost-effective than recovery.
                </p>
                <p>
                  Common business risks include phishing schemes that target employees, malware and ransomware that lock databases, and misconfigured servers that expose private folders. Mitigating these risks requires integrating security controls at all levels, including secure hosting and code sanitation.
                </p>
                <p>
                  At Digital Sphere, we promote a security-first operational strategy. We audit code libraries, implement multi-factor authentication (MFA) checkouts, secure database APIs, and set up automated data backups to protect your digital assets and ensure business continuity.
                </p>
              </div>
            </div>
            <div className={styles.introRight}>
              <blockquote>
                <p className={styles.introQuote}>
                  "Security is not a product you buy; it is a continuous operational process of risk reduction and trust building."
                </p>
                <cite className={styles.storyAuthor}>— Team Digital Sphere</cite>
              </blockquote>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: WHY CYBER SECURITY MATTERS */}
      <section className={styles.section} aria-labelledby="benefits-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="benefits-title"
              title="Why Cyber Security Matters"
              description="A proactive security plan keeps your systems secure, builds client trust, and ensures operational continuity."
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

      {/* SECTION 4: CYBER SECURITY SERVICES WE OFFER */}
      <section className={`${styles.section} ${styles.introSection}`} aria-labelledby="services-offer-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="services-offer-title"
              title="Cyber Security Services We Offer"
              description="Explore our core security solutions designed to audit systems, reviews codes, and map protection strategies."
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
                  <span className={styles.keyOutcome}>
                    Expected: <span>{srv.outcome}</span>
                  </span>
                  <span className={styles.bizBenefit}>
                    Benefit: <span>{srv.benefit}</span>
                  </span>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 5: COMMON SECURITY THREATS */}
      <section className={styles.section} aria-labelledby="threats-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="threats-title"
              title="Common Security Threats"
              description="Understanding the most frequent threat vectors that modern digital operations face."
            />
          </div>
          <div className={styles.grid3}>
            {commonThreats.map((threat) => {
              const Icon = threat.icon
              return (
                <div className={styles.card} key={threat.title}>
                  <div className={styles.iconBox} aria-hidden="true">
                    <Icon />
                  </div>
                  <h3>{threat.title}</h3>
                  <p>{threat.description}</p>
                  <span className={styles.keyOutcome}>
                    Risk: <span>{threat.risk}</span>
                  </span>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 6: SECURITY TECHNOLOGIES & PRACTICES */}
      <section className={`${styles.section} ${styles.introSection}`} aria-labelledby="practices-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="practices-title"
              title="Technologies & Core Practices"
              description="The foundational layers we use to secure codebases, databases, and operational pipelines."
            />
          </div>
          <div className={styles.grid3}>
            {securityPractices.map((prac) => {
              const Icon = prac.icon
              return (
                <div className={styles.card} key={prac.title}>
                  <div className={styles.iconBox} aria-hidden="true">
                    <Icon />
                  </div>
                  <h3>{prac.title}</h3>
                  <p>{prac.description}</p>
                  <span className={styles.keyOutcome}>
                    Importance: <span>{prac.importance}</span>
                  </span>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 7: OUR SECURITY PROCESS */}
      <section className={styles.section} aria-labelledby="process-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="process-title"
              title="Our Security Process"
              description="A systematic audit and implementation workflow designed to harden your defenses."
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
              title="Why Choose Digital Sphere For Security"
              description="We combine engineering best practices with a focused threat reduction mindset."
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
              description="Explore starter packages. Custom plans are tailored to your environment."
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
                  <a href="#discuss-security">{pkg.ctaText}</a>
                </div>
              </div>
            ))}
          </div>
          <p className={styles.packagesNote}>
            * Every organization has unique security requirements. Recommendations and project estimates are provided after understanding your environment and goals.
          </p>
        </Container>
      </section>

      {/* SECTION 10: FAQ SECTION */}
      <section className={`${styles.section} ${styles.faqSection}`} aria-labelledby="faq-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="faq-title"
              title="Cyber Security FAQ"
              description="Common questions about threat reviews, audit frequencies, and security setups."
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
            <h2>Ready To Strengthen Your Digital Security?</h2>
            <p>
              Partner with Digital Sphere to build stronger security foundations and reduce digital risks.
            </p>
            <div className={styles.ctaActions}>
              <div className={styles.primaryBtn}>
                <a href="#discuss-security">Get A Security Consultation</a>
              </div>
              <div className={styles.secondaryBtn}>
                <Link to={ROUTES.contact}>Contact Us</Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 12: CONTACT FORM */}
      <section className={styles.section} id="discuss-security" aria-labelledby="form-heading">
        <Container>
          <div className={styles.contactLayout}>
            <div className={styles.contactFormCard}>
              <h2 id="form-heading" className={styles.contactCardTitle} style={{ marginBottom: 'var(--space-md)' }}>
                Discuss Your Security Requirements
              </h2>
              {formSubmitted ? (
                <div style={{ padding: 'var(--space-md)', background: 'rgba(6, 182, 212, 0.1)', border: '1px solid var(--color-secondary)', borderRadius: 'var(--radius-sm)', color: 'var(--color-text)' }}>
                  <strong>Thank you!</strong> Your security inquiry has been received. Our team will review and get back to you shortly.
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
                      <label htmlFor="securitySelect">Security Concerns</label>
                      <select
                        id="securitySelect"
                        name="concerns"
                        value={formData.concerns}
                        onChange={handleInputChange}
                      >
                        <option value="data-protection">Data Protection & Privacy</option>
                        <option value="website-audit">Website Security Review</option>
                        <option value="access-control">Access Control & MFA</option>
                        <option value="disaster-recovery">Disaster Recovery & Backups</option>
                        <option value="phishing-training">Awareness Phishing Training</option>
                      </select>
                    </div>
                    <div className={`${styles.formField} ${styles.formFieldFull}`}>
                      <label htmlFor="securityMessage">Project Requirements</label>
                      <textarea
                        id="securityMessage"
                        name="message"
                        placeholder="Share details about your business systems, current security concerns, and goals."
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
