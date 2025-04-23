// pages/portfolio/index.tsx
import { Status } from "./Status";
import { Project } from "./Project";
import PortfolioSection from "./PortfolioSection";

const projects: Project[] = [
 {
  title: "E-commerce Personalizado",
  description: "Desenvolvimento de um e-commerce completo...",
  stack: ["Next.js", "TailwindCSS", "TypeScript", "Stripe", "GraphQL"],
  status: Status.CONCLUIDO,
  context: "Acadêmico - Projeto de curso",
  mentors: ["Prof. William Reis", "Dev. João Silva"],
  influences: [
   "Documentação oficial do Next.js",
   "Curso de E-commerce React",
   "Design de UX da Apple",
  ],
  liveLink: "https://ecommerce-example.com",
 },
 // outros projetos...
];

const Portfolio = () => <PortfolioSection projects={projects} />;
export default Portfolio;
