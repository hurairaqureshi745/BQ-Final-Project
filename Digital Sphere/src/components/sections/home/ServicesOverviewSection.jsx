import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../utils/routes'
import styles from './ServicesOverviewSection.module.css'

import {
  FiMonitor,
  FiLayout,
  FiSmartphone
} from 'react-icons/fi'

import webDevImg from '../../../assets/services/web-dev.png'
import uiUxImg from '../../../assets/services/ui-ux.png'
import mobileAppImg from '../../../assets/services/mobile-app.png'

const services = [
  {
    icon: FiMonitor,
    image: webDevImg,
    title: 'Web Development',
    description: 'Fast, scalable websites and web platforms built for performance and growth.',
  },
  {
    icon: FiLayout,
    image: uiUxImg,
    title: 'UI/UX Design',
    description: 'Clean digital interfaces that feel premium, intuitive, and conversion-focused.',
  },
  {
    icon: FiSmartphone,
    image: mobileAppImg,
    title: 'Mobile App Development',
    description: 'Modern mobile app experiences designed for usability, speed, and reliability.',
  },
]

const ServiceCard = React.memo(({ service, index }) => {
  return (
    <article className={`reveal-trigger ${styles.card}`} 
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className={styles.imageBox}>
        <img src={service.image} alt={service.title} loading="lazy" className={styles.serviceImage} />
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
})
ServiceCard.displayName = 'ServiceCard'

export function ServicesOverviewSection() {
  return (
    <section className={`reveal-trigger ${styles.section}`} aria-labelledby="services-overview-title">
      <div className={`${styles.container}`}>
        <div className={styles.header}>
          <p className={styles.badge}>Our Services</p>
          <h2 id="services-overview-title">Solutions built for modern digital growth</h2>
          <p className={styles.description}>
            Digital Sphere provides end-to-end digital services that help brands design, build,
            secure, and grow their online presence.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <Link to={ROUTES.services} className={styles.ctaButton}>
            Explore Full Services
          </Link>
        </div>
      </div>
    </section>
  )
}
