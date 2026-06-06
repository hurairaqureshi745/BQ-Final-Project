import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatedStat } from '../components/common/AnimatedStat'
import { FiCheck, FiChevronDown, FiMail, FiPhone, FiMapPin, FiAward, FiShield, FiTrendingUp, FiMessageSquare, FiActivity, FiGlobe, FiUsers, FiBookOpen, FiCompass, FiTarget, FiInstagram, FiFacebook, FiLinkedin } from 'react-icons/fi'
import { Container } from '../components/common/Container'
import { SectionHeader } from '../components/common/SectionHeader'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { ROUTES } from '../utils/routes'
import styles from './DigitalMarketingService.module.css'

/* ==========================================================================
   Page Datasets
   ========================================================================= */
const stats = [
  { value: 'ROI-Driven', label: 'Growth-Focused Campaigns' },
  { value: 'Real-Time', label: 'Performance Tracking' },
  { value: '95%+', label: 'Targeted Audience Reach' },
  { value: 'Sustained', label: 'Long-Term Marketing Success' }
]

const benefits = [
  {
    icon: FiAward,
    title: 'Increase Brand Awareness',
    description: 'Ensure your business becomes a recognized name by reaching target segments across multiple digital touchpoints regularly.'
  },
  {
    icon: FiTarget,
    title: 'Generate Quality Leads',
    description: 'Attract high-intent potential customers who are looking for exactly the services or products your business provides.'
  },
  {
    icon: FiUsers,
    title: 'Reach Target Audiences',
    description: 'Filter your advertising reach by detailed interests, job titles, ages, and locations to focus budget only on ideal buyers.'
  },
  {
    icon: FiMessageSquare,
    title: 'Improve Customer Engagement',
    description: 'Build long-term direct relationships through interactive social feeds, custom email workflows, and targeted content.'
  },
  {
    icon: FiTrendingUp,
    title: 'Drive Sales Growth',
    description: 'Combine paid ads and organic search visibility to increase checkout conversions, service bookings, and inbound inquiries.'
  },
  {
    icon: FiActivity,
    title: 'Measure Marketing Performance',
    description: 'Leverage clear analytics dashboards to monitor customer acquisition costs, conversion rates, and campaign ROI in real time.'
  }
]

const servicesWeOffer = [
  {
    icon: FiGlobe,
    title: 'SEO Optimization',
    description: 'Custom search engine optimization designed to improve organic keyword rankings and generate free recurring traffic.',
    outcome: 'Higher Ranks & Free Organic Visits',
    benefit: 'Cost-Effective Search Growth'
  },
  {
    icon: FiUsers,
    title: 'Social Media Marketing',
    description: 'Creative social media campaigns across platforms to build user engagement, manage community feeds, and drive awareness.',
    outcome: 'Brand Awareness & Active Feeds',
    benefit: 'Direct Audience Conversations'
  },
  {
    icon: FiBookOpen,
    title: 'Content Marketing',
    description: 'Writing high-quality blog posts, resource guides, and infographics that answer user queries and establish authority.',
    outcome: 'Stronger Trust & Link Building',
    benefit: 'Positions Brand as Industry Expert'
  },
  {
    icon: FiMail,
    title: 'Email Marketing',
    description: 'Designing high-conversion newsletter campaigns, lead-nurturing sequences, and transactional emails that drive repeat sales.',
    outcome: 'Higher Repeat Purchases & Active Leads',
    benefit: 'Own Your Direct Contact Channels'
  },
  {
    icon: FiTarget,
    title: 'Paid Advertising Campaigns',
    description: 'Strategic paid advertising campaigns across Google Ads and Meta Ads to generate immediate leads and sales.',
    outcome: 'Instant Leads & Conversion Spikes',
    benefit: 'Rapid Target Audience Reach'
  },
  {
    icon: FiCompass,
    title: 'Marketing Strategy & Consultation',
    description: 'In-depth brand audits, buyer persona mapping, competitor reviews, and custom marketing roadmap drafting.',
    outcome: 'Detailed Custom Growth Roadmap',
    benefit: 'Clear Actionable Growth Priorities'
  }
]

