import styles from './ContactPreviewSection.module.css'

export function ContactInfoCard({ icon: Icon, label, value }) {
  const isArray = Array.isArray(value)

  return (
    <article className={`reveal-trigger ${styles.card}`}>
      <div className={styles.iconBox} aria-hidden="true">
        <Icon />
      </div>
      <div className={styles.cardBody}>
        <span className={styles.cardLabel}>{label}</span>
        {isArray ? (
          <ul className={styles.valueList}>
            {value.map((val) => (
              <li key={val} className={styles.cardValue}>
                {label === 'Phone' ? (
                  <a href={`tel:${val.replace(/\s+/g, '')}`}>{val}</a>
                ) : (
                  val
                )}
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.cardValue}>
            {label === 'Email' ? (
              <a href={`mailto:${value}`}>{value}</a>
            ) : label === 'Phone' ? (
              <a href={`tel:${value.replace(/\s+/g, '')}`}>{value}</a>
            ) : (
              <span>{value}</span>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
