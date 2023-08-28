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
exports.PaginationParams = exports.businessIdesDto = exports.removebusinessuserDto = exports.assignRoleDto = exports.addpermissionToRoleDto = exports.addpermissionToRole = exports.addUsertoBusinessDto = exports.CreateBusinessDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
class CreateBusinessDto {
}
exports.CreateBusinessDto = CreateBusinessDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, typeorm_1.Column)('varchar', { length: 200 }),
    __metadata("design:type", String)
], CreateBusinessDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    (0, typeorm_1.Column)('varchar', { length: 75, nullable: true }),
    __metadata("design:type", String)
], CreateBusinessDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, typeorm_1.Column)('varchar', { length: 15 }),
    __metadata("design:type", String)
], CreateBusinessDto.prototype, "contact", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, typeorm_1.Column)('varchar', { length: 250, nullable: false }),
    __metadata("design:type", String)
], CreateBusinessDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], CreateBusinessDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, typeorm_1.Column)('boolean', { default: true, nullable: true }),
    __metadata("design:type", Boolean)
], CreateBusinessDto.prototype, "available", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, typeorm_1.Column)('text', { nullable: true, name: 'avatar' }),
    __metadata("design:type", String)
], CreateBusinessDto.prototype, "avatar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, typeorm_1.Column)('jsonb', { nullable: true, default: [] }),
    __metadata("design:type", Array)
], CreateBusinessDto.prototype, "gallery", void 0);
class addUsertoBusinessDto {
}
exports.addUsertoBusinessDto = addUsertoBusinessDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", Number)
], addUsertoBusinessDto.prototype, "businessId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], addUsertoBusinessDto.prototype, "rollid", void 0);
class addpermissionToRole {
}
exports.addpermissionToRole = addpermissionToRole;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], addpermissionToRole.prototype, "permissionIds", void 0);
class addpermissionToRoleDto {
}
exports.addpermissionToRoleDto = addpermissionToRoleDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    __metadata("design:type", Array)
], addpermissionToRoleDto.prototype, "ids", void 0);
class assignRoleDto {
}
exports.assignRoleDto = assignRoleDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", Number)
], assignRoleDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", Number)
], assignRoleDto.prototype, "roleId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", Number)
], assignRoleDto.prototype, "businessId", void 0);
class removebusinessuserDto {
}
exports.removebusinessuserDto = removebusinessuserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", Number)
], removebusinessuserDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", Number)
], removebusinessuserDto.prototype, "businessId", void 0);
class businessIdesDto {
}
exports.businessIdesDto = businessIdesDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsInt)({ each: true }),
    __metadata("design:type", Array)
], businessIdesDto.prototype, "businessIdes", void 0);
class PaginationParams {
}
exports.PaginationParams = PaginationParams;
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1 }),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", Number)
], PaginationParams.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 10 }),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", Number)
], PaginationParams.prototype, "take", void 0);
//# sourceMappingURL=create-business.dto.js.map