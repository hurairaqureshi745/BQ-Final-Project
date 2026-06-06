import { useEffect, useRef } from 'react';

/**
 * Custom hook to trigger a CSS animation when an element enters the viewport.
 * Uses native Intersection Observer for zero-lag performance and unobserves immediately.
 * 
 * @param {string} visibleClass - The CSS class to append when visible.
 * @param {number} threshold - Intersection threshold (0.1 = 10%).
 * @returns {React.RefObject} - Ref to attach to the target DOM element.
 */
export function useScrollReveal(visibleClass = 'reveal-visible', threshold = 0.1) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Respect prefers-reduced-motion for accessibility
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      element.classList.add(visibleClass);
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          element.classList.add(visibleClass);
          obs.unobserve(element); // Prevents continuous calculations on scroll
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [visibleClass, threshold]);

  return ref;
}
