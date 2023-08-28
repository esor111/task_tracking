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
exports.ColumnTypeDTO = exports.ColumnTypeEnum = exports.CreateConcernDto = exports.CreateColumnDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateColumnDto {
}
exports.CreateColumnDto = CreateColumnDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateColumnDto.prototype, "name", void 0);
class CreateConcernDto {
}
exports.CreateConcernDto = CreateConcernDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateConcernDto.prototype, "name", void 0);
var ColumnTypeEnum;
(function (ColumnTypeEnum) {
    ColumnTypeEnum["priority"] = "PRIORITY";
    ColumnTypeEnum["level"] = "LEVEL";
    ColumnTypeEnum["person"] = "PERSON";
    ColumnTypeEnum["date"] = "DATE";
    ColumnTypeEnum["status"] = "STATUS";
})(ColumnTypeEnum || (exports.ColumnTypeEnum = ColumnTypeEnum = {}));
class ColumnTypeDTO {
}
exports.ColumnTypeDTO = ColumnTypeDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ColumnTypeDTO.prototype, "isDynamic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'object', nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], ColumnTypeDTO.prototype, "options", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ColumnTypeEnum }),
    (0, class_validator_1.IsEnum)(ColumnTypeEnum),
    __metadata("design:type", String)
], ColumnTypeDTO.prototype, "type", void 0);
//# sourceMappingURL=create-concern.dto.js.map