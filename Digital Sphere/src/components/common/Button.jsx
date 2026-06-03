import { Link } from 'react-router-dom'

export function Button({ children, href }) {
  if (href?.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  }

  return <Link to={href}>{children}</Link>
}
