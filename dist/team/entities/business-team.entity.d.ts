import { BusinessEntity } from "../../business/entities/business.entity";
import { Base } from "src/domain/base.entity";
import { Team } from "src/team/entities/team.entity";
import { BusinessTeamMember } from "../../business/entities/business-team-member.entity";
export declare class BusinessTeam extends Base {
    business: BusinessEntity;
    team: Team;
    businessteammember: BusinessTeamMember;
}
