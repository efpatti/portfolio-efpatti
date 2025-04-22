// Project.ts
import { Status } from "./Status";

export interface Project {
 title: string;
 description: string;
 stack: string[];
 status: Status;
 context: string;
 mentors: string[];
 influences: string[];
 liveLink: string;
}
