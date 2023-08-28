import { Base } from 'src/domain/base.entity';
import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { ColumnType } from './columntype.entity';
import { ColumnValue } from './columnvalue.entity';

@Entity()
export class  ColumnName extends Base {
  @Column()
  name: string;
  
  @OneToOne(() => ColumnType, columntype => columntype.columnName)
  columntype: ColumnType;


  @OneToOne(() => ColumnValue, ColumnValue => ColumnValue.columnname)
  columnvalue: ColumnValue;
}