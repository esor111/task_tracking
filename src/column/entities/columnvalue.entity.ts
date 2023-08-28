import { Entity, Column,  JoinColumn, ManyToOne } from 'typeorm';
import { Base } from 'src/domain/base.entity';
import { ColumnName } from './column.entity';
import { ConcernRow } from 'src/concern/entities/concern.row.entity';

@Entity()
export class ColumnValue extends Base {
  @Column()
  value: string;

  @ManyToOne(() => ColumnName, columnName => columnName.columnvalue)
  @JoinColumn({name:"column_name"})
  columnname: ColumnName;

  @ManyToOne(()=> ConcernRow, concernrow=> concernrow.columnvalues)
  @JoinColumn({name:"concernrow_id"})
  concernrow:ConcernRow
}