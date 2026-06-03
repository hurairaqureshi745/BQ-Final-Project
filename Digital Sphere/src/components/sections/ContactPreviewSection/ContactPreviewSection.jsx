import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { Button } from '../../common/Button'
import { Container } from '../../common/Container'
import { SectionHeader } from '../../common/SectionHeader'
import { ContactInfoCard } from './ContactInfoCard'
import { ROUTES } from '../../../utils/routes'
import styles from './ContactPreviewSection.module.css'

const contactData = {
  email: 'digitalsphereteam@gmail.com',
  phone: '+92 344 5038278',
  location: 'Pakistan'
}

export function ContactPreviewSection() {
  return (
    <section className={styles.section} aria-labelledby="home-contact-title">
      <Container className={styles.container}>
        <div className={styles.leftSide}>
          <div className={styles.sectionHeader}>
            <SectionHeader
              eyebrow="Contact Us"
              titleId="home-contact-title"
              title="Let's Start Your Next Digital Project"
              description="Whether you're planning a new website, mobile application, branding project, or digital strategy, our team is ready to help turn your ideas into reality."
            />
          </div>
          <div className={styles.contactButton}>
            <Button href={ROUTES.contact}>Contact Us</Button>
          </div>
        </div>

        <div className={styles.rightSide}>
          <ContactInfoCard
            icon={FiMail}
            label="Email"
            value={contactData.email}
          />
          <ContactInfoCard
            icon={FiPhone}
            label="Phone"
            value={contactData.phone}
          />
          <ContactInfoCard
            icon={FiMapPin}
            label="Location"
            value={contactData.location}
          />
        </div>
      </Container>
    </section>
  )
}
