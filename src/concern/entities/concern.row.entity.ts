import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Base } from 'src/domain/base.entity';
import { Concern } from './concern.entity';
import { ColumnValue } from 'src/column/entities/columnvalue.entity';

@Entity()
export class ConcernRow extends Base {
  @ManyToOne(() => Concern, concern => concern.concernrows)
  concern: Concern;

  @OneToMany(() => ColumnValue, columnValue => columnValue.concernrow)
  columnvalues: ColumnValue[]; 
}