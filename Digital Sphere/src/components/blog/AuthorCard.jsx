import styles from './AuthorCard.module.css'

export function AuthorCard() {
  return (
    <div className={styles.card}>
      <div className={styles.avatar} aria-hidden="true">
        DS
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>Digital Sphere Editorial Team</h3>
        <p className={styles.description}>
          Expert insights from our team of developers, designers, marketers, and cyber security professionals. We combine visual craftsmanship with bulletproof engineering to share modern business strategy tutorials.
        </p>
      </div>
    </div>
  )
}
