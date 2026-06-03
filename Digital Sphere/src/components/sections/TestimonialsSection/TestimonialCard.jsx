import { FiStar } from 'react-icons/fi'
import { RiDoubleQuotesL } from 'react-icons/ri'
import styles from './TestimonialsSection.module.css'

export function TestimonialCard({ testimonial }) {
  return (
    <article className={styles.card}>
      <div className={styles.quoteIcon} aria-hidden="true">
        <RiDoubleQuotesL />
      </div>

      <div className={styles.rating} aria-label="5 out of 5 star rating">
        {Array.from({ length: 5 }).map((_, index) => (
          <FiStar key={index} aria-hidden="true" />
        ))}
      </div>

      <p className={styles.review}>{testimonial.review}</p>

      <footer className={styles.client}>
        <h3>{testimonial.name}</h3>
        <p>{testimonial.position}</p>
      </footer>
    </article>
  )
}
