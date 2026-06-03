import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'
import { ROUTES } from '../../utils/routes'

export function ContactPreviewSection() {
  return (
    <section aria-labelledby="contact-preview-title">
      <Container>
        <SectionHeader
          eyebrow="Contact preview"
          titleId="contact-preview-title"
          title="Tell Digital Sphere what you want to launch next"
          description="Share your goals, timeline, and service needs. Our team can help shape the right digital roadmap."
        />
        <address>
          Email: hello@digitalsphere.studio
          <br />
          Availability: Strategy calls, project audits, and monthly retainers.
        </address>
        <Button href={ROUTES.contact}>Go to contact page</Button>
      </Container>
    </section>
  )
}
