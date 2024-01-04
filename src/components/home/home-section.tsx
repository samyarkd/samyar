import clsx from "clsx"
import { ReactNode } from "react"

const HomeSection = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <section className={clsx("max-w-5xl flex flex-col min-h-[calc(100vh-68px)] overflow-auto px-7 mx-auto flex flex-col items-center justify-center", className)}>
      {children}
    </section>)
}

export default HomeSection
