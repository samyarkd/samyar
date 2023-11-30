'use client'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { useLayoutEffect, useState } from 'react'

type ScrollSectionsProps = HTMLMotionProps<'div'>

const SECTION_COUNT = 4
const ScrollSections = ({ ...props }: ScrollSectionsProps) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [currentIndex, setCurrentIndex] = useState(0)

  function goUp() {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  function goDown() {
    if (currentIndex !== SECTION_COUNT) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <>
      {currentIndex !== 0 && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{
            ease: 'backOut'
          }}
          onClick={goUp}
          className="absolute right-1/2 top-16 z-10">
          Up
        </motion.button>
      )}

      {/* Children will be passed down here  */}
      <motion.div
        {...props}
        className="grid h-full grid-rows-[repeat(4,1fr)] gap-4"
        animate={{ y: `-${currentIndex * 25}%` }}
      />

      {currentIndex !== SECTION_COUNT && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={goDown}
          className="absolute right-1/2 z-10 bottom-0">
          Down
        </motion.button>
      )}
    </>
  )
}

export default ScrollSections
