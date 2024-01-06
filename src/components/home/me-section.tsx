import React from 'react'
import HomeSection from '@/components/home/home-section'
import TransitionHelper from '@/components/transition/transition-helper'
import Image from 'next/image'
import { RoughNotation } from 'react-rough-notation'

export default function MeSection() {
  return (
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
  )
}
