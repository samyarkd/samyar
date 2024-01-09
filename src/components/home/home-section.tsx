import clsx from 'clsx'
import { type ReactNode, forwardRef } from 'react'

const HomeSection = forwardRef<
  HTMLTableSectionElement,
  { children: ReactNode; className?: string; hScreen?: boolean }
>(({ children, className, hScreen }, ref) => {
  return (
    <section
      ref={ref}
      className={clsx(
        'max-w-5xl overflow-auto px-7 mx-auto flex flex-col items-center justify-center',
        className,
        {
          'min-h-[calc(100vh-68px)]': !!hScreen
        }
      )}
    >
      {children}
    </section>
  )
})

HomeSection.displayName = 'home-section'

export default HomeSection
