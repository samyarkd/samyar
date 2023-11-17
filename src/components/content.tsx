import clsx from "clsx"
import { ReactNode } from "react"

const Content = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <main className="max-w-6xl mx-auto flex flex-col items-center justify-between p-4 md:p-24 sm:pt-6 md:pt-6">
      <div className={clsx("z-10 max-w-5xl w-full items-center justify-between text-start text-xl lg:flex", className)}>
        {children}
      </div>
    </main>
  )
}

export default Content
