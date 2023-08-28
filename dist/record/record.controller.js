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
exports.RecordController = void 0;
const common_1 = require("@nestjs/common");
const record_service_1 = require("./record.service");
const create_record_dto_1 = require("./dto/create-record.dto");
const update_record_dto_1 = require("./dto/update-record.dto");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
const user_decorators_1 = require("../user/user.decorators");
let RecordController = exports.RecordController = class RecordController {
    constructor(recordService) {
        this.recordService = recordService;
    }
    async createRecord(user, createRecordDto) {
        return this.recordService.createRecord(createRecordDto, user.id);
    }
    findAll() {
        return this.recordService.findAll();
    }
    findOne(id) {
        return this.recordService.findOne(+id);
    }
    findUserRecord(id) {
        return this.recordService.findUserRecord(id);
    }
    update(id, updateRecordDto) {
        return this.recordService.update(+id, updateRecordDto);
    }
    remove(id) {
        return this.recordService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiOperation)({ description: 'Create a new record' }),
    __param(0, (0, user_decorators_1.JwtUserDecorator)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_record_dto_1.CreateRecordDto]),
    __metadata("design:returntype", Promise)
], RecordController.prototype, "createRecord", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RecordController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RecordController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RecordController.prototype, "findUserRecord", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_record_dto_1.UpdateRecordDto]),
    __metadata("design:returntype", void 0)
], RecordController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RecordController.prototype, "remove", null);
exports.RecordController = RecordController = __decorate([
    (0, swagger_1.ApiTags)("record"),
    (0, common_1.Controller)('record'),
    __metadata("design:paramtypes", [record_service_1.RecordService])
], RecordController);
//# sourceMappingURL=record.controller.js.map