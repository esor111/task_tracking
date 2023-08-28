import { Base } from "src/domain/base.entity";
import { Record } from "src/record/entities/record.entity";
import { User } from "src/user/entities/user.entity";
import { ColumnName } from "src/column/entities/column.entity";
import { ConcernRow } from "./concern.row.entity";
export declare class Concern extends Base {
    name: string;
    columns: ColumnName[];
    records: Record[];
    user: User;
    concernrows: ConcernRow;
}
