"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamModule = void 0;
const common_1 = require("@nestjs/common");
const team_service_1 = require("./team.service");
const team_controller_1 = require("./team.controller");
const typeorm_1 = require("@nestjs/typeorm");
const team_repository_1 = require("./team.repository");
const business_module_1 = require("../business/business.module");
const business_team_repository_1 = require("./entities/business-team.repository");
const business_team_member_repository_1 = require("../business/entities/business-team-member.repository");
const user_module_1 = require("../user/user.module");
let TeamModule = exports.TeamModule = class TeamModule {
};
exports.TeamModule = TeamModule = __decorate([
    (0, common_1.Module)({
        imports: [business_module_1.BusinessModule, user_module_1.UserModule, typeorm_1.TypeOrmModule.forFeature([team_repository_1.TeamRepository, business_team_repository_1.BusinessTeamRepository, business_team_member_repository_1.BusinessTeamMemberRepository])],
        controllers: [team_controller_1.TeamController],
        providers: [team_service_1.TeamService, team_repository_1.TeamRepository, business_team_repository_1.BusinessTeamRepository, business_team_member_repository_1.BusinessTeamMemberRepository],
        exports: [team_service_1.TeamService]
    })
], TeamModule);
//# sourceMappingURL=team.module.js.map