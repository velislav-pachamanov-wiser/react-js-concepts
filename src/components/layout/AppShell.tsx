import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

/**
 * TODO: Shared layout animations, error boundary, outlet context (PROJECT_OUTLINE.md).
 */
export default function AppShell() {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="app-shell__main">
        <Header />
        <main className="app-shell__content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
