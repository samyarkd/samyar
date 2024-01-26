import { expPoints } from '@/utils/static-data'
import React from 'react'
import { Description, SecondaryHeader, SectionHeader } from '../ui/typography'
import Link from 'next/link'
import HomeSection from './home-section'
import TransitionHelper from '../transition/transition-helper'

function ExpPoints() {
  return (
    <HomeSection className="overflow-hidden py-12">
      <TransitionHelper
        showInView
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.1
        }}
      >
        <div className="space-y-4 text-center">
          <SectionHeader>Exp Points</SectionHeader>
          <Description>
            So here are some experience points (
            <Link
              className="font-medium text-white/90 underline"
              href={'https://jvns.ca/blog/brag-documents/'}
              target="_blank"
              rel="norefrence"
            >
              Brag Document
            </Link>
            ), I have listed some key points in my work experience that i think
            they were valubele.
          </Description>
        </div>
      </TransitionHelper>
      <div>
        {expPoints.map((p, i) => {
          return (
            <TransitionHelper
              showInView
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.1
              }}
            >
              <div key={i} className="max-w-3xl">
                <SecondaryHeader>{p['project name']}</SecondaryHeader>
                <ul className="space-y-2 px-10 py-4">
                  {p.description.map((d, i) => (
                    <li className="list-item list-disc" key={i}>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </TransitionHelper>
          )
        })}
      </div>
    </HomeSection>
  )
}

export default ExpPoints
