export const skills = [
  { label: "ReactJs", value: 100, category: "Frontend" },
  { label: "NextJs", value: 95, category: "Frontend" },
  { label: "Git", value: 80, category: "Version Control" },
  { label: "Nx", value: 60, category: "Version Control" },
  { label: "AntDesign", value: 100, category: "UI Framework" },
  { label: "MUI", value: 80, category: "UI Framework" },
  { label: "Tailwindcss", value: 100, category: "CSS Framework" },
  { label: "ShadCn", value: 100, category: "CSS Framework" },
  { label: "NodeJs", value: 90, category: "Backend" },
  { label: "SocketIO", value: 80, category: "Backend" },
  { label: "Prisma", value: 90, category: "Database" },
  { label: "ExpressJs", value: 45, category: "Backend" },
  { label: "Postgres", value: 55, category: "Database" },
  { label: "Mysql", value: 55, category: "Database" },
  { label: "SQLite", value: 55, category: "Database" },
  { label: "SQL", value: 40, category: "Database" },
  { label: "Typescript", value: 90, category: "Language" },
  { label: "Redux", value: 90, category: "State Management" },
  { label: "React-Context", value: 80, category: "State Management" },
  { label: "Zustand", value: 90, category: "State Management" },
  { label: "Jotai", value: 100, category: "State Management" },
  { label: "TON", value: 15, category: "Blockchain" },
  { label: "Solidity", value: 10, category: "Blockchain" },
  { label: "FunC", value: 10, category: "Blockchain" },
  { label: "Tact", value: 10, category: "Blockchain" },
  { label: "D3.js", value: 75, category: "Data Visualization" },
  { label: "Tanstack-Query", value: 90, category: "Frontend" },
  { label: "Framer-Motion", value: 60, category: "Animation" },
  { label: "Jest", value: 35, category: "Testing" },
  { label: "Cypress", value: 40, category: "Testing" },
  { label: "Playwright", value: 40, category: "Testing" },
  { label: "Vite", value: 80, category: "Build Tools" },
  { label: "Nginx", value: 60, category: "DevOps" },
  { label: "PM2", value: 60, category: "DevOps" },
  { label: "Docker", value: 80, category: "Containers" },
  { label: "Docker-Compose", value: 80, category: "Containers" },
  { label: "Scrum", value: 80, category: "Project Management" },
  { label: "Agile", value: 80, category: "Project Management" },
  { label: "Jira", value: 80, category: "Project Management" },
  { label: "Cloudflare", value: 40, category: "DevOps" },
  { label: "SCSS", value: 90, category: "CSS" },
  { label: "LESS", value: 80, category: "CSS" },
  { label: "Styled-Components", value: 60, category: "CSS" },
  { label: "Redis", value: 50, category: "Database" },
  { label: "Axios", value: 100, category: "HTTP Client" },
  { label: "Zod", value: 90, category: "Validation" },
  { label: "GrammyJs", value: 100, category: "Backend" },
  { label: "Bun", value: 70, category: "Backend" },
  { label: "Python", value: 30, category: "Languages" },
  { label: "Webpack", value: 35, category: "Build Tools" },
  { label: "RoughJs", value: 70, category: "Frontend" },
  { label: "React-Router", value: 80, category: "Frontend" },
  { label: "MapBox", value: 70, category: "Frontend" },

]

export type TSkill = typeof skills[number]

export const projects = [
  {
    "name": "Chellen Quiz",
    "description": "A quiz game where you can play and win TON coin.",
    "website": "https://challenquiz.online",
    "technologies": ["Next.js", "Express.js", "Socket.io", "TailwindCss"],
    "image": "/challenquiz.png"
  },
  {
    "name": "Sinex",
    "description": "A solar panel company.",
    "website": "https://sinexenergy.com/",
    "technologies": ["Next.Js", "TailwindCss"],
    "image": "/sinex.png"
  },
  {
    "name": "RevewAi",
    "description": "An AI-powered platform for managing contracts.",
    "website": "https://reviewai.online/",
    "technologies": ["Next.js", "Antd"],
    "image": "/reviewai.png"
  },
  {
    "name": "Monshi",
    "description": "A tool to record meetings in Zoom.",
    "website": "https://app.monshi.live/login",
    "technologies": ["Blade Laravel", "CSS"],
    "image": "/monshi.png"
  },
  {
    "name": "DusttreeBot",
    "description": "A chatbot located in the bottom-right corner.",
    "website": "https://dusttree.studio",
    "technologies": ["Next.js", "OpenAI", "TailwindCss"],
    "image": "/dusttree.png"
  },
  {
    "name": "Anbarchi",
    "description": "An online platform for buying and selling car parts.",
    "website": "https://anbarchi.com/",
    "technologies": ["ReactJs", "Antd"],
    "image": "/anbar.png"
  },
  {
    "name": "Pomegroup",
    "description": "A panel for startups to buy tech or legal support packages.",
    "website": "https://expertexpat.pomegroup.studio/login",
    "technologies": ["React.Js", "CoreUi"],
    "image": "/exp.png"
  },
  {
    "name": "Rsoon",
    "description": "An app for investing in stocks.",
    "website": "https://app.rsoon.ir/client/login",
    "technologies": ["React.Js", "SCSS"],
    "image": "/rsoon.png"
  }
]

export type TProject = typeof projects[number]
