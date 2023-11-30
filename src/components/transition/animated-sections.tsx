'use client'
import { getValidChildren } from '@/utils/helpers'
import { AnimatePresence, motion } from 'framer-motion'
import { useState, type ReactNode } from 'react'

const AnimatedSection = ({ children }: { children: ReactNode }) => {
  const [index, setIndex] = useState(0)
  const childCount = getValidChildren(children).length - 1
  function goUp() {
    if (index !== 0) {
      setIndex(index + 1)
    }
  }

  function goDown() {
    if (index !== -1 * childCount) {
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
            className="absolute top-5 right-1/2 z-10">
            Up
          </motion.button>
        )}
      </AnimatePresence>

      {/* Children will be passed down here */}
      <motion.div
        animate={{ y: `${index * 100}%` }}
        className="h-full w-full overscroll-contain absolute top-0 h-child-full"
        transition={{
          ease: 'backOut',
          duration: 0.2
        }}>
        {children}
      </motion.div>

      <AnimatePresence>
        {index !== -1 * childCount && (
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            onClick={goDown}
            className="absolute bottom-5 right-1/2 z-10">
            Down
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AnimatedSection
