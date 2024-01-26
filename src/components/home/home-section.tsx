import clsx from 'clsx'
import { type ReactNode, forwardRef } from 'react'

const HomeSection = forwardRef<
  HTMLTableSectionElement,
  { children: ReactNode; className?: string }
>(({ children, className }, ref) => {
  return (
    <section
      ref={ref}
      className={clsx(
        'mx-auto flex max-w-5xl flex-col items-center justify-center overflow-auto px-7',
        className
      )}
    >
      {children}
    </section>
  )
})

HomeSection.displayName = 'home-section'

export default HomeSection
