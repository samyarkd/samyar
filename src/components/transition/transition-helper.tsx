'use client'
import { motion, type HTMLMotionProps } from 'framer-motion'

type TransitionHelperProps = HTMLMotionProps<'div'>

const TransitionHelper = ({ ...reset }: TransitionHelperProps) => {
  return <motion.div {...reset} />
}

export default TransitionHelper
