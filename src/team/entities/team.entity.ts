import { IsNotEmpty } from "class-validator";
import { Base } from "src/domain/base.entity";
import { Column, Entity } from "typeorm";

@Entity() 
export class Team extends Base {
  @Column("text", { nullable: false })
  @IsNotEmpty()
  name: string;

  @Column("text", { nullable: false })
  @IsNotEmpty()
  description: string;
}
