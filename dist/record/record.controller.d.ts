import { RecordService } from './record.service';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
export declare class RecordController {
    private readonly recordService;
    constructor(recordService: RecordService);
    createRecord(user: any, createRecordDto: CreateRecordDto): Promise<import("./entities/record.entity").Record>;
    findAll(): Promise<import("./entities/record.entity").Record[]>;
    findOne(id: string): Promise<import("./entities/record.entity").Record>;
    findUserRecord(id: number): Promise<import("./entities/record.entity").Record[]>;
    update(id: string, updateRecordDto: UpdateRecordDto): string;
    remove(id: string): string;
}
