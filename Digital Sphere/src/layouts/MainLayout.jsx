import { Outlet } from 'react-router-dom'
import { Footer } from '../components/site/Footer'
import { Header } from '../components/site/Header'

export function MainLayout() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
