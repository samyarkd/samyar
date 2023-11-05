import Content from "@/components/content"
import Image from "next/image"

export default function Home() {
  return (
    <Content className="flex flex-col-reverse sm:flex-row gap-4">
      <Image
        className="w-full shadow-xl dark:shadow-white/20 shadow-black/10 max-w-xs sm:w-2/4 rounded-lg"
        width={620}
        height={620}
        alt="Samyar Koei"
        src={'/samyar.jpg'} />
      <div className="space-y-4">
        <h2 className="text-4xl">Samyar Koei - <span className="text-2xl text-gray-300">Web Dev 🕸️</span></h2>
        <p className="col-span-3">
          Welcome to my personal blog and portfolio 👀. I'm a web developer who is specialized in <strong>front-end</strong> but worked <strong>full-stack</strong> too, with <strong>NextJs</strong> and <strong>ExpressJs</strong> and <strong>ReactJs</strong>. I love bleeding edge tech 🩸 and learning new cool stuff.
        </p>
      </div>
    </Content>

  )
}
