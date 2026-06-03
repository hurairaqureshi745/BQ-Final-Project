import { useState, useEffect } from 'react'
import { FiList, FiChevronDown } from 'react-icons/fi'
import styles from './TableOfContents.module.css'

const slugify = (text) => 
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')

export function TableOfContents({ content }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState('')

  const headings = content
    ? content.filter(
        (block) =>
          block.type === 'h2' ||
          block.type === 'h3' ||
          (block.type === 'heading' && (block.level === 2 || block.level === 3))
      )
    : []

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting)
        if (visibleEntry) {
          setActiveId(visibleEntry.target.id)
        }
      },
      { rootMargin: '0px 0px -60% 0px', threshold: 0.1 }
    )

    headings.forEach((heading) => {
      const id = slugify(heading.text)
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [content])

  if (headings.length === 0) return null

  const handleLinkClick = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // offset for sticky headers
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setActiveId(id)
      setIsOpen(false)
    }
  }

  return (
    <nav className={styles.toc} aria-label="Table of contents">
      {/* Mobile Accordion Header */}
      <button
        className={styles.mobileHeader}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={styles.headerLabel}>
          <FiList aria-hidden="true" />
          <span>Table of Contents</span>
        </span>
        <FiChevronDown
          className={`${styles.chevron} ${isOpen ? styles.chevronRotated : ''}`}
          aria-hidden="true"
        />
      </button>

      {/* Desktop Heading (always visible) */}
      <div className={styles.desktopHeader}>
        <FiList aria-hidden="true" />
        <h3>Table of Contents</h3>
      </div>

      {/* List items */}
      <ul className={`${styles.list} ${isOpen ? styles.listOpen : ''}`}>
        {headings.map((heading) => {
          const id = slugify(heading.text)
          const isActive = activeId === id
          return (
            <li
              key={id}
              className={`${styles.item} ${
                heading.type === 'h3' || (heading.type === 'heading' && heading.level === 3)
                  ? styles.subitem : ''
              }`}
            >
              <a
                href={`#${id}`}
                className={`${styles.link} ${isActive ? styles.linkActive : ''}`}
                onClick={(e) => handleLinkClick(e, id)}
              >
                {heading.text}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
