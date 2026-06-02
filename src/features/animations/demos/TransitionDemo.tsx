import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function TransitionDemo() {
  const [show, setShow] = useState(false);

  return (
    <div className="animation-demo">
      <AnimatePresence initial={false}>
        {show && (
          <motion.div initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            key="box"
            style={{ width: 100, height: 100, backgroundColor: 'red', borderRadius: 10 }}
          >
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button onClick={() => setShow(!show)} whileTap={{ scale: 0.9 }}>{show ? 'Hide' : 'Show'}</motion.button>
    </div>
  )
}
