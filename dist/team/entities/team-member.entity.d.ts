import { Base } from "src/domain/base.entity";
import { Team } from "./team.entity";
import { User } from "src/user/entities/user.entity";
export declare class TeamMember extends Base {
    team: Team;
    user: User;
}
