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
exports.ColumnController = void 0;
const common_1 = require("@nestjs/common");
const column_service_1 = require("./column.service");
const create_column_dto_1 = require("./dto/create-column.dto");
const update_column_dto_1 = require("./dto/update-column.dto");
const swagger_1 = require("@nestjs/swagger");
let ColumnController = exports.ColumnController = class ColumnController {
    constructor(columnService) {
        this.columnService = columnService;
    }
    create(createColumnDto) {
        return this.columnService.create(createColumnDto);
    }
    addColumnValue(concernId, createcolumnvalue) {
        return this.columnService.addColumnValue(createcolumnvalue, concernId);
    }
    findConcernRows(concernId) {
        return this.columnService.returnval(concernId);
    }
    updateColumnValue(id, updateColumnValueDto) {
        const { value } = updateColumnValueDto;
        return this.columnService.updateColumnValue(id, value);
    }
    getColumnval() {
        return this.columnService.getColumnval();
    }
    findAll() {
        return this.columnService.findAll();
    }
    findOne(id) {
        return this.columnService.findOne(+id);
    }
    update(id, updateColumnDto) {
        return this.columnService.update(+id, updateColumnDto);
    }
    remove(id) {
        return this.columnService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_column_dto_1.CreateColumnDto]),
    __metadata("design:returntype", void 0)
], ColumnController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("addcolumnvalue/:concernId"),
    __param(0, (0, common_1.Query)('concernId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_column_dto_1.ColumnValueDTO]),
    __metadata("design:returntype", void 0)
], ColumnController.prototype, "addColumnValue", null);
__decorate([
    (0, common_1.Get)("rows/:concernId"),
    __param(0, (0, common_1.Query)('concernId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ColumnController.prototype, "findConcernRows", null);
__decorate([
    (0, common_1.Put)('columnvalue/update:id/'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_column_dto_1.UpdateColumnValueDto]),
    __metadata("design:returntype", void 0)
], ColumnController.prototype, "updateColumnValue", null);
__decorate([
    (0, common_1.Get)('columnval'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ColumnController.prototype, "getColumnval", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ColumnController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ColumnController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_column_dto_1.UpdateColumnDto]),
    __metadata("design:returntype", void 0)
], ColumnController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ColumnController.prototype, "remove", null);
exports.ColumnController = ColumnController = __decorate([
    (0, swagger_1.ApiTags)("column-man"),
    (0, common_1.Controller)('column'),
    __metadata("design:paramtypes", [column_service_1.ColumnService])
], ColumnController);
//# sourceMappingURL=column.controller.js.map