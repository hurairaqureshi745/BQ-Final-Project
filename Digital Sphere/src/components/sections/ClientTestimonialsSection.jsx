import { TestimonialCard } from '../cards/TestimonialCard'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'
import { testimonials } from '../../data/testimonials'

export function ClientTestimonialsSection() {
  return (
    <section aria-labelledby="client-testimonials-title">
      <Container>
        <SectionHeader
          eyebrow="Client testimonials"
          titleId="client-testimonials-title"
          title="What clients say after partnering with Digital Sphere"
          description="Use this section to build trust with founder, marketing, and operations decision-makers."
        />
        <div>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  )
}
