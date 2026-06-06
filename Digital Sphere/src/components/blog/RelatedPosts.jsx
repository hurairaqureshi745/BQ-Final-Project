import { blogData } from '../../data/blogData'
import { BlogCard } from './BlogCard'
import styles from './RelatedPosts.module.css'

export function RelatedPosts({ currentArticle }) {
  if (!currentArticle) return null

  // Filter out the current article
  const otherArticles = blogData.filter(article => article.id !== currentArticle.id)

  // Find posts with the same category
  let related = otherArticles.filter(article => article.category === currentArticle.category)

  // If there are less than 3, backfill with other posts
  if (related.length < 3) {
    const remainingCount = 3 - related.length
    const nonRelated = otherArticles.filter(article => article.category !== currentArticle.category)
    related = [...related, ...nonRelated.slice(0, remainingCount)]
  } else {
    related = related.slice(0, 3)
  }

  if (related.length === 0) return null

  return (
    <section className={`reveal-trigger ${styles.section}`} aria-labelledby="related-posts-title">
      <h2 id="related-posts-title" className={styles.title}>
        Related <span>Articles</span>
      </h2>
      <div className={styles.grid}>
        {related.map(article => (
          <BlogCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  )
}
