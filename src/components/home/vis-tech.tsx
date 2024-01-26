import HomeSection from '@/components/home/home-section'
import { skills } from '@/utils/static-data'
import SkillBubble from '../skill-bubble'
import VisualizedHeaderTitle from './vis-tech-title'
import TransitionHelper from '../transition/transition-helper'

export default function VisTech() {
  return (
    <HomeSection className="bubbles w-full items-stretch overflow-hidden py-12">
      <TransitionHelper
        showInView
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        showInViewMargin="-50px"
      >
        <VisualizedHeaderTitle />
      </TransitionHelper>

      <TransitionHelper
        showInView
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.1
        }}
      >
        <SkillBubble skills={skills} />
      </TransitionHelper>
    </HomeSection>
  )
}
