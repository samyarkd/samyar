import clsx from 'clsx'
import { type ReactNode } from 'react'

export const SectionHeader = ({ children }: { children: ReactNode }) => {
  return <h1 className="text-4xl">{children}</h1>
}

export const SecondaryHeader = ({ children }: { children: ReactNode }) => {
  return <h2 className="text-3xl">{children}</h2>
}

export const SubHeader = ({ children }: { children: ReactNode }) => {
  return <h3 className="text-xl">{children}</h3>
}

export const Description = ({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <p className={clsx('dark:text-gray-300 text-gray-700', className)}>
      {children}
    </p>
  )
}
