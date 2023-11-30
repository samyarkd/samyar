import clsx from "clsx"
import { ReactNode } from "react"

const HomeSection = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <section className={clsx("max-w-5xl px-7 pb-20 mx-auto", className)}>
      {children}
    </section>)
}

export default HomeSection
