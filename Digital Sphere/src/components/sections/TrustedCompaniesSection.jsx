import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'
import { trustedCompanies } from '../../data/companies'

export function TrustedCompaniesSection() {
  return (
    <section aria-labelledby="trusted-companies-title">
      <Container>
        <SectionHeader
          eyebrow="Trusted companies"
          titleId="trusted-companies-title"
          title="Chosen by ambitious teams that need premium digital execution"
          description="Digital Sphere partners with funded startups, service brands, and growing enterprises."
        />
        <ul aria-label="Companies that trust Digital Sphere">
          {trustedCompanies.map((company) => (
            <li key={company}>{company}</li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
