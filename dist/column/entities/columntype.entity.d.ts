import { Base } from 'src/domain/base.entity';
import { ColumnName } from './column.entity';
import { ColumnTypeEnum } from 'src/concern/dto/create-concern.dto';
export declare class ColumnType extends Base {
    isDynamic: boolean;
    options: any;
    columnName: ColumnName;
    type: ColumnTypeEnum;
}
