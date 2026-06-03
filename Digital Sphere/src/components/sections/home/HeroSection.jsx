import styles from './HeroSection.module.css'

export function HeroSection() {
  return (
    <section className={styles.section} aria-labelledby="home-hero-title">
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.badge}>Digital Agency</p>

          <h1 id="home-hero-title" className={styles.heading}>
            Building Digital Experiences That <span>Drive Growth</span>
          </h1>

          <p className={styles.description}>
            Digital Sphere helps modern brands design, develop, and launch powerful digital
            products with strategy, creativity, and secure technology.
          </p>

          <div className={styles.actions} aria-label="Hero actions">
            <a className={styles.primaryButton} href="/contact">
              Get Started
            </a>
            <a className={styles.secondaryButton} href="/services">
              View Services
            </a>
          </div>

          <ul className={styles.trustList} aria-label="Digital Sphere trust indicators">
            <li>
              <strong>100+</strong>
              <span>Projects</span>
            </li>
            <li>
              <strong>50+</strong>
              <span>Clients</span>
            </li>
            <li>
              <strong>5+</strong>
              <span>Team Members</span>
            </li>
          </ul>
        </div>

        <div className={styles.visual} aria-label="Digital Sphere innovation dashboard">
          <div className={styles.glowCircle} aria-hidden="true" />
          <div className={styles.visualCard}>
            <p>Growth Score</p>
            <strong>98%</strong>
            <span>Digital performance strategy</span>
          </div>
          <div className={styles.statCard}>
            <strong>24/7</strong>
            <span>Secure digital systems</span>
          </div>
          <div className={styles.orbit} aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
