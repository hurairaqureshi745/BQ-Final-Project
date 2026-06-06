import { Link } from 'react-router-dom'
import {
  FiLinkedin,
  FiGithub,
  FiFacebook,
  FiInstagram,
  FiMail,
  FiPhone,
  FiMapPin
} from 'react-icons/fi'
import { Container } from '../common/Container'
import { navigationLinks } from '../../data/navigation'
import { ROUTES } from '../../utils/routes'
import logoImg from '../../assets/logo.png'
import { CopyToClipboard } from '../common/CopyToClipboard'
import styles from './Footer.module.css'

const servicesList = [
  'Web Development',
  'UI/UX Design',
  'Mobile Apps',
  'Digital Marketing',
  'Cyber Security',
  'Graphic Designing'
]

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.column}>
            <Link className={styles.logoWrapper} to={ROUTES.home} aria-label="Digital Sphere home">
              <img src={logoImg} alt="Digital Sphere Logo" className={styles.logoIcon} />
              <span>Digital Sphere</span>
            </Link>
            <p className={styles.description}>
              Digital Sphere helps businesses grow through modern web development, design, marketing, and secure digital solutions.
            </p>
            <ul className={styles.socials} aria-label="Digital Sphere social media links">
              <li className={styles.socialIcon}>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FiLinkedin />
                </a>
              </li>
              <li className={styles.socialIcon}>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FiGithub />
                </a>
              </li>
              <li className={styles.socialIcon}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FiFacebook />
                </a>
              </li>
              <li className={styles.socialIcon}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FiInstagram />
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className={styles.column}>
            <h3 className={styles.title}>Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className={styles.linksList}>
                {navigationLinks.map((link) => (
                  <li className={styles.linkItem} key={link.href}>
                    <Link to={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services Column */}
          <div className={styles.column}>
            <h3 className={styles.title}>Services</h3>
            <ul className={styles.linksList}>
              {servicesList.map((service) => (
                <li className={styles.linkItem} key={service}>
                  <Link to={ROUTES.services}>{service}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className={styles.column}>
            <h3 className={styles.title}>Contact Info</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <FiMail aria-hidden="true" />
                <CopyToClipboard text="digitalsphereteam@gmail.com" hrefType="email" />
              </li>
              <li className={styles.contactItem}>
                <FiPhone aria-hidden="true" />
                <CopyToClipboard text="+92 344 5038278" hrefType="phone" />
              </li>
              <li className={styles.contactItem}>
                <FiMapPin aria-hidden="true" />
                <span>Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomLeft}>
            <p>
              &copy; {new Date().getFullYear()} Digital Sphere. All Rights Reserved.
              <span className={styles.separator}> | </span>
              <Link to={ROUTES.privacyPolicy} className={styles.privacyLink}>Privacy Policy</Link>
              <span className={styles.separator}> | </span>
              <Link to={ROUTES.termsConditions} className={styles.privacyLink}>Terms &amp; Conditions</Link>
              <span className={styles.separator}> | </span>
              <Link to={ROUTES.refundPolicy} className={styles.privacyLink}>Refund Policy</Link>
            </p>
          </div>
          <div className={styles.bottomRight}>
            <p>Designed & Developed by Team Digital Sphere.</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
