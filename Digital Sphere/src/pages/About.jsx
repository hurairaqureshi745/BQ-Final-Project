import { Link } from 'react-router-dom'
import {
  FiLinkedin,
  FiGithub,
  FiDribbble,
  FiCpu,
  FiAward,
  FiEye,
  FiTrendingUp,
  FiSliders,
  FiMessageSquare,
  FiCompass,
  FiShield,
  FiUsers,
  FiBookOpen,
  FiHeart,
  FiShoppingBag,
  FiActivity,
  FiBriefcase,
  FiLayers,
  FiGlobe
} from 'react-icons/fi'
import { Container } from '../components/common/Container'
import { SectionHeader } from '../components/common/SectionHeader'
import { teamMembers } from '../data/team'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { ROUTES } from '../utils/routes'
import styles from './About.module.css'

const coreValues = [
  {
    icon: FiCpu,
    title: 'Innovation',
    description: 'Constantly pushing boundaries and exploring new technologies to create modern, forward-thinking solutions.'
  },
  {
    icon: FiAward,
    title: 'Quality',
    description: 'Delivering clean code, premium user experiences, and security-first engineering without compromise.'
  },
  {
    icon: FiEye,
    title: 'Transparency',
    description: 'Fostering open communication and collaboration to build strong, trust-based partnerships with our clients.'
  },
  {
    icon: FiTrendingUp,
    title: 'Growth',
    description: 'Aligning every single visual asset and technology decision with measurable business growth and long-term value.'
  }
]

const timelineMilestones = [
  {
    year: '2022',
    title: 'Started Learning Digital Skills',
    description: 'Dived into frontend technologies, graphic design, and security basics to build a foundation.'
  },
  {
    year: '2023',
    title: 'Built First Projects',
    description: 'Launched custom web prototypes, visual assets, and secure databases for local business campaigns.'
  },
  {
    year: '2024',
    title: 'Expanded Services',
    description: 'Integrated UI/UX methodologies, mobile app development workflows, and performance digital marketing.'
  },
  {
    year: '2025',
    title: 'Formed Digital Sphere',
    description: 'Brought together a multidisciplinary engineering team to form a premium, full-service digital agency.'
  },
  {
    year: '2026',
    title: 'Launching New Digital Solutions',
    description: 'Releasing state-of-the-art web products and securing digital ecosystems globally.'
  }
]

const benefits = [
  {
    icon: FiSliders,
    title: 'Custom Solutions',
    description: 'Tailored strategies and codebases designed around your unique business needs, goals, and metrics.'
  },
  {
    icon: FiMessageSquare,
    title: 'Reliable Communication',
    description: 'Open channels, regular sprint demos, and direct contact with developers and designers throughout.'
  },
  {
    icon: FiCompass,
    title: 'Modern Technologies',
    description: 'Leveraging Vite, React, Node, and advanced styling modules to ensure speed, scale, and high SEO rankings.'
  },
  {
    icon: FiShield,
    title: 'Security First Approach',
    description: 'Implementing robust data protection, encryption, and secure coding practices across all layers.'
  }
]

const processSteps = [
  {
    step: '1',
    title: 'Discovery',
    description: 'We research your business objectives, analyze market trends, and define target audience goals.'
  },
  {
    step: '2',
    title: 'Planning',
    description: 'Creating comprehensive roadmaps, component hierarchies, and technical architecture drafts.'
  },
  {
    step: '3',
    title: 'Design',
    description: 'Crafting premium user interfaces, high-fidelity mockups, and interactive design prototypes.'
  },
  {
    step: '4',
    title: 'Development',
    description: 'Writing modular, clean, and scalable React code backed by performance audits.'
  },
  {
    step: '5',
    title: 'Launch & Support',
    description: 'Seamless production deployment combined with ongoing optimization and security reviews.'
  }
]

const statItems = [
  { value: '100+', label: 'Projects Completed' },
  { value: '50+', label: 'Clients Served' },
  { value: '3+', label: 'Core Founders' },
  { value: '98%', label: 'Client Satisfaction' }
]

/* ==========================================================================
   New Datasets
   ========================================================================== */
