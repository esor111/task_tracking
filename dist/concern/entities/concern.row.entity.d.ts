import { Base } from 'src/domain/base.entity';
import { Concern } from './concern.entity';
import { ColumnValue } from 'src/column/entities/columnvalue.entity';
export declare class ConcernRow extends Base {
    concern: Concern;
    columnvalues: ColumnValue[];
}
