import Content from "@/components/content"
import SkillBubble from "@/components/skill-bubble"
import { SectionHeader } from "@/components/ui/typography"
import { skills } from "@/utils/static-data"
import Image from "next/image"

export default function Home() {
  return (
    <Content className="flex-col gap-6">
      <section className="flex flex-col-reverse xs:flex-row gap-4">
        <Image
          className="w-full mx-auto object-cover object-center shadow-xl dark:shadow-white/20 shadow-black/10 max-w-xs xs:w-1/4 rounded-lg"
          width={620}
          height={620}
          alt="Samyar Koei"
          src={'/samyar.jpg'} />
        <div className="space-y-4">
          <h2 className="text-4xl">Samyar Koei - <span className="text-2xl text-gray-300">Web Dev 🕸️</span></h2>
          <p className="col-span-3">
            Welcome to my personal blog and portfolio 👀. I'm a passionate web developer who can create stunning websites using cutting-edge <strong className="text-2xl">front-end</strong> technologies. Specialized in <strong className="text-2xl">ReactJs</strong> ecosystem. I love exploring new technologies 🩸 and sharing my insights with you.</p>
        </div>
      </section>
      <hr className="w-full" />
      <section className="w-full">
        <SectionHeader>Skill List 🧰</SectionHeader>
        <div className="gap-2 flex flex-wrap balance">
          {
            skills.map(skill => <span key={skill.label}>{skill.label}</span>)
          }
          <SkillBubble />
        </div>
      </section>
      <hr className="w-full" />
      <section className="w-full">
        <SectionHeader>Timeline</SectionHeader>
      </section>

    </Content>

  )
}
