import { Link } from 'react-router-dom'
import { FiClock, FiArrowRight } from 'react-icons/fi'
import styles from './FeaturedArticle.module.css'

export function FeaturedArticle({ article }) {
  if (!article) return null

  return (
    <article className={styles.container}>
      <Link to={`/blog/${article.slug}`} className={styles.imageLink} aria-label={`Read ${article.title}`}>
        <div 
          className={styles.imageWrapper} 
          style={{ background: article.featuredImage || 'var(--gradient-primary)' }}
        >
          <span className={styles.imageBadge}>Featured Article</span>
        </div>
      </Link>
      
      <div className={styles.content}>
        <div className={styles.metaRow}>
          <span className={styles.category}>{article.category}</span>
          <span className={styles.readTime}>
            <FiClock aria-hidden="true" />
            <span>{article.readTime}</span>
          </span>
        </div>
        
        <h2 className={styles.title}>
          <Link to={`/blog/${article.slug}`}>{article.title}</Link>
        </h2>
        
        <p className={styles.excerpt}>{article.excerpt}</p>
        
        <div className={styles.footerRow}>
          <div className={styles.author}>
            <div className={styles.avatar} aria-hidden="true">
              {article.author.initials}
            </div>
            <div className={styles.authorInfo}>
              <span className={styles.authorName}>{article.author.name}</span>
              <span className={styles.authorRole}>{article.author.role}</span>
            </div>
          </div>
          
          <span className={styles.date}>{article.date}</span>
        </div>

        <div className={styles.ctaWrapper}>
          <Link to={`/blog/${article.slug}`} className={styles.ctaLink}>
            <span>Read Full Article</span>
            <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}
