import { PortfolioCard } from '../cards/PortfolioCard'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'
import { portfolioProjects } from '../../data/portfolio'

export function PortfolioShowcaseSection() {
  return (
    <section aria-labelledby="portfolio-showcase-title">
      <Container>
        <SectionHeader
          eyebrow="Portfolio showcase"
          titleId="portfolio-showcase-title"
          title="Selected Digital Sphere work across design, technology, and growth"
          description="Use this section for case studies, measurable outcomes, and premium project storytelling."
        />
        <div>
          {portfolioProjects.map((project) => (
            <PortfolioCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </section>
  )
}
