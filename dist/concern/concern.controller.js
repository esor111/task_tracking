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
exports.ConcernController = void 0;
const common_1 = require("@nestjs/common");
const concern_service_1 = require("./concern.service");
const create_concern_dto_1 = require("./dto/create-concern.dto");
const update_concern_dto_1 = require("./dto/update-concern.dto");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
const user_decorators_1 = require("../user/user.decorators");
let ConcernController = exports.ConcernController = class ConcernController {
    constructor(concernService) {
        this.concernService = concernService;
    }
    async createConcern(user, createConcernDto) {
        return this.concernService.createConcern(createConcernDto, 1);
    }
    async createColumn(createcolumndto) {
        return this.concernService.createColumn(createcolumndto);
    }
    async createColumnType(columnNameId, columnTypeDto) {
        return await this.concernService.createColumnType(columnNameId, columnTypeDto);
    }
    findAll() {
        return this.concernService.findAll();
    }
    findOne(id) {
        return this.concernService.findOne(id);
    }
    findOneColumn(id) {
        return this.concernService.findOneColumn(id);
    }
    findOneColumnType(id) {
        return this.concernService.findOneColumnType(id);
    }
    update(id, updateConcernDto) {
        return this.concernService.update(+id, updateConcernDto);
    }
    remove(id) {
        return this.concernService.remove(+id);
    }
    removeColumn(id) {
        return this.concernService.removecolumn(id);
    }
};
__decorate([
    (0, common_1.Post)('concerns'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiOperation)({ description: 'Create a new concern' }),
    __param(0, (0, user_decorators_1.JwtUserDecorator)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_concern_dto_1.CreateConcernDto]),
    __metadata("design:returntype", Promise)
], ConcernController.prototype, "createConcern", null);
__decorate([
    (0, common_1.Post)('columns'),
    (0, swagger_1.ApiOperation)({ description: 'Create a new column' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_concern_dto_1.CreateConcernDto]),
    __metadata("design:returntype", Promise)
], ConcernController.prototype, "createColumn", null);
__decorate([
    (0, common_1.Post)('columntype/:columnNameId'),
    __param(0, (0, common_1.Param)('columnNameId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_concern_dto_1.ColumnTypeDTO]),
    __metadata("design:returntype", Promise)
], ConcernController.prototype, "createColumnType", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConcernController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ConcernController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('column/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ConcernController.prototype, "findOneColumn", null);
__decorate([
    (0, common_1.Get)('columntype/:columnId'),
    __param(0, (0, common_1.Param)('columnId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ConcernController.prototype, "findOneColumnType", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_concern_dto_1.UpdateConcernDto]),
    __metadata("design:returntype", void 0)
], ConcernController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConcernController.prototype, "remove", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ConcernController.prototype, "removeColumn", null);
exports.ConcernController = ConcernController = __decorate([
    (0, swagger_1.ApiTags)('concern'),
    (0, common_1.Controller)('concern'),
    __metadata("design:paramtypes", [concern_service_1.ConcernService])
], ConcernController);
//# sourceMappingURL=concern.controller.js.map