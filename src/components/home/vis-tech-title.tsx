'use client'

import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { RoughNotation } from 'react-rough-notation'
import { Description, SecondaryHeader } from '../ui/typography'

export default function VisualizedHeaderTitle() {
  const headingRef = useRef(null)
  const isInView = useInView(headingRef, {
    once: true
  })

  return (
    <div className="space-y-4 pb-4 text-center" ref={headingRef}>
      <SecondaryHeader>
        <RoughNotation
          animate
          show={isInView}
          type="highlight"
          animationDelay={1000}
          color="#ffff0030"
        >
          Visualized Skill list 👀
        </RoughNotation>
      </SecondaryHeader>
      <Description className="mb-2">
        The Bigger the skill is the more skilled I&#39;m at it
      </Description>
    </div>
  )
}
