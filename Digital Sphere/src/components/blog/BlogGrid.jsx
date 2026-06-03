import { BlogCard } from './BlogCard'
import styles from './BlogGrid.module.css'

export function BlogGrid({ articles }) {
  if (!articles || articles.length === 0) {
    return (
      <div className={styles.emptyState}>
        <h3>No Articles Found</h3>
        <p>Try adjusting your search queries or selecting a different category filter.</p>
      </div>
    )
  }

  return (
    <div className={styles.grid}>
      {articles.map((article) => (
        <BlogCard key={article.id} article={article} />
      ))}
    </div>
  )
}
