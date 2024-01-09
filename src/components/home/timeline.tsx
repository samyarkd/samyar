import HomeSection from '@/components/home/home-section'
import Timeline from '@/components/timeline'
import { Description, SectionHeader } from '@/components/ui/typography'

export default function TimeLine() {
  return (
    <HomeSection className="w-full items-stretch py-16">
      <div className="text-center space-y-4 pb-4">
        <SectionHeader>Timeline</SectionHeader>
        <Description>
          I have more than 2 years of experience in the field of Front-end and
          also some Full-Stack skills, I have worked in one company and a
          product development studio. I really like the style of this timeline
          :D
        </Description>
      </div>
      <Timeline />
    </HomeSection>
  )
}
