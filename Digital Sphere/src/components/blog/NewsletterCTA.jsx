import { useState } from 'react'
import styles from './NewsletterCTA.module.css'

export function NewsletterCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim() && email.includes('@')) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className={styles.section} id="subscribe" aria-labelledby="newsletter-heading">
      <div className={styles.card}>
        <div className={styles.content}>
          <h2 id="newsletter-heading" className={styles.heading}>
            Stay Ahead In The <span>Digital World</span>
          </h2>
          <p className={styles.description}>
            Subscribe to our newsletter to receive the latest development tips, design strategies, marketing updates, and security alerts directly in your inbox.
          </p>
        </div>

        <div className={styles.formWrapper}>
          {submitted ? (
            <div className={styles.successMessage} role="alert">
              <strong>Thank you!</strong> You have successfully subscribed to the Digital Sphere newsletter.
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email address"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address for newsletter"
              />
              <button type="submit" className={styles.btn}>
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
