import { Base } from "src/domain/base.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Concern } from "src/concern/entities/concern.entity";
import { User } from "src/user/entities/user.entity";
import { ColumnName } from "src/column/entities/column.entity";


@Entity()
export class Record extends Base {

  @ManyToOne(() => ColumnName)
  column: ColumnName;

  @Column('jsonb') 
  value: any; // JSON data can take any form, so 'any' is used here

  @ManyToOne(()=> User, user=> user.record)
  public user: User

  @ManyToOne(() => Concern, concern => concern.records)
  concern: Concern;

}