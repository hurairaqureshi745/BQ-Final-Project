import { useState, useEffect, useCallback } from 'react'

export function useCarousel({ totalItems, gap = 24 }) {
  // eslint-disable-next-line no-unused-vars
  const _gap = gap;
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)

  const updateItemsPerView = useCallback(() => {
    if (window.innerWidth <= 620) {
      setItemsPerView(1)
    } else if (window.innerWidth <= 980) {
      setItemsPerView(2)
    } else {
      setItemsPerView(3)
    }
  }, [])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [updateItemsPerView])

  const maxIndex = Math.max(0, totalItems - itemsPerView)

  useEffect(() => {
    if (currentIndex > maxIndex) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentIndex(maxIndex)
    }
  }, [maxIndex, currentIndex])

  const next = useCallback(() => {
    setCurrentIndex(i => Math.min(maxIndex, i + 1))
  }, [maxIndex])

  const prev = useCallback(() => {
    setCurrentIndex(i => Math.max(0, i - 1))
  }, [])

  const goTo = useCallback((idx) => {
    setCurrentIndex(Math.max(0, Math.min(idx, maxIndex)))
  }, [maxIndex])

  const handleDragStart = (clientX) => {
    setIsDragging(true)
    setStartX(clientX)
    setDragOffset(0)
  }

  const handleDragMove = (clientX) => {
    if (!isDragging) return
    const diff = clientX - startX
    setDragOffset(diff)
  }

  const handleDragEnd = () => {
    if (!isDragging) return
    setIsDragging(false)
    
    // Swipe threshold
    if (dragOffset > 50 && currentIndex > 0) {
      prev()
    } else if (dragOffset < -50 && currentIndex < maxIndex) {
      next()
    }
    setDragOffset(0)
  }

  const handlers = {
    onTouchStart: (e) => handleDragStart(e.touches[0].clientX),
    onTouchMove: (e) => handleDragMove(e.touches[0].clientX),
    onTouchEnd: handleDragEnd,
    onMouseDown: (e) => handleDragStart(e.clientX),
    onMouseMove: (e) => handleDragMove(e.clientX),
    onMouseUp: handleDragEnd,
    onMouseLeave: handleDragEnd
  }

  return {
    currentIndex,
    itemsPerView,
    maxIndex,
    isDragging,
    dragOffset,
    handlers,
    next,
    prev,
    goTo
  }
}
