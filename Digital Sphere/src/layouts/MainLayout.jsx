import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from '../components/site/Footer'
import { Header } from '../components/site/Header'
import { ScrollProgress } from '../components/common/ScrollProgress'
import { BackToTop } from '../components/common/BackToTop'
import styles from './MainLayout.module.css'

export function MainLayout() {
  const { pathname } = useLocation()

  // ALL SCROLL ANIMATIONS AND OBSERVERS TEMPORARILY DISABLED
  // Website is now strictly static to ensure 100% stability.

  return (
    <div className="app-shell">
      <ScrollProgress />
      <Header />
      <main key={pathname} className={`${styles.pageTransition} ${styles.pageFadeIn}`}>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
