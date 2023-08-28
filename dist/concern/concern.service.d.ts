import { ColumnTypeDTO, CreateColumnDto, CreateConcernDto } from "./dto/create-concern.dto";
import { UpdateConcernDto } from "./dto/update-concern.dto";
import { Concern } from "./entities/concern.entity";
import { Repository } from "typeorm";
import { UserService } from "src/user/user.service";
import { ColumnName } from "src/column/entities/column.entity";
import { ColumnType } from "src/column/entities/columntype.entity";
export declare class ConcernService {
    private readonly concernRepository;
    private readonly columnNameRepository;
    private readonly columnTypeRepository;
    private readonly userService;
    constructor(concernRepository: Repository<Concern>, columnNameRepository: Repository<ColumnName>, columnTypeRepository: Repository<ColumnType>, userService: UserService);
    createConcern(createConcernDto: CreateConcernDto, userId: any): Promise<Concern>;
    createColumn(createColumnDto: CreateColumnDto): Promise<ColumnName>;
    createColumnType(columnNameId: number, columnTypeDto: ColumnTypeDTO): Promise<ColumnType>;
    findAll(): Promise<Concern[]>;
    findOne(id: number): Promise<Concern>;
    findOneColumn(id: number): Promise<ColumnName>;
    findOneColumnType(id: number): Promise<void>;
    update(id: number, updateConcernDto: UpdateConcernDto): string;
    remove(id: number): string;
    removecolumn(id: number): Promise<import("typeorm").DeleteResult>;
}
