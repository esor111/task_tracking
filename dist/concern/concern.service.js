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
exports.ConcernService = void 0;
const common_1 = require("@nestjs/common");
const concern_entity_1 = require("./entities/concern.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_service_1 = require("../user/user.service");
const column_entity_1 = require("../column/entities/column.entity");
const columntype_entity_1 = require("../column/entities/columntype.entity");
let ConcernService = exports.ConcernService = class ConcernService {
    constructor(concernRepository, columnNameRepository, columnTypeRepository, userService) {
        this.concernRepository = concernRepository;
        this.columnNameRepository = columnNameRepository;
        this.columnTypeRepository = columnTypeRepository;
        this.userService = userService;
    }
    async createConcern(createConcernDto, userId) {
        const userdata = await this.userService.findOneById3(userId);
        const user = await this.userService.findOneById3(userId);
        if (!user) {
            throw new common_1.HttpException("user not found", 404);
        }
        const { name } = createConcernDto;
        return this.concernRepository.save({ name, user: userdata });
    }
    async createColumn(createColumnDto) {
        const { name } = createColumnDto;
        return this.columnNameRepository.save({ name });
    }
    async createColumnType(columnNameId, columnTypeDto) {
        const columnName = await this.findOneColumn(columnNameId);
        if (!columnName) {
            throw new common_1.NotFoundException("Column Name not found");
        }
        const columnType = new columntype_entity_1.ColumnType();
        columnType.isDynamic = columnTypeDto.isDynamic;
        columnType.options = columnTypeDto.options;
        columnType.type = columnTypeDto.type;
        columnType.columnName = columnName;
        return this.columnTypeRepository.save(columnType);
    }
    findAll() {
        return this.concernRepository.find();
    }
    findOne(id) {
        return this.concernRepository.findOne({ where: { id: id } });
    }
    findOneColumn(id) {
        return this.columnNameRepository.findOne({ where: { id: id } });
    }
    async findOneColumnType(id) {
        let data = await this.columnTypeRepository.findOne({
            where: { columnName: { id: id } },
        });
    }
    update(id, updateConcernDto) {
        return `This action updates a #${id} concern`;
    }
    remove(id) {
        return `This action removes a #${id} concern`;
    }
    async removecolumn(id) {
        const column = await this.columnNameRepository.findOne({
            where: { id: id },
        });
        if (!column) {
            throw new common_1.HttpException("column not found", 404);
        }
        return this.columnNameRepository.delete(id);
    }
};
exports.ConcernService = ConcernService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(concern_entity_1.Concern)),
    __param(1, (0, typeorm_1.InjectRepository)(column_entity_1.ColumnName)),
    __param(2, (0, typeorm_1.InjectRepository)(columntype_entity_1.ColumnType)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        user_service_1.UserService])
], ConcernService);
//# sourceMappingURL=concern.service.js.map