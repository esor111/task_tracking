import { ColumnService } from './column.service';
import { ColumnValueDTO, CreateColumnDto, UpdateColumnValueDto } from './dto/create-column.dto';
import { UpdateColumnDto } from './dto/update-column.dto';
export declare class ColumnController {
    private readonly columnService;
    constructor(columnService: ColumnService);
    create(createColumnDto: CreateColumnDto): string;
    addColumnValue(concernId: number, createcolumnvalue: ColumnValueDTO): Promise<({
        columnname: import("./entities/column.entity").ColumnName;
        value: string;
        concernrow: {
            concern: import("../concern/entities/concern.entity").Concern;
        } & import("../concern/entities/concern.row.entity").ConcernRow;
    } & import("./entities/columnvalue.entity").ColumnValue)[]>;
    findConcernRows(concernId: number): Promise<any>;
    updateColumnValue(id: number, updateColumnValueDto: UpdateColumnValueDto): Promise<import("./entities/columnvalue.entity").ColumnValue>;
    getColumnval(): Promise<import("./entities/columnvalue.entity").ColumnValue[]>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateColumnDto: UpdateColumnDto): string;
    remove(id: string): string;
}
