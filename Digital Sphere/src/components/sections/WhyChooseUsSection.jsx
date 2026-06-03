import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'
import { whyChooseUs } from '../../data/whyChooseUs'

export function WhyChooseUsSection() {
  return (
    <section aria-labelledby="why-choose-us-title">
      <Container>
        <SectionHeader
          eyebrow="Why choose Digital Sphere"
          titleId="why-choose-us-title"
          title="A premium agency process built for clarity and confident launches"
          description="Our structure gives founders, marketing teams, and executives a clear view of progress from discovery to delivery."
        />
        <div>
          {whyChooseUs.map((reason) => (
            <article key={reason.title}>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
