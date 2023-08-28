import { Base } from "src/domain/base.entity";
import { BusinessTeam } from "../../team/entities/business-team.entity";
import { User } from "src/user/entities/user.entity";
export declare class BusinessTeamMember extends Base {
    businessteam: BusinessTeam;
    user: User;
}
