export function TeamMemberCard({ member }) {
  return (
    <article>
      <h3>{member.name}</h3>
      <p>{member.role}</p>
      <p>{member.bio}</p>
    </article>
  )
}
