import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { ROUTES } from '../../utils/routes'

export function CallToActionBanner() {
  return (
    <section aria-labelledby="cta-title">
      <Container>
        <h2 id="cta-title">Ready to build a premium digital presence with Digital Sphere?</h2>
        <p>
          Book a strategy conversation and get a practical roadmap for your website, app,
          marketing funnel, brand system, or cyber security priorities.
        </p>
        <Button href={ROUTES.contact}>Book a consultation</Button>
      </Container>
    </section>
  )
}
