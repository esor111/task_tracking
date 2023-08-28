"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessModule = void 0;
const common_1 = require("@nestjs/common");
const business_service_1 = require("./business.service");
const business_controller_1 = require("./business.controller");
const typeorm_1 = require("@nestjs/typeorm");
const business_entity_1 = require("./entities/business.entity");
const business_user_entity_1 = require("./entities/business-user.entity");
const jwt_strategy_1 = require("../auth/strategies/jwt.strategy");
const user_entity_1 = require("../user/entities/user.entity");
const business_role_entity_1 = require("./entities/business-role.entity");
const role_module_1 = require("../role/role.module");
const user_module_1 = require("../user/user.module");
const permission_module_1 = require("../permission/permission.module");
const role_permission_entity_1 = require("../permission/entities/role.permission.entity");
const business_user_repository_1 = require("./entities/business-user.repository");
const business_user_service_1 = require("./business-user.service");
const business_user_controller_1 = require("./business-user.controller");
const business_team_entity_1 = require("../team/entities/business-team.entity");
const business_team_member_entity_1 = require("./entities/business-team-member.entity");
let BusinessModule = exports.BusinessModule = class BusinessModule {
};
exports.BusinessModule = BusinessModule = __decorate([
    (0, common_1.Module)({
        imports: [role_module_1.RoleModule, user_module_1.UserModule, permission_module_1.PermissionModule, typeorm_1.TypeOrmModule.forFeature([business_entity_1.BusinessEntity, business_user_entity_1.BusinessUser, user_entity_1.User, business_role_entity_1.BusinessRole, role_permission_entity_1.RolePermission, business_user_repository_1.BusinessUserRepository,
                business_team_entity_1.BusinessTeam, business_team_member_entity_1.BusinessTeamMember
            ])],
        controllers: [business_controller_1.BusinessController, business_user_controller_1.BusinessUserController],
        providers: [business_service_1.BusinessService, jwt_strategy_1.JwtStrategy, business_user_repository_1.BusinessUserRepository, business_user_service_1.BusinessUserService],
        exports: [business_service_1.BusinessService, business_user_repository_1.BusinessUserRepository, business_user_service_1.BusinessUserService]
    })
], BusinessModule);
//# sourceMappingURL=business.module.js.map