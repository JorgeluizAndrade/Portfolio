import portifio from "../../public/potifolio.png";
import pinguimchat from "../../public/pinguimchat.png";
import pigpay from "../../public/pigpay.png";
import devqizz from "../../public/dev.quizz.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Sobre Mim",
    hash: "#about",
  },
  {
    name: "Projetos",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Tech Notícias",
    hash: "#notices",
  },
  {
    name: "Contato",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Pigpay-Finnance",
    description:
      "Projeto fullstack. Ele é um aplicativo de gerenciamento de KPIs, produtos e transações, com destaque para a previsão de receitas futuras usando análise de regressão linear.",
    tags: [
      "TypeScript",
      "React",
      "Redux",
      "Redux Toolkit",
      "Node.js",
      "JavaScript",
      "Express",
      "MongoDB",
      "Material UI",
    ],
    imageUrl: pigpay,
    linkProject: "https://pigpay.vercel.app/",
    linkGithub:"https://github.com/JorgeluizAndrade/Pigpay-Reactjs",  
  },
  {
    title: "Dev.quizz",
    description: "O projeto é um Quiz voltado para desenvolvedores de software, projetado para desafiar seus conhecimentos e aprimorar suas habilidades. Ele utiliza a API da OpenAI, especificamente o GPT-3 Turbo, um poderoso modelo de linguagem, para gerar perguntas com as quais os desenvolvedores podem interagir.",
    tags: ["Typescript", "React", "Next.js", "Framer Motion", "Tailwind Css", "NextUi", "Prisma", "PlanetScale"," API OpenAI"],
    imageUrl: devqizz,
    linkProject: "https://dev-quizz-eosin.vercel.app/dashboard",
    linkGithub:"https://github.com/JorgeluizAndrade/dev.quizz"
  },
  {
    title: "Pinguim-chat",
    description:
      "O Piguim Chat é uma aplicação de websocket com recursos de autenticação JWT e login com o Google e Github para facilidade. Oferece convites de amizade via e-mail e chat em tempo real.",
    tags: [
      "TypeScript",
      "React",
      "Next.js",
      "NextAuth",
      "Tailwind Css",
      "Zod",
      "Redis",
      "Pusher",
    ],
    imageUrl: pinguimchat,
    linkProject: "https://pinguim-chat.vercel.app/",
    linkGithub:"https://github.com/JorgeluizAndrade/Pinguim-chat"
  },
  {
    title: "Portfólio",
    description: "Meu Portfólio profissional moderno.",
    tags: ["Typescript", "React", "Next.js", "Framer Motion", "Tailwind Css", "Resend-Email"],
    imageUrl: portifio,
    linkProject: "#",
    linkGithub:"https://github.com/JorgeluizAndrade/Portfolio"
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Prisma",
  "Tailwind CSS",
  "Redux",
  "Redux Toolkit",
  "MongoDB",
  "Express",
  "Git",
  "GitHub",
  "Vite",
  "Material UI",
  "Framer Motion",
  "HTML",
  "CSS",
] as const;
