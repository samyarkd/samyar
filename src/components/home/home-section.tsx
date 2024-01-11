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
        'max-w-5xl overflow-auto px-7 mx-auto flex flex-col items-center justify-center',
        className
      )}
    >
      {children}
    </section>
  )
})

HomeSection.displayName = 'home-section'

export default HomeSection
