export function SectionHeader({ eyebrow, title, description, titleId }) {
  return (
    <header>
      {eyebrow ? <p>{eyebrow}</p> : null}
      <h2 id={titleId}>{title}</h2>
      {description ? <p>{description}</p> : null}
    </header>
  )
}
