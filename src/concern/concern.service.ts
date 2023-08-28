import { HttpException, Injectable, NotFoundException } from "@nestjs/common";
import {
  ColumnTypeDTO,
  CreateColumnDto,
  CreateConcernDto,
} from "./dto/create-concern.dto";
import { UpdateConcernDto } from "./dto/update-concern.dto";
import { Concern } from "./entities/concern.entity";
import { InjectRepository } from "@nestjs/typeorm";
import {  Repository } from "typeorm";
import { UserService } from "src/user/user.service";
import { ColumnName } from "src/column/entities/column.entity";
import { ColumnType } from "src/column/entities/columntype.entity";

@Injectable()
export class ConcernService {
  constructor(
    @InjectRepository(Concern)
    private readonly concernRepository: Repository<Concern>,
    @InjectRepository(ColumnName)
    private readonly columnNameRepository: Repository<ColumnName>,

    @InjectRepository(ColumnType)
    private readonly columnTypeRepository: Repository<ColumnType>,
    private readonly userService: UserService
  ) {}

  async createConcern(
    createConcernDto: CreateConcernDto,
    userId
  ): Promise<Concern> {
    const userdata = await this.userService.findOneById3(userId);
    const user = await this.userService.findOneById3(userId);
    if (!user) {
      throw new HttpException("user not found", 404);
    }
    const { name } = createConcernDto;
    return this.concernRepository.save({ name, user: userdata });
  }

  async createColumn(createColumnDto: CreateColumnDto): Promise<ColumnName> {
    const { name } = createColumnDto;
    return this.columnNameRepository.save({ name });
  }

  async createColumnType(
    columnNameId: number,
    columnTypeDto: ColumnTypeDTO
  ): Promise<ColumnType> {
    const columnName = await this.findOneColumn(columnNameId);
    if (!columnName) {
      throw new NotFoundException("Column Name not found");
    }
    const columnType = new ColumnType();
    columnType.isDynamic = columnTypeDto.isDynamic;
    columnType.options = columnTypeDto.options;
    columnType.type = columnTypeDto.type;
    columnType.columnName = columnName;

    return this.columnTypeRepository.save(columnType);
  }



  findAll() {
    return this.concernRepository.find();
  }

  findOne(id: number) {
    return this.concernRepository.findOne({ where: { id: id } });
  }

  findOneColumn(id: number) {
    return this.columnNameRepository.findOne({ where: { id: id } });
  }

  async findOneColumnType(id: number) {
    let data = await this.columnTypeRepository.findOne({
      where: { columnName: { id: id } },
    });
  }

  update(id: number, updateConcernDto: UpdateConcernDto) {
    return `This action updates a #${id} concern`;
  }

  remove(id: number) {
    return `This action removes a #${id} concern`;
  }

  async removecolumn(id: number) {
    const column = await this.columnNameRepository.findOne({
      where: { id: id },
    });
    if (!column) {
      throw new HttpException("column not found", 404);
    }
    return this.columnNameRepository.delete(id);
  }
}
