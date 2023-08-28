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
exports.BusinessTeam = void 0;
const typeorm_1 = require("typeorm");
const business_entity_1 = require("../../business/entities/business.entity");
const base_entity_1 = require("../../domain/base.entity");
const team_entity_1 = require("./team.entity");
const business_team_member_entity_1 = require("../../business/entities/business-team-member.entity");
let BusinessTeam = exports.BusinessTeam = class BusinessTeam extends base_entity_1.Base {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => business_entity_1.BusinessEntity, (business) => business.businessteam),
    __metadata("design:type", business_entity_1.BusinessEntity)
], BusinessTeam.prototype, "business", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => team_entity_1.Team),
    __metadata("design:type", team_entity_1.Team)
], BusinessTeam.prototype, "team", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => business_team_member_entity_1.BusinessTeamMember, (businessteammember) => businessteammember.businessteam),
    __metadata("design:type", business_team_member_entity_1.BusinessTeamMember)
], BusinessTeam.prototype, "businessteammember", void 0);
exports.BusinessTeam = BusinessTeam = __decorate([
    (0, typeorm_1.Entity)("business_team")
], BusinessTeam);
//# sourceMappingURL=business-team.entity.js.map