import HomeSection from '@/components/home/home-section'
import Timeline from '@/components/timeline'
import { Description, SectionHeader } from '@/components/ui/typography'
import TransitionHelper from '../transition/transition-helper'

export default function TimeLine() {
  return (
    <HomeSection className="w-full items-stretch overflow-hidden py-12">
      <TransitionHelper
        showInView
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        showInViewMargin="-50px"
      >
        <div className="space-y-4 pb-12 text-center">
          <SectionHeader>Timeline</SectionHeader>
          <Description>
            I have more than 2 years of experience in the field of Front-end and
            also some Full-Stack skills, I have worked in one company and a
            product development studio. I really like the style of this timeline
          </Description>
        </div>
      </TransitionHelper>
      <TransitionHelper
        showInView
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.1
        }}
      >
        <Timeline />
      </TransitionHelper>
    </HomeSection>
  )
}
