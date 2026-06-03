import { Button } from '../../common/Button'
import { Container } from '../../common/Container'
import styles from './CTABannerSection.module.css'

export function CTABannerSection() {
  return (
    <section className={styles.section} aria-labelledby="cta-banner-title">
      <Container className={styles.container}>
        <div className={styles.banner}>
          <p className={styles.badge}>Let's Build Something Great</p>
          <h2 id="cta-banner-title">Ready To Transform Your Digital Presence?</h2>
          <p className={styles.description}>
            Partner with Digital Sphere to create modern digital experiences that help your
            business grow, engage customers, and achieve measurable results.
          </p>

          <div className={styles.actions} aria-label="CTA actions">
            <Button href="/contact">Start Your Project</Button>
            <Button href="/contact">Schedule Consultation</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
