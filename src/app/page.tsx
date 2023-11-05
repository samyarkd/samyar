import Content from "@/components/content"
import Image from "next/image"

export default function Home() {
  return (
    <Content className="flex flex-col-reverse sm:flex-row gap-4">
      <Image
        className="w-full shadow-xl dark:shadow-white/20 shadow-black/10 max-w-xs sm:w-2/4 rounded-lg"
        width={200}
        height={200}
        alt="Samyar Koei"
        src={'/samyar.jpg'} />
      <div className="space-y-4">
        <h2 className="text-4xl">Samyar Koei - <span className="text-2xl text-gray-300">Web Dev 🕸️</span></h2>
        <p className="col-span-3">This is by far the most hassle free and best way to implement this. It is purely CSS and very very simple to do, no extra files - nothing. Ok, its not the best way possible, but it works very well, very reliable (never failed when testing across very old browsers) and very fast to load.
          Found it a few months ago, and used it ever since, simply copy and paste this code in to your CSS.</p>
      </div>
    </Content>

  )
}
