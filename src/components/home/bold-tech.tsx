import {
  Description,
  SectionHeader,
  SubHeader
} from '@/components/ui/typography'
import { backendSkills, frontendSkills } from '@/utils/static-data'
import HomeSection from './home-section'
import Image from 'next/image'
import TransitionHelper from '../transition/transition-helper'

export default function BoldTech() {
  return (
    <HomeSection className="w-full gap-4 space-y-14 divide-y overflow-hidden py-12 text-center">
      <SkillsetHeading />
      <SkillsetImages />
    </HomeSection>
  )
}

function SkillsetHeading() {
  return (
    <TransitionHelper
      showInView
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.1
      }}
      showInViewMargin="-50px"
    >
      <div className="space-y-4">
        <div className="space-y-4">
          <SectionHeader>Skillset 🧰</SectionHeader>
          <p>
            I&#39;m more skilled in Front-End side but I have some experience in
            back-end development too.
          </p>
        </div>
        <div className="balance flex flex-col items-center justify-center gap-2">
          <SubHeader>Front-End</SubHeader>
          <Description>
            {frontendSkills
              .sort((a, b) => b.value - a.value)
              .map((skill, idx) => {
                return (
                  <span key={skill.label}>
                    {skill.label}{' '}
                    {idx === frontendSkills.length - 1 ? '' : ' - '}{' '}
                  </span>
                )
              })}
          </Description>
          <SubHeader>Back-End</SubHeader>
          <Description>
            {backendSkills
              .sort((a, b) => b.value - a.value)
              .map((skill, idx) => {
                return (
                  <span key={skill.label}>
                    {skill.label}{' '}
                    {idx === backendSkills.length - 1 ? '' : ' - '}{' '}
                  </span>
                )
              })}
          </Description>
        </div>
      </div>
    </TransitionHelper>
  )
}

function SkillsetImages() {
  return (
    <TransitionHelper
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1
      }}
      showInView
      showInViewMargin="-50px"
    >
      <div className="flex flex-wrap items-center justify-center gap-10 pt-4">
        <Image
          priority
          alt="nextjs logo in a white background"
          width={60}
          height={60}
          className="w-16 object-contain"
          src="/next.png"
        />
        <Image
          priority
          alt="reactjs logo in a white background"
          width={60}
          height={60}
          className="w-16 object-contain"
          src="/react.png"
        />
        <Image
          priority
          alt="typescript logo in a white background"
          width={60}
          height={60}
          className="w-16 overflow-hidden rounded-2xl object-contain"
          src="/typescript.jpg"
        />
        <Image
          priority
          alt="tailwindcss logo in a transparent background"
          width={60}
          height={60}
          className="w-16 object-contain"
          src="/tailwindcss.png"
        />
        <Image
          priority
          alt="jotai logo in a transparent background"
          width={60}
          height={60}
          className="w-16 object-contain"
          src="/jotai.png"
        />
        <Image
          priority
          alt="jotai logo in a transparent background"
          width={60}
          height={60}
          className="w-16 object-contain"
          src="/react-query.png"
        />
      </div>
    </TransitionHelper>
  )
}
