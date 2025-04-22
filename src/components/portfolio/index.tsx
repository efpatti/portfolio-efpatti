// Portfolio.tsx
import { motion } from "framer-motion";
import { Status } from "./Status"; // Importando o enum Status
import { Project } from "./Project"; // Importando a interface Project

const Portfolio = () => {
 const projects: Project[] = [
  {
   title: "E-commerce Personalizado",
   description:
    "Desenvolvimento de um e-commerce completo, com sistema de pagamentos, carrinho de compras e painel de administração.",
   stack: ["Next.js", "TailwindCSS", "TypeScript", "Stripe", "GraphQL"],
   status: Status.CONCLUIDO, // Usando o enum Status
   context: "Acadêmico - Projeto de curso",
   mentors: ["Prof. William Reis", "Dev. João Silva"],
   influences: [
    "Documentação oficial do Next.js",
    "Curso de E-commerce React",
    "Design de UX da Apple",
   ],
   liveLink: "https://ecommerce-example.com",
  },
  {
   title: "Sistema de Gestão de Tarefas",
   description:
    "Aplicação web para gestão de tarefas com autenticação JWT, CRUD de tarefas e integração com APIs externas.",
   stack: ["Next.js", "TailwindCSS", "TypeScript", "JWT", "Node.js"],
   status: Status.EM_MANTENCAO, // Usando o enum Status
   context: "Pessoal - Melhoramento de produtividade",
   mentors: ["Prof. Rodrigo Alvarez", "Dev. Alice Souza"],
   influences: [
    "Artigos sobre produtividade",
    "Padrões de código limpo",
    "App de tarefas Todoist",
   ],
   liveLink: "https://task-manager-example.com",
  },
  {
   title: "App de Previsão do Tempo",
   description:
    "Aplicativo que consulta dados meteorológicos em tempo real, com interface responsiva e gráficos interativos.",
   stack: ["Next.js", "TailwindCSS", "TypeScript", "GraphQL", "Apollo Client"],
   status: Status.CONCLUIDO, // Usando o enum Status
   context: "Acadêmico - Projeto para integração de APIs",
   mentors: ["Prof. Laura Martins", "Dev. Marcos Lima"],
   influences: [
    "API do OpenWeatherMap",
    "Design minimalista",
    "Estudos sobre consumo de APIs REST",
   ],
   liveLink: "https://weather-app-example.com",
  },
 ];

 return (
  <section id="portfolio" className="flex w-full h-screen justify-center">
   <div className="flex flex-col items-center justify-center w-4/5 py-16">
    <h1 className="text-4xl font-bold text-white mb-10">Portfólio</h1>
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
     {projects.map((project, index) => (
      <motion.div
       key={index}
       className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
       initial={{ opacity: 0, scale: 0.9 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{ duration: 0.5 }}
      >
       <h2 className="text-2xl font-semibold text-yellow-400">
        {project.title}
       </h2>
       <p className="text-gray-400 mt-2">{project.description}</p>
       <div className="mt-4">
        <p className="text-gray-500">
         <span className="font-semibold">Status:</span> {project.status}
        </p>
        <p className="text-gray-500">
         <span className="font-semibold">Contexto:</span> {project.context}
        </p>
       </div>

       <div className="mt-4">
        <p className="text-gray-500">
         <span className="font-semibold">Tecnologias:</span>{" "}
         {project.stack.join(", ")}
        </p>
       </div>

       <div className="mt-4">
        <p className="text-gray-500">
         <span className="font-semibold">Mentores & Influências:</span>
        </p>
        <ul className="list-disc ml-5 text-gray-400">
         {project.mentors.map((mentor, i) => (
          <li key={i}>{mentor}</li>
         ))}
         {project.influences.map((influence, i) => (
          <li key={i}>{influence}</li>
         ))}
        </ul>
       </div>

       <div className="mt-6">
        <a
         href={project.liveLink}
         target="_blank"
         rel="noopener noreferrer"
         className="text-yellow-400 hover:underline"
        >
         Ver Projeto ao Vivo
        </a>
       </div>
      </motion.div>
     ))}
    </div>
   </div>
  </section>
 );
};

export default Portfolio;
