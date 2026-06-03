import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import { 
  FiMail, 
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
  FiCpu,
  FiSlash,
  FiRefreshCw
} from 'react-icons/fi'
import styles from './RefundPolicy.module.css'

export function RefundPolicy() {
  useDocumentTitle('Refund Policy | Digital Sphere')
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
    { id: 'section-2', title: '2. General Refund Rules' },
    { id: 'section-3', title: '3. Prior to Project Start' },
    { id: 'section-4', title: '4. After Project Kick-Off' },
    { id: 'section-5', title: '5. Milestone Agreements' },
    { id: 'section-6', title: '6. Digital Deliverables' },
    { id: 'section-7', title: '7. Cancellation Procedure' },
    { id: 'section-8', title: '8. Non-Refundable Cases' },
    { id: 'section-9', title: '9. Step-by-Step Process' },
    { id: 'section-10', title: '10. Dispute Resolution' },
    { id: 'section-11', title: '11. Changes to Policy' },
    { id: 'section-12', title: '12. Contact Information' },
    { id: 'section-13', title: '13. Final Declaration' }
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
            <h1>Refund <span>Policy</span></h1>
            <p className={styles.heroDescription}>
              We believe in transparency, fairness, and trust. This policy explains how refund requests,
              project cancellations, and billing milestones are handled at Digital Sphere.
            </p>
            <div className={styles.lastUpdated}>Last Updated: June 3, 2026</div>
          </div>
        </div>
      </header>

      {/* MAIN LAYOUT */}
      <div className={styles.container}>
        <div className={styles.mainLayout}>
          
          {/* INDEX SIDEBAR */}
          <nav className={styles.sidebar} aria-label="Refund Policy sections index">
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
              <h2 id="title-section-1">1. Introduction &amp; Core Philosophy</h2>
              <p>
                At <strong>Digital Sphere</strong>, our client relationships are built on the foundations of trust, visual excellence, and technical precision.
                As a premium service-based digital agency specializing in custom UI/UX design, modular web and mobile applications, digital marketing, and cybersecurity,
                our work is tailored to the specific needs of each partner startup or corporate enterprise.
              </p>
              <p>
                Unlike standard off-the-shelf software or automated digital products, our deliverables require manual creative planning, custom code engineering,
                and dedicated developer resources (led by our core experts Huraira Qureshi, Muzammil, and Faizan). Consequently, we operate under a service-based
                billing framework. The purpose of this Refund Policy is to outline the specific, fair guidelines that govern financial transactions, service refunds,
                milestone payments, and project cancellations.
              </p>
              <p>
                We highly recommend completing our extensive scoping consultation and discovery call before initiating payments. This ensures our team aligns
                precisely with your visual preferences, functional requirements, technical frameworks, and expectations.
              </p>

              <div className={styles.calloutCard}>
                <h3>
                  <FiInfo className={styles.calloutIcon} />
                  <span>Fairness Guarantee</span>
                </h3>
                <p>
                  We aim to maintain absolute transparency. While custom design and codebase developments are non-refundable once executed, we offer flexible revision cycles and upfront cancellation buffers to ensure you only pay for value received.
                </p>
              </div>
            </section>

            {/* 2. GENERAL REFUND RULES */}
            <section id="section-2" className={styles.legalSection} aria-labelledby="title-section-2">
              <h2 id="title-section-2">2. General Service Refund Rules</h2>
              <p>
                Before entering into a Statement of Work (SOW) or paying project deposits, please review our general financial rules:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Bespoke Nature of Work:</strong> Because all deliverables (from React interfaces to backend APIs and brand identity files) are custom-created to your specifications, they cannot be resold or reused for other clients.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Milestone Eligibility:</strong> Refund eligibility is determined strictly by the stage of the project and the work completed, as outlined in the sections below.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Upfront Consultation:</strong> Prior to project kick-off, we hold discovery sessions to align on scope. Payment of the initial deposit indicates your acceptance of the project brief, scoping parameters, and these refund guidelines.</span>
                </li>
              </ul>
            </section>

            {/* 3. BEFORE PROJECT STARTS */}
            <section id="section-3" className={styles.legalSection} aria-labelledby="title-section-3">
              <h2 id="title-section-3">3. Cancellations Prior to Project Kick-Off</h2>
              <p>
                We understand that business priorities can change. If you choose to cancel a project before our design or development teams begin work,
                you are eligible for a refund under the following conditions:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Full Refund Conditions:</strong> You are eligible for a full refund of your deposit if you submit a written cancellation request within 5 business days of making the payment, provided we have not started scoping, wireframing, or setup tasks.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Administrative Deductions:</strong> If cancellation occurs after 5 business days, or if we have already set up staging environments, domain assets, or developer allocations, we will deduct a 10% administrative and processing fee from the refund.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Exclusion:</strong> If a project is scheduled to begin immediately (within 48 hours of payment), the cancellation request must be received at least 24 hours before the scheduled kick-off meeting.</span>
                </li>
              </ul>
            </section>

            {/* 4. AFTER PROJECT KICK-OFF */}
            <section id="section-4" className={styles.legalSection} aria-labelledby="title-section-4">
              <h2 id="title-section-4">4. Cancellations After Work Commences</h2>
              <p>
                Once project planning, visual design, or code development has started, full refunds are no longer available. This is because we allocate
                development resources, establish staging servers, and begin drafting UI/UX wireframes immediately upon project kick-off.
              </p>
              <p>
                In the event of a project halt or cancellation after work has commenced, refunds are handled as follows:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Non-Refundable Active Milestones:</strong> Any milestone that is currently in progress or has been completed is non-refundable. Work hours already spent by our designers and developers will be calculated and billed.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Partial Milestone Refunds:</strong> If you halt a project mid-milestone, we will evaluate the proportion of work completed. If the work done is less than the milestone payment, we may issue a partial refund for the unearned portion, subject to a 15% cancellation fee.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Retention of Deliverables:</strong> In the event of a cancellation mid-project, all designs, layouts, wireframes, and code developed during the cancelled phase remain the property of Digital Sphere. You are not authorized to use or distribute these draft materials.</span>
                </li>
              </ul>

              <div className={styles.calloutCard}>
                <h3>
                  <FiAlertTriangle className={styles.calloutIcon} />
                  <span>Work Commencement Rules</span>
                </h3>
                <p>
                  Work is deemed to have commenced when any of the following occur: the kick-off meeting is held, the project Slack channel/repository is created, or the first design wireframe/code file is drafted.
                </p>
              </div>
            </section>

            {/* 5. MILESTONE AGREEMENTS */}
            <section id="section-5" className={styles.legalSection} aria-labelledby="title-section-5">
              <h2 id="title-section-5">5. Milestone-Based Project Structures</h2>
              <p>
                To minimize financial risk for both parties, Digital Sphere structures larger engagements into distinct project milestones.
                Typical phases include Discovery &amp; Wireframes, UI/UX Design System, Frontend Development, Backend API Integration, and User Acceptance Testing (UAT).
              </p>
              <p>
                Under a milestone agreement:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Independent Billing:</strong> Each milestone is treated as an independent contract phase with its own deliverables and payments.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Completed Milestones:</strong> Once a milestone deliverable is approved by the client, the corresponding payment is final and non-refundable.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Refunds for Unused Milestones:</strong> If the project is terminated mid-way, any advance payments made for future, unstarted milestones will be refunded in full, with no administrative deductions.</span>
                </li>
              </ul>
            </section>

            {/* 6. DIGITAL DELIVERABLES */}
            <section id="section-6" className={styles.legalSection} aria-labelledby="title-section-6">
              <h2 id="title-section-6">6. Digital Handoff &amp; Deliverables</h2>
              <p>
                Once a website code repository, visual assets package, database file, or final application build is handed over, deployed to your hosting servers,
                or transferred to your credentials, the project is considered fully delivered.
              </p>
              <p>
                <strong>No refunds are issued after final handoff.</strong>
              </p>
              <p>
                To protect client interests, we address post-delivery concerns through the following mechanisms:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Revision Policy:</strong> Each project phase includes designated feedback loops. We adjust layouts, styles, and functionalities to ensure the final deliverable matches the approved specifications.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Warranty Support Phase:</strong> We provide a 30-day warranty support phase after deployment (for Growth and Enterprise tiers) to fix bugs, resolve layout issues, and ensure system stability.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Client Review Duty:</strong> You are responsible for thoroughly testing the application in our staging environment before approving final deployment and handoff.</span>
                </li>
              </ul>
            </section>

            {/* 7. CANCELLATION PROCEDURE */}
            <section id="section-7" className={styles.legalSection} aria-labelledby="title-section-7">
              <h2 id="title-section-7">7. Service Cancellation Procedure</h2>
              <p>
                If you need to cancel a project, you must follow our official cancellation process to ensure a clear paper trail:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Written Request:</strong> Submit a cancellation request via email to <a href="mailto:contact@digitalsphere.com">contact@digitalsphere.com</a> with the subject line "Project Cancellation Request — [Your Company Name]".</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Details Required:</strong> Explain the reason for cancellation, list the project name, and specify the milestones completed or pending.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Confirmation Window:</strong> Our team will review the request and respond with a confirmation email within 3 business days, listing the work completed, billing details, and any eligible refund amounts.</span>
                </li>
              </ul>
            </section>

            {/* 8. NON-REFUNDABLE CASES */}
            <section id="section-8" className={styles.legalSection} aria-labelledby="title-section-8">
              <h2 id="title-section-8">8. Non-Refundable Scenarios</h2>
              <p>
                To protect our operations and resources, refunds will not be issued in the following scenarios:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Approved Layouts &amp; Systems:</strong> Design screens, wireframes, and frontend mockups that were formally approved by the client during milestone reviews.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Client-Induced Delays:</strong> If a project timeline is extended or compromised due to client delays in providing content, assets, API keys, or feedback.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Third-Party Expenses:</strong> Any payments made to third-party services, including web hosting, domain registration, premium stock media licenses, or API subscription fees. These fees are paid directly to external vendors and cannot be recovered.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Marketing Campaigns:</strong> Expenses related to active digital marketing campaigns, Google Ads, or social media promotions. Once ad networks consume the budget, it cannot be refunded.</span>
                </li>
              </ul>
            </section>

            {/* 9. STEP-BY-STEP PROCESS */}
            <section id="section-9" className={styles.legalSection} aria-labelledby="title-section-9">
              <h2 id="title-section-9">9. Refund Request &amp; Review Process</h2>
              <p>
                If you believe you are eligible for a refund under this policy, please follow our review process:
              </p>
              
              <div className={styles.calloutCard}>
                <h3>
                  <FiCreditCard className={styles.calloutIcon} />
                  <span>Refund Review Timeline</span>
                </h3>
                <p>
                  <strong>Step 1: Submission.</strong> Email your refund request to our billing department at <a href="mailto:contact@digitalsphere.com">contact@digitalsphere.com</a>.<br />
                  <strong>Step 2: Audit.</strong> Our project managers audit the tracking files, time logs, and deliverables for the active milestone. This audit takes 5 to 7 business days.<br />
                  <strong>Step 3: Determination.</strong> We will send you a written determination detailing approval or rejection, along with audit metrics.<br />
                  <strong>Step 4: Payout.</strong> Approved refunds are processed within 10 business days, returned to the original payment method (bank wire or card channel).
                </p>
              </div>
            </section>

            {/* 10. DISPUTE RESOLUTION */}
            <section id="section-10" className={styles.legalSection} aria-labelledby="title-section-10">
              <h2 id="title-section-10">10. Dispute Resolution Guidelines</h2>
              <p>
                We believe most issues can be resolved through open, constructive communication. If a dispute arises regarding a refund or project invoice:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Amicable Negotiation:</strong> Both parties agree to participate in a negotiation call to discuss the dispute and seek a mutually agreeable resolution.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Response Window:</strong> We will review and respond to formal dispute notices within 10 business days of receipt.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bullet}>&bull;</span>
                  <span><strong>Legal Jurisdiction:</strong> If negotiation fails, disputes will be governed by the laws of Pakistan and resolved in Islamabad, as detailed in our Master Terms &amp; Conditions.</span>
                </li>
              </ul>
            </section>

            {/* 11. CHANGES TO POLICY */}
            <section id="section-11" className={styles.legalSection} aria-labelledby="title-section-11">
              <h2 id="title-section-11">11. Policy Updates &amp; Modifications</h2>
              <p>
                Digital Sphere reserves the right to update this Refund Policy at any time without notice, to reflect changes in our payment systems,
                service offerings, or legal requirements.
              </p>
              <p>
                Updates will be posted directly to this page, and the "Last Updated" date at the top will be revised. We recommend reviewing this policy
                periodically to stay informed about our billing and refund guidelines.
              </p>
            </section>

            {/* 12. CONTACT INFORMATION */}
            <section id="section-12" className={styles.legalSection} aria-labelledby="title-section-12">
              <h2 id="title-section-12">12. Contact Information</h2>
              <p>
                If you have questions, concerns, or requests regarding this Refund Policy, or want to submit a refund request, please contact our team.
              </p>
              
              <div className={styles.contactGrid}>
                <a href="mailto:contact@digitalsphere.com" className={styles.contactCard}>
                  <div className={styles.contactIcon}>
                    <FiMail />
                  </div>
                  <div className={styles.contactDetails}>
                    <h4>Billing Support</h4>
                    <p>contact@digitalsphere.com</p>
                  </div>
                </a>

                <Link to="/contact" className={styles.contactCard}>
                  <div className={styles.contactIcon}>
                    <FiFileText />
                  </div>
                  <div className={styles.contactDetails}>
                    <h4>Contact Portal</h4>
                    <p>Contact Form Reference</p>
                  </div>
                </Link>
              </div>
            </section>

            {/* 13. FINAL DECLARATION */}
            <section id="section-13" className={styles.legalSection} aria-labelledby="title-section-13">
              <h2 id="title-section-13">13. Final Declaration</h2>
              <p>
                We aim to maintain fairness, transparency, and trust in every project we deliver. By partnering with Digital Sphere, entering into a service agreement,
                or paying a project deposit, you acknowledge and agree to the terms of this Refund Policy in full.
              </p>
            </section>

          </main>
        </div>
      </div>

      {/* FINAL CTA SECTION */}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <h2>Ready to Map Your Next Scoping Step?</h2>
            <p>
              Our specialists are ready to help you define requirements and establish clear milestones.
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
