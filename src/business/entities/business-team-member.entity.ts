import { Entity, ManyToOne } from "typeorm";
import { Base } from "src/domain/base.entity";
import { BusinessTeam } from "../../team/entities/business-team.entity";
import { User } from "src/user/entities/user.entity";

@Entity("business_team_member")
export class BusinessTeamMember extends Base {

@ManyToOne(()=> BusinessTeam, businessteam=>businessteam.businessteammember)
public businessteam: BusinessTeam

@ManyToOne(()=> User, user=> user.businessteammember)
public user: User;
}