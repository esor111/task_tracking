import { Base } from "src/domain/base.entity";
import {
  Entity,
  Column,
  ManyToMany,
  JoinTable,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Record } from "src/record/entities/record.entity";
import { User } from "src/user/entities/user.entity";
import { ColumnName } from "src/column/entities/column.entity";
import { ConcernRow } from "./concern.row.entity";

@Entity()
export class Concern extends Base {
  @Column()
  name: string;

  @ManyToMany(() => ColumnName)
  @JoinTable()
  columns: ColumnName[];

  @OneToMany(() => Record, (record) => record.concern)
  records: Record[];

  @ManyToOne(() => User)
  user: User;

  @OneToMany(() => ConcernRow, (concernrow) => concernrow.concern)
  concernrows: ConcernRow;
}
