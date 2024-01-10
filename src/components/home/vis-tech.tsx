import HomeSection from '@/components/home/home-section'
import { skills } from '@/utils/static-data'
import SkillBubble from '../skill-bubble'
import VisualizedHeaderTitle from './vis-tech-title'

export default function VisTech() {
  return (
    <HomeSection className="items-stretch w-full py-16">
      <VisualizedHeaderTitle />
      <SkillBubble skills={skills} />
    </HomeSection>
  )
}
