'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
const items = [1, 2, 3, 4, 5]

const AnimatedSection = () => {
  const [index, setIndex] = useState(0)

  function goUp() {
    if (index !== 0) {
      setIndex(index + 1)
    }
  }

  function goDown() {
    if (index !== -4) {
      setIndex(index - 1)
    }
  }

  return (
    <div className="relative h-[calc(100vh-67px)] overflow-hidden sm:h-[calc(100vh-70px)]">
      <AnimatePresence>
        {index !== 0 && (
          <motion.button
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            onClick={goUp}
            className="absolute top-0 right-1/2 z-10">
            Up
          </motion.button>
        )}
      </AnimatePresence>

      {/* Children will be passed down here */}
      <motion.div
        animate={{ y: `${index * 100}%` }}
        className="h-full w-full absolute top-0">
        {items.map((i) => (
          <div
            key={i}
            style={{
              backgroundColor: `#00${i}`
            }}
            className="min-h-full flex items-center justify-center w-full">
            <div className={''}>{i}</div>
          </div>
        ))}
      </motion.div>

      <AnimatePresence>
        {index !== -4 && (
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            onClick={goDown}
            className="absolute bottom-0 right-1/2 z-10">
            Down
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AnimatedSection
