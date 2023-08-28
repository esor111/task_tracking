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
exports.RecordService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const record_entity_1 = require("./entities/record.entity");
const typeorm_2 = require("typeorm");
const concern_service_1 = require("../concern/concern.service");
const user_service_1 = require("../user/user.service");
let RecordService = exports.RecordService = class RecordService {
    constructor(recordRepository, concernservice, userService) {
        this.recordRepository = recordRepository;
        this.concernservice = concernservice;
        this.userService = userService;
    }
    async createRecord(createRecordDto, userId) {
        const { concernId, columnId, value } = createRecordDto;
        const concern = await this.concernservice.findOne(concernId);
        if (!concern) {
            throw new common_1.HttpException("concern not found", 404);
        }
        const column = await this.concernservice.findOneColumn(columnId);
        if (!column) {
            throw new common_1.HttpException("column not found", 404);
        }
        const user = await this.userService.findOneById3(userId);
        if (!user) {
            throw new common_1.HttpException('user not found', 404);
        }
        return this.recordRepository.save({ concern, column, value, user });
    }
    findAll() {
        return this.recordRepository.find();
    }
    findOne(id) {
        return this.recordRepository.findOne({ where: { id: id } });
    }
    findUserRecord(id) {
        return this.recordRepository.find({ where: { user: { id: id } }, relations: ['column', 'user'] });
    }
    update(id, updateRecordDto) {
        return `This action updates a #${id} record`;
    }
    remove(id) {
        return `This action removes a #${id} record`;
    }
};
exports.RecordService = RecordService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(record_entity_1.Record)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        concern_service_1.ConcernService,
        user_service_1.UserService])
], RecordService);
//# sourceMappingURL=record.service.js.map