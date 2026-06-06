import { useState } from 'react'
import styles from './CopyToClipboard.module.css'

export function CopyToClipboard({ text, display, hrefType, className, children }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = (e) => {
    // If it's on mobile/touch, we might want to let them click the link natively?
    // Actually, usually users want to click to email/call on mobile.
    // Let's just copy to clipboard on desktop, and maybe allow native behavior on long-press?
    // We'll prevent default to handle the copy action instead of routing.
    e.preventDefault()
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
    } else {
      // Fallback
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
    
    // Attempt to still trigger the native action after a delay, or just let them use the copied text.
    // Given the request is "Copy to Clipboard", we will just copy.
  }

  const href = hrefType === 'email' ? `mailto:${text}` : hrefType === 'phone' ? `tel:${text.replace(/[^0-9+]/g, '')}` : '#'

  return (
    <a 
      href={href} 
      className={className || styles.copyBtn} 
      onClick={handleCopy}
      aria-label={`Copy ${text} to clipboard`}
    >
      {children || display || text}
      <span className={`${styles.tooltip} ${copied ? styles.tooltipVisible : ''}`}>
        Copied!
      </span>
    </a>
  )
}