const marketingChannels = [
  {
    icon: FiGlobe,
    title: 'Google Search',
    description: 'Capture active searchers searching for solutions. Google Search optimization generates high-intent leads.',
    audience: 'High-intent active searchers.',
    value: 'Generates the highest conversion value leads.'
  },
  {
    icon: FiFacebook,
    title: 'Facebook',
    description: 'Leverage visual storytelling, lookalike audiences, and demographic retargeting campaigns.',
    audience: 'Broad consumer demographics.',
    value: 'Cost-effective target segment scaling.'
  },
  {
    icon: FiInstagram,
    title: 'Instagram',
    description: 'Focus heavily on visual aesthetics, creative assets, product tag catalogs, and influencer partnerships.',
    audience: 'Younger consumer demographics and creatives.',
    value: 'Builds memorable visual brand identity.'
  },
  {
    icon: FiLinkedin,
    title: 'LinkedIn',
    description: 'B2B lead generation, industry authority building, and professional network advertising.',
    audience: 'Professionals, B2B decision-makers, and owners.',
    value: 'Direct channel to corporate decision-makers.'
  },
  {
    icon: FiMail,
    title: 'Email Campaigns',
    description: 'Direct newsletters, promotional announcements, and conversion sequences sent to your subscriber database.',
    audience: 'Existing subscribers and past customers.',
    value: 'Yields high conversion value without paid ad cost.'
  },
  {
    icon: FiBookOpen,
    title: 'Content Platforms',
    description: 'Long-form guides, videos, and articles that educate users and support organic search authority building.',
    audience: 'Users seeking resources and guides.',
    value: 'Ensures long-term organic SEO authority.'
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Business Analysis',
    description: 'We audit your current digital standings, analyze past campaign metrics, and establish target customer profiles.'
  },
  {
    step: '02',
    title: 'Market Research',
    description: 'Conducting in-depth competitor keyword research and identifying search volumes and market gaps.'
  },
  {
    step: '03',
    title: 'Strategy Development',
    description: 'Mapping out recommended budget allocations, target keywords, content outlines, and performance KPIs.'
  },
  {
    step: '04',
    title: 'Campaign Execution',
    description: 'Setting up analytics trackers, starting search engine optimization fixes, and deploying ad campaigns.'
  },
  {
    step: '05',
    title: 'Performance Tracking',
    description: 'Monitoring inbound conversion numbers, checking keyword rank movements, and auditing ad spends.'
  },
  {
    step: '06',
    title: 'Optimization & Growth',
    description: 'Refining landing page layouts, updating copy elements, adjusting bids, and scaling high-performing channels.'
  }
]

const whyChooseUs = [
  {
    icon: FiActivity,
    title: 'Data-Driven Decisions',
    description: 'We reject guessworks. Every campaign decision, search keyword, and ad bid is based on clear analytics, rankings, and conversion values.'
  },
  {
    icon: FiTrendingUp,
    title: 'Growth-Focused Strategies',
    description: 'Every ad copy, layout element, and SEO optimization is designed to drive quality leads and sales growth rather than empty traffic.'
  },
  {
    icon: FiShield,
    title: 'Transparent Reporting',
    description: 'We provide clear, straightforward reporting dashboards. You will know exactly where your budget is spent and the exact results generated.'
  },
  {
    icon: FiCompass,
    title: 'Long-Term Partnership',
    description: 'We continually refine marketing roadmaps as search algorithms and consumer behaviors change to protect your brand\'s visibility.'
  }
]

const solutionPackages = [
  {
    title: 'Marketing Foundation',
    idealFor: 'Startups',
    features: [
      'Basic SEO & On-Page Audit',
      'Social Media Profiles Setup',
      'Initial 4-Week Content Plan',
      'Monthly Analytics Review',
      'Local Business Citations Setup'
    ],
    ctaText: 'Get Custom Quote',
    featured: false
  },
  {
    title: 'Growth Marketing Solution',
    idealFor: 'Growing Businesses',
    features: [
      'Advanced SEO & On-Page Fixes',
      'Paid Ads Setup & Management',
      'Social Media Campaign Drafts',
      'Direct Email Workflow Setup',
      'Transparent Monthly Reporting'
    ],
    ctaText: 'Request Proposal',
    featured: true
  },
  {
    title: 'Enterprise Growth Strategy',
    idealFor: 'Established Businesses',
    features: [
      'Omnichannel Strategy Setup',
      'Advanced Competitor Analysis',
      'Conversion Rate Optimization Audits',
      'Direct Strategy Consulting Access',
      'Weekly Metric Reports & Review'
    ],
    ctaText: 'Schedule Consultation',
    featured: false
  }
]

