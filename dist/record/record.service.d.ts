import { CreateRecordDto } from "./dto/create-record.dto";
import { UpdateRecordDto } from "./dto/update-record.dto";
import { Record } from "./entities/record.entity";
import { Repository } from "typeorm";
import { ConcernService } from "src/concern/concern.service";
import { UserService } from "src/user/user.service";
export declare class RecordService {
    private readonly recordRepository;
    private readonly concernservice;
    private readonly userService;
    constructor(recordRepository: Repository<Record>, concernservice: ConcernService, userService: UserService);
    createRecord(createRecordDto: CreateRecordDto, userId: number): Promise<Record>;
    findAll(): Promise<Record[]>;
    findOne(id: number): Promise<Record>;
    findUserRecord(id: number): Promise<Record[]>;
    update(id: number, updateRecordDto: UpdateRecordDto): string;
    remove(id: number): string;
}
