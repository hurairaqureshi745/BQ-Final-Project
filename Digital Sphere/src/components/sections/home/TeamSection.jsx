import { FiDribbble, FiGithub, FiLinkedin } from 'react-icons/fi'
import styles from './TeamSection.module.css'

const teamMembers = [
  {
    initials: 'HQ',
    name: 'Huraira Qureshi',
    role: 'Frontend Developer • Graphic Designer • Digital Marketer',
    bio: 'Specializes in modern frontend interfaces, visual branding, digital marketing strategies, and creating engaging user experiences.',
  },
  {
    initials: 'MZ',
    name: 'Muzammil',
    role: 'UI/UX Designer • Backend Developer',
    bio: 'Focused on crafting intuitive user experiences, clean design systems, and building reliable backend architectures.',
  },
  {
    initials: 'FZ',
    name: 'Faizan',
    role: 'Cyber Security Specialist • Mobile App Developer',
    bio: 'Passionate about secure digital systems, application protection, and developing high-performance mobile applications.',
  },
]

export function TeamSection() {
  return (
    <section className={styles.section} aria-labelledby="team-title">
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.badge}>Our Team</p>
          <h2 id="team-title">The People Behind Digital Sphere</h2>
          <p>
            A multidisciplinary team combining design, development, marketing, and security
            expertise to build modern digital solutions.
          </p>
        </header>

        <div className={styles.grid}>
          {teamMembers.map((member) => (
            <article className={styles.card} key={member.name}>
              <div className={styles.avatar} aria-hidden="true">
                {member.initials}
              </div>
              <h3>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              <p className={styles.bio}>{member.bio}</p>

              <ul className={styles.socials} aria-label={`${member.name} decorative social links`}>
                <li>
                  <span aria-hidden="true">
                    <FiLinkedin />
                  </span>
                </li>
                <li>
                  <span aria-hidden="true">
                    <FiGithub />
                  </span>
                </li>
                <li>
                  <span aria-hidden="true">
                    <FiDribbble />
                  </span>
                </li>
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
