import { ReactNode } from "react"

const Content = ({ children }: { children: ReactNode }) => {
  return (
    <main className="max-w-6xl mx-auto flex flex-col items-center justify-between p-4 sm:p-24 sm:pt-8">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-start text-xl lg:flex">
        {children}
      </div>
    </main>
  )
}

export default Content
