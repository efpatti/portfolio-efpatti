// components/ProjectCard.tsx
import { Project } from "./Project";
import ProjectDetails from "./ProjectDetails";
import ProjectMentorsInfluences from "./ProjectMentorInfluencers";

interface Props {
 project: Project;
}

const ProjectCard = ({ project }: Props) => (
 <div>
  <h2 className="text-2xl font-semibold text-yellow-400">{project.title}</h2>
  <p className="text-gray-400 mt-2">{project.description}</p>

  <ProjectDetails project={project} />
  <ProjectMentorsInfluences project={project} />

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
 </div>
);

export default ProjectCard;
