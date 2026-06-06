import { Button } from '../../common/Button'
import { Container } from '../../common/Container'
import { SectionHeader } from '../../common/SectionHeader'
import { Carousel } from '../../common/Carousel'
import { Skeleton } from '../../common/Skeleton'
import { useSimulatedFetch } from '../../../hooks/useSimulatedFetch'
import { PortfolioCard } from './PortfolioCard'
import { portfolioProjects } from './portfolioData'
import styles from './PortfolioSection.module.css'

export function PortfolioSection() {
  const { data, isLoading } = useSimulatedFetch(portfolioProjects, 800)

  return (
    <section className={`reveal-trigger ${`${styles.section}`}`} aria-labelledby="portfolio-showcase-title">
      <Container className={styles.container}>
        <div className={styles.sectionHeader}>
          <SectionHeader
            eyebrow="Our Work"
            titleId="portfolio-showcase-title"
            title="Projects That Drive Real Business Growth"
            description="Explore a selection of digital experiences we've crafted for ambitious brands across multiple industries."
          />
        </div>

        {/* Replaced static grid with Safe-Mode Carousel and Skeletons */}
        <Carousel>
          {isLoading 
            ? Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={`skeleton-${i}`} type="card" className={styles.portfolioSkeleton} />
              ))
            : data?.map((project) => (
                <PortfolioCard key={project.title} project={project} />
              ))
          }
        </Carousel>

        <div className={styles.cta}>
          <Button href="/portfolio">View Full Portfolio</Button>
        </div>
      </Container>
    </section>
  )
}
