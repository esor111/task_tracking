import { Base } from "src/domain/base.entity";
import { Project } from "./project.entity";
import { Team } from "src/team/entities/team.entity";
import { ProjectTeamMember } from "./project-team-member";
export declare class ProjectTeam extends Base {
    project: Project;
    team: Team;
    projectteammember: ProjectTeamMember;
}
