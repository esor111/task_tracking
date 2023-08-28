import { Base } from "src/domain/base.entity";
import { ProjectTeam } from "./project-team.entity";
export declare class Project extends Base {
    projectName: string;
    projectDescription: string;
    startDate: Date;
    endDate: Date;
    projectteam: ProjectTeam;
}
