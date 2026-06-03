import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import { 
  FiMail, 
  FiClock, 
  FiShield, 
  FiInfo, 
  FiLock, 
  FiAlertTriangle, 
  FiArrowRight, 
  FiCheckCircle, 
  FiBriefcase,
  FiFileText,
  FiCreditCard,
  FiTruck,
  FiKey,
  FiCpu,
  FiSlash,
  FiCompass,
  FiAlertCircle
} from 'react-icons/fi'
import styles from './TermsConditions.module.css'

export function TermsConditions() {
  useDocumentTitle('Terms & Conditions | Digital Sphere')
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
    { id: 'section-2', title: '2. Use of Website' },
    { id: 'section-3', title: '3. Services & Scoping' },
    { id: 'section-4', title: '4. Client Responsibilities' },
    { id: 'section-5', title: '5. Payment Terms' },
    { id: 'section-6', title: '6. Project Delivery' },
    { id: 'section-7', title: '7. Intellectual Property' },
    { id: 'section-8', title: '8. Confidentiality' },
    { id: 'section-9', title: '9. Third-Party Dependencies' },
    { id: 'section-10', title: '10. Limitation of Liability' },
    { id: 'section-11', title: '11. Service Modifications' },
    { id: 'section-12', title: '12. Termination Policy' },
    { id: 'section-13', title: '13. Governing Law' },
    { id: 'section-14', title: '14. Contact Information' },
    { id: 'section-15', title: '15. Agreement Declaration' }
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
      {/* HERO SECTION */}
      <header className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <FiShield size={14} style={{ marginRight: '6px' }} />
              <span>LEGAL CENTER</span>
            </div>
            <h1>Terms &amp; <span>Conditions</span></h1>
            <p className={styles.heroDescription}>
              Please read these terms carefully before using Digital Sphere services, products, or website.
              This document establishes the binding framework for all project deliverables and consultations.
            </p>
            <div className={styles.lastUpdated}>Last Updated: June 3, 2026</div>
          </div>
        </div>
      </header>

      {/* MAIN LAYOUT */}
      <div className={styles.container}>
        <div className={styles.mainLayout}>
          
          {/* INDEX SIDEBAR */}
          <nav className={styles.sidebar} aria-label="Terms and Conditions sections index">
            <h3 className={styles.sidebarTitle}>Agreement Sections</h3>
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
              <h2 id="title-section-1">1. Introduction &amp; Binding Agreement</h2>
              <p>
                Welcome to <strong>Digital Sphere</strong>. These Terms &amp; Conditions govern the relationship, rights, and legal obligations
                between Digital Sphere (referred to as "the Agency", "we", "us", or "our") and the clients, businesses, founders, startup entities,
                and website visitors (referred to as "the Client", "you", or "your") accessing our website or engaging our professional design, development,
                marketing, and security services.
              </p>
              <p>
                By accessing this website, utilizing our scoping tools, submitting project inquiry forms, or entering into a service contract with us,
                you acknowledge that you have read, understood, and agreed to be legally bound by these terms in full. If you do not accept or agree to
                the terms outlined in this agreement, you must immediately cease using this website and refrain from initiating service agreements.
              </p>
              <p>
                This document serves as the primary master services agreement framework. Specific service agreements, Statements of Work (SOWs), or project briefs
                executed between Digital Sphere and a Client may contain supplementary terms, which will override these general terms only to the extent of any explicit conflict.
              </p>

              <div className={styles.calloutCard}>
                <h3>
                  <FiInfo className={styles.calloutIcon} />
                  <span>Purpose of Agreement</span>
                </h3>
                <p>
                  These terms are structured to ensure absolute clarity regarding project scope, delivery schedules, payment structures, intellectual property ownership, and liability boundaries. We promote transparency in all client engagements.
                </p>
              </div>
            </section>

            {/* 2. USE OF WEBSITE */}
            <section id="section-2" className={styles.legalSection} aria-labelledby="title-section-2">
              <h2 id="title-section-2">2. Website Access &amp; Use Regulations</h2>
              <p>
                Digital Sphere provides this website as an information hub, service catalog, and project scoping resource. You are granted a limited,
                non-exclusive, revocable, and non-transferable license to access and use our website strictly in accordance with these terms.
              </p>
              
              <h3>A. Prohibited Usage of Site Resources</h3>
              <p>
                You agree not to engage in any activity that compromises the security, performance, or integrity of this website. Prohibited actions include:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>System Overloading:</strong> Launching Denial of Service (DoS) attacks, brute-force requests, or packet floods against our hosting servers.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Data Scraping:</strong> Using automated crawlers, spiders, or scrapers to extract site text, layout graphics, or system blog content without written authorization.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Malicious Code Injection:</strong> Uploading malware, Trojans, logic bombs, or injecting SQL, XSS, or remote shell execution scripts into contact and newsletter inputs.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Brand Impersonation:</strong> Mirroring our design patterns, framing our service pages, or claiming ownership of our glassmorphic branding elements.</span>
                </li>
              </ul>

              <h3>B. Website Access Rights</h3>
              <p>
                We reserve the right to restrict, suspend, or terminate access to any part of this website, its scoping forms, or blog systems at any time
                and without prior notice, due to system maintenance, security risks, or suspected violation of these Terms &amp; Conditions.
              </p>
            </section>

            {/* 3. SERVICES TERMS & SCOPING */}
            <section id="section-3" className={styles.legalSection} aria-labelledby="title-section-3">
              <h2 id="title-section-3">3. Custom Services &amp; Scoping Policy</h2>
              <p>
                Digital Sphere is a premium digital agency providing bespoke software development, visual design, marketing, and security operations.
                Because of the custom nature of our projects, the following rules apply to all services:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>No Fixed Online Pricing:</strong> Any budget indicators, tiers, or calculators displayed on this website are for estimation and scoping purposes only. They do not constitute binding financial offers.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Final Proposal Authority:</strong> The final cost, payment terms, and delivery milestones for any project are defined exclusively within a signed project proposal or Statement of Work (SOW).</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Scoping Consultations:</strong> Scoping consultations are required to map precise project specifications before we begin any design drafts or codebase development.</span>
                </li>
              </ul>
              
              <div className={styles.calloutCard}>
                <h3>
                  <FiBriefcase className={styles.calloutIcon} />
                  <span>Statement of Work (SOW) Requirement</span>
                </h3>
                <p>
                  Work on any client project only begins after a Statement of Work has been approved by both parties. This document lists features, frameworks, responsive targets, and milestone dates.
                </p>
              </div>
            </section>

            {/* 4. CLIENT RESPONSIBILITIES */}
            <section id="section-4" className={styles.legalSection} aria-labelledby="title-section-4">
              <h2 id="title-section-4">4. Client Responsibilities &amp; Cooperation</h2>
              <p>
                Successful project delivery relies on active cooperation and communication. When you hire Digital Sphere, you agree to fulfill the following obligations:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Correct Information:</strong> You must provide accurate, complete, and updated company info, project parameters, and technical credentials (e.g. APIs, domain registrars, hosting keys).</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Timely Feedback:</strong> You must review sprint deliverables, design systems, and software stages, providing unified feedback within the timeline specified in the SOW (typically 3 to 5 business days).</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Content Submission:</strong> You are responsible for delivering all brand assets, custom imagery, copy, database datasets, or licensed fonts required for the project, unless otherwise specified in our contract.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Asset Approvals:</strong> Design layouts or feature blocks approved during milestone check-ins are considered final. Requesting changes to approved elements after we proceed to development may cause timeline delays or additional scoping fees.</span>
                </li>
              </ul>
            </section>

            {/* 5. PAYMENT TERMS */}
            <section id="section-5" className={styles.legalSection} aria-labelledby="title-section-5">
              <h2 id="title-section-5">5. Payment Structures, Invoices &amp; Refund Policy</h2>
              <p>
                Client engagements are billed in accordance with the payment schedule agreed upon in the project contract. Our standard billing conditions include:
              </p>
              
              <h3>A. Milestone-Based Payment Structure</h3>
              <p>
                Unless stated otherwise, projects are billed in milestone installments (e.g., 40% upfront deposit, 30% after design and prototype approval,
                and 30% upon final user acceptance testing and codebase deployment). Upfront deposits are required before project kick-off.
              </p>

              <h3>B. Invoicing &amp; Delayed Payments</h3>
              <p>
                Invoices are sent electronically and are due net-7 days from the invoice date. If payment is delayed past the due date:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Work Suspension:</strong> Digital Sphere reserves the right to suspend development, design tasks, or server hosting access if payments are overdue by more than 10 days.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Interest Charges:</strong> We reserve the right to apply late fees equal to 1.5% per month on unpaid balances.</span>
                </li>
              </ul>

              <h3>C. Refund Policies</h3>
              <p>
                Payments made for completed milestones are non-refundable. Once design, prototyping, or coding sprints have commenced for a particular milestone, the client is responsible for paying that milestone in full.
              </p>

              <div className={styles.calloutCard}>
                <h3>
                  <FiCreditCard className={styles.calloutIcon} />
                  <span>No Refund Policy Details</span>
                </h3>
                <p>
                  Because we dedicate development teams and allocate design resources immediately upon milestone approval, we do not offer refunds once scoping or engineering sprints have begun.
                </p>
              </div>
            </section>

            {/* 6. PROJECT DELIVERY */}
            <section id="section-6" className={styles.legalSection} aria-labelledby="title-section-6">
              <h2 id="title-section-6">6. Project Delivery, Timelines &amp; Revisions</h2>
              <p>
                We strive to deliver projects on time, according to the schedule in the SOW. However, delivery timelines are estimates and depend on client responses and feedback.
              </p>
              
              <h3>A. Timelines and Dependencies</h3>
              <p>
                Estimated delivery dates are based on the assumption that you will submit materials and feedback in a timely manner. Delays in submitting assets,
                providing feedback, or making milestone payments will extend the project timeline accordingly.
              </p>

              <h3>B. Revision Scopes</h3>
              <p>
                Each design or development phase includes a set number of revisions (typically 2 to 3 review rounds per phase). Revision requests must be clear
                and within the scope of the original SOW. Revisions that modify approved designs or introduce new features will be treated as out-of-scope changes,
                requiring a separate estimate and statement of work.
              </p>

              <h3>C. Final Delivery &amp; Deployment</h3>
              <p>
                Final files, source code, and assets will be deployed, hosted, or transferred to your credentials only after all payments for the project have been settled in full.
              </p>
            </section>

            {/* 7. INTELLECTUAL PROPERTY */}
            <section id="section-7" className={styles.legalSection} aria-labelledby="title-section-7">
              <h2 id="title-section-7">7. Intellectual Property &amp; Ownership</h2>
              <p>
                We value intellectual property rights. Ownership of project deliverables is structured as follows:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Final Approved Deliverables:</strong> Upon receipt of final payment, ownership of all approved custom visual designs, layouts, front-end assets, and custom source code developed for your project is transferred to you in full.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Portfolio Display Rights:</strong> Digital Sphere retains the right to display design screenshots, website layouts, and project case studies in our design portfolio, marketing presentations, and site showcase listings, unless we agree to a non-disclosure agreement (NDA).</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Rejected Concepts and Drafts:</strong> Visual concepts, layout drafts, wireframes, and alternative logos created during design sprints but rejected by the client remain the property of Digital Sphere. You may not use, replicate, or share rejected design layouts.</span>
                </li>
              </ul>
            </section>

            {/* 8. CONFIDENTIALITY */}
            <section id="section-8" className={styles.legalSection} aria-labelledby="title-section-8">
              <h2 id="title-section-8">8. Confidentiality &amp; Non-Disclosure</h2>
              <p>
                We protect your business secrets. Digital Sphere and the Client agree to treat all business plans, product lists, user details, source codes,
                and financial information shared during project discovery and development as confidential.
              </p>
              <p>
                We agree not to disclose or share your confidential information with any third party without your consent. We restrict access to project files
                to developers, designer specialists, and engineers (such as Huraira, Muzammil, or Faizan) who are directly assigned to your scoping and development tasks.
              </p>
              
              <div className={styles.calloutCard}>
                <h3>
                  <FiLock className={styles.calloutIcon} />
                  <span>Confidentiality Pledge</span>
                </h3>
                <p>
                  All project briefs, client data, database configurations, and proprietary system logic are kept secure. We sign NDAs upon request for enterprise-tier projects.
                </p>
              </div>
            </section>

            {/* 9. THIRD-PARTY DEPENDENCIES */}
            <section id="section-9" className={styles.legalSection} aria-labelledby="title-section-9">
              <h2 id="title-section-9">9. Third-Party Tools, APIs &amp; Integrations</h2>
              <p>
                Modern web applications rely on external tools and APIs. Digital Sphere may integrate third-party services, including payment gateways, mapping tools, email APIs, and cloud hosting (e.g. Vercel, Netlify, SendGrid, Firebase).
              </p>
              <p>
                Please note:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Licensing Fees:</strong> The client is responsible for paying all licensing, subscription, domain renewal, API, and cloud hosting fees required for their application.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>API Stability:</strong> Digital Sphere is not responsible for errors or disruptions caused by updates, outages, or modifications to third-party services or APIs.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Security Vulnerabilities:</strong> We use safe, updated packages and dependencies. However, we are not responsible for vulnerabilities that arise within third-party packages or libraries after project handoff.</span>
                </li>
              </ul>
            </section>

            {/* 10. LIMITATION OF LIABILITY */}
            <section id="section-10" className={styles.legalSection} aria-labelledby="title-section-10">
              <h2 id="title-section-10">10. Limitation of Liability &amp; Warranty Exclusions</h2>
              <p>
                We provide our services on an "as-is" and "as-available" basis, without any warranties, express or implied, including warranties of merchantability,
                fitness for a particular purpose, or non-infringement.
              </p>
              <p>
                Digital Sphere does not guarantee that the services, design systems, codebases, or marketing strategies we deliver will generate specific revenue,
                business growth, search engine rankings, or customer conversions.
              </p>
              <p>
                In no event will Digital Sphere, its directors, developers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages,
                including loss of profits, data loss, business interruption, or system downtime, even if we were advised of the possibility of such damages.
              </p>
              
              <div className={styles.calloutCard}>
                <h3>
                  <FiAlertTriangle className={styles.calloutIcon} />
                  <span>Technical Risks Notice</span>
                </h3>
                <p>
                  While we follow industry standards for security, performance, and SEO optimization, the Client assumes all risks associated with live system deployment, server configuration, and traffic changes.
                </p>
              </div>
            </section>

            {/* 11. SERVICE MODIFICATIONS */}
            <section id="section-11" className={styles.legalSection} aria-labelledby="title-section-11">
              <h2 id="title-section-11">11. Service &amp; Terms Modifications</h2>
              <p>
                Digital Sphere reserves the right to modify, update, or discontinue any of the services, pricing structures, or page layouts featured on this website at any time without notice.
              </p>
              <p>
                We may also revise these Terms &amp; Conditions to reflect changes in our workflows, technological updates, or legal compliance mandates.
                When changes are made, we will update the "Last Updated" date at the top of this page. Your continued use of our website or services after updates are published constitutes your acceptance of the revised terms.
              </p>
            </section>

            {/* 12. TERMINATION POLICY */}
            <section id="section-12" className={styles.legalSection} aria-labelledby="title-section-12">
              <h2 id="title-section-12">12. Termination &amp; Cancellation Policy</h2>
              <p>
                Service agreements may be terminated by either party under the following conditions:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Termination for Convenience:</strong> You may cancel a project at any time by giving us 14 days' written notice. Upon cancellation, you must pay in full for all work completed up to the date of notice.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Termination for Cause:</strong> Either party may terminate the agreement immediately if the other party breaches these terms and fails to resolve the breach within 15 days of receiving written notice.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Non-Cooperation Termination:</strong> If a client stops communicating or fails to provide feedback for more than 30 consecutive days, Digital Sphere reserves the right to terminate the project, retain all payments, and invoice for any work completed but unpaid.</span>
                </li>
              </ul>
            </section>

            {/* 13. GOVERNING LAW */}
            <section id="section-13" className={styles.legalSection} aria-labelledby="title-section-13">
              <h2 id="title-section-13">13. Governing Law &amp; Dispute Resolution</h2>
              <p>
                These Terms &amp; Conditions are governed by and construed in accordance with the laws of Pakistan, without regard to conflict of law principles.
              </p>
              <p>
                Any dispute, claim, or controversy arising out of or relating to these terms or our services will be resolved through amicable negotiation.
                If negotiation fails, the dispute will be submitted to the exclusive jurisdiction of the competent courts located in Islamabad, Pakistan.
              </p>
            </section>

            {/* 14. CONTACT INFORMATION */}
            <section id="section-14" className={styles.legalSection} aria-labelledby="title-section-14">
              <h2 id="title-section-14">14. Contact Information</h2>
              <p>
                If you have questions, concerns, or requests regarding these Terms &amp; Conditions, please contact our team.
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

            {/* 15. AGREEMENT DECLARATION */}
            <section id="section-15" className={styles.legalSection} aria-labelledby="title-section-15">
              <h2 id="title-section-15">15. Final Agreement &amp; Note</h2>
              <p>
                By using the Digital Sphere website, scheduling consultations, submitting project scoping requests, or entering into service contracts,
                you agree to these Terms &amp; Conditions in full.
              </p>
              <p>
                These terms constitute the complete agreement between you and Digital Sphere regarding the use of our website and services,
                superseding any prior written or oral agreements or communications.
              </p>
            </section>

          </main>
        </div>
      </div>

      {/* FINAL CTA SECTION */}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <h2>Ready to Scale Your Digital Presence?</h2>
            <p>
              Our teams are ready to map out your digital requirements and build custom, scalable solutions.
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
