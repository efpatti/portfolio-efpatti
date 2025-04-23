// portfolio/layout/ProjectDetails.tsx
import { Project } from "@/types/Project";

interface Props {
 project: Project;
}

const ProjectDetails = ({ project }: Props) => (
 <>
  <div className="mt-4 text-gray-500">
   <p>
    <span className="font-semibold">Status:</span> {project.status}
   </p>
   <p>
    <span className="font-semibold">Contexto:</span> {project.context}
   </p>
  </div>

  <div className="mt-4 text-gray-500">
   <p>
    <span className="font-semibold">Tecnologias:</span>{" "}
    {project.stack.join(", ")}
   </p>
  </div>
 </>
);

export default ProjectDetails;
