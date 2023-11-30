import clsx from 'clsx'
import { type ReactNode } from 'react'

const Content = ({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <main className="max-w-6xl translate-y-20 mx-auto flex flex-col items-center justify-between p-4 md:p-24 sm:pt-6 md:pt-6">
      <div
        className={clsx(
          'z-10 max-w-5xl w-full text-start md:text-xl text sm:text-base',
          className
        )}>
        {children}
      </div>
    </main>
  )
}

export default Content
