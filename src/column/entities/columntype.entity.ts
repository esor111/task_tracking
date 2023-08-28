import { Base } from 'src/domain/base.entity';
import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { ColumnName } from './column.entity';
import { ColumnTypeEnum } from 'src/concern/dto/create-concern.dto';


@Entity()
export class ColumnType extends Base {
  @Column({ type: 'boolean', default: false })
  isDynamic: boolean;

  @Column('jsonb', { nullable: true })
  options: any;

  @OneToOne(() => ColumnName, columnName => columnName.columntype)
  @JoinColumn() 
  columnName: ColumnName;

  @Column('enum', {enum: ColumnTypeEnum})
  type: ColumnTypeEnum
}