import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FiClock, FiArrowLeft, FiUser, FiChevronDown } from 'react-icons/fi'
import { Container } from '../../components/common/Container'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import { blogData } from '../../data/blogData'
import { ReadingProgress } from '../../components/blog/ReadingProgress'
import { TableOfContents } from '../../components/blog/TableOfContents'
import { AuthorCard } from '../../components/blog/AuthorCard'
import { RelatedPosts } from '../../components/blog/RelatedPosts'
import { NewsletterCTA } from '../../components/blog/NewsletterCTA'
import styles from './BlogPost.module.css'

const slugify = (text) => 
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ''}`}>
      <button 
        className={styles.faqQuestionBtn} 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <FiChevronDown className={`${styles.faqChevron} ${isOpen ? styles.faqChevronRotated : ''}`} />
      </button>
      <div className={`${styles.faqAnswerCollapse} ${isOpen ? styles.faqAnswerCollapseOpen : ''}`}>
        <div className={styles.faqAnswerContent}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}

export function BlogPost() {
  const { slug } = useParams()
  const article = blogData.find((post) => post.slug === slug)

  // Dynamically update document title if article is found
  useDocumentTitle(article ? `${article.title} | Blog | Digital Sphere` : 'Article Not Found | Digital Sphere')

  if (!article) {
    return (
      <article className={styles.notFoundPage}>
        <Container>
          <div className={styles.notFoundCard}>
            <h2>Article Not Found</h2>
            <p>We couldn't find the article you are looking for. It might have been moved or deleted.</p>
            <Link to="/blog" className={styles.backLink}>
              <FiArrowLeft aria-hidden="true" />
              <span>Back to Blog</span>
            </Link>
          </div>
        </Container>
      </article>
    )
  }

  // Helper to render content blocks
  const renderBlock = (block, index) => {
    switch (block.type) {
      case 'h2':
      case 'heading':
        if (block.type === 'heading' && block.level === 3) {
          return (
            <h3 key={index} id={slugify(block.text)} className={styles.h3}>
              {block.text}
            </h3>
          )
        }
        return (
          <h2 key={index} id={slugify(block.text)} className={styles.h2}>
            {block.text}
          </h2>
        )
      case 'h3':
        return (
          <h3 key={index} id={slugify(block.text)} className={styles.h3}>
            {block.text}
          </h3>
        )
      case 'p':
      case 'paragraph':
        return (
          <p key={index} className={styles.p}>
            {block.text}
          </p>
        )
      case 'list':
        return (
          <ul key={index} className={styles.ul}>
            {block.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )
      case 'quote':
        return (
          <blockquote key={index} className={styles.quote}>
            <p>{block.text}</p>
            {block.author && <cite className={styles.cite}>— {block.author}</cite>}
          </blockquote>
        )
      case 'stat':
        return (
          <div key={index} className={styles.statCard}>
            <strong>{block.value}</strong>
            <span>{block.label}</span>
          </div>
        )
      case 'callout':
        return (
          <div 
            key={index} 
            className={`${styles.callout} ${
              block.styleType === 'warning' ? styles.calloutWarning : styles.calloutInfo
            }`}
          >
            <p>{block.text}</p>
          </div>
        )
      case 'image':
        return (
          <figure key={index} className={styles.imageWrapper}>
            <img src={block.src} alt={block.alt} />
            {block.caption && <figcaption className={styles.figcaption}>{block.caption}</figcaption>}
          </figure>
        )
      case 'code':
        return (
          <pre key={index} className={styles.codeBlock}>
            <code>{block.code}</code>
          </pre>
        )
      case 'faq':
        return (
          <FAQItem key={index} question={block.question} answer={block.answer} />
        )
      case 'cta':
        return (
          <div key={index} className={styles.ctaBlock}>
            <h3 className={styles.ctaTitle}>{block.title}</h3>
            <p className={styles.ctaDescription}>{block.description}</p>
            <div className={styles.ctaButtons}>
              {block.buttons.map((btn, bIdx) => {
                const isHash = btn.link.startsWith('#') || btn.link.startsWith('/#')
                if (isHash) {
                  return (
                    <a
                      key={bIdx}
                      href={btn.link}
                      className={`${styles.ctaBtn} ${btn.variant === 'secondary' ? styles.btnSecondary : styles.btnPrimary}`}
                    >
                      {btn.text}
                    </a>
                  )
                }
                return (
                  <Link
                    key={bIdx}
                    to={btn.link}
                    className={`${styles.ctaBtn} ${btn.variant === 'secondary' ? styles.btnSecondary : styles.btnPrimary}`}
                  >
                    {btn.text}
                  </Link>
                )
              })}
            </div>
          </div>
        )
      default:
        return null
    }
  }


  return (
    <article className={styles.page}>
      {/* READING PROGRESS BAR */}
      <ReadingProgress />

      {/* HEADER */}
      <header className={styles.header}>
        <Container>
          <Link to="/blog" className={styles.backLink}>
            <FiArrowLeft aria-hidden="true" />
            <span>Back to Blog</span>
          </Link>
          
          <div className={styles.headerContent}>
            <span className={styles.category}>{article.category}</span>
            <h1 className={styles.title}>{article.title}</h1>
            <p className={styles.excerpt}>{article.excerpt}</p>
            
            <div className={styles.meta}>
              <div className={styles.author}>
                <div className={styles.avatar} aria-hidden="true">
                  {article.author.initials}
                </div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{article.author.name}</span>
                  <span className={styles.authorRole}>{article.author.role}</span>
                </div>
              </div>
              
              <div className={styles.metaRight}>
                <span className={styles.date}>{article.date}</span>
                <span className={styles.divider} aria-hidden="true">|</span>
                <span className={styles.readTime}>
                  <FiClock aria-hidden="true" />
                  <span>{article.readTime}</span>
                </span>
              </div>
            </div>
          </div>

          <div 
            className={styles.coverImage}
            style={{ background: article.featuredImage || 'var(--gradient-primary)' }}
            aria-hidden="true"
          />
        </Container>
      </header>

      {/* ARTICLE BODY & SIDEBAR */}
      <div className={styles.bodyWrapper}>
        <Container className={styles.bodyContainer}>
          <div className={styles.layoutGrid}>
            {/* SIDEBAR: TABLE OF CONTENTS */}
            <aside className={styles.sidebar}>
              <TableOfContents content={article.content} />
            </aside>

            {/* MAIN ARTICLE CONTENT */}
            <main className={styles.mainContent}>
              <div className={styles.contentBlocks}>
                {article.content.map((block, index) => renderBlock(block, index))}
              </div>

              {/* AUTHOR PROFILE CARD */}
              <AuthorCard />
            </main>
          </div>
        </Container>
      </div>

      {/* RELATED ARTICLES */}
      <Container>
        <RelatedPosts currentArticle={article} />
        
        {/* NEWSLETTER CTA */}
        <NewsletterCTA />
      </Container>
    </article>
  )
}
