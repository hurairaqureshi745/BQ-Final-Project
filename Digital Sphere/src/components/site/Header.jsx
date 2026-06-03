import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from '../common/Container'
import { navigationLinks } from '../../data/navigation'
import { ROUTES } from '../../utils/routes'
import logoImg from '../../assets/logo.png'
import styles from './Header.module.css'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <NavLink className={styles.logo} to={ROUTES.home} aria-label="Digital Sphere home">
          <img src={logoImg} alt="Digital Sphere Logo" className={styles.logoIcon} />
          <span>Digital Sphere</span>
        </NavLink>

        <button
          className={styles.menuButton}
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <nav
          id="primary-navigation"
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}
          aria-label="Primary navigation"
        >
          <ul className={styles.navList}>
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                  }
                  to={link.href}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <NavLink className={styles.mobileCta} to={ROUTES.contact} onClick={closeMenu}>
            Get Started
          </NavLink>
        </nav>

        <div className={styles.actions}>
          <NavLink className={styles.ctaButton} to={ROUTES.contact}>
            Get Started
          </NavLink>
        </div>
      </Container>
    </header>
  )
}
