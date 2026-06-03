export function PortfolioCard({ project }) {
  return (
    <article>
      <p>{project.category}</p>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
    </article>
  )
}
