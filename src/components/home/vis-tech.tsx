import HomeSection from '@/components/home/home-section'
import SkillBubble from '@/components/skill-bubble'
import { skills } from '@/utils/static-data'
import VisualizedHeaderTitle from './vis-tech-title'

export default function VisTech() {
  return (
    <HomeSection className="items-stretch w-full py-16">
      <VisualizedHeaderTitle />
      <SkillBubble skills={skills} />
    </HomeSection>
  )
}
