import { Container } from '../../common/Container'
import { SectionHeader } from '../../common/SectionHeader'
import { TestimonialCard } from './TestimonialCard'
import { testimonials } from './testimonialsData'
import styles from './TestimonialsSection.module.css'

export function TestimonialsSection() {
  return (
    <section className={styles.section} aria-labelledby="testimonials-title">
      <Container className={styles.container}>
        <div className={styles.sectionHeader}>
          <SectionHeader
            eyebrow="Testimonials"
            titleId="testimonials-title"
            title="What Our Clients Say"
            description="Trusted by businesses across industries to deliver impactful digital experiences and measurable results."
          />
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  )
}
