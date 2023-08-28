import { Base } from "src/domain/base.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { ProjectTeam } from "./project-team.entity";

@Entity()
export class Project extends Base{
   @Column({ name: 'project_name', length: 100, unique: true })
   projectName: string;
 
   @Column({ name: 'project_description', length: 255 })
   projectDescription: string;

   @Column({ name: 'start_date', type: 'date' })
   startDate: Date;
 
   @Column({ name: 'end_date', type: 'date' })
   endDate: Date;  

   @OneToMany(()=> ProjectTeam, projectteam=> projectteam.project)
   public projectteam: ProjectTeam
}