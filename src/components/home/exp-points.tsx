import { expPoints } from '@/utils/static-data'
import React from 'react'
import { Description, SecondaryHeader, SectionHeader } from '../ui/typography'
import Link from 'next/link'
import HomeSection from './home-section'

function ExpPoints() {
  return (
    <HomeSection className="py-16">
      <div className="text-center space-y-4">
        <SectionHeader>Exp Points</SectionHeader>
        <Description>
          So here are some experience points :D (
          <Link
            className="underline font-medium text-white/90"
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
      <div>
        {expPoints.map((p, i) => {
          return (
            <div key={i} className="max-w-3xl">
              <SecondaryHeader>{p['project name']}</SecondaryHeader>
              <ul className="py-4 px-10 space-y-2">
                {p.description.map((d, i) => (
                  <li className="list-item list-disc" key={i}>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </HomeSection>
  )
}

export default ExpPoints
