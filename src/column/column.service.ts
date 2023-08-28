import { HttpException, Injectable } from "@nestjs/common";
import { ColumnValueDTO, CreateColumnDto } from "./dto/create-column.dto";
import { UpdateColumnDto } from "./dto/update-column.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { ConcernRow } from "src/concern/entities/concern.row.entity";
import { Repository } from "typeorm";
import { ConcernService } from "src/concern/concern.service";
import { async } from "rxjs";
import { ColumnValue } from "./entities/columnvalue.entity";
import { ColumnType } from "./entities/columntype.entity";
import { promises } from "dns";

@Injectable()
export class ColumnService {
  constructor(
    @InjectRepository(ConcernRow)
    private readonly concernrowRepository: Repository<ConcernRow>,

    @InjectRepository(ColumnValue)
    private readonly columnvalueRepository: Repository<ColumnValue>,

    @InjectRepository(ColumnType)
    private readonly columnTypeRepository: Repository<ColumnType>,

    private readonly concernservice: ConcernService
  ) {}

  create(createColumnDto: CreateColumnDto) {
    return "This action adds a new column";
  }

  async addColumnValue(createcolumnvalue: ColumnValueDTO, concernId: number) {
    const { columnvalues } = createcolumnvalue;
    const concern = await this.concernservice.findOne(concernId);
    if (!concern) {
      throw new HttpException("concern not found", 404);
    }
    const concernrow = await this.concernrowRepository.save({ concern });

    const columnvalue = await Promise.all(
      columnvalues.map(async (values) => {
        const { columnId, value, rowId } = values;

        const columntype = await this.columnTypeRepository.findOne({
          where: { columnName: { id: columnId } },
        });

        const column = await this.concernservice.findOneColumn(columnId);
        if (!column) {
          throw new HttpException("column not found", 404);
        }
      
        if(!columntype){
          throw new HttpException("column type not found", 404)
        }

        if (columntype && columntype?.isDynamic) {
           this.IsvalueExist(columntype, value)
        }

        if (rowId) {
          const row = await this.concernrowRepository.findOne({
            where: { id: rowId },
          });
          if (!row) {
            throw new HttpException("row not found", 404);
          }
          if (columntype && columntype?.isDynamic) {
            this.IsvalueExist(columntype, value)
         }
         
        }

        const savedColumnvalue = await this.columnvalueRepository.save({
          columnname: column,
          value,
          concernrow,
        });
        return savedColumnvalue;
      })
    );
    return columnvalue;
  }

async IsvalueExist(columntype:any, value:string): Promise<boolean>{
    const types = Object.keys(columntype?.options);
    const includess = types.includes(value);
    if (!includess) {
      throw new HttpException(
        "value must be it in columntype table",
        500
      );
    }
    return true;
}


  async addSingleColumnvalue(rowId: number, columnId: number, value: string) {}

  async findConcernRows(concernId: number): Promise<any[]> {
    const rows = await this.concernrowRepository
      .createQueryBuilder("row")
      .leftJoinAndSelect("row.columnvalues", "columnvalue")
      .leftJoinAndSelect("columnvalue.columnname", "column")
      .where("row.concern.id =:id", { id: concernId })
      .getMany();
    return rows;
  }

  async returnval(concernId: number): Promise<any> {
    let rows = await this.findConcernRows(concernId);
    const formattedRows = rows?.map((row) => {
      return row?.columnvalues.map((each) => {
        return {
          rowid: row.id,
          colvalid: each.id,
          status: each?.columnname?.name,
          value: each?.value,
        };
      });
    });
    return formattedRows.flat();
  }

  getColumnval() {
    return this.columnvalueRepository.find({ relations: ["columnname"] });
  }

  async updateColumnValue(id: number, value: string) {
    const columnvalue = await this.columnvalueRepository.findOne({
      where: { id: id },
    });
    if (!columnvalue) {
      throw new HttpException("columnval not found", 404);
    }
    columnvalue.value = value;

    return await this.columnvalueRepository.save(columnvalue);
  }

  findAll() {
    return `This action returns all column`;
  }

  findOne(id: number) {
    return `This action returns a #${id} column`;
  }

  update(id: number, updateColumnDto: UpdateColumnDto) {
    return `This action updates a #${id} column`;
  }

  remove(id: number) {
    return `This action removes a #${id} column`;
  }
}
