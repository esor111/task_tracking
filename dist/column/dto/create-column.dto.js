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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateColumnValueDto = exports.ColumnValueDTO = exports.ColumnValueItemDTO = exports.CreateColumnDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateColumnDto {
}
exports.CreateColumnDto = CreateColumnDto;
class ColumnValueItemDTO {
}
exports.ColumnValueItemDTO = ColumnValueItemDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ColumnValueItemDTO.prototype, "columnId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ColumnValueItemDTO.prototype, "rowId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ColumnValueItemDTO.prototype, "value", void 0);
class ColumnValueDTO {
}
exports.ColumnValueDTO = ColumnValueDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ColumnValueItemDTO] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ColumnValueDTO),
    __metadata("design:type", Array)
], ColumnValueDTO.prototype, "columnvalues", void 0);
class UpdateColumnValueDto {
}
exports.UpdateColumnValueDto = UpdateColumnValueDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateColumnValueDto.prototype, "value", void 0);
//# sourceMappingURL=create-column.dto.js.map