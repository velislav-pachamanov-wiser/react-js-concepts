import { AnimatePresence, motion } from 'framer-motion'
import { NavLink, useLocation, useOutlet } from 'react-router-dom'
import { Card } from '../../components/ui/Card'

const TABS = [
  { to: 'fade', label: 'Fade' },
  { to: 'list', label: 'Staggered List' },
  { to: 'transition', label: 'Transition' },
] as const

const pageTransition = {
  duration: 0.35,
  ease: [0, 0.71, 0.2, 1.01] as const,
}

const pageVariants = {
  initial: { opacity: 0, x: 24 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -24 },
}

export default function AnimationsPage() {
  const location = useLocation()
  const outlet = useOutlet()

  return (
    <div className="page animations-page">
      <Card title="Animations">
        <p>
          Explore Framer Motion patterns. Switch tabs to navigate between demo
          sections — each route change plays the same enter and exit animation.
        </p>
        <nav className="animations-tabs" aria-label="Animation demos">
          {TABS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `animations-tabs__link${isActive ? ' animations-tabs__link--active' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </Card>

      <div className="animations-outlet">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            className="animations-outlet__panel"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            {outlet}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
