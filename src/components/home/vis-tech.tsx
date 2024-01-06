import HomeSection from '@/components/home/home-section'
import SkillBubble from '@/components/skill-bubble'
import {
  Description,
  SecondaryHeader,
} from '@/components/ui/typography'
import {
  skills,
} from '@/utils/static-data'
import { RoughNotation } from 'react-rough-notation'

export default function VisTech() {
  return (
    <HomeSection className="items-stretch w-full">
      <SecondaryHeader>
        <RoughNotation
          animate
          show
          type="highlight"
          animationDelay={2000}
          color="#ffff0030">
          Visualized Skill list 👀
        </RoughNotation>
      </SecondaryHeader>
      <Description className="mb-2">
        The Bigger the skill is the more skilled I&#39;m at it
      </Description>
      <SkillBubble skills={skills} />
    </HomeSection>
  )
}
