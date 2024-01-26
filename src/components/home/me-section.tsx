'use client'
import React, { useRef } from 'react'
import HomeSection from '@/components/home/home-section'
import TransitionHelper from '@/components/transition/transition-helper'
import Image from 'next/image'
import { RoughNotation } from 'react-rough-notation'
import { useInView } from 'framer-motion'

export default function MeSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, {
    amount: 'all',
    margin: '10px'
  })

  return (
    <RoughNotation type="underline" animate show={!isInView}>
      <HomeSection ref={sectionRef} className="relative h-screen">
        <TransitionHelper
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0.645, 0.045, 0.355, 1]
          }}
          className="mb-2"
        >
          <Image
            className="mx-auto w-full max-w-xs rounded-lg object-cover object-center shadow-xl shadow-white/20 xs:w-3/4 md:min-w-[225px]"
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
          className="-z-10"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-4xl">
              Samyar -{' '}
              <span className="text-2xl text-gray-300">Web Dev 🕸️</span>
            </h2>
            <p className="col-span-3 max-w-sm">
              Welcome to my personal blog and portfolio 👀. I&#39;m a web
              developer who can create stunning websites using cutting-edge{' '}
              <span className="font-semibold antialiased">Front-End</span>{' '}
              technologies. Specialized in{' '}
              <RoughNotation
                animationDelay={1000}
                type="underline"
                animate
                color="red"
                show
              >
                <span className="font-semibold antialiased">ReactJs</span>
              </RoughNotation>{' '}
              ecosystem. I love exploring new technologies and sharing my
              insights with you.
            </p>
          </div>
        </TransitionHelper>
      </HomeSection>
    </RoughNotation>
  )
}
