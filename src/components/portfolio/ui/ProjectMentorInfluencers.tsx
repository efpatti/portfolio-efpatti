// portfolio/layout/ProjectMenorInfluencers.tsx
import { Project } from "@/types/Project";

interface Props {
 project: Project;
}

const ProjectMentorsInfluences = ({ project }: Props) => (
 <div className="mt-4">
  <p className="text-gray-500 font-semibold">Mentores & Influências:</p>
  <ul className="list-disc ml-5 text-gray-400">
   {project.mentors.map((mentor, i) => (
    <li key={`mentor-${i}`}>{mentor}</li>
   ))}
  </ul>
 </div>
);

export default ProjectMentorsInfluences;
