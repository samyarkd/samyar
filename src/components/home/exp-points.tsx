import { expPoints } from '@/utils/static-data';
import React from 'react'
import { Description, SecondaryHeader, SectionHeader } from '../ui/typography';
import Link from 'next/link'
import HomeSection from './home-section';

function ExpPoints() {
  return (
    <HomeSection>
      <SectionHeader>
        Exp Points
      </SectionHeader>
      <Description>
        So here are some experience points :D (
        <Link className="underline font-medium" href={"https://jvns.ca/blog/brag-documents/"}>Brag List</Link>),
        I have listed some key points in my work experience that i think they were value.
      </Description>
      <div>
        {
          expPoints.map((p, i) => {
            return <div key={i}>
              <SecondaryHeader>{p['project name']}</SecondaryHeader>
              <ul>
                {
                  p.description.map((d, i) => <li className='list-item list-disc' key={i}>{d}</li>)
                }
              </ul>
            </div>
          })
        }
      </div>
    </HomeSection>
  )
}

export default ExpPoints;
