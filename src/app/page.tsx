import Content from '@/components/content'
import SkillBubble from '@/components/skill-bubble'
import Timeline from '@/components/timeline'
import {
  Description,
  SecondaryHeader,
  SectionHeader
} from '@/components/ui/typography'
import { projects, skills, type TProject } from '@/utils/static-data'
import Image from 'next/image'
import Link from 'next/link'
import { RoughNotation } from 'react-rough-notation'

const colors = [
  '#4CAF50',
  '#FFEB3B',
  '#FF9800',
  '#673AB7',
  '#00BCD4',
  '#FF5722',
  '#9C27B0',
  '#2196F3',
  '#795548',
  '#607D8B',
  '#FFC107',
  '#3F51B5',
  '#009688',
  '#E91E63',
  '#8BC34A',
  '#FFEB3B',
  '#9E9E9E',
  '#03A9F4',
  '#FF5252',
  '#8BC34A'
]
const ProjectCard = ({ project }: { project: TProject }) => {
  // pick a random color
  const color = colors[Math.floor(Math.random() * colors.length)]

  return (
    <RoughNotation type="box" color={color} show>
      <div
        className={`card gap-4 flex h-full flex-col group p-2 backdrop-blur`}>
        <RoughNotation type="underline" color={color} show>
          <Image
            className="border border-solid dark:border-gray-800 border-gray-300 rounded-large w-full h-[200px] object-cover object-top"
            width={1800}
            height={1000}
            src={project.image}
            alt={project.name}
          />
        </RoughNotation>
        <div className="h-full flex flex-col">
          <h3 className="text-xl font-semibold">{project.name}</h3>
          <p>{project.description}</p>
          <p className="space-x-2 mb-3 flex flex-wrap">
            {project.technologies.map((t) => (
              <span className="text-zinc-400 px-1 rounded-lg text-sm" key={t}>
                {t}
              </span>
            ))}
          </p>
          <Link
            className="mt-auto group-hover:bg-gray-200 transition w-full block group-hover:text-gray-800 text-center p-1 rounded-lg text-sm"
            href={project.website}
            target="_blank"
            rel="noopener noreferrer">
            Visit Website
          </Link>
        </div>
      </div>
    </RoughNotation>
  )
}

export default function Home() {
  return (
    <Content className="flex flex-col gap-6">
      <section className="flex flex-col-reverse xs:flex-row gap-4">
        <Image
          className="w-full md:min-w-[225px] mx-auto object-cover object-center shadow-xl dark:shadow-white/20 shadow-black/10 max-w-xs xs:w-1/4 rounded-lg"
          width={620}
          height={620}
          alt="Samyarkd"
          src={'/samyar.jpg'}
        />
        <div className="space-y-4">
          <h2 className="text-4xl">
            Samyar -{' '}
            <span className="text-2xl dark:text-gray-300 text-gray-600">
              Web Dev 🕸️
            </span>
          </h2>
          <p className="col-span-3">
            Welcome to my personal blog and portfolio 👀. I&#39;m a passionate
            web developer who can create stunning websites using cutting-edge{' '}
            <strong className="text-lg md:text-2xl">front-end</strong>{' '}
            technologies. Specialized in{' '}
            <RoughNotation
              animationDelay={1000}
              type="underline"
              animate
              color="red"
              show>
              <strong className="text-lg md:text-2xl">ReactJs</strong>
            </RoughNotation>{' '}
            ecosystem. I love exploring new technologies 🩸 and sharing my
            insights with you.
          </p>
        </div>
      </section>
      <hr className="w-full" />
      <section className="flex flex-col gap-4 w-full">
        <div>
          <SectionHeader>Skillset 🧰</SectionHeader>
          <p>
            I&#39;m more skilled in Front-End side but I have some experience in
            back-end development too.
          </p>
        </div>
        <div>
          <SecondaryHeader>Simple Skill list</SecondaryHeader>
          <Description className="mb-2">
            The earlier the skill is mentioned the more skilled I&#39;m at it
          </Description>
          <div className="flex gap-2 flex-wrap balance">
            {skills
              .sort((a, b) => b.value - a.value)
              .map((skill, idx) => (
                <span key={skill.label}>
                  {skill.label} {idx === skills.length - 1 ? '' : ' - '}{' '}
                </span>
              ))}
          </div>
        </div>
        <div>
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
        </div>
      </section>
      <hr className="w-full" />
      <section className="w-full">
        <SectionHeader>Timeline</SectionHeader>
        <Description>
          I have more than 2 years of experience in the field of Front-end and
          also some Full-Stack skills, I have worked in one company and a
          product development studio. I really like the style of this timeline
          :D
        </Description>
        <Timeline />
      </section>
      <hr className="w-full" />
      <section className="w-full">
        <SectionHeader>Projects</SectionHeader>
        <Description>
          These are the various web development projects showcasing my expertise
          and skills in front-end and full-stack technologies.
        </Description>
        <div className="mt-4 grid xs:grid-cols-2 md:grid-cols-3 gap-8 mx-auto">
          {projects.map((p, idx) => {
            return <ProjectCard key={idx} project={p} />
          })}
        </div>
      </section>
    </Content>
  )
}
