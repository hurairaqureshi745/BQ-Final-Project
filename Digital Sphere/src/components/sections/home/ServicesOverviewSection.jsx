import { Link } from 'react-router-dom'
import { ROUTES } from '../../../utils/routes'
import styles from './ServicesOverviewSection.module.css'

// Import service JPG image assets from src/assets
import webDevImg from '../../../assets/web development.jpg'
import uiUxImg from '../../../assets/ui ux design.jpg'
import mobileAppImg from '../../../assets/mobile app development.jpg'
import digitalMarketingImg from '../../../assets/digital marketing.jpg'
import cyberSecurityImg from '../../../assets/cyber security.jpg'
import graphicDesignImg from '../../../assets/Graphic Design.jpeg'

const services = [
  {
    image: webDevImg,
    title: 'Web Development',
    description: 'Fast, scalable websites and web platforms built for performance and growth.',
  },
  {
    image: uiUxImg,
    title: 'UI/UX Design',
    description: 'Clean digital interfaces that feel premium, intuitive, and conversion-focused.',
  },
  {
    image: mobileAppImg,
    title: 'Mobile App Development',
    description: 'Modern mobile app experiences designed for usability, speed, and reliability.',
  },
  {
    image: digitalMarketingImg,
    title: 'Digital Marketing',
    description: 'Growth campaigns, SEO strategy, and performance funnels for stronger visibility.',
  },
  {
    image: cyberSecurityImg,
    title: 'Cyber Security',
    description: 'Security reviews and protection strategies for safer digital products.',
  },
  {
    image: graphicDesignImg,
    title: 'Graphic Designing',
    description: 'Brand visuals, campaign assets, and creative systems with a polished agency look.',
  },
]

export function ServicesOverviewSection() {
  return (
    <section className={styles.section} aria-labelledby="services-overview-title">
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.badge}>Our Services</p>
          <h2 id="services-overview-title">Solutions built for modern digital growth</h2>
          <p className={styles.description}>
            Digital Sphere provides end-to-end digital services that help brands design, build,
            secure, and grow their online presence.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => {
            return (
              <article className={styles.card} key={service.title}>
                <div className={styles.imageBox}>
                  <img 
                    src={service.image} 
                    alt={`${service.title} illustration`} 
                    className={styles.serviceImage} 
                  />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link
                  to={
                    service.title === 'Web Development'
                      ? ROUTES.webDevelopment
                      : service.title === 'UI/UX Design'
                      ? ROUTES.uiUxDesign
                      : ROUTES.services
                  }
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
