import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 2.5,
      ease: [0.42, 0, 0.58, 1] as const,
    },
  },
}

export default function FadeDemo() {
  return (
    <div className="animation-demo">
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <p>FadeDemo</p>
      </motion.div>
    </div>
  )
}
