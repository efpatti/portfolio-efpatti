// components/PortfolioSection.tsx
import { motion } from "motion/react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";

interface PortfolioSectionProps {
 projects: Project[];
}

const PortfolioSection = ({ projects }: PortfolioSectionProps) => (
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
      <ProjectCard project={project} />
     </motion.div>
    ))}
   </div>
  </div>
 </section>
);

export default PortfolioSection;
