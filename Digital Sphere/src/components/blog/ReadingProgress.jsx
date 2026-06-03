import { useEffect, useState } from 'react'
import styles from './ReadingProgress.module.css'

export function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight > 0) {
        const scrolled = (window.scrollY / scrollHeight) * 100
        setProgress(scrolled)
      } else {
        setProgress(0)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Initial run in case page is already scrolled on mount
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={styles.container} role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100" aria-label="Reading progress">
      <div className={styles.bar} style={{ width: `${progress}%` }} />
    </div>
  )
}
