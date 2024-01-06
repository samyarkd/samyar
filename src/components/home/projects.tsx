import React from 'react'
import HomeSection from './home-section'
import { Description, SectionHeader } from '../ui/typography'
import { projects, type TProject } from '@/utils/static-data'
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
export default function Projects() {
  return (
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
  )
}
