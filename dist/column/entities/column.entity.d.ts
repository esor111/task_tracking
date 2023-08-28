import { Base } from 'src/domain/base.entity';
import { ColumnType } from './columntype.entity';
import { ColumnValue } from './columnvalue.entity';
export declare class ColumnName extends Base {
    name: string;
    columntype: ColumnType;
    columnvalue: ColumnValue;
}
