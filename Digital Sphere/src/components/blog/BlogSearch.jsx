import { FiSearch, FiX } from 'react-icons/fi'
import styles from './BlogSearch.module.css'

export function BlogSearch({ searchValue, setSearchValue }) {
  return (
    <div className={styles.wrapper}>
      <FiSearch className={styles.searchIcon} aria-hidden="true" />
      <input
        type="text"
        className={styles.input}
        placeholder="Search articles by title, content, or keywords..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        aria-label="Search articles"
      />
      {searchValue && (
        <button
          type="button"
          className={styles.clearBtn}
          onClick={() => setSearchValue('')}
          aria-label="Clear search input"
        >
          <FiX aria-hidden="true" />
        </button>
      )}
    </div>
  )
}
