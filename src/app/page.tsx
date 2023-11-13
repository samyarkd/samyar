import Content from "@/components/content"
import Image from "next/image"

export default function Home() {
  return (
    <Content className="flex-col gap-6">
      <section className="flex flex-col-reverse xs:flex-row gap-4">
        <Image
          className="w-full mx-auto object-cover object-center shadow-xl dark:shadow-white/20 shadow-black/10 max-w-xs xs:w-1/4 rounded-lg"
          width={620}
          height={620}
          alt="Samyar Koei"
          src={'/samyar.jpg'} />
        <div className="space-y-4">
          <h2 className="text-4xl">Samyar Koei - <span className="text-2xl text-gray-300">Web Dev 🕸️</span></h2>
          <p className="col-span-3">
            Welcome to my personal blog and portfolio 👀. I'm a passionate web developer who can create stunning websites using cutting-edge <strong className="text-2xl">front-end</strong> technologies. Specialized in <strong className="text-2xl">ReactJs</strong> ecosystem. I love exploring new technologies 🩸 and sharing my insights with you.</p>
        </div>
      </section>
      <hr className="w-full" />
      <section className="w-full">
        <h1 className="text-4xl">Skill List 🧰</h1>
        <div className="gap-2 flex flex-wrap balance">
          <span>ReactJs</span>
          <span>NextJs</span>
          <span>Git</span>
          <span>Nx</span>
          <span>Ant Design</span>
          <span>MUI</span>
          <span>Tailwindcss</span>
          <span>ShadCn</span>
          <span>NodeJs</span>
          <span>SocketIO</span>
          <span>Prisma</span>
          <span>ExpressJs</span>
          <span>Postgres</span>
          <span>Mysql</span>
          <span>SQLite</span>
          <span>SQL</span>
          <span>Typescript</span>
          <span>Redux</span>
          <span>JoTi</span>
          <span>Zustand</span>
          <span>TON</span>
          <span>Solidity</span>
          <span>FunC</span>
          <span>Tact</span>
          <span>D3.js</span>
          <span>Tanstack-Query (React-Query)</span>
          <span>Framer-Motion</span>
          <span>Jest</span>
          <span>Cypress</span>
          <span>Playwright</span>
          <span>Vite</span>
          <span>DevUps (managing servers and deploying applications)</span>
          <span>Nginx</span>
          <span>pm2</span>
          <span>Docker</span>
          <span>Docker Compose</span>
          <span>Scrum</span>
          <span>Agile</span>
          <span>Jira</span>
          <span>Confluence DNS management</span>
          <span>SCSS</span>
          <span>LESS</span>
          <span>Styled Components</span>
          <span>React Context</span>
          <span>Redis</span>
          <span>Axios</span>
          <span>Zod</span>
          <span>Grammy</span>
          <span>Bun</span>
          <span>Python</span>
        </div>
      </section>
      <hr className="w-full" />
      <section className="w-full">
        <h1 className="text-4xl">Timeline</h1>
      </section>

    </Content>

  )
}
