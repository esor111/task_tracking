import { Base } from 'src/domain/base.entity';
import { ColumnName } from './column.entity';
import { ConcernRow } from 'src/concern/entities/concern.row.entity';
export declare class ColumnValue extends Base {
    value: string;
    columnname: ColumnName;
    concernrow: ConcernRow;
}
