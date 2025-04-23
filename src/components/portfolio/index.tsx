// portfolio/index.tsx
import { Status } from "@/types/Status";
import { Project } from "@/types/Project";
import PortfolioSection from "./layout/PortfolioSection";

const projects: Project[] = [
 {
  title: "E-commerce Personalizado",
  description:
   "Desenvolvimento de um e-commerce completo com carrinho, autenticação e integração com Stripe.",
  stack: ["Next.js", "TailwindCSS", "TypeScript", "Stripe", "GraphQL"],
  status: Status.COMPLETED,
  context: "Acadêmico - Projeto de curso",
  mentors: ["Prof. William Reis", "Dev. João Silva"],
  repository: "https://github.com/efpatti/ecommerce-personalizado",
 },
 {
  title: "Pomodoro Ninja",
  description:
   "Timer Pomodoro com estatísticas, dark mode e som ambiente para foco extremo.",
  stack: ["React", "TypeScript", "TailwindCSS", "Redux"],
  status: Status.COMPLETED,
  context: "Projeto pessoal",
  mentors: ["Dev. Rômulo Gutierres"],
  repository: "https://github.com/efpatti/pomodoro-ninja",
 },
 {
  title: "Weather Now",
  description:
   "App que exibe clima em tempo real baseado em localização ou CEP. Integração com duas APIs.",
  stack: ["React", "Axios", "TailwindCSS", "API do Tempo", "ViaCEP"],
  status: Status.COMPLETED,
  context: "Desafio técnico",
  mentors: ["Prof. Rafael Mendes"],
  repository: "https://github.com/efpatti/weather-now",
 },
 {
  title: "Sistema Bartira",
  description:
   "Sistema completo de gestão com módulo financeiro, controle de estoque, e login JWT.",
  stack: ["Node.js", "Chakra UI", "TypeScript", "PostgreSQL"],
  status: Status.IN_PROGRESS,
  context: "Projeto real para cliente fictício",
  mentors: ["Prof. William Reis"],
  repository: "https://github.com/efpatti/bartira",
 },
 {
  title: "DevFinder",
  description:
   "Buscador de usuários do GitHub com modo escuro, consumo de API e design moderno.",
  stack: ["Next.js", "TypeScript", "TailwindCSS", "GitHub API"],
  status: Status.COMPLETED,
  context: "Estudo de API REST",
  mentors: ["Dev. Mayk Brito"],
  repository: "https://github.com/efpatti/devfinder",
 },
];

const Portfolio = () => <PortfolioSection projects={projects} />;
export default Portfolio;
