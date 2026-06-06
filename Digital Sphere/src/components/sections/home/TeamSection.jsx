
import styles from './TeamSection.module.css'
import { teamMembers } from '../../../data/team'

export function TeamSection() {
  return (
    <section className={`reveal-trigger ${styles.section}`} aria-labelledby="team-title">
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
            <article className={`reveal-trigger ${styles.card}`} key={member.name}>
              <div className={styles.avatar} aria-hidden="true">
                {member.image ? (
                  <img src={member.image} alt={member.name} loading="lazy" className={styles.teamImage} />
                ) : (
                  member.initials
                )}
              </div>
              <h3>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              <p className={styles.bio}>{member.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
