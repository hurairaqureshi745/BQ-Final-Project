import styles from './CategoryFilter.module.css'

const categories = [
  'All',
  'Web Development',
  'UI/UX Design',
  'Mobile Apps',
  'Digital Marketing',
  'Cyber Security',
  'Graphic Design'
]

export function CategoryFilter({ activeCategory, setActiveCategory }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.scrollContainer} aria-label="Filter blog posts by category">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`${styles.pill} ${activeCategory === category ? styles.pillActive : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
