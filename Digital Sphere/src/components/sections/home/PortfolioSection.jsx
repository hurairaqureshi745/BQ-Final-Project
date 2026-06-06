import styles from './PortfolioSection.module.css'

export function PortfolioSection() {
  return (
    <section className={`reveal-trigger ${styles.section}`} aria-labelledby="portfolio-title">
      <h2 id="portfolio-title">Portfolio Section</h2>
    </section>
  )
}
