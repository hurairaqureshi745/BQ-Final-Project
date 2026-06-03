import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { ROUTES } from '../../utils/routes'

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title">
      <Container>
        <p>Premium digital agency for growth-focused brands</p>
        <h1 id="hero-title">Digital Sphere builds secure, beautiful, high-performing digital experiences.</h1>
        <p>
          We combine web development, graphic design, digital marketing, cyber security, and
          app development to help brands launch with confidence.
        </p>
        <nav aria-label="Hero actions">
          <ul>
            <li>
              <Button href={ROUTES.contact}>Start a project</Button>
            </li>
            <li>
              <Button href={ROUTES.services}>Explore services</Button>
            </li>
          </ul>
        </nav>
      </Container>
    </section>
  )
}
