'use client'
import { HTMLMotionProps, motion } from "framer-motion"
import { ReactNode } from "react"

type TransitionHelperProps = {
  children: ReactNode
} & HTMLMotionProps<'div'>

const TransitionHelper = ({ ...reset }: TransitionHelperProps) => {
  return (
    <motion.div
      {...reset}
    />
  )
}

export default TransitionHelper
