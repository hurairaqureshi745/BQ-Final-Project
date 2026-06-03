import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { ROUTES } from '../utils/routes'

export function NotFound() {
  useDocumentTitle('404 | Digital Sphere')

  return (
    <article>
      <Container>
        <p>404</p>
        <h1>This Digital Sphere page could not be found.</h1>
        <p>
          The page may have moved, or the link may be outdated. Return to the homepage to keep
          exploring Digital Sphere.
        </p>
        <Button href={ROUTES.home}>Back to Digital Sphere home</Button>
      </Container>
    </article>
  )
}
