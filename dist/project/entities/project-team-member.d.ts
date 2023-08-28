import { Base } from "src/domain/base.entity";
import { ProjectTeam } from "./project-team.entity";
import { User } from "src/user/entities/user.entity";
export declare class ProjectTeamMember extends Base {
    projectteam: ProjectTeam;
    member: User;
}
