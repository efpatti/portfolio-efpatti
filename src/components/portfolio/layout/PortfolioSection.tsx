import { motion } from "framer-motion";
import { Project } from "@/types/Project";
import ProjectCard from "../ui/ProjectCard";

interface PortfolioSectionProps {
 projects: Project[];
}

const PortfolioSection = ({ projects }: PortfolioSectionProps) => (
 <section
  id="portfolio"
  className="w-full min-h-screen bg-zinc-950 text-white py-24 px-6"
 >
  <div className="max-w-6xl mx-auto flex flex-col items-center">
   <motion.h1
    className="text-4xl md:text-5xl font-bold text-yellow-400 mb-14"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
   >
    Meu Portfólio
   </motion.h1>

   <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {projects.map((project, index) => (
     <motion.div
      key={index}
      className="bg-zinc-800 p-6 rounded-2xl shadow-md hover:shadow-yellow-400/20 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
     >
      <ProjectCard project={project} />
     </motion.div>
    ))}
   </div>
  </div>
 </section>
);

export default PortfolioSection;
