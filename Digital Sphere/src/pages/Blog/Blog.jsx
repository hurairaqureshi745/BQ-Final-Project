import { useState } from 'react'
import { Container } from '../../components/common/Container'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import { blogData } from '../../data/blogData'
import { BlogHero } from '../../components/blog/BlogHero'
import { FeaturedArticle } from '../../components/blog/FeaturedArticle'
import { BlogSearch } from '../../components/blog/BlogSearch'
import { CategoryFilter } from '../../components/blog/CategoryFilter'
import { BlogGrid } from '../../components/blog/BlogGrid'
import { NewsletterCTA } from '../../components/blog/NewsletterCTA'
import styles from './Blog.module.css'

export function Blog() {
  useDocumentTitle('Insights & Strategies | Digital Sphere')

  const [searchValue, setSearchValue] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  // Find the featured post
  const featuredPost = blogData.find((post) => post.featured)

  // Filter posts for the grid
  const filteredPosts = blogData.filter((post) => {
    // 1. Exclude the main featured post if we are showing all posts and no active search query is set
    if (!searchValue && activeCategory === 'All' && post.featured) {
      return false
    }

    // 2. Category Filter
    if (activeCategory !== 'All' && post.category !== activeCategory) {
      return false
    }

    // 3. Search Filter
    if (searchValue.trim()) {
      const query = searchValue.toLowerCase()
      const matchesTitle = post.title.toLowerCase().includes(query)
      const matchesExcerpt = post.excerpt.toLowerCase().includes(query)
      const matchesKeywords = post.keywords.some((keyword) =>
        keyword.toLowerCase().includes(query)
      )
      return matchesTitle || matchesExcerpt || matchesKeywords
    }

    return true
  })

  return (
    <article className={styles.page}>
      <Container>
        {/* SECTION 1: HERO */}
        <BlogHero />

        {/* SECTION 2: FEATURED ARTICLE */}
        {!searchValue && activeCategory === 'All' && featuredPost && (
          <section className={styles.featuredSection} aria-label="Featured article">
            <FeaturedArticle article={featuredPost} />
          </section>
        )}

        {/* ARTICLES HUB SECTION */}
        <section className={styles.articlesHub} id="articles" aria-label="Articles Feed">
          <div className={styles.filterBar}>
            {/* SECTION 3: SEARCH BAR */}
            <BlogSearch searchValue={searchValue} setSearchValue={setSearchValue} />
            
            {/* SECTION 4: CATEGORY FILTER */}
            <CategoryFilter
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </div>

          {/* SECTION 5: BLOG GRID */}
          <BlogGrid articles={filteredPosts} />
        </section>

        {/* SECTION 6: NEWSLETTER CTA */}
        <NewsletterCTA />
      </Container>
    </article>
  )
}
