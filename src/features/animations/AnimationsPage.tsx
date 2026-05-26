import { Card } from '../../components/ui/Card'
import FadeDemo from './demos/FadeDemo'
import ListDemo from './demos/ListDemo'
import PageTransitionDemo from './demos/PageTransitionDemo'

/**
 * TODO: prefers-reduced-motion, compose motion demos (PROJECT_OUTLINE.md).
 */
export default function AnimationsPage() {
  return (
    <div className="page animations-page">
      <Card title="Animations">
        <p>TODO: Intro copy and links to each demo section.</p>
      </Card>
      <FadeDemo />
      <ListDemo />
      <PageTransitionDemo />
    </div>
  )
}
