import { useState, useEffect } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import styles from './BackToTop.module.css'

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      className={`${styles.backToTopBtn} ${isVisible ? styles.visible : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      type="button"
    >
      <FiArrowUp size={24} />
    </button>
  )
}
