'use client'

import { type ReactNode } from 'react'
import StarsBackground from './threeDBackground'

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <StarsBackground />

      {children}
    </>
  )
}

export default Providers
