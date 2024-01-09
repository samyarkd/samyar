import HomeSection from '@/components/home/home-section'
import SkillBubble from '@/components/skill-bubble'
import { Description, SecondaryHeader } from '@/components/ui/typography'
import { skills } from '@/utils/static-data'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { RoughNotation } from 'react-rough-notation'

export default function VisTech() {
  const headingRef = useRef(null)
  const isInView = useInView(headingRef)

  return (
    <HomeSection className="items-stretch w-full py-16">
      <div className="text-center space-y-4 pb-4" ref={headingRef}>
        <SecondaryHeader>
          <RoughNotation
            animate
            show={isInView}
            type="highlight"
            animationDelay={100}
            color="#ffff0030"
          >
            Visualized Skill list 👀
          </RoughNotation>
        </SecondaryHeader>
        <Description className="mb-2">
          The Bigger the skill is the more skilled I&#39;m at it
        </Description>
      </div>
      <SkillBubble skills={skills} />
    </HomeSection>
  )
}
