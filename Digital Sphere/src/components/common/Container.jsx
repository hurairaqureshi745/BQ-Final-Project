export function Container({ children, className = '' }) {
  return <div className={className || undefined}>{children}</div>
}
