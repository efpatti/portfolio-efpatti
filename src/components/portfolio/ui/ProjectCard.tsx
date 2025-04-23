// portfolio/layout/ProjectCard.tsx
import { Project } from "@/types/Project";
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
    href={project.repository}
    target="_blank"
    rel="noopener noreferrer"
    className="text-yellow-400 hover:underline"
   >
    Ver
   </a>
  </div>
 </div>
);

export default ProjectCard;
