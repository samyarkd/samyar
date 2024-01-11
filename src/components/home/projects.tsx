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
        className={`card gap-4 flex h-full flex-col group p-2 backdrop-blur`}
      >
        <RoughNotation type="underline" color={color} show>
          <Image
            className="border border-solid border-gray-800 rounded w-full h-[200px] object-cover object-top"
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
    <HomeSection className="w-full h-auto py-12 space-y-16 overflow-hidden">
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
      <div className="mt-4 grid xs:grid-cols-2 md:grid-cols-3 gap-8 mx-auto">
        {projects.map((p, idx) => {
          return (
            <TransitionHelper
              showInView
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.1
              }}
            >
              <ProjectCard key={idx} project={p} />
            </TransitionHelper>
          )
        })}
      </div>
    </HomeSection>
  )
}
