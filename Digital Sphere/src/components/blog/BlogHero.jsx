import styles from './BlogHero.module.css'

export function BlogHero() {
  return (
    <div className={styles.hero}>
      <span className={styles.badge}>Digital Insights</span>
      <h1 className={styles.title}>
        Insights, Strategies & <span>Digital Innovation</span>
      </h1>
      <p className={styles.description}>
        Expert articles covering web development, UI/UX design, mobile applications, digital marketing, cyber security, graphic design, and business growth.
      </p>
      <div className={styles.actions}>
        <a href="#articles" className={styles.primaryBtn}>
          Explore Articles
        </a>
        <a href="#subscribe" className={styles.secondaryBtn}>
          Subscribe
        </a>
      </div>
    </div>
  )
}
