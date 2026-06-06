import { FiClock, FiShield, FiTrendingUp, FiUsers } from 'react-icons/fi'
import styles from './WhyChooseUsSection.module.css'

const benefits = [
  {
    icon: FiUsers,
    title: 'Expert Team',
    description: 'A focused team of designers, developers, marketers, and security specialists.',
  },
  {
    icon: FiShield,
    title: 'Secure Solutions',
    description: 'Security-first thinking built into websites, apps, and digital systems.',
  },
  {
    icon: FiClock,
    title: 'Fast Delivery',
    description: 'Structured workflows that keep projects moving without sacrificing quality.',
  },
  {
    icon: FiTrendingUp,
    title: 'Growth Focused',
    description: 'Every solution is shaped around measurable business growth and long-term value.',
  },
]

const stats = [
  { value: '100+', label: 'Projects Delivered' },
  { value: '50+', label: 'Happy Clients' },
  { value: '5+', label: 'Team Members' },
  { value: '98%', label: 'Client Satisfaction' },
]

export function WhyChooseUsSection() {
  return (
    <section className={`reveal-trigger ${styles.section}`} aria-labelledby="why-choose-us-title">
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.badge}>Why Choose Us</p>
          <h2 id="why-choose-us-title">Built for brands that demand excellence</h2>
          <p className={styles.description}>
            Digital Sphere combines quality design, modern technology, secure development, and
            performance-driven strategy to help ambitious brands move with confidence.
          </p>

          <dl className={styles.stats} aria-label="Digital Sphere performance statistics">
            {stats.map((stat) => (
              <div className={styles.stat} key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles.benefitsGrid}>
          {benefits.map((benefit) => {
            const Icon = benefit.icon

            return (
              <article className={`reveal-trigger ${styles.benefitCard}`} key={benefit.title}>
                <div className={styles.iconBox} aria-hidden="true">
                  <Icon />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
