export const frontendSkills = [
  { label: 'ReactJs', value: 100 },
  { label: 'NextJs', value: 95 },
  { label: 'AntDesign', value: 100 },
  { label: 'MUI', value: 80 },
  { label: 'Tailwindcss', value: 100 },
  { label: 'ShadCn', value: 100 },
  { label: 'Jotai', value: 100 },
  { label: 'Redux', value: 90 },
  { label: 'Typescript', value: 90 },
  { label: 'React-Context', value: 80 },
  { label: 'Zustand', value: 90 },
  { label: 'D3.js', value: 75 },
  { label: 'Tanstack-Query', value: 90 },
  { label: 'Framer-Motion', value: 50 },
  { label: 'Vite', value: 80 },
  { label: 'SCSS', value: 90 },
  { label: 'LESS', value: 80 },
  { label: 'Emotion', value: 60 },
  { label: 'Webpack', value: 35 },
  { label: 'React-Router', value: 80 },
  { label: 'MapBox', value: 70 },
  { label: 'RoughJs', value: 70 },
  { label: 'Nx', value: 60 },
  { label: 'Jest', value: 60 },
  { label: 'Cypress', value: 40 },
  { label: 'Playwright', value: 40 },
  { label: 'Zod', value: 90 }
]

export const backendSkills = [
  { label: 'NextJs', value: 95 },
  { label: 'NodeJs', value: 90 },
  { label: 'SocketIO', value: 80 },
  { label: 'Prisma', value: 90 },
  { label: 'ExpressJs', value: 45 },
  { label: 'Postgres', value: 55 },
  { label: 'Mysql', value: 55 },
  { label: 'SQLite', value: 55 },
  { label: 'SQL', value: 40 },
  { label: 'Solidity', value: 10 },
  { label: 'Nginx', value: 60 },
  { label: 'Docker', value: 80 },
  { label: 'Docker-Compose', value: 80 },
  { label: 'Redis', value: 50 }
]

export const skills = [
  { label: 'ReactJs', value: 100, category: 'Frontend' },
  { label: 'NextJs', value: 95, category: 'Frontend' },
  { label: 'Git', value: 80, category: 'Version Control' },
  { label: 'Nx', value: 60, category: 'Version Control' },
  { label: 'AntDesign', value: 100, category: 'UI Framework' },
  { label: 'MUI', value: 80, category: 'UI Framework' },
  { label: 'Tailwindcss', value: 100, category: 'CSS Framework' },
  { label: 'ShadCn', value: 100, category: 'CSS Framework' },
  { label: 'SocketIO', value: 80, category: 'Backend' },
  { label: 'Prisma', value: 90, category: 'Database' },
  { label: 'ExpressJs', value: 45, category: 'Backend' },
  { label: 'Postgres', value: 55, category: 'Database' },
  { label: 'Mysql', value: 55, category: 'Database' },
  { label: 'SQLite', value: 55, category: 'Database' },
  { label: 'SQL', value: 40, category: 'Database' },
  { label: 'Typescript', value: 90, category: 'Language' },
  { label: 'Redux', value: 90, category: 'State Management' },
  { label: 'React-Context', value: 80, category: 'State Management' },
  { label: 'Zustand', value: 90, category: 'State Management' },
  { label: 'Jotai', value: 100, category: 'State Management' },
  { label: 'Solidity', value: 10, category: 'Blockchain' },
  { label: 'FunC', value: 10, category: 'Blockchain' },
  { label: 'Tact', value: 10, category: 'Blockchain' },
  { label: 'D3.js', value: 75, category: 'Data Visualization' },
  { label: 'Tanstack-Query', value: 90, category: 'Frontend' },
  { label: 'Framer-Motion', value: 30, category: 'Animation' },
  { label: 'Jest', value: 60, category: 'Testing' },
  { label: 'Cypress', value: 40, category: 'Testing' },
  { label: 'Playwright', value: 40, category: 'Testing' },
  { label: 'Vite', value: 80, category: 'Build Tools' },
  { label: 'Nginx', value: 60, category: 'DevOps' },
  { label: 'PM2', value: 60, category: 'DevOps' },
  { label: 'Docker', value: 80, category: 'Containers' },
  { label: 'Docker-Compose', value: 80, category: 'Containers' },
  { label: 'Cloudflare', value: 40, category: 'DevOps' },
  { label: 'SCSS', value: 90, category: 'CSS' },
  { label: 'LESS', value: 80, category: 'CSS' },
  { label: 'Styled-Components', value: 60, category: 'CSS' },
  { label: 'Redis', value: 50, category: 'Database' },
  { label: 'Axios', value: 100, category: 'HTTP Client' },
  { label: 'Zod', value: 90, category: 'Validation' },
  { label: 'GrammyJs', value: 100, category: 'Backend' },
  { label: 'Bun', value: 70, category: 'Backend' },
  { label: 'Python', value: 30, category: 'Languages' },
  { label: 'Webpack', value: 35, category: 'Build Tools' },
  { label: 'RoughJs', value: 70, category: 'Frontend' },
  { label: 'React-Router', value: 80, category: 'Frontend' },
  { label: 'MapBox', value: 70, category: 'Frontend' }
]

export type TSkill = (typeof backendSkills)[number]

export const projects = [
  {
    name: 'Chellen Quiz',
    description: 'A quiz game where you can play and win TON coin.',
    website: 'https://challenquiz.online',
    technologies: ['Next.js', 'Express.js', 'Socket.io', 'TailwindCss'],
    image: '/challenquiz.png'
  },
  {
    name: 'Sinex',
    description: 'A solar panel company.',
    website: 'https://sinexenergy.com/',
    technologies: ['Next.Js', 'TailwindCss'],
    image: '/sinex.png'
  },
  {
    name: 'RevewAi',
    description: 'An AI-powered platform for managing contracts.',
    website: 'https://reviewai.online/',
    technologies: ['Next.js', 'Antd'],
    image: '/reviewai.png'
  },
  {
    name: 'Monshi',
    description: 'A tool to record meetings in Zoom.',
    website: 'https://app.monshi.live/login',
    technologies: ['Blade Laravel', 'CSS'],
    image: '/monshi.png'
  },
  {
    name: 'DusttreeBot',
    description: 'A chatbot located in the bottom-right corner.',
    website: 'https://dusttree.studio',
    technologies: ['Next.js', 'OpenAI', 'TailwindCss'],
    image: '/dusttree.png'
  },
  {
    name: 'Anbarchi',
    description: 'An online platform for buying and selling car parts.',
    website: 'https://anbarchi.com/',
    technologies: ['ReactJs', 'Antd'],
    image: '/anbar.png'
  },
  {
    name: 'Pomegroup',
    description: 'A panel for startups to buy tech or legal support packages.',
    website: 'https://expertexpat.pomegroup.studio/login',
    technologies: ['React.Js', 'CoreUi'],
    image: '/exp.png'
  },
  {
    name: 'Rsoon',
    description: 'An app for investing in stocks.',
    website: 'https://app.rsoon.ir/client/login',
    technologies: ['React.Js', 'SCSS'],
    image: '/rsoon.png'
  }
]

export type TProject = (typeof projects)[number]

export const expPoints = [
  {
    'project name': 'ChallenQuiz',
    description: [
      'Implemented a blockchain-based verification system to confirm the authenticity of TON transactions, improving security.',
      'Developed a real-time quiz platform using Socket.io (client and server), enabling simultaneous and fair competition between users by providing instantaneous question delivery and instant feedback on answers.',
      'Dveloped a function to convert boc into transaction message hash also fixed a bug related to nodejs compatibilty for tonweb in the proccess'
    ]
  },
  {
    'project name': 'Sinex',
    description: [
      "Developed an advanced map using MapBox SDK to accurately calculate rooftop surface areas, enhancing the platform's capability to provide precise data and analytics. Integrated seamless user interactions by changing roof colors in response to hover action, improving the platform's user experience and visual appeal."
    ]
  },
  {
    'project name': 'ReviewAI',
    description: [
      'Developed a custom WYSIWYG editor for contracts to enhance the user experience and facilitate easy contract creation and management.',
      'Developeted a comment feature to let user comment inside the editor and share comments between parties envolved to provite better contract managment.',
      'Implemented a digital signing feature for contracts, enabling secure and efficient contract execution between parties.',
      'Integrated AI capabilities into contract review process, using natural language processing to summarize contracts and provide insights into potential risks and benefits for involved parties.'
    ]
  },
  {
    'project name': 'DustTree Chat Bot',
    description: [
      'Developed a chatbot to assist users with immigration queries, using Langchain and Redis to provide accurate and personalized responses based on information from Finnish government documents.'
    ]
  },
  {
    'project name': 'Tafarda',
    description: [
      'Visualized stock share distributions using a dynamic and interactive Pi Chart built with D3.js, providing investors with a clear and engaging representation of their investments.',
      'Developed a modern and efficient tech stack using React, Ant Design, React Query, and Typescript to accelerate the development process and provide a solid foundation for startups to build upon, promoting fast and effective product creation.'
    ]
  }
]
