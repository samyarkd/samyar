import Content from "@/components/content"
import SkillBubble from "@/components/skill-bubble"
import { Description, SecondaryHeader, SectionHeader } from "@/components/ui/typography"
import { skills } from "@/utils/static-data"
import Image from "next/image"

export default function Home() {
  return (
    <Content className="flex flex-col gap-6">
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
            Welcome to my personal blog and portfolio 👀. i&#39;m a passionate web developer who can create stunning websites using cutting-edge <strong className="text-2xl">front-end</strong> technologies. Specialized in <strong className="text-2xl">ReactJs</strong> ecosystem. I love exploring new technologies 🩸 and sharing my insights with you.</p>
        </div>
      </section>
      <hr className="w-full" />
      <section className="flex flex-col gap-4 w-full">
        <div>
          <SectionHeader>Skillset 🧰</SectionHeader>
          <p>i&#39;m more skilled in Front-End side but i have a some experience in back-end development too.</p>
        </div>
        <div>
          <SecondaryHeader>Simple Skill list</SecondaryHeader>
          <Description className="mb-2">The earlier the skill is mentioned the more skilled i&#39;m at it</Description>
          <div className="flex gap-2 flex-wrap balance">
            {
              skills.sort((a, b) => b.value - a.value).map((skill, idx) => <span key={skill.label}>{skill.label} {idx === skills.length - 1 ? '' : ' - '} </span>)
            }
          </div>
        </div>
        <div>
          <SecondaryHeader>Visualized Skill list 👀</SecondaryHeader>
          <Description className="mb-2">The Bigger the skill is the more skilled i&#39;m at it</Description>
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
