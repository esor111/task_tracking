import { Entity, ManyToOne, OneToMany } from "typeorm";
import { BusinessEntity } from "../../business/entities/business.entity";
import { Base } from "src/domain/base.entity";
import { Team } from "src/team/entities/team.entity";
import { BusinessTeamMember } from "../../business/entities/business-team-member.entity";

@Entity("business_team") 
export class BusinessTeam extends Base {
  @ManyToOne(() => BusinessEntity, (business) => business.businessteam)
  public business: BusinessEntity;

  @ManyToOne(() => Team)
  public team: Team;

  @OneToMany(
    () => BusinessTeamMember,
    (businessteammember) => businessteammember.businessteam
  )
  public businessteammember: BusinessTeamMember;
}