const ourPhilosophy = [
  {
    icon: FiUsers,
    title: 'Client-Centered Approach',
    description: 'We align our engineering decisions directly with your business goals, target metrics, and growth objectives.'
  },
  {
    icon: FiBookOpen,
    title: 'Innovation Through Learning',
    description: 'Constantly evaluating new technologies, frameworks, and methodologies to build modern, future-proof platforms.'
  },
  {
    icon: FiAward,
    title: 'Quality Over Shortcuts',
    description: 'Writing clean, documented code and deploying secure infrastructures that stand the test of time.'
  },
  {
    icon: FiHeart,
    title: 'Long-Term Relationships',
    description: 'Operating with transparency and honesty to become a trusted, collaborative partner for your business journey.'
  }
]

const howWeWork = [
  {
    step: '01',
    title: 'Understand The Business',
    description: 'We analyze your target market, outline objectives, and establish success criteria before writing a single line of code.'
  },
  {
    step: '02',
    title: 'Plan The Strategy',
    description: 'Creating comprehensive technical roadmaps, architecture plans, and sprint milestones for direct alignment.'
  },
  {
    step: '03',
    title: 'Design The Experience',
    description: 'Developing high-fidelity custom prototypes, clean design systems, and responsive user interfaces.'
  },
  {
    step: '04',
    title: 'Develop The Solution',
    description: 'Engineering secure, fast, and scalable frontends and backends utilizing modular React architecture.'
  },
  {
    step: '05',
    title: 'Launch & Improve',
    description: 'Deploying to high-performance hosting platforms, conducting security audits, and continuously refining metrics.'
  }
]

const industriesServed = [
  {
    icon: FiShoppingBag,
    title: 'E-Commerce',
    description: 'Custom digital stores with secure payment systems, smooth user flows, and conversion-optimized checkouts.'
  },
  {
    icon: FiActivity,
    title: 'Healthcare',
    description: 'Secure, reliable patient interfaces, digital scheduling platforms, and information resources.'
  },
  {
    icon: FiTrendingUp,
    title: 'Finance',
    description: 'Data dashboards, transaction management visualizers, and highly protected fintech systems.'
  },
  {
    icon: FiBookOpen,
    title: 'Education',
    description: 'Custom e-learning modules, student registration systems, and interactive curriculum websites.'
  },
  {
    icon: FiCpu,
    title: 'Technology Startups',
    description: 'Fast MVP prototypes, scalable cloud infrastructures, and high-conversion landing pages to raise capital.'
  },
  {
    icon: FiBriefcase,
    title: 'Corporate Businesses',
    description: 'Premium branding platforms, digital communication hubs, and security-hardened public properties.'
  }
]

const roadmapPhases = [
  {
    phase: 'Phase 1',
    title: 'Building Strong Foundations',
    description: 'Focusing on delivering high-performance core agency projects and establishing premium design guidelines.'
  },
  {
    phase: 'Phase 2',
    title: 'Expanding Service Expertise',
    description: 'Integrating advanced cloud architectures, mobile native systems, and marketing automation roadmaps.'
  },
  {
    phase: 'Phase 3',
    title: 'Serving More Industries',
    description: 'Hardening compliance capabilities for complex verticals like healthcare, fintech, and education.'
  },
  {
    phase: 'Phase 4',
    title: 'Adopting Emerging Technologies',
    description: 'Leveraging AI integrations, headless database models, and web protection strategies.'
  },
  {
    phase: 'Phase 5',
    title: 'Becoming A Leading Digital Partner',
    description: 'Scale into a full-scale multinational agency guiding digital transformations across global markets.'
  }
]

const communityImpactCards = [
  {
    icon: FiLayers,
    title: 'Continuous Learning',
    description: 'Engaging in workshops and security research to stay ahead of the digital curve.'
  },
  {
    icon: FiGlobe,
    title: 'Knowledge Sharing',
    description: 'Writing open resources and documentation guides to support junior designers and developers.'
  },
  {
    icon: FiCpu,
    title: 'Supporting Innovation',
    description: 'Contributing to open-source software libraries and mentoring startup incubators.'
  }
]

export function About() {
  useDocumentTitle('About | Digital Sphere')

  return (
    <article className={styles.page}>
      {/* SECTION 1: ABOUT HERO */}
      <section className={styles.hero} aria-labelledby="about-hero-title">
        <Container>
          <div className={styles.heroContent}>
            <span className={styles.badge}>About Digital Sphere</span>
            <h1 id="about-hero-title">
              Building Digital Experiences That <span>Drive Growth</span>
            </h1>
            <p className={styles.heroDescription}>
              Digital Sphere is a modern digital agency focused on creating exceptional websites, applications, brands, and digital strategies that help businesses succeed in a constantly evolving digital world.
            </p>
            <div className={styles.heroActions}>
              <div className={styles.primaryBtn}>
                <Link to={ROUTES.contact}>Start Your Project</Link>
              </div>
              <div className={styles.secondaryBtn}>
                <Link to={ROUTES.services}>Explore Our Work</Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: OUR STORY */}
      <section className={`${styles.section} ${styles.storySection}`} aria-labelledby="story-title">
        <Container>
          <div className={styles.storyContent}>
            <div className={styles.storyLeft}>
              <h2 id="story-title">Our Story</h2>
              <div className={styles.storyText}>
                <p>
                  Digital Sphere started with a shared vision among a team of passionate developers and designers who wanted to build digital products that combine stunning aesthetics with secure, high-performing technology. We saw a gap in the market for agencies that could align engineering craft with marketing strategy, and decided to bridge that gap.
                </p>
                <p>
                  Our collaboration thrives on a deep appreciation for modern technology, clean architecture, and user-centric design. We believe that a digital product shouldn’t just look beautiful; it must load instantly, adapt perfectly to all screen sizes, and provide a secure environment for user interactions.
                </p>
                <p>
                  At Digital Sphere, we maintain a continuous learning mindset, constantly evaluating emerging frameworks, design systems, and security standards. This allows us to deliver future-proof roadmaps that guide our clients toward sustained digital transformation and business growth.
                </p>
              </div>
            </div>
            <div className={styles.storyRight}>
              <blockquote>
                <p className={styles.storyQuote}>
                  "Technology is most powerful when it disappears into a seamless user experience. We build to solve problems, not just to write code."
                </p>
                <cite className={styles.storyAuthor}>— Team Digital Sphere</cite>
              </blockquote>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3 (NEW): FOUNDER MESSAGE */}
      <section className={`${styles.section} ${styles.founderSection}`} aria-labelledby="founder-title">
        <Container>
          <div className={styles.founderContent}>
            <div className={styles.founderLeft}>
              <h2 id="founder-title">A Message From The Founding Team</h2>
              <div className={styles.storyText}>
                <p>
                  Digital Sphere was built on a simple belief: businesses deserve digital solutions that are not only visually impressive but also strategically effective. As a team with expertise in development, design, marketing, cybersecurity, and mobile technologies, we recognized the growing need for reliable digital partners who genuinely care about client success.
                </p>
                <p>
                  Our journey started with a shared passion for technology and continuous learning. Over time, that passion evolved into a vision of creating a digital agency capable of helping businesses establish strong online foundations and achieve sustainable growth.
                </p>
                <p>
                  Every project we undertake represents an opportunity to solve real-world problems, create meaningful user experiences, and deliver measurable value to our clients.
                </p>
              </div>
            </div>
            <div className={styles.founderRight}>
              <div className={styles.founderQuoteCard}>
                <p className={styles.founderQuoteText}>
                  "We don't just build digital products. We build long-term digital partnerships."
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 4: MISSION & VISION */}
      <section className={styles.section} aria-label="Mission and Vision">
        <Container>
          <div className={styles.missionGrid}>
            <div className={`${styles.mvCard} ${styles.missionCard}`}>
              <h3>Our Mission</h3>
              <p>
                Deliver innovative digital solutions that combine creativity, technology, and strategy to solve complex business challenges.
              </p>
            </div>
            <div className={`${styles.mvCard} ${styles.visionCard}`}>
              <h3>Our Vision</h3>
              <p>
                Become a trusted digital partner for ambitious brands seeking long-term growth, scalability, and digital transformation.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 5 (NEW): OUR PHILOSOPHY */}
      <section className={styles.section} aria-labelledby="philosophy-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="philosophy-title"
              title="Our Philosophy"
              description="At Digital Sphere, we believe technology should simplify challenges, not create them. Every design decision, development process, and marketing strategy is guided by a commitment to quality, transparency, and measurable results."
            />
          </div>
          <div className={styles.philosophyGrid}>
            {ourPhilosophy.map((phil) => {
              const Icon = phil.icon
              return (
                <div className={styles.philosophyCard} key={phil.title}>
                  <div className={styles.iconBox} aria-hidden="true">
                    <Icon />
                  </div>
                  <h3>{phil.title}</h3>
                  <p>{phil.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 6: CORE VALUES */}
      <section className={styles.section} aria-labelledby="values-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="values-title"
              title="Our Core Values"
              description="The principles that guide our craft, our culture, and every project we build."
            />
          </div>
          <div className={styles.valuesGrid}>
            {coreValues.map((val) => {
              const Icon = val.icon
              return (
                <div className={styles.valueCard} key={val.title}>
                  <div className={styles.iconBox} aria-hidden="true">
                    <Icon />
                  </div>
                  <h3>{val.title}</h3>
                  <p>{val.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 7 (NEW): HOW WE WORK */}
      <section className={styles.section} aria-labelledby="how-we-work-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="how-we-work-title"
              title="How We Work"
              description="Our operational model designed to maintain clarity, velocity, and top-tier product output."
            />
          </div>
          <div className={styles.howWeWorkGrid}>
            {howWeWork.map((step) => (
              <div className={styles.workStepCard} key={step.title}>
                <span className={styles.workStepNum} aria-hidden="true">
                  Step {step.step}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 8: JOURNEY TIMELINE */}
      <section className={styles.section} aria-labelledby="timeline-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="timeline-title"
              title="Our Journey"
              description="A brief look at the milestones and steps that shaped Digital Sphere."
            />
          </div>
          <div className={styles.timelineWrapper}>
            <div className={styles.timelineLine} aria-hidden="true" />
            {timelineMilestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0
              return (
                <div
                  className={`${styles.timelineItem} ${isEven ? styles.timelineItemLeft : ''}`}
                  key={milestone.title}
                >
                  <div className={styles.timelineDot} aria-hidden="true" />
                  <div className={styles.timelineContent}>
                    <span className={styles.timelineYear}>{milestone.year}</span>
                    <h3>{milestone.title}</h3>
                    <p>{milestone.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 9 (NEW): FUTURE ROADMAP */}
      <section className={styles.section} aria-labelledby="roadmap-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="roadmap-title"
              title="Where We're Headed"
              description="Our visual growth roadmap defining the future phases of Digital Sphere's expansion."
            />
          </div>
          <div className={styles.roadmapWrapper}>
            <div className={styles.roadmapLine} aria-hidden="true" />
            {roadmapPhases.map((phase, idx) => {
              const isEven = idx % 2 === 0
              return (
                <div
                  className={`${styles.roadmapItem} ${isEven ? styles.roadmapItemLeft : ''}`}
                  key={phase.title}
                >
                  <div className={styles.roadmapDot} aria-hidden="true" />
                  <div className={styles.roadmapContent}>
                    <span className={styles.roadmapPhase}>{phase.phase}</span>
                    <h3>{phase.title}</h3>
                    <p>{phase.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 10: WHY BUSINESSES CHOOSE US */}
      <section className={`${styles.section} ${styles.whyChooseSection}`} aria-labelledby="why-choose-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="why-choose-title"
              title="Why Businesses Choose Us"
              description="We combine engineering excellence with design craftsmanship to help brands scale with confidence."
            />
          </div>
          <div className={styles.whyChooseGrid}>
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div className={styles.whyCard} key={benefit.title}>
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

      {/* SECTION 11 (NEW): INDUSTRY FOCUS */}
      <section className={`${styles.section} ${styles.industrySection}`} aria-labelledby="industry-focus-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="industry-focus-title"
              title="Industries We Serve"
              description="Providing vertical expertise and customized solutions across multiple key industry domains."
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
                  <h3>{ind.title}</h3>
                  <p>{ind.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 12: MEET THE TEAM */}
      <section className={styles.section} aria-labelledby="team-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="team-title"
              title="Meet The Team"
              description="A senior multidisciplinary team combining frontend development, backend systems, branding, and security."
            />
          </div>
          <div className={styles.teamGrid}>
            {teamMembers.map((member) => (
              <article className={styles.teamCard} key={member.name}>
                <div className={styles.avatar} aria-hidden="true">
                  {member.initials}
                </div>
                <h3>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p className={styles.bio}>{member.bio}</p>
                <ul className={styles.socials} aria-label={`${member.name} social links`}>
                  <li>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <FiLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <FiGithub />
                    </a>
                  </li>
                  <li>
                    <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
                      <FiDribbble />
                    </a>
                  </li>
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 13: OUR PROCESS */}
      <section className={`${styles.section} ${styles.processSection}`} aria-labelledby="process-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="process-title"
              title="Our Working Process"
              description="How we guide your digital product from initial planning to production-ready launch."
            />
          </div>
          <div className={styles.processGrid}>
            {processSteps.map((step) => (
              <div className={styles.processCard} key={step.title}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {step.step}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 14 (NEW): LONG-TERM VISION */}
      <section className={`${styles.section} ${styles.visionSection}`} aria-labelledby="long-term-vision-title">
        <Container>
          <div className={styles.visionContent}>
            <div className={styles.visionLeft}>
              <h2 id="long-term-vision-title">Our Long-Term Vision</h2>
              <div className={styles.storyText}>
                <p>
                  Digital Sphere aims to become a trusted digital growth partner for businesses across multiple industries. Our long-term goal is to continuously expand our capabilities, embrace emerging technologies, and help organizations adapt to an increasingly digital future.
                </p>
                <p>
                  We envision a future where innovative design, secure development practices, and strategic digital growth work together to create meaningful impact for businesses of every size.
                </p>
              </div>
            </div>
            <div className={styles.visionRight}>
              <p className={styles.visionQuote}>
                "Our ultimate goal is to lead the next generation of web engineering, helping teams navigate complex digital expansions smoothly."
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 15 (NEW): COMMUNITY IMPACT */}
      <section className={`${styles.section} ${styles.communitySection}`} aria-labelledby="community-impact-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="community-impact-title"
              title="Creating Value Beyond Projects"
              description="Digital Sphere believes that technology and knowledge should create positive impact beyond commercial projects. We are committed to continuous learning, knowledge sharing, supporting innovation, and contributing to the growth of the digital community."
            />
          </div>
          <p className={styles.storyText}>
            Our goal is not only to build successful digital products but also to encourage creativity, collaboration, and professional development within the technology ecosystem.
          </p>
          <div className={styles.communityGrid}>
            {communityImpactCards.map((card) => {
              const Icon = card.icon
              return (
                <div className={styles.communityCard} key={card.title}>
                  <div className={styles.iconBox} aria-hidden="true">
                    <Icon />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 16: STATISTICS */}
      <section className={styles.section} aria-labelledby="stats-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeader
              titleId="stats-title"
              title="Our Performance Metrics"
              description="Numbers that demonstrate our commitment to quality, support, and business growth."
            />
          </div>
          <div className={styles.statsGrid}>
            {statItems.map((stat) => (
              <div className={styles.statCard} key={stat.label}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 17: FINAL CTA */}
      <section className={`${styles.section} ${styles.ctaSection}`} aria-label="CTA">
        <Container>
          <div className={styles.ctaCard}>
            <h2>Let's Build Something Amazing Together</h2>
            <p>
              Whether you're launching a new business or scaling an existing one, Digital Sphere is ready to help bring your ideas to life.
            </p>
            <div className={styles.ctaActions}>
              <div className={styles.primaryBtn}>
                <Link to={ROUTES.contact}>Start Your Project</Link>
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
