import { Base } from "src/domain/base.entity";
import { Entity, ManyToOne, OneToMany } from "typeorm";
import { Project } from "./project.entity";
import { Team } from "src/team/entities/team.entity";
import { ProjectTeamMember } from "./project-team-member";

@Entity()
export class ProjectTeam extends Base {
  @ManyToOne(() => Project, (project) => project.projectteam)
  public project: Project;

  @ManyToOne(()=> Team)
  team: Team  

  @OneToMany(()=> ProjectTeamMember, projectteammember=>projectteammember.projectteam)
  public projectteammember:ProjectTeamMember
}