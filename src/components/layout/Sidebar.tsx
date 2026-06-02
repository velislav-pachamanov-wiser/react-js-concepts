import { NavLink } from 'react-router-dom'

const nav: readonly { to: string; label: string; end?: boolean }[] = [
  { to: '/posts', label: 'Posts (React Query)' },
  { to: '/todos', label: 'Todos (Forms)' },
  { to: '/users', label: 'Users (Redux)' },
  { to: '/animations', label: 'Animations' },
]

/**
 * TODO: Active styles, collapsed mobile nav, a11y refinements (PROJECT_OUTLINE.md).
 */
export function Sidebar() {
  return (
    <nav className="app-sidebar" aria-label="Main">
      <ul>
        {nav.map(({ to, label, end }) => (
          <li key={to}>
            <NavLink to={to} end={end}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
