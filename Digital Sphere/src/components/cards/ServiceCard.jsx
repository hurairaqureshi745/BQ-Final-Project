import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'

export function ServiceCard({ service }) {
  const isWebDev = service.title === 'Web Development'
  const isUiUx = service.title === 'UI/UX Design'

  return (
    <article>
      <p>{service.number}</p>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      {isWebDev && (
        <Link to={ROUTES.webDevelopment} style={{ display: 'inline-block', marginTop: '1rem', color: '#06b6d4', fontWeight: '700', textDecoration: 'none' }}>
          Learn More &rarr;
        </Link>
      )}
      {isUiUx && (
        <Link to={ROUTES.uiUxDesign} style={{ display: 'inline-block', marginTop: '1rem', color: '#06b6d4', fontWeight: '700', textDecoration: 'none' }}>
          Learn More &rarr;
        </Link>
      )}
    </article>
  )
}
