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
exports.User = void 0;
const address_entity_1 = require("../../address/entities/address.entity");
const business_team_member_entity_1 = require("../../business/entities/business-team-member.entity");
const business_user_entity_1 = require("../../business/entities/business-user.entity");
const general_entity_1 = require("../../domain/general.entity");
const record_entity_1 = require("../../record/entities/record.entity");
const user_role_entity_1 = require("../../role/entities/user-role.entity");
const team_member_entity_1 = require("../../team/entities/team-member.entity");
const typeorm_1 = require("typeorm");
let User = exports.User = class User extends general_entity_1.GeneralInformation {
};
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_role_entity_1.UserRole, (userrole) => userrole.user),
    __metadata("design:type", user_role_entity_1.UserRole)
], User.prototype, "userrole", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => business_user_entity_1.BusinessUser, (businessuser) => businessuser.business),
    __metadata("design:type", business_user_entity_1.BusinessUser)
], User.prototype, "businessuser", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => business_team_member_entity_1.BusinessTeamMember, businessteammeber => businessteammeber.user),
    __metadata("design:type", business_team_member_entity_1.BusinessTeamMember)
], User.prototype, "businessteammember", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => team_member_entity_1.TeamMember, teammember => teammember.user),
    __metadata("design:type", team_member_entity_1.TeamMember)
], User.prototype, "teammember", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => address_entity_1.Address, address => address.user),
    __metadata("design:type", address_entity_1.Address)
], User.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => record_entity_1.Record, record => record.user),
    __metadata("design:type", record_entity_1.Record)
], User.prototype, "record", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)()
], User);
//# sourceMappingURL=user.entity.js.map