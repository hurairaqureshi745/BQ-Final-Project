import { FiSearch } from 'react-icons/fi'
import styles from './EmptyState.module.css'

export function EmptyState({ 
  icon: Icon = FiSearch, 
  title = "No Results Found", 
  message = "We couldn't find what you're looking for. Please try adjusting your search or filters." 
}) {
  return (
    <div className={styles.emptyContainer}>
      <Icon className={styles.icon} aria-hidden="true" />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.message}>{message}</p>
    </div>
  )
}
