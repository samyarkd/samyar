'use client'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useLayoutEffect, type ReactNode } from 'react'

const variants = {
  hidden: { opacity: 0, x: 0 },
  enter: { opacity: 1, x: 0 }
}

const BlogTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <motion.main
      key={pathname}
      variants={variants}
      initial="hidden"
      animate="enter"
    >
      {children}
    </motion.main>
  )
}

export default BlogTransition
