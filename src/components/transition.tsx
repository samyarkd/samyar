'use client'
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

const variants = {
  hidden: { opacity: 0, x: 0, y: 200 },
  enter: { opacity: 1, x: 0, y: 0 },
}

const BlogTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()
  return (
    <motion.main
      key={pathname}
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "linear" }}
    >
      {children}
    </motion.main>
  )
}

export default BlogTransition
