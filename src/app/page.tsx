import BoldTech from '@/components/home/bold-tech'
import ExpPoints from '@/components/home/exp-points'
import HomeSection from '@/components/home/home-section'
import MeSection from '@/components/home/me-section'
import Projects from '@/components/home/projects'
import TimeLine from '@/components/home/timeline'
import VisTech from '@/components/home/vis-tech'
import SkillBubble from '@/components/skill-bubble'
import Timeline from '@/components/timeline'

export default function Home() {
  return (
    <div>
      {/* My data section (name, description) */}
      <MeSection />
      {/* The power tech stack */}
      <BoldTech />
      {/* Visulised skill/tech list */}
      <VisTech />
      {/* Work experience timeline */}
      <TimeLine />
      {/* Exp Points with description */}
      <ExpPoints />
      {/* Project list */}
      <Projects />
    </div>
  )
}
