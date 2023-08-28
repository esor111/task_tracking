import { ColumnValueDTO, CreateColumnDto } from "./dto/create-column.dto";
import { UpdateColumnDto } from "./dto/update-column.dto";
import { ConcernRow } from "src/concern/entities/concern.row.entity";
import { Repository } from "typeorm";
import { ConcernService } from "src/concern/concern.service";
import { ColumnValue } from "./entities/columnvalue.entity";
import { ColumnType } from "./entities/columntype.entity";
export declare class ColumnService {
    private readonly concernrowRepository;
    private readonly columnvalueRepository;
    private readonly columnTypeRepository;
    private readonly concernservice;
    constructor(concernrowRepository: Repository<ConcernRow>, columnvalueRepository: Repository<ColumnValue>, columnTypeRepository: Repository<ColumnType>, concernservice: ConcernService);
    create(createColumnDto: CreateColumnDto): string;
    addColumnValue(createcolumnvalue: ColumnValueDTO, concernId: number): Promise<({
        columnname: import("./entities/column.entity").ColumnName;
        value: string;
        concernrow: {
            concern: import("../concern/entities/concern.entity").Concern;
        } & ConcernRow;
    } & ColumnValue)[]>;
    IsvalueExist(columntype: any, value: string): Promise<boolean>;
    addSingleColumnvalue(rowId: number, columnId: number, value: string): Promise<void>;
    findConcernRows(concernId: number): Promise<any[]>;
    returnval(concernId: number): Promise<any>;
    getColumnval(): Promise<ColumnValue[]>;
    updateColumnValue(id: number, value: string): Promise<ColumnValue>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateColumnDto: UpdateColumnDto): string;
    remove(id: number): string;
}
