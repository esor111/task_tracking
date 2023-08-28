import { HttpException, Injectable } from "@nestjs/common";
import { CreateRecordDto } from "./dto/create-record.dto";
import { UpdateRecordDto } from "./dto/update-record.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Record } from "./entities/record.entity";
import { Repository } from "typeorm";
import { ConcernService } from "src/concern/concern.service";
import { UserService } from "src/user/user.service";

@Injectable()
export class RecordService {
  constructor(
    @InjectRepository(Record)
    private readonly recordRepository: Repository<Record>,
    private readonly concernservice: ConcernService,
    private readonly userService: UserService
  ) {}

  async createRecord(createRecordDto: CreateRecordDto, userId:number): Promise<Record> {
    const { concernId, columnId, value } = createRecordDto;

    const concern = await this.concernservice.findOne(concernId);
    if (!concern) {
      throw new HttpException("concern not found", 404);
    }

    const column = await this.concernservice.findOneColumn(columnId);
    if (!column) {
      throw new HttpException("column not found", 404);
    }

    const user = await this.userService.findOneById3(userId);
    if (!user) {
        throw new HttpException('user not found', 404);
    }
    return this.recordRepository.save({ concern, column, value, user });
  }

  findAll() {
    return this.recordRepository.find()
  }

  findOne(id: number) {
    return this.recordRepository.findOne({where:{id: id}})
  }

  findUserRecord(id: number) {
    return this.recordRepository.find({where:{user: {id: id}}, relations:['column', 'user']})
  } 


  update(id: number, updateRecordDto: UpdateRecordDto) {
    return `This action updates a #${id} record`;
  }

  remove(id: number) {
    return `This action removes a #${id} record`;
  }
}
