import { ConcernService } from './concern.service';
import { ColumnTypeDTO, CreateConcernDto } from './dto/create-concern.dto';
import { UpdateConcernDto } from './dto/update-concern.dto';
export declare class ConcernController {
    private readonly concernService;
    constructor(concernService: ConcernService);
    createConcern(user: any, createConcernDto: CreateConcernDto): Promise<import("./entities/concern.entity").Concern>;
    createColumn(createcolumndto: CreateConcernDto): Promise<import("../column/entities/column.entity").ColumnName>;
    createColumnType(columnNameId: number, columnTypeDto: ColumnTypeDTO): Promise<any>;
    findAll(): Promise<import("./entities/concern.entity").Concern[]>;
    findOne(id: number): Promise<import("./entities/concern.entity").Concern>;
    findOneColumn(id: number): Promise<import("../column/entities/column.entity").ColumnName>;
    findOneColumnType(id: number): Promise<void>;
    update(id: string, updateConcernDto: UpdateConcernDto): string;
    remove(id: string): string;
    removeColumn(id: number): Promise<import("typeorm").DeleteResult>;
}
