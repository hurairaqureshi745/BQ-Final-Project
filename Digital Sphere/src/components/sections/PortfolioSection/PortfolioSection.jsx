import { Button } from '../../common/Button'
import { Container } from '../../common/Container'
import { SectionHeader } from '../../common/SectionHeader'
import { PortfolioCard } from './PortfolioCard'
import { portfolioProjects } from './portfolioData'
import styles from './PortfolioSection.module.css'

export function PortfolioSection() {
  return (
    <section className={styles.section} aria-labelledby="portfolio-showcase-title">
      <Container className={styles.container}>
        <div className={styles.sectionHeader}>
          <SectionHeader
            eyebrow="Our Work"
            titleId="portfolio-showcase-title"
            title="Projects That Drive Real Business Growth"
            description="Explore a selection of digital experiences we've crafted for ambitious brands across multiple industries."
          />
        </div>

        <div className={styles.grid}>
          {portfolioProjects.map((project) => (
            <PortfolioCard key={project.title} project={project} />
          ))}
        </div>

        <div className={styles.cta}>
          <Button href="/portfolio">View Full Portfolio</Button>
        </div>
      </Container>
    </section>
  )
}
