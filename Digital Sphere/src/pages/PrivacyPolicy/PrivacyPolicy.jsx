import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import { FiMail, FiShield, FiLock, FiAlertTriangle, FiFileText } from 'react-icons/fi'
import styles from './PrivacyPolicy.module.css'
export function PrivacyPolicy() {
  useDocumentTitle('Privacy Policy | Digital Sphere')
  const [activeSection, setActiveSection] = useState('section-1')
  // Setup scroll observer to dynamically highlight current reading section in sidebar
  useEffect(() => {
    const sections = document.querySelectorAll(`.${styles.legalSection}`)
    const options = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Trigger when section occupies the upper-middle viewport
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, options)

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const sectionsList = [
    { id: 'section-1', title: '1. Introduction' },
    { id: 'section-2', title: '2. Information We Collect' },
    { id: 'section-3', title: '3. How We Use Information' },
    { id: 'section-4', title: '4. Data Protection &amp; Security' },
    { id: 'section-5', title: '5. Data Sharing Policy' },
    { id: 'section-6', title: '6. Cookies &amp; Tracking' },
    { id: 'section-7', title: '7. Third-Party Services' },
    { id: 'section-8', title: '8. User Rights &amp; Choices' },
    { id: 'section-9', title: '9. Data Retention' },
    { id: 'section-10', title: "10. Children's Privacy" },
    { id: 'section-11', title: '11. Changes to This Policy' },
    { id: 'section-12', title: '12. Contact Information' }
  ]

  const handleIndexClick = (e, id) => {
    e.preventDefault()
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(id)
    }
  }

  return (
    <div className={styles.page}>
      {/* SECTION 1 - HERO */}
      <header className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <FiShield size={14} style={{ marginRight: '6px' }} />
              <span>LEGAL CENTER</span>
            </div>
            <h1>Digital Sphere <span>Privacy Policy</span></h1>
            <p className={styles.heroDescription}>
              Your privacy and digital security are fundamental to our partnership. This policy explains
              how we collect, protect, and manage your personal and project information.
            </p>
            <div className={styles.lastUpdated}>Last Updated: June 3, 2026</div>
          </div>
        </div>
      </header>

      {/* MAIN LAYOUT */}
      <div className={styles.container}>
        <div className={styles.mainLayout}>
          
          {/* INDEX SIDEBAR */}
          <nav className={styles.sidebar} aria-label="Privacy Policy sections index">
            <h3 className={styles.sidebarTitle}>Policy Sections</h3>
            <ul className={styles.indexList}>
              {sectionsList.map((sec) => (
                <li key={sec.id}>
                  <a 
                    href={`#${sec.id}`}
                    className={`${styles.indexLink} ${activeSection === sec.id ? styles.indexLinkActive : ''}`}
                    onClick={(e) => handleIndexClick(e, sec.id)}
                  >
                    {sec.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* POLICY CONTENT BLOCKS */}
          <main className={styles.contentBlock}>
            
            {/* 1. INTRODUCTION */}
            <section id="section-1" className={styles.legalSection} aria-labelledby="title-section-1">
              <h2 id="title-section-1">Introduction &amp; Scope</h2>
              <p>
                At <strong>Digital Sphere</strong>, transparency, trust, and security are not just parameters of software development; they are
                the core values that govern our client relationships. We are committed to protecting the personal data, proprietary business requirements,
                and digital assets of our partners, website visitors, and service users. This Privacy Policy details the types of information we gather
                when you visit our web application, submit project inquiries, download creative assets, or engage our development, design, marketing, and security services.
              </p>
              <p>
                This policy applies universally to all visitors, startup founders, corporate representatives, and independent clients who interact with
                the Digital Sphere digital ecosystem. By using our website, initiating contact through our inquiry channels, or utilizing our scoping utilities,
                you acknowledge and agree to the data collection and usage practices described in this document. We align our data operations with global data
                privacy directives, including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
              </p>
              
              <div className={styles.calloutCard}>
                <h3>
                  <FiLock className={styles.calloutIcon} />
                  <span>Privacy Pledge</span>
                </h3>
                <p>
                  Digital Sphere will never sell, lease, or distribute your proprietary project metrics, code ideas, or personal contact info to third-party ad networks or brokers. All data submitted remains securely isolated.
                </p>
              </div>
            </section>

            {/* 2. INFORMATION WE COLLECT */}
            <section id="section-2" className={styles.legalSection} aria-labelledby="title-section-2">
              <h2 id="title-section-2">Information We Collect</h2>
              <p>
                To provide premium digital development and design services, we collect information that falls into three general categories:
                information you provide directly to us, information collected automatically through page usage, and data gathered during project discovery.
              </p>
              
              <h3>A. Personal Information You Provide</h3>
              <p>
                When you contact us, request a proposal, or schedule a scoping consultation, we collect data that can identify you individually. This includes:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Identification Details:</strong> Your full name, job title, and company name.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Contact Information:</strong> Your primary email address, phone number, and physical office addresses.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Communications:</strong> The transcripts, emails, message inputs, and project brief descriptions you provide during discovery.</span>
                </li>
              </ul>

              <h3>B. Project Inquiry &amp; Strategic Data</h3>
              <p>
                During the onboarding phase, we collect specific parameters to analyze and scope your development requests:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Technical Requirements:</strong> Intended tech stacks, features checklists, mobile layouts, or design system assets.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Scope Parameters:</strong> Selected project budget tiers (Startup, Growth, Enterprise) and timeline expectations.</span>
                </li>
              </ul>

              <h3>C. Technical &amp; Usage Data Collected Automatically</h3>
              <p>
                As you navigate our website, our server logs and analytics trackers automatically collect metadata regarding your session:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Device Metadata:</strong> Your browser type, operating system (e.g. Windows, macOS, iOS), screen resolution, and language settings.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Network Parameters:</strong> Your IP address, geographic location indicators, Internet Service Provider (ISP), and referral URLs.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Interaction Logs:</strong> Click pathways, session durations, exit links, scroll depths, and navigation tracks across our service detail cards.</span>
                </li>
              </ul>
            </section>

            {/* 3. HOW WE USE INFORMATION */}
            <section id="section-3" className={styles.legalSection} aria-labelledby="title-section-3">
              <h2 id="title-section-3">How We Use Your Information</h2>
              <p>
                The information we collect is used strictly to support our business operations, deliver custom digital solutions, communicate scoping plans,
                and maintain the performance and security of our web application. Specifically, we use your data for the following purposes:
              </p>
              
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Responding to Inquiries:</strong> Processing your contact forms, calculating budget estimates, and scheduling discovery calls with our specialists.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Service Delivery:</strong> Planning UI/UX mockups, codebases, app deployments, and marketing strategies custom-scraped to your specifications.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Communications:</strong> Sending project sprint updates, technical security bulletins, contract notifications, and occasional digital newsletters (if opted-in).</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Website Improvement:</strong> Analyzing visitor demographics and interactions to optimize load times, resolve UI layout bugs, and improve page accessibility.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Security &amp; Abuse Prevention:</strong> Monitoring server access logs to detect cyber threats, block spam, prevent SQL injections, and protect database integrity.</span>
                </li>
              </ul>
            </section>

            {/* 4. DATA PROTECTION & SECURITY */}
            <section id="section-4" className={styles.legalSection} aria-labelledby="title-section-4">
              <h2 id="title-section-4">Data Protection &amp; Security</h2>
              <p>
                Digital Sphere treats security as a fundamental requirement rather than an afterthought. We implement multi-layered technical, administrative,
                and physical safeguards to protect your personal and project information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p>
                Our core security protocols include:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Encryption Standards:</strong> All data transmitted to our website is protected using industry-standard Transport Layer Security (TLS) and HTTPS encryption protocols.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Access Isolation:</strong> Access to client metadata is strictly limited using Identity &amp; Access Management (IAM) controls. Only authorized development specialists (such as Huraira, Muzammil, or Faizan) are granted credentials to access project databases.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Safe Storage:</strong> Database files are housed in secure, firewalled cloud environments with automated backups, intrusion logs, and regular vulnerability checks.</span>
                </li>
              </ul>
              
              <div className={styles.calloutCard}>
                <h3>
                  <FiLock className={styles.calloutIcon} />
                  <span>Zero-Trust Infrastructure</span>
                </h3>
                <p>
                  We operate under a Zero-Trust security layout. All connections are validated, database inputs are sanitized, and communication channels are monitored to detect anomalies.
                </p>
              </div>
            </section>

            {/* 5. DATA SHARING POLICY */}
            <section id="section-5" className={styles.legalSection} aria-labelledby="title-section-5">
              <h2 id="title-section-5">Data Sharing Policy</h2>
              <p>
                We maintain a strict stance on data ownership: <strong>we do not sell, rent, trade, or share your personal information</strong> with third-party marketing networks, advertising agencies, or email brokers. Your data is shared only in the following limited scenarios:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Essential Service Providers:</strong> We share necessary details with trusted hosting platforms, database servers, and mail delivery APIs (e.g. Vercel, SendGrid) to run our platform and communicate.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Legal Enforcement:</strong> If required by law, subpoena, or government authority, we may disclose information to protect our legal rights, address fraud, or prevent security threats.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Business Growth:</strong> If Digital Sphere undergoes a merger, acquisition, or restructuring, client data assets may be transferred to the successor entity under strict privacy covenants.</span>
                </li>
              </ul>
            </section>

            {/* 6. COOKIES & TRACKING */}
            <section id="section-6" className={styles.legalSection} aria-labelledby="title-section-6">
              <h2 id="title-section-6">Cookies &amp; Tracking Technologies</h2>
              <p>
                Like most modern websites, the Digital Sphere platform uses cookies and similar tracking tools to collect usage data and improve your navigation experience.
                A cookie is a small text file stored on your browser or device memory when you visit web pages.
              </p>
              <p>
                We use cookies to:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Verify Session States:</strong> Keeping you logged in, protecting contact forms from cross-site request forgery (CSRF), and managing navigation history.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Remember Choices:</strong> Preserving preferences, such as selected layout modes, form inputs, and accordion states.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Track Performance:</strong> Analyzing anonymous user paths to evaluate loading speeds, bounce rates, and service button click ratios.</span>
                </li>
              </ul>
              <p>
                You can configure your browser to block cookies, clear history, or warn you when cookies are sent. However, if you disable cookies, some sections
                of our website (like contact choice selectors or persistent preferences) may not function properly.
              </p>
            </section>

            {/* 7. THIRD-PARTY SERVICES */}
            <section id="section-7" className={styles.legalSection} aria-labelledby="title-section-7">
              <h2 id="title-section-7">Third-Party Services</h2>
              <p>
                Our digital solutions connect with third-party software applications, hosting servers, and integration modules. These external platforms
                are governed by their own privacy terms, and Digital Sphere is not responsible for their data collection practices.
              </p>
              <p>
                Common third-party tools we integrate include:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Hosting &amp; Edge Networks:</strong> Vite dev environments and Vercel/Netlify hosting, which log system parameters and server analytics.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Google Analytics:</strong> Gathering anonymous statistics about site usage to improve our visual and technical performance.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Project APIs:</strong> Tools like Figma, Slack, or GitHub repositories, used during client scoping and code delivery tasks.</span>
                </li>
              </ul>
            </section>

            {/* 8. USER RIGHTS & CHOICES */}
            <section id="section-8" className={styles.legalSection} aria-labelledby="title-section-8">
              <h2 id="title-section-8">User Rights &amp; Choices</h2>
              <p>
                Regardless of your geographic location, we respect your rights regarding your personal information. Under privacy frameworks like GDPR and CCPA,
                you are entitled to the following rights:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Right of Access:</strong> You can request a summary of the personal and project information we store about you.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Right to Erasure:</strong> You can request that we delete all your personal data, subject to legal or financial record retention requirements.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Right to Correction:</strong> You can request updates to inaccurate or incomplete personal contact details.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Right to Object:</strong> You can withdraw consent or opt-out of marketing communications by clicking "unsubscribe" or emailing our team.</span>
                </li>
              </ul>
              <p>
                To exercise any of these rights, please email us at <a href="mailto:contact@digitalsphere.com">contact@digitalsphere.com</a>. We will process your request within 30 days of validation.
              </p>
            </section>

            {/* 9. DATA RETENTION */}
            <section id="section-9" className={styles.legalSection} aria-labelledby="title-section-9">
              <h2 id="title-section-9">Data Retention</h2>
              <p>
                We retain your personal and project information only as long as necessary to fulfill the purposes outlined in this policy, provide our services,
                resolve disputes, and comply with legal, accounting, or regulatory requirements.
              </p>
              <p>
                Our standard retention timelines are:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Inquiry Data:</strong> Personal details and message texts submitted via contact forms are kept for 12 months for follow-up coordination.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Active Client Data:</strong> Project parameters, brief files, and contracts are kept for the duration of the active contract, plus 7 years for financial records.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Session Logs:</strong> Server interactions and analytics logs are kept for 90 days before deletion.</span>
                </li>
              </ul>
            </section>

            {/* 10. CHILDREN'S PRIVACY */}
            <section id="section-10" className={styles.legalSection} aria-labelledby="title-section-10">
              <h2 id="title-section-10">Children's Privacy</h2>
              <p>
                The Digital Sphere website and services are designed for corporate clients, business owners, and adult professionals. We do not intentionally
                or knowingly collect, request, or maintain personal information from children under the age of 13.
              </p>
              
              <div className={styles.calloutCard}>
                <h3>
                  <FiAlertTriangle className={styles.calloutIcon} />
                  <span>Children's Privacy Notice</span>
                </h3>
                <p>
                  In compliance with the Children\'s Online Privacy Protection Act (COPPA), if we discover that a user under 13 has submitted personal information, we will delete it immediately from our servers.
                </p>
              </div>
            </section>

            {/* 11. CHANGES TO THIS POLICY */}
            <section id="section-11" className={styles.legalSection} aria-labelledby="title-section-11">
              <h2 id="title-section-11">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our security standards, development tools, or legal requirements. When updates are published, we will revise the "Last Updated" date at the top of this page.
              </p>
              <p>
                For significant changes that affect your privacy rights, we will notify you by posting a prominent alert on our website homepage or emailing you directly. We recommend reviewing this policy regularly to stay informed about how we protect your information.
              </p>
            </section>

            {/* 12. CONTACT INFORMATION */}
            <section id="section-12" className={styles.legalSection} aria-labelledby="title-section-12">
              <h2 id="title-section-12">Contact Information</h2>
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy, or want to exercise your data choices, please contact our team.
              </p>
              
              <div className={styles.contactGrid}>
                <a href="mailto:contact@digitalsphere.com" className={styles.contactCard}>
                  <div className={styles.contactIcon}>
                    <FiMail />
                  </div>
                  <div className={styles.contactDetails}>
                    <h4>Email Us</h4>
                    <p>contact@digitalsphere.com</p>
                  </div>
                </a>

                <Link to="/contact" className={styles.contactCard}>
                  <div className={styles.contactIcon}>
                    <FiFileText />
                  </div>
                  <div className={styles.contactDetails}>
                    <h4>Support Portal</h4>
                    <p>Contact Form Reference</p>
                  </div>
                </Link>
              </div>
            </section>

          </main>
        </div>
      </div>

      {/* SECTION 14 - FINAL CTA SECTION */}
      <section className={`reveal-trigger ${styles.finalCta}`}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <h2>Your Trust Matters To Us</h2>
            <p>
              At Digital Sphere, we are committed to protecting your privacy while delivering 
              high-quality digital solutions that support your long-term growth.
            </p>
            <div className={styles.ctaActions}>
              <Link to="/contact" className={styles.primaryBtn}>
                Request Proposal
              </Link>
              <Link to="/services" className={styles.secondaryBtn}>
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
