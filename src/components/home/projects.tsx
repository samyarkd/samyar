'use client'
import React, { useMemo, useRef } from 'react'
import HomeSection from './home-section'
import { Description, SectionHeader } from '../ui/typography'
import { projects, type TProject } from '@/utils/static-data'
import Image from 'next/image'
import Link from 'next/link'
import { RoughNotation } from 'react-rough-notation'
import TransitionHelper from '../transition/transition-helper'
import { useInView } from 'framer-motion'

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
  const color = useMemo(
    () => colors[Math.floor(Math.random() * colors.length)],
    []
  )
  const projectRef = useRef(null)
  const isInView = useInView(projectRef, {
    once: true
  })

  return (
    <RoughNotation
      animationDelay={600}
      type="box"
      color={color}
      show={isInView}
    >
      <div
        ref={projectRef}
        className={`card group flex h-full flex-col gap-4 p-2 backdrop-blur`}
      >
        <RoughNotation type="underline" color={color} show>
          <Image
            className="h-[200px] w-full rounded border border-solid border-gray-800 object-cover object-top"
            width={1800}
            height={1000}
            src={project.image}
            alt={project.name}
          />
        </RoughNotation>
        <div className="flex h-full flex-col">
          <h3 className="text-xl font-semibold">{project.name}</h3>
          <p>{project.description}</p>
          <p className="mb-3 flex flex-wrap space-x-2">
            {project.technologies.map((t) => (
              <span className="rounded-lg px-1 text-sm text-zinc-400" key={t}>
                {t}
              </span>
            ))}
          </p>
          <Link
            className="mt-auto block w-full rounded-lg p-1 text-center text-sm transition group-hover:bg-gray-200 group-hover:text-gray-800"
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </Link>
        </div>
      </div>
    </RoughNotation>
  )
}
export default function Projects() {
  return (
    <HomeSection className="h-auto w-full space-y-16 overflow-hidden py-12">
      <TransitionHelper
        showInView
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.1
        }}
      >
        <div className="space-y-4 text-center">
          <SectionHeader>Projects</SectionHeader>
          <Description>
            These are the various web development projects showcasing my
            expertise and skills in front-end and full-stack technologies.
          </Description>
        </div>
      </TransitionHelper>
      <div className="mx-auto mt-4 grid gap-8 xs:grid-cols-2 md:grid-cols-3">
        {projects.map((p, idx) => {
          return (
            <TransitionHelper
              showInView
              key={idx}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.1
              }}
            >
              <ProjectCard project={p} />
            </TransitionHelper>
          )
        })}
      </div>
    </HomeSection>
  )
}