const faqItems = [
  {
    q: 'How long does digital marketing take to show results?',
    a: 'Results depend on the channels. Paid advertising campaigns (Google Ads, Meta Ads) can drive quality leads within hours of launching. Organic strategies like SEO and Content Marketing are long-term assets that typically take 3 to 6 months to establish consistent search visibility and rank updates.'
  },
  {
    q: 'Do you provide SEO services?',
    a: 'Yes. We offer complete Search Engine Optimization packages covering technical audits, key phrase mapping, content structural adjustments, site performance speed fixes, and high-quality backlink strategies.'
  },
  {
    q: 'Can you manage social media accounts?',
    a: 'Yes. We handle visual asset design, content scheduling, captions writing, community interaction, and paid social campaign management to build an engaged following for your brand.'
  },
  {
    q: 'How do you measure campaign performance?',
    a: 'We configure complete tracking systems using Google Analytics and search consoles. We measure success based on actionable metrics like inbound leads, checkout conversions, cost-per-acquisition, and total sales return.'
  },
  {
    q: 'Do you create marketing strategies?',
    a: 'Yes. We do not just run ads. We draft a comprehensive strategy detailing target audience demographics, competitor advantages, keyword priorities, copy angles, and channel maps before launch.'
  },
  {
    q: 'How do I get started?',
    a: 'Fill out our project consultation form at the bottom of this page. Share your basic business details and goals, and our team will get in touch with you within one business day to schedule a scoping call.'
  }
]

/* ==========================================================================
   DigitalMarketingService Component
   ========================================================================= */
