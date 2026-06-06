import { useState } from 'react'
import { Container } from '../../components/common/Container'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import { blogData } from '../../data/blogData'
import { useSimulatedFetch } from '../../hooks/useSimulatedFetch'
import { BlogHero } from '../../components/blog/BlogHero'
import { FeaturedArticle } from '../../components/blog/FeaturedArticle'
import { BlogSearch } from '../../components/blog/BlogSearch'
import { CategoryFilter } from '../../components/blog/CategoryFilter'
import { BlogGrid } from '../../components/blog/BlogGrid'
import { NewsletterCTA } from '../../components/blog/NewsletterCTA'
import { Skeleton } from '../../components/common/Skeleton'
import { EmptyState } from '../../components/common/EmptyState'
import styles from './Blog.module.css'

export function Blog() {
  useDocumentTitle('Insights & Strategies | Digital Sphere')

  const [searchValue, setSearchValue] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const { data: asyncBlogData, isLoading } = useSimulatedFetch(blogData, 800)
  const currentData = asyncBlogData || []

  // Find the featured post
  const featuredPost = currentData.find((post) => post.featured)

  // Filter posts for the grid
  const filteredPosts = currentData.filter((post) => {
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
    <article className={`reveal-trigger ${styles.page}`}>
      <Container>
        {/* SECTION 1: HERO */}
        <BlogHero />

        {/* SECTION 2: FEATURED ARTICLE */}
        {!searchValue && activeCategory === 'All' && (
          <section className={`reveal-trigger ${styles.featuredSection}`} aria-label="Featured article">
            {isLoading ? (
              <Skeleton type="card" className={styles.featuredSkeleton} />
            ) : featuredPost ? (
              <FeaturedArticle article={featuredPost} />
            ) : null}
          </section>
        )}

        {/* ARTICLES HUB SECTION */}
        <section className={`reveal-trigger ${styles.articlesHub}`} id="articles" aria-label="Articles Feed">
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
          {isLoading ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--space-xl)' }}>
              <Skeleton type="card" />
              <Skeleton type="card" />
              <Skeleton type="card" />
              <Skeleton type="card" />
              <Skeleton type="card" />
              <Skeleton type="card" />
            </div>
          ) : filteredPosts.length > 0 ? (
            <BlogGrid articles={filteredPosts} />
          ) : (
            <EmptyState 
              title="No Articles Found" 
              message="We couldn't find any articles matching your search or filter criteria. Try adjusting your search." 
            />
          )}
        </section>

        {/* SECTION 6: NEWSLETTER CTA */}
        <NewsletterCTA />
      </Container>
    </article>
  )
}
