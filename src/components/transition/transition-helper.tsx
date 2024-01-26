'use client'
import { motion, type HTMLMotionProps, useInView } from 'framer-motion'
import { useRef } from 'react'

type TransitionHelperProps = HTMLMotionProps<'div'> & {
  showInView?: boolean
  showInViewMargin?: string
  isInViewOnce?: boolean
}

const TransitionHelper = ({
  showInView,
  showInViewMargin,
  isInViewOnce = true,
  ...rest
}: TransitionHelperProps) => {
  const divRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(divRef, {
    margin: showInViewMargin,
    once: !!isInViewOnce
  })

  return (
    <motion.div
      ref={divRef}
      {...rest}
      animate={
        showInView ? (isInView ? rest.animate : rest.initial) : rest.animate
      }
    />
  )
}

export default TransitionHelper
