"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const concern_row_entity_1 = require("../concern/entities/concern.row.entity");
const typeorm_2 = require("typeorm");
const concern_service_1 = require("../concern/concern.service");
const columnvalue_entity_1 = require("./entities/columnvalue.entity");
const columntype_entity_1 = require("./entities/columntype.entity");
let ColumnService = exports.ColumnService = class ColumnService {
    constructor(concernrowRepository, columnvalueRepository, columnTypeRepository, concernservice) {
        this.concernrowRepository = concernrowRepository;
        this.columnvalueRepository = columnvalueRepository;
        this.columnTypeRepository = columnTypeRepository;
        this.concernservice = concernservice;
    }
    create(createColumnDto) {
        return "This action adds a new column";
    }
    async addColumnValue(createcolumnvalue, concernId) {
        const { columnvalues } = createcolumnvalue;
        const concern = await this.concernservice.findOne(concernId);
        if (!concern) {
            throw new common_1.HttpException("concern not found", 404);
        }
        const concernrow = await this.concernrowRepository.save({ concern });
        const columnvalue = await Promise.all(columnvalues.map(async (values) => {
            const { columnId, value, rowId } = values;
            const columntype = await this.columnTypeRepository.findOne({
                where: { columnName: { id: columnId } },
            });
            const column = await this.concernservice.findOneColumn(columnId);
            if (!column) {
                throw new common_1.HttpException("column not found", 404);
            }
            if (!columntype) {
                throw new common_1.HttpException("column type not found", 404);
            }
            if (columntype && columntype?.isDynamic) {
                this.IsvalueExist(columntype, value);
            }
            if (rowId) {
                const row = await this.concernrowRepository.findOne({
                    where: { id: rowId },
                });
                if (!row) {
                    throw new common_1.HttpException("row not found", 404);
                }
                if (columntype && columntype?.isDynamic) {
                    this.IsvalueExist(columntype, value);
                }
            }
            const savedColumnvalue = await this.columnvalueRepository.save({
                columnname: column,
                value,
                concernrow,
            });
            return savedColumnvalue;
        }));
        return columnvalue;
    }
    async IsvalueExist(columntype, value) {
        const types = Object.keys(columntype?.options);
        const includess = types.includes(value);
        if (!includess) {
            throw new common_1.HttpException("value must be it in columntype table", 500);
        }
        return true;
    }
    async addSingleColumnvalue(rowId, columnId, value) { }
    async findConcernRows(concernId) {
        const rows = await this.concernrowRepository
            .createQueryBuilder("row")
            .leftJoinAndSelect("row.columnvalues", "columnvalue")
            .leftJoinAndSelect("columnvalue.columnname", "column")
            .where("row.concern.id =:id", { id: concernId })
            .getMany();
        return rows;
    }
    async returnval(concernId) {
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
    async updateColumnValue(id, value) {
        const columnvalue = await this.columnvalueRepository.findOne({
            where: { id: id },
        });
        if (!columnvalue) {
            throw new common_1.HttpException("columnval not found", 404);
        }
        columnvalue.value = value;
        return await this.columnvalueRepository.save(columnvalue);
    }
    findAll() {
        return `This action returns all column`;
    }
    findOne(id) {
        return `This action returns a #${id} column`;
    }
    update(id, updateColumnDto) {
        return `This action updates a #${id} column`;
    }
    remove(id) {
        return `This action removes a #${id} column`;
    }
};
exports.ColumnService = ColumnService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(concern_row_entity_1.ConcernRow)),
    __param(1, (0, typeorm_1.InjectRepository)(columnvalue_entity_1.ColumnValue)),
    __param(2, (0, typeorm_1.InjectRepository)(columntype_entity_1.ColumnType)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        concern_service_1.ConcernService])
], ColumnService);
//# sourceMappingURL=column.service.js.map