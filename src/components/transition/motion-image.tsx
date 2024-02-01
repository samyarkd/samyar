'use client'
import { motion, type HTMLMotionProps } from 'framer-motion'

const MotionImage = ({ ...rest }: HTMLMotionProps<'img'>) => {
  return <motion.img {...rest} />
}

export default MotionImage
