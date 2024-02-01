import clsx from 'clsx'
import { type ReactNode } from 'react'
import TransitionHelper from './transition/transition-helper'

const Content = ({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <main className="mx-auto flex max-w-6xl translate-y-20 flex-col items-center justify-between p-4 sm:pt-6 md:p-24 md:pt-6">
      <div
        className={clsx(
          'text z-10 w-full max-w-5xl text-start sm:text-base md:text-xl',
          className
        )}
      >
        <TransitionHelper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {children}
        </TransitionHelper>
      </div>
    </main>
  )
}

export default Content
