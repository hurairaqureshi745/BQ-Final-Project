import { TeamMemberCard } from '../cards/TeamMemberCard'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'
import { teamMembers } from '../../data/team'

export function TeamMembersSection() {
  return (
    <section aria-labelledby="team-members-title">
      <Container>
        <SectionHeader
          eyebrow="Team members"
          titleId="team-members-title"
          title="Senior specialists behind the Digital Sphere experience"
          description="A scalable team section for leadership, consultants, designers, developers, and growth experts."
        />
        <div>
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </Container>
    </section>
  )
}
