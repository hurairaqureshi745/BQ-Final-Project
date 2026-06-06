import styles from './Spinner.module.css'

export function Spinner({ size = 'medium', className }) {
  const sizeClass = styles[size] || ''
  
  return (
    <span 
      className={`${styles.spinner} ${sizeClass} ${className || ''}`}
      role="status"
      aria-label="Loading"
    />
  )
}
