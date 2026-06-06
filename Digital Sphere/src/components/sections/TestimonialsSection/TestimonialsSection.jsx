import { Container } from '../../common/Container'
import { SectionHeader } from '../../common/SectionHeader'
import { Carousel } from '../../common/Carousel'
import { TestimonialCard } from './TestimonialCard'
import { testimonials } from './testimonialsData'
import styles from './TestimonialsSection.module.css'

export function TestimonialsSection() {
  return (
    <section className={`reveal-trigger ${`${styles.section}`}`} aria-labelledby="testimonials-title">
      <Container className={styles.container}>
        <div className={styles.sectionHeader}>
          <SectionHeader
            eyebrow="Testimonials"
            titleId="testimonials-title"
            title="What Our Clients Say"
            description="Trusted by businesses across industries to deliver impactful digital experiences and measurable results."
          />
        </div>

        {/* Replaced static grid with Safe-Mode Carousel */}
        <Carousel gap={24}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </Carousel>
      </Container>
    </section>
  )
}