export function DigitalMarketingService() {
  useDocumentTitle('Digital Marketing Service | Digital Sphere')

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
    marketingGoals: 'lead-generation',
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
      setFormData({ name: '', email: '', business: '', marketingGoals: 'lead-generation', message: '' })
    }
  }

  return (
    <article className={`reveal-trigger ${styles.page}`}>
      {/* SECTION 1: SERVICE HERO */}
      <section className={`reveal-trigger ${styles.hero}`} aria-labelledby="service-hero-title">
        <Container>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Digital Marketing</span>
            <h1 id="service-hero-title">
              Data-Driven Marketing Strategies <span>That Accelerate Growth</span>
            </h1>
            <p className={styles.heroDescription}>
              We help businesses increase visibility, attract qualified customers, strengthen brand awareness, and generate measurable results through modern digital marketing strategies.
            </p>
            <div className={styles.heroActions}>
              <div className={styles.primaryBtn}>
                <a href="#discuss-goals">Get A Custom Quote</a>
              </div>
              <div className={styles.secondaryBtn}>
                <a href="#discuss-goals">Discuss Your Marketing Goals</a>
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

      {/* SECTION 2: WHAT IS DIGITAL MARKETING */}
      <section className={`reveal-trigger ${`${styles.section}`} ${styles.introSection}`} aria-labelledby="intro-title">
        <Container>
          <div className={styles.introContent}>
            <div className={styles.introLeft}>
              <h2 id="intro-title">What Is Digital Marketing?</h2>
              <div className={styles.introText}>
                <p>
                  Digital marketing represents the strategic practice of promoting products, services, or brands through digital channels and technologies. In today\'s interconnected world, consumers search online before making any purchase decision. If your business lacks online visibility, you are missing out on potential customers.
                </p>
                <p>
                  At its core, digital marketing focuses on customer acquisition—positioning your brand where your target audience spends their time. This is achieved by combining organic search optimization (SEO) to build long-term credibility, paid advertising (PPC) to drive immediate leads, and social media to foster ongoing brand loyalty.
                </p>
                <p>
                  Content and branding play a critical role in this process. Informative blog posts, guides, and clear graphics help answer user questions, building trust and converting first-time visitors into long-term clients. Without consistent, valuable content, campaigns fail to sustain engagement.
                </p>
                <p>
                  The main advantage of digital marketing is trackability. Unlike traditional ads, every single impression, click, conversion, and ad dollar can be monitored and measured. This data allows businesses to continuously optimize campaigns, improve customer acquisition costs, and ensure measurable business growth.
                </p>
              </div>
            </div>
            <div className={styles.introRight}>
              <blockquote>
                <p className={styles.introQuote}>
                  "Marketing is no longer about the stuff that you make, but about the stories you tell and the measurable value you deliver to your users."
                </p>
                <cite className={styles.storyAuthor}>— Team Digital Sphere</cite>
              </blockquote>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: WHY DIGITAL MARKETING MATTERS */}
      <section className={`reveal-trigger ${styles.section}`} aria-labelledby="benefits-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="benefits-title"
              title="Why Businesses Invest In Digital Marketing"
              description="A strategic online approach transforms search traffic into inbound leads and long-term customers."
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

      {/* SECTION 4: DIGITAL MARKETING SERVICES WE OFFER */}
      <section className={`reveal-trigger ${`${styles.section}`} ${styles.introSection}`} aria-labelledby="services-offer-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="services-offer-title"
              title="Our Digital Marketing Services"
              description="Explore our core marketing solutions designed to drive search ranking, ad conversion, and brand visibility."
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

      {/* SECTION 5: MARKETING CHANNELS WE USE */}
      <section className={`reveal-trigger ${styles.section}`} aria-labelledby="channels-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="channels-title"
              title="Channels That Help Businesses Grow"
              description="We design and deploy marketing strategies across the most effective online channel ecosystems."
            />
          </div>
          <div className={styles.channelGrid}>
            {marketingChannels.map((chan) => {
              const Icon = chan.icon
              return (
                <div className={styles.channelCard} key={chan.title}>
                  <div className={styles.iconBox} aria-hidden="true">
                    <Icon />
                  </div>
                  <div className={styles.channelCardContent}>
                    <h3>{chan.title}</h3>
                    <p>{chan.description}</p>
                    <span className={styles.channelDetail}>
                      Reach: <span>{chan.audience}</span>
                    </span>
                    <span className={styles.channelDetail} style={{ display: 'block', marginTop: '2px' }}>
                      Value: <span>{chan.value}</span>
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 6: OUR MARKETING PROCESS */}
      <section className={`reveal-trigger ${`${styles.section}`} ${styles.introSection}`} aria-labelledby="process-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="process-title"
              title="How We Build Successful Marketing Campaigns"
              description="A systematic roadmap focused on analysis, strategic execution, performance tracking, and scaling."
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

      {/* SECTION 7: WHY CHOOSE DIGITAL SPHERE */}
      <section className={`reveal-trigger ${styles.section}`} aria-labelledby="choose-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="choose-title"
              title="Why Choose Digital Sphere For Marketing"
              description="We connect creative designs and copy with data-driven analytics to maximize campaign ROI."
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

      {/* SECTION 8: SOLUTION PACKAGES */}
      <section className={`reveal-trigger ${`${styles.section}`} ${styles.introSection}`} aria-labelledby="packages-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="packages-title"
              title="Solution Frameworks"
              description="Explore starter packages. Custom plans are tailored to your requirements."
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
                  <a href="#discuss-goals">{pkg.ctaText}</a>
                </div>
              </div>
            ))}
          </div>
          <p className={styles.packagesNote}>
            * Every business has unique goals, audiences, and challenges. Recommendations and project estimates are provided after understanding your specific requirements.
          </p>
        </Container>
      </section>

      {/* SECTION 9: FAQ SECTION */}
      <section className={`reveal-trigger ${styles.section}`} aria-labelledby="faq-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="faq-title"
              title="Digital Marketing FAQ"
              description="Common questions about search algorithms, social media plans, campaign setups, and timelines."
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

      {/* SECTION 10: FINAL CTA */}
      <section className={`reveal-trigger ${`${styles.section}`} ${styles.ctaSection}`} aria-label="CTA">
        <Container>
          <div className={styles.ctaCard}>
            <h2>Ready To Grow Your Business Online?</h2>
            <p>
              Partner with Digital Sphere to build marketing strategies that attract customers, strengthen your brand, and generate measurable business growth.
            </p>
            <div className={styles.ctaActions}>
              <div className={styles.primaryBtn}>
                <a href="#discuss-goals">Get A Custom Quote</a>
              </div>
              <div className={styles.secondaryBtn}>
                <Link to={ROUTES.contact}>Contact Us</Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 11: CONTACT FORM */}
      <section className={`reveal-trigger ${styles.section}`} id="discuss-goals" aria-labelledby="form-heading">
        <Container>
          <div className={styles.contactLayout}>
            <div className={styles.contactFormCard}>
              <h2 id="form-heading" className={styles.contactCardTitle} style={{ marginBottom: 'var(--space-md)' }}>
                Let's Discuss Your Marketing Goals
              </h2>
              {formSubmitted ? (
                <div style={{ padding: 'var(--space-md)', background: 'rgba(6, 182, 212, 0.1)', border: '1px solid var(--color-secondary)', borderRadius: 'var(--radius-sm)', color: 'var(--color-text)' }}>
                  <strong>Thank you!</strong> Your marketing inquiry has been received. Our team will review and get back to you shortly.
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
                      <label htmlFor="marketingSelect">Marketing Goals</label>
                      <select
                        id="marketingSelect"
                        name="marketingGoals"
                        value={formData.marketingGoals}
                        onChange={handleInputChange}
                      >
                        <option value="lead-generation">Lead Generation</option>
                        <option value="brand-awareness">Brand Awareness</option>
                        <option value="seo-optimization">SEO & Search Ranks</option>
                        <option value="social-media">Social Media Growth</option>
                        <option value="ppc-campaigns">Paid PPC Campaigns</option>
                      </select>
                    </div>
                    <div className={`${styles.formField} ${styles.formFieldFull}`}>
                      <label htmlFor="marketingMessage">Project Requirements</label>
                      <textarea
                        id="marketingMessage"
                        name="message"
                        placeholder="Share your goals, target audience, budget boundaries, and timeline expectations."
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
