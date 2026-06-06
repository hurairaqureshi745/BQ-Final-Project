import { Children } from 'react'
import { useCarousel } from '../../hooks/useCarousel'
import styles from './Carousel.module.css'

export function Carousel({ children, gap = 24 }) {
  // Convert children to array so we can count them
  const items = Children.toArray(children)
  const totalItems = items.length

  const {
    currentIndex,
    itemsPerView,
    maxIndex,
    isDragging,
    dragOffset,
    handlers,
    next,
    prev,
    goTo
  } = useCarousel({ totalItems, gap })

  // Calculate horizontal translation percent per item
  const itemPercent = 100 / itemsPerView
  
  // Base transform is simply - (currentIndex * itemPercent)%
  // Plus we add the pixel dragOffset if actively swiping
  const baseTranslate = `-${currentIndex * itemPercent}%`
  const transformStyle = isDragging 
    ? `translateX(calc(${baseTranslate} + ${dragOffset}px))`
    : `translateX(${baseTranslate})`

  // Only apply CSS transition when not actively dragging
  // This gives the instantaneous 1:1 follow during drag, but smooth snap when released.
  const trackStyle = {
    transform: transformStyle,
    transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
  }

  // Generate pagination dots array
  const totalDots = maxIndex + 1

  return (
    <div className={styles.carouselWrapper}>
      {/* Draggable Track */}
      <div 
        className={styles.carouselTrack}
        style={trackStyle}
        {...handlers}
      >
        {items.map((child, index) => (
          <div key={index} className={styles.carouselSlide}>
            {/* The child card */}
            {child}
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      {totalDots > 1 && (
        <div className={styles.controls}>
          <button 
            className={styles.navBtn} 
            onClick={prev} 
            disabled={currentIndex === 0}
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className={styles.dots}>
            {Array.from({ length: totalDots }).map((_, idx) => (
              <button
                key={idx}
                className={`${styles.dot} ${idx === currentIndex ? styles.dotActive : ''}`}
                onClick={() => goTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            className={styles.navBtn} 
            onClick={next} 
            disabled={currentIndex === maxIndex}
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
