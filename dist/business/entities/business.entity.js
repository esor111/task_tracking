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
exports.BusinessEntity = void 0;
const base_entity_1 = require("../../domain/base.entity");
const typeorm_1 = require("typeorm");
const business_user_entity_1 = require("./business-user.entity");
const business_team_entity_1 = require("../../team/entities/business-team.entity");
let BusinessEntity = exports.BusinessEntity = class BusinessEntity extends base_entity_1.Base {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 200 }),
    __metadata("design:type", String)
], BusinessEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 75, nullable: true }),
    __metadata("design:type", String)
], BusinessEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 15 }),
    __metadata("design:type", String)
], BusinessEntity.prototype, "contact", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 250, nullable: false }),
    __metadata("design:type", String)
], BusinessEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], BusinessEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', { default: true, nullable: true }),
    __metadata("design:type", Boolean)
], BusinessEntity.prototype, "available", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true, name: 'avatar' }),
    __metadata("design:type", String)
], BusinessEntity.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.Column)('jsonb', { nullable: true, default: [] }),
    __metadata("design:type", Array)
], BusinessEntity.prototype, "gallery", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => business_user_entity_1.BusinessUser, (businessuser) => businessuser.business),
    __metadata("design:type", business_user_entity_1.BusinessUser)
], BusinessEntity.prototype, "businessuser", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => business_team_entity_1.BusinessTeam, (businessteam) => businessteam.business),
    __metadata("design:type", business_team_entity_1.BusinessTeam)
], BusinessEntity.prototype, "businessteam", void 0);
exports.BusinessEntity = BusinessEntity = __decorate([
    (0, typeorm_1.Entity)()
], BusinessEntity);
//# sourceMappingURL=business.entity.js.map