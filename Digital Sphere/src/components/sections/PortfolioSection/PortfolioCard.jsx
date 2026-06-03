import styles from './PortfolioSection.module.css'

export function PortfolioCard({ project }) {
  return (
    <article className={styles.card}>
      <div className={`${styles.preview} ${styles[project.accent]}`}>
        <span>Project Preview</span>
      </div>

      <div className={styles.cardContent}>
        <p className={styles.category}>{project.category}</p>
        <h3>{project.title}</h3>
        <p className={styles.cardDescription}>{project.description}</p>

        <ul className={styles.tags} aria-label={`${project.title} technologies`}>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
