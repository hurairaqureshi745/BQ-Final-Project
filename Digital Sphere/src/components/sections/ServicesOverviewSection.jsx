import { ServiceCard } from '../cards/ServiceCard'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'
import { services } from '../../data/services'

export function ServicesOverviewSection() {
  return (
    <section aria-labelledby="services-overview-title">
      <Container>
        <SectionHeader
          eyebrow="Services overview"
          titleId="services-overview-title"
          title="One agency team for strategy, design, technology, growth, and security"
          description="Digital Sphere keeps every service connected to business outcomes and production quality."
        />
        <div>
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </Container>
    </section>
  )
}
