import ExpPoints from '@/components/home/exp-points'
import HomeSection from '@/components/home/home-section'
import SkillBubble from '@/components/skill-bubble'
import Timeline from '@/components/timeline'
import TransitionHelper from '@/components/transition/transition-helper'
import {
  Description,
  SecondaryHeader,
  SectionHeader,
  SubHeader
} from '@/components/ui/typography'
import {
  backendSkills,
  frontendSkills,
  projects,
  skills,
  type TProject
} from '@/utils/static-data'
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
            className="border border-solid dark:border-gray-800 border-gray-300 rounded w-full h-[200px] object-cover object-top"
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
    <div>
      <HomeSection>
        <TransitionHelper
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0.645, 0.045, 0.355, 1.0]
          }}
          className="mb-2">
          <Image
            className="w-full md:min-w-[225px] mx-auto object-cover object-center shadow-xl dark:shadow-white/20 shadow-black/10 max-w-xs xs:w-3/4 rounded-lg "
            width={620}
            height={620}
            alt="Samyarkd"
            src={'/samyar.jpg'}
          />
        </TransitionHelper>
        <TransitionHelper
          initial={{ y: -200, opacity: 0, scale: 0 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            ease: 'backOut',
            delay: 0.4,
            duration: 0.5
          }}
          className="-z-10">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl">
              Samyar -{' '}
              <span className="text-2xl dark:text-gray-300 text-gray-600">
                Web Dev 🕸️
              </span>
            </h2>
            <p className="col-span-3 max-w-sm">
              Welcome to my personal blog and portfolio 👀. I&#39;m a web
              developer who can create stunning websites using cutting-edge{' '}
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
        </TransitionHelper>
      </HomeSection>
      <HomeSection className="text-center space-y-14 gap-4 w-full divide-y">
        <div className="space-y-4">
          <div>
            <SectionHeader>Skillset 🧰</SectionHeader>
            <p>
              I&#39;m more skilled in Front-End side but I have some experience
              in back-end development too.
            </p>
          </div>
          <div className="flex items-center justify-center flex-col gap-2 balance">
            <SubHeader>Front-End</SubHeader>
            <Description>
              {frontendSkills
                .sort((a, b) => b.value - a.value)
                .map((skill, idx) => {
                  return (
                    <span key={skill.label}>
                      {skill.label}{' '}
                      {idx === frontendSkills.length - 1 ? '' : ' - '}{' '}
                    </span>
                  )
                })}
            </Description>
            <SubHeader>Back-End</SubHeader>
            <Description>
              {backendSkills
                .sort((a, b) => b.value - a.value)
                .map((skill, idx) => {
                  return (
                    <span key={skill.label}>
                      {skill.label}{' '}
                      {idx === backendSkills.length - 1 ? '' : ' - '}{' '}
                    </span>
                  )
                })}
            </Description>
          </div>
        </div>
        <div className="flex gap-10 pt-4 flex-wrap justify-center items-center">
          <Image
            priority
            alt="nextjs logo in a white background"
            width={60}
            height={60}
            className="w-16 object-contain"
            src="/next.png"
          />
          <Image
            priority
            alt="reactjs logo in a white background"
            width={60}
            height={60}
            className="w-16 object-contain"
            src="/react.png"
          />
          <Image
            priority
            alt="typescript logo in a white background"
            width={60}
            height={60}
            className="w-16 object-contain rounded-2xl overflow-hidden"
            src="/typescript.jpg"
          />
          <Image
            priority
            alt="tailwindcss logo in a transparent background"
            width={60}
            height={60}
            className="w-16 object-contain"
            src="/tailwindcss.png"
          />
          <Image
            priority
            alt="jotai logo in a transparent background"
            width={60}
            height={60}
            className="w-16 object-contain"
            src="/jotai.png"
          />
          <Image
            priority
            alt="jotai logo in a transparent background"
            width={60}
            height={60}
            className="w-16 object-contain"
            src="/react-query.png"
          />
        </div>
      </HomeSection>
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
      <HomeSection className="w-full items-stretch">
        <SectionHeader>Timeline</SectionHeader>
        <Description>
          I have more than 2 years of experience in the field of Front-end and
          also some Full-Stack skills, I have worked in one company and a
          product development studio. I really like the style of this timeline
          :D
        </Description>
        <Timeline />
      </HomeSection>
      <HomeSection>
        <SectionHeader>
          Exp Points
        </SectionHeader>
        <Description>
          So here are some experience points :D (
          <Link className="underline font-medium" href={"https://jvns.ca/blog/brag-documents/"}>Brag List</Link>),
          I have listed some key points in my work experience that i think they were value.
        </Description>
        <ExpPoints />
      </HomeSection>
      <HomeSection className="w-full h-auto pb-10">
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
      </HomeSection>
    </div>
  )
}
