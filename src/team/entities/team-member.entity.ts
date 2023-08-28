import { Entity, ManyToOne, Column } from "typeorm";
import { Base } from "src/domain/base.entity";
import { Team } from "./team.entity"; // Import the Team entity
import { User } from "src/user/entities/user.entity";

@Entity()
export class TeamMember extends Base {

  @ManyToOne(() => Team)
  team: Team;

  @ManyToOne(() => User, user=> user.teammember)
  user: User;

}
