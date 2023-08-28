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
exports.addBusinessTeamOnlyDto = exports.CreateBusinessTeamDto = exports.TeamMemberDto = exports.TeammemberDto = exports.CreateTeamDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateTeamDto {
}
exports.CreateTeamDto = CreateTeamDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The name of the team', example: 'Development Team' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTeamDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The description of the team', example: 'A team responsible for software development' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTeamDto.prototype, "description", void 0);
class TeammemberDto {
}
exports.TeammemberDto = TeammemberDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], TeammemberDto.prototype, "userId", void 0);
class TeamMemberDto {
}
exports.TeamMemberDto = TeamMemberDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], TeamMemberDto.prototype, "teamId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], TeamMemberDto.prototype, "businessId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [TeammemberDto] }),
    __metadata("design:type", Array)
], TeamMemberDto.prototype, "member", void 0);
class CreateBusinessTeamDto {
}
exports.CreateBusinessTeamDto = CreateBusinessTeamDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [TeamMemberDto] }),
    __metadata("design:type", Array)
], CreateBusinessTeamDto.prototype, "businessteam", void 0);
class addBusinessTeamOnlyDto {
}
exports.addBusinessTeamOnlyDto = addBusinessTeamOnlyDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsInt)({ each: true }),
    __metadata("design:type", Array)
], addBusinessTeamOnlyDto.prototype, "userId", void 0);
//# sourceMappingURL=create-team.dto.js.map