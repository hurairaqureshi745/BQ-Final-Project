import { Link } from 'react-router-dom'
import { FiClock, FiArrowRight } from 'react-icons/fi'
import styles from './BlogCard.module.css'

export function BlogCard({ article }) {
  if (!article) return null

  return (
    <article className={styles.card}>
      <Link to={`/blog/${article.slug}`} className={styles.thumbnailLink} aria-label={`Read ${article.title}`}>
        <div 
          className={styles.thumbnail} 
          style={{ background: article.featuredImage || 'var(--gradient-primary)' }}
        />
      </Link>
      
      <div className={styles.content}>
        <div className={styles.metaRow}>
          <span className={styles.category}>{article.category}</span>
          <span className={styles.readTime}>
            <FiClock aria-hidden="true" />
            <span>{article.readTime}</span>
          </span>
        </div>
        
        <h3 className={styles.title}>
          <Link to={`/blog/${article.slug}`}>{article.title}</Link>
        </h3>
        
        <p className={styles.excerpt}>{article.excerpt}</p>
        
        <div className={styles.footerRow}>
          <div className={styles.author}>
            <div className={styles.avatar} aria-hidden="true">
              {article.author.initials}
            </div>
            <span className={styles.authorName}>{article.author.name}</span>
          </div>
          <span className={styles.date}>{article.date}</span>
        </div>
        
        <div className={styles.ctaWrapper}>
          <Link to={`/blog/${article.slug}`} className={styles.ctaLink}>
            <span>Read More</span>
            <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}
