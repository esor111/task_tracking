import { Base } from "src/domain/base.entity";
import { Concern } from "src/concern/entities/concern.entity";
import { User } from "src/user/entities/user.entity";
import { ColumnName } from "src/column/entities/column.entity";
export declare class Record extends Base {
    column: ColumnName;
    value: any;
    user: User;
    concern: Concern;
}
