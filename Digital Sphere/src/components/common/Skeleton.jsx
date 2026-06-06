import styles from './Skeleton.module.css'

export function Skeleton({ className, type = 'card' }) {
  if (type === 'card') {
    return (
      <div className={`${styles.skeleton} ${styles.card} ${className || ''}`} aria-hidden="true">
        <div className={styles.image}></div>
        <div className={styles.content}>
          <div className={styles.title}></div>
          <div className={styles.text}></div>
          <div className={styles.textShort}></div>
          <div className={styles.meta}></div>
        </div>
      </div>
    )
  }

  // Generic block
  return <div className={`${styles.skeleton} ${className || ''}`} aria-hidden="true"></div>
}
