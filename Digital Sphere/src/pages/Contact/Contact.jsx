import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import { FiMail, FiPhone, FiClock, FiZap, FiShield, FiSmartphone, FiCode, FiFeather, FiTrendingUp, FiCompass, FiChevronDown, FiChevronUp, FiUsers, FiLayers, FiMessageSquare, FiSend, FiAward, FiCheckCircle, FiCpu, FiArrowRight } from 'react-icons/fi'
import { CopyToClipboard } from '../../components/common/CopyToClipboard'
import styles from './Contact.module.css'

export function Contact() {
  useDocumentTitle('Contact | Digital Sphere')

  // Form states
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [service, setService] = useState('')
  const [budget, setBudget] = useState('Startup Project')
  const [timeline, setTimeline] = useState('ASAP')
  const [message, setMessage] = useState('')
  const [agreed, setAgreed] = useState(false)
  
  // Validation & UI states
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  // Refs for focus management
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const serviceRef = useRef(null)
  const messageRef = useRef(null)

  // Validation Logic
  const validateField = (fieldName, value) => {
    let error = ''
    switch (fieldName) {
      case 'name':
        if (!value.trim()) error = 'Name is required'
        else if (value.trim().length < 2) error = 'Name is too short'
        break
      case 'email':
        if (!value.trim()) error = 'Email is required'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Invalid email address'
        break
      case 'service':
        if (!value) error = 'Please select a service'
        break
      case 'message':
        if (!value.trim()) error = 'Project details are required'
        else if (value.trim().length < 10) error = 'Please provide more details'
        break
      case 'agreed':
        if (!value) error = 'You must agree to continue'
        break
      default:
        break
    }
    return error
  }

  const handleBlur = (e) => {
    const { id, value } = e.target
    // Map id to field name for simple mapping
    const fieldName = id === 'fullName' ? 'name' : 
                      id === 'emailAddress' ? 'email' : 
                      id === 'serviceInterest' ? 'service' : 
                      id === 'projectMessage' ? 'message' : null

    if (fieldName) {
      setTouched(prev => ({ ...prev, [fieldName]: true }))
      const error = validateField(fieldName, value)
      setErrors(prev => ({ ...prev, [fieldName]: error }))
    }
  }

  const validateForm = () => {
    const newErrors = {
      name: validateField('name', name),
      email: validateField('email', email),
      service: validateField('service', service),
      message: validateField('message', message),
      agreed: validateField('agreed', agreed)
    }

    setErrors(newErrors)

    // Check if any errors exist
    const firstErrorField = Object.keys(newErrors).find(key => newErrors[key] !== '')

    if (firstErrorField) {
      // Manage Focus
      if (firstErrorField === 'name' && nameRef.current) nameRef.current.focus()
      else if (firstErrorField === 'email' && emailRef.current) emailRef.current.focus()
      else if (firstErrorField === 'service' && serviceRef.current) serviceRef.current.focus()
      else if (firstErrorField === 'message' && messageRef.current) messageRef.current.focus()
      
      return false
    }
    return true
  }

  // FAQ contents
  const faqs = [
    {
      question: 'How quickly do you respond to new inquiries?',
      answer: 'Our average response time for new inquiries is within 24 hours. Once you submit a proposal or consultation request, a client manager will review your technical requirements and follow up with either a direct answer or a calendar link to schedule our discovery session.'
    },
    {
      question: 'Do you work with early-stage startups?',
      answer: 'Yes, we love working with startups! Our "Startup Project" budget range and structured Discovery Call phase are tailored to help startups build a strong digital foundation, clarify technical requirements, and build high-performance products that are ready for seed rounds and user testing.'
    },
    {
      question: 'Can I request multiple services for a single project?',
      answer: 'Absolutely. Digital Sphere is a full-service agency. We frequently manage projects that require custom combinations, such as UI/UX Design followed by Web and Mobile App Development, backed by ongoing Cyber Security monitoring and launch Digital Marketing services.'
    },
    {
      question: 'Do you provide ongoing support and maintenance after launch?',
      answer: 'Yes, we offer monthly maintenance and creative support packages. These packages cover code updates, server performance monitoring, regular vulnerability audits, content updates, and design tweaks to ensure your platform remains secure, scalable, and optimized for conversions.'
    },
    {
      question: 'How does the consultation and onboarding process work?',
      answer: 'Our onboarding starts with a brief 15-minute Discovery Call to discuss goals. We then proceed to Requirement Analysis, draft a detailed Proposal and Strategy, create a project plan, and assign our developers and designers to execute the build, followed by a supported launch.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes, our team operates worldwide. We use collaborative digital tools (like Figma for design syncs, Slack for chat, and Zoom/Meet for video coordination) to manage communications across different time zones. We have successfully launched projects for clients in North America, Europe, Asia, and the Middle East.'
    },
    {
      question: 'What information should I prepare before our first call?',
      answer: 'To make the most of our first conversation, it is helpful to prepare a brief summary of your product goals, links to your current website (if any), references to competitors or platforms you admire, your target launch timeline, and a rough budget range.'
    },
    {
      question: 'How do project timelines work and what if I have a strict deadline?',
      answer: 'Project timelines are determined during the Requirement Analysis phase. We break down the build into fortnightly milestones. If you have a strict deadline, we can adjust our execution path, use agile templates, or scale our active development team to meet your target launch window.'
    }
  ]

  // Choice options for budget & timeline
  const budgetOptions = [
    { label: 'Startup Project', desc: 'Custom MVP & Foundation' },
    { label: 'Growing Business', desc: 'Scale Features & Growth' },
    { label: 'Enterprise Solution', desc: 'Full Ecosystem & Support' }
  ]

  const timelineOptions = ['ASAP', '1 Month', '2-3 Months', 'Flexible']

  // Handle form submission
  const handleSubmit = (e, type) => {
    e.preventDefault()
    
    // Mark all fields as touched to show errors if they just clicked submit
    setTouched({
      name: true,
      email: true,
      service: true,
      message: true,
      agreed: true
    })

    if (!validateForm()) {
      return // Validation failed, focus is already managed by validateForm
    }

    setIsSubmitting(true)

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false)
      setToastMessage(
        type === 'proposal'
          ? 'Proposal request received! Our team is preparing an initial scope.'
          : 'Consultation request received! We will send a calendar link to your email.'
      )
      setShowToast(true)

      // Reset Form securely
      setName('')
      setEmail('')
      setPhone('')
      setCompany('')
      setService('')
      setBudget('Startup Project')
      setTimeline('ASAP')
      setMessage('')
      setAgreed(false)
      setTouched({})
      setErrors({})
    }, 1200) // 1.2s simulated delay
  }

  // Auto-hide toast notification after 5 seconds
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [showToast])

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  return (
    <div className={styles.page}>
      {/* Toast Success Notification */}
      {showToast && (
        <div className={styles.toast} role="alert" aria-live="assertive">
          <FiCheckCircle size={22} style={{ color: '#10b981' }} />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* SECTION 1 - HERO */}
      <header className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <FiZap size={14} />
              <span>Partner With Us</span>
            </div>
            <h1>
              Let's Build Something<br />
              <span>Extraordinary Together</span>
            </h1>
            <p className={styles.heroDescription}>
              Whether you're launching a new digital product, improving an existing platform,
              strengthening your brand, or accelerating business growth, our team is ready to help.
            </p>
            <div className={styles.heroActions}>
              <a href="#contact-form" className={styles.primaryBtn} onClick={() => setTimeline('ASAP')}>
                Schedule Consultation
              </a>
              <a href="#contact-form" className={styles.secondaryBtn} onClick={() => setTimeline('Flexible')}>
                Request Proposal
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 2 - CONTACT METHODS */}
      <section className={`reveal-trigger ${`${styles.section}`} ${styles.methodsSection}`} aria-label="Contact methods">
        <div className={styles.container}>
          <div className={styles.methodsGrid}>
            <CopyToClipboard text="contact@digitalsphere.com" hrefType="email" className={styles.methodCard}>
              <div className={styles.methodIcon}>
                <FiMail />
              </div>
              <h3>Email Us</h3>
              <p className={styles.methodValue}>contact@digitalsphere.com</p>
              <span className={styles.methodLink}>Send email &rarr;</span>
            </CopyToClipboard>

            <CopyToClipboard text="+92 344 5038278" hrefType="phone" className={styles.methodCard}>
              <div className={styles.methodIcon}>
                <FiPhone />
              </div>
              <h3>Call Us</h3>
              <p className={styles.methodValue}>+92 344 5038278</p>
              <span className={styles.methodLink}>Call now &rarr;</span>
            </CopyToClipboard>

            <div className={styles.methodCard}>
              <div className={styles.methodIcon}>
                <FiClock />
              </div>
              <h3>Office Hours</h3>
              <p className={styles.methodValue}>Mon – Fri</p>
              <p className={styles.methodValue}>9:00 AM – 6:00 PM</p>
            </div>

            <div className={styles.methodCard}>
              <div className={styles.methodIcon}>
                <FiZap />
              </div>
              <h3>Response Time</h3>
              <p className={styles.methodValue}>Within 24 Hours</p>
              <p className={styles.methodValue}>Usually much faster</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - PROJECT INQUIRY FORM */}
      <section id="contact-form" className={`${styles.section} ${styles.formSection}`} aria-labelledby="form-section-title">
        <div className={styles.container}>
          <div className={styles.formContainer}>
            <div className={styles.sectionHeader} style={{ textAlign: 'center', marginInline: 'auto' }}>
              <h2 id="form-section-title">Start a <span>Digital Discussion</span></h2>
              <p>Fill out the form below, select your scope, and our team will get in touch shortly.</p>
            </div>

            <div className={styles.glassForm}>
              <form onSubmit={(e) => handleSubmit(e, 'proposal')}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="fullName" className={styles.label}>Full Name *</label>
                    <input 
                      id="fullName" 
                      ref={nameRef}
                      type="text" 
                      className={`${styles.input} ${touched.name && errors.name ? styles.inputError : ''}`}
                      placeholder="e.g. John Doe"
                      value={name} 
                      onChange={(e) => {
                        setName(e.target.value)
                        if (touched.name) setErrors(prev => ({ ...prev, name: validateField('name', e.target.value) }))
                      }}
                      onBlur={handleBlur}
                    />
                    {touched.name && errors.name && <span className={styles.errorText}>{errors.name}</span>}
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="emailAddress" className={styles.label}>Email Address *</label>
                    <input 
                      id="emailAddress" 
                      ref={emailRef}
                      type="email" 
                      className={`${styles.input} ${touched.email && errors.email ? styles.inputError : ''}`}
                      placeholder="e.g. john@company.com" 
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        if (touched.email) setErrors(prev => ({ ...prev, email: validateField('email', e.target.value) }))
                      }}
                      onBlur={handleBlur}
                    />
                    {touched.email && errors.email && <span className={styles.errorText}>{errors.email}</span>}
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phoneNumber" className={styles.label}>Phone Number</label>
                    <input 
                      id="phoneNumber" 
                      type="tel" 
                      className={styles.input} 
                      placeholder="e.g. +92 344 5038278" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="companyName" className={styles.label}>Company Name</label>
                    <input 
                      id="companyName" 
                      type="text" 
                      className={styles.input} 
                      placeholder="e.g. Acme Corporation" 
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="serviceInterest" className={styles.label}>Service Interested In *</label>
                  <select 
                    id="serviceInterest" 
                    ref={serviceRef}
                    className={`${styles.select} ${touched.service && errors.service ? styles.inputError : ''}`}
                    value={service}
                    onChange={(e) => {
                      setService(e.target.value)
                      if (touched.service) setErrors(prev => ({ ...prev, service: validateField('service', e.target.value) }))
                    }}
                    onBlur={handleBlur}
                  >
                    <option value="" disabled>Select a service option...</option>
                    <option value="Web Development">Web Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Cyber Security">Cyber Security</option>
                    <option value="Graphic Design">Graphic Design</option>
                  </select>
                  {touched.service && errors.service && <span className={styles.errorText}>{errors.service}</span>}
                </div>

                {/* Custom Selection Cards for Budget */}
                <div className={styles.formGroup}>
                  <span className={styles.label}>Budget Range</span>
                  <div className={`${styles.choiceGrid} ${styles.choiceGrid3}`}>
                    {budgetOptions.map((opt) => (
                      <div 
                        key={opt.label} 
                        className={`${styles.choiceCard} ${budget === opt.label ? styles.choiceCardActive : ''}`}
                        onClick={() => setBudget(opt.label)}
                      >
                        <div>{opt.label}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '4px', fontWeight: 'normal' }}>
                          {opt.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Custom Selection Cards for Timeline */}
                <div className={styles.formGroup}>
                  <span className={styles.label}>Project Timeline</span>
                  <div className={styles.choiceGrid}>
                    {timelineOptions.map((opt) => (
                      <div 
                        key={opt} 
                        className={`${styles.choiceCard} ${timeline === opt ? styles.choiceCardActiveSecondary : ''}`}
                        onClick={() => setTimeline(opt)}
                      >
                        {opt}
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="projectMessage" className={styles.label}>Project Details *</label>
                  <textarea 
                    id="projectMessage" 
                    ref={messageRef}
                    className={`${styles.textarea} ${touched.message && errors.message ? styles.inputError : ''}`}
                    placeholder="Describe your project goals, core challenges, and what success looks like..."
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value)
                      if (touched.message) setErrors(prev => ({ ...prev, message: validateField('message', e.target.value) }))
                    }}
                    onBlur={handleBlur}
                  />
                  {touched.message && errors.message && <span className={styles.errorText}>{errors.message}</span>}
                </div>

                <div className={styles.checkboxGroup} onClick={() => {
                  const newVal = !agreed
                  setAgreed(newVal)
                  setErrors(prev => ({ ...prev, agreed: validateField('agreed', newVal) }))
                }}>
                  <input 
                    type="checkbox" 
                    id="agreeContact" 
                    checked={agreed} 
                    onChange={() => {}} 
                  />
                  <label htmlFor="agreeContact" className={`${styles.checkboxLabel} ${touched.agreed && errors.agreed ? styles.errorText : ''}`}>
                    I agree to be contacted regarding my inquiry and share my details securely with Digital Sphere.
                  </label>
                </div>

                <div className={styles.submitRow}>
                  <button 
                    type="submit" 
                    className={`${styles.primaryBtn} ${isSubmitting ? styles.btnLoading : ''}`} 
                    style={{ flex: '1' }}
                    disabled={isSubmitting}
                  >
                    <FiSend size={16} style={{ marginRight: '8px' }} />
                    {isSubmitting ? 'Sending...' : 'Request Proposal'}
                  </button>
                  <button 
                    type="button" 
                    className={`${styles.secondaryBtn} ${isSubmitting ? styles.btnLoading : ''}`} 
                    style={{ flex: '1' }}
                    onClick={(e) => handleSubmit(e, 'consultation')}
                    disabled={isSubmitting}
                  >
                    <FiClock size={16} style={{ marginRight: '8px' }} />
                    {isSubmitting ? 'Sending...' : 'Schedule Consultation'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - WHY WORK WITH DIGITAL SPHERE */}
      <section className={`reveal-trigger ${`${styles.section}`} ${styles.whySection}`} aria-labelledby="why-section-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 id="why-section-title">Why Partner With <span>Digital Sphere</span></h2>
            <p>We work as an extension of your company to deliver premium digital products that perform.</p>
          </div>

          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyIconBox}>
                <FiUsers />
              </div>
              <div className={styles.whyCardContent}>
                <h3>Experienced Team</h3>
                <p>
                  Led by core specialists: Huraira Qureshi (Frontend &amp; Graphic Design), 
                  Muzammil (UI/UX &amp; Backend), and Faizan (Security &amp; Mobile), we ensure creative and tech excellence.
                </p>
              </div>
            </div>

            <div className={styles.whyCard}>
              <div className={styles.whyIconBox}>
                <FiLayers />
              </div>
              <div className={styles.whyCardContent}>
                <h3>Custom Solutions</h3>
                <p>We never use rigid templates. Every codebase is built custom from scratch to support speed, scale, and longevity.</p>
              </div>
            </div>

            <div className={styles.whyCard}>
              <div className={styles.whyIconBox}>
                <FiMessageSquare />
              </div>
              <div className={styles.whyCardContent}>
                <h3>Transparent Communication</h3>
                <p>Enjoy direct developer communication channels (Slack/Discord), detailed sprint notes, and constant build previews.</p>
              </div>
            </div>

            <div className={styles.whyCard}>
              <div className={styles.whyIconBox}>
                <FiCpu />
              </div>
              <div className={styles.whyCardContent}>
                <h3>Scalable Technologies</h3>
                <p>We build using Vite, React, headless databases, and modern APIs to ensure lightning-fast interfaces.</p>
              </div>
            </div>

            <div className={styles.whyCard}>
              <div className={styles.whyIconBox}>
                <FiShield />
              </div>
              <div className={styles.whyCardContent}>
                <h3>Security Focused</h3>
                <p>Security is integrated at the server level, utilizing SSL/HTTPS protocols and encrypted database queries.</p>
              </div>
            </div>

            <div className={styles.whyCard}>
              <div className={styles.whyIconBox}>
                <FiAward />
              </div>
              <div className={styles.whyCardContent}>
                <h3>Long-Term Partnership</h3>
                <p>We support our clients long after launch, offering speed optimizations, features scaling, and campaign adjustments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - PROJECT PROCESS */}
      <section className={`reveal-trigger ${`${styles.section}`} ${styles.processSection}`} aria-labelledby="process-section-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader} style={{ textAlign: 'center', marginInline: 'auto' }}>
            <h2 id="process-section-title">Our Project <span>Delivery Journey</span></h2>
            <p>From our initial discussion through product release, we maintain a transparent, agile delivery path.</p>
          </div>

          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.stepDot}>01</div>
              <h3>Discovery Call</h3>
              <p>A brief call to align on your business targets, requirements, and scope metrics.</p>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.stepDot}>02</div>
              <h3>Requirement Analysis</h3>
              <p>Auditing tech options, user personas, and defining complete project scopes.</p>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.stepDot}>03</div>
              <h3>Proposal &amp; Strategy</h3>
              <p>Delivering a full blueprint, resource plan, design options, and milestone proposals.</p>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.stepDot}>04</div>
              <h3>Project Planning</h3>
              <p>Setting up Figma templates, repository architectures, and sprints allocations.</p>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.stepDot}>05</div>
              <h3>Execution</h3>
              <p>Writing clean, semantic code, running tests, and pushing frequent build reviews.</p>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.stepDot}>06</div>
              <h3>Launch &amp; Support</h3>
              <p>Deploying to production, completing final security checks, and offering lifetime support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - SERVICES OVERVIEW */}
      <section className={`reveal-trigger ${`${styles.section}`}`} aria-labelledby="services-section-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 id="services-section-title">Explore Our <span>Core Capabilities</span></h2>
            <p>Digital Sphere provides integrated solutions that combine development, design, and growth.</p>
          </div>

          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIconBox}>
                <FiCode />
              </div>
              <h3>Web Development</h3>
              <p>Blazing-fast, SEO-friendly custom websites and web applications built using modern headless architectures.</p>
              <Link to="/services/web-development" className={styles.learnMoreBtn}>
                Learn More <FiArrowRight size={14} />
              </Link>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIconBox}>
                <FiFeather />
              </div>
              <h3>UI/UX Design</h3>
              <p>User-centered visual designs, prototypes, and high-fidelity wireframes optimized for client conversion rates.</p>
              <Link to="/services/ui-ux-design" className={styles.learnMoreBtn}>
                Learn More <FiArrowRight size={14} />
              </Link>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIconBox}>
                <FiSmartphone />
              </div>
              <h3>Mobile Apps</h3>
              <p>Intelligent, cross-platform Android and iOS apps designed to connect your brand directly with users.</p>
              <Link to="/services/mobile-app-development" className={styles.learnMoreBtn}>
                Learn More <FiArrowRight size={14} />
              </Link>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIconBox}>
                <FiTrendingUp />
              </div>
              <h3>Digital Marketing</h3>
              <p>Omni-channel campaigns, SEO positioning audits, and target ads that capture lead opportunities and drive conversions.</p>
              <Link to="/services/digital-marketing" className={styles.learnMoreBtn}>
                Learn More <FiArrowRight size={14} />
              </Link>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIconBox}>
                <FiShield />
              </div>
              <h3>Cyber Security</h3>
              <p>Zero-trust environments, security reviews, and secure code audits that protect corporate database assets.</p>
              <Link to="/services/cyber-security" className={styles.learnMoreBtn}>
                Learn More <FiArrowRight size={14} />
              </Link>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIconBox}>
                <FiCompass />
              </div>
              <h3>Graphic Design</h3>
              <p>Strategic brand design guidelines, custom vector logos, and social media assets that project credibility.</p>
              <Link to="/services/graphic-design" className={styles.learnMoreBtn}>
                Learn More <FiArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - FAQ */}
      <section className={`reveal-trigger ${`${styles.section}`} ${styles.faqSection}`} aria-labelledby="faq-section-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader} style={{ textAlign: 'center', marginInline: 'auto' }}>
            <h2 id="faq-section-title">Common <span>Questions</span></h2>
            <p>Find quick answers about our project scope, consultation process, and delivery pipelines.</p>
          </div>

          <div className={styles.faqGrid}>
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index} 
                  className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ''}`}
                >
                  <button 
                    className={styles.faqHeader} 
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <h3 className={styles.faqQuestion}>{faq.question}</h3>
                    {isOpen ? <FiChevronUp className={styles.faqChevron} /> : <FiChevronDown className={styles.faqChevron} />}
                  </button>
                  <div 
                    className={`${styles.faqBody} ${isOpen ? styles.faqBodyOpen : ''}`} 
                    aria-hidden={!isOpen}
                  >
                    <div className={styles.faqBodyInner}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8 - FINAL CTA */}
      <section className={`reveal-trigger ${styles.finalCta}`}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <h2>Your Next Digital Success Story Starts Here</h2>
            <p>
              Connect with Digital Sphere and discover how our team can help transform your ideas 
              into powerful digital experiences that drive growth.
            </p>
            <div className={styles.ctaActions}>
              <a href="#contact-form" className={styles.primaryBtn} onClick={() => setTimeline('ASAP')}>
                Request Proposal
              </a>
              <a href="#contact-form" className={styles.secondaryBtn} onClick={() => setTimeline('Flexible')}>
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
