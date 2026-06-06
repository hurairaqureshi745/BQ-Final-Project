import { useState, useEffect } from 'react'
import styles from './ScrollProgress.module.css'

export function ScrollProgress() {
  const [scrollWidth, setScrollWidth] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight
      const winHeight = document.documentElement.clientHeight
      const maxScroll = docHeight - winHeight
      
      if (maxScroll <= 0) {
        setScrollWidth(0)
        return
      }

      const percent = (scrollY / maxScroll) * 100
      setScrollWidth(Math.min(100, Math.max(0, percent)))
    }

    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Initial calculation
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={styles.progressContainer}>
      <div 
        className={styles.progressBar} 
        style={{ width: `${scrollWidth}%` }}
        aria-hidden="true"
      />
    </div>
  )
}
