import { useState, useEffect, useRef } from 'react'

export function useCountUp(targetValue, duration = 1500) {
  // If targetValue is a pure string (like "Fast" or "Modern"), we bypass animation
  const numericMatch = String(targetValue).match(/^(\d+)(.*)$/)
  const isNumeric = !!numericMatch
  
  const targetNumber = isNumeric ? parseInt(numericMatch[1], 10) : 0
  const suffix = isNumeric ? numericMatch[2] : ''

  const [count, setCount] = useState(isNumeric ? 0 : targetValue)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    if (!isNumeric) return // Skip animation for text-only stats

    const currentRef = elementRef.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          
          let startTimestamp = null
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp
            const progress = Math.min((timestamp - startTimestamp) / duration, 1)
            
            // easeOutQuart
            const easeOut = 1 - Math.pow(1 - progress, 4)
            setCount(Math.floor(easeOut * targetNumber))
            
            if (progress < 1) {
              window.requestAnimationFrame(step)
            } else {
              setCount(targetNumber)
            }
          }
          window.requestAnimationFrame(step)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [hasAnimated, isNumeric, targetNumber, duration])

  return {
    ref: elementRef,
    displayValue: isNumeric ? `${count}${suffix}` : targetValue
  }
}
