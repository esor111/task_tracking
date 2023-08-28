import { Base } from "src/domain/base.entity";
import { Entity, ManyToOne } from "typeorm";
import { ProjectTeam } from "./project-team.entity";
import { User } from "src/user/entities/user.entity";

@Entity()
export class ProjectTeamMember extends Base {


  @ManyToOne(() => ProjectTeam, (projectteam) => projectteam.projectteammember)
  public projectteam: ProjectTeam;

  @ManyToOne(()=> User)
  member: User  
}