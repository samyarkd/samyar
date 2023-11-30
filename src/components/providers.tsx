'use client'

import { AnimatePresence } from 'framer-motion'
import { type ReactNode } from 'react'

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* <StarsBackground /> */}
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          window.scrollTo({ top: 0, behavior: 'instant' })
        }}>
        {children}
      </AnimatePresence>
    </>
  )
}

export default Providers
