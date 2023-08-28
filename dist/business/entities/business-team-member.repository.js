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
exports.BusinessTeamMemberRepository = void 0;
const decorators_1 = require("@nestjs/common/decorators");
const typeorm_1 = require("typeorm");
const business_team_member_entity_1 = require("./business-team-member.entity");
let BusinessTeamMemberRepository = exports.BusinessTeamMemberRepository = class BusinessTeamMemberRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(business_team_member_entity_1.BusinessTeamMember, dataSource.createEntityManager());
    }
};
exports.BusinessTeamMemberRepository = BusinessTeamMemberRepository = __decorate([
    (0, decorators_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], BusinessTeamMemberRepository);
//# sourceMappingURL=business-team-member.repository.js.map