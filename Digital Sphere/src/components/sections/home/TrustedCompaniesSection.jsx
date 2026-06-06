import styles from './TrustedCompaniesSection.module.css'

const trustMetrics = [
  { value: '100+', label: 'Projects' },
  { value: '50+', label: 'Clients' },
  { value: '5+', label: 'Team Members' },
]

const companies = [
  { name: 'Northstar Capital', logo: 'NORTHSTAR' },
  { name: 'Apex Commerce', logo: 'APEX' },
  { name: 'Luma Health', logo: 'LUMA' },
  { name: 'Orbit Labs', logo: 'ORBIT' },
  { name: 'Vertex Group', logo: 'VERTEX' },
  { name: 'NovaFin', logo: 'NOVAFIN' },
]

export function TrustedCompaniesSection() {
  return (
    <section className={`reveal-trigger ${styles.section}`} aria-labelledby="trusted-companies-title">
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.label}>Trusted By</p>
          <h2 id="trusted-companies-title">Chosen by ambitious brands and growing businesses</h2>
          <p className={styles.description}>
            Digital Sphere partners with forward-thinking teams to build reliable, modern, and
            growth-focused digital experiences.
          </p>
        </div>

        <dl className={styles.metrics} aria-label="Digital Sphere trust metrics">
          {trustMetrics.map((metric) => (
            <div className={styles.metric} key={metric.label}>
              <dt>{metric.label}</dt>
              <dd>{metric.value}</dd>
            </div>
          ))}
        </dl>

        <ul className={styles.logoGrid} aria-label="Brands that trust Digital Sphere">
          {companies.map((company) => (
            <li className={styles.logoCard} key={company.name}>
              <span aria-label={company.name}>{company.logo}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
