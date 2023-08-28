"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const user_entity_1 = require("./user/entities/user.entity");
const role_module_1 = require("./role/role.module");
const permission_module_1 = require("./permission/permission.module");
const user_role_entity_1 = require("./role/entities/user-role.entity");
const role_entity_1 = require("./role/entities/role.entity");
const permission_entity_1 = require("./permission/entities/permission.entity");
const business_module_1 = require("./business/business.module");
const business_entity_1 = require("./business/entities/business.entity");
const business_user_entity_1 = require("./business/entities/business-user.entity");
const business_role_entity_1 = require("./business/entities/business-role.entity");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const role_permission_entity_1 = require("./permission/entities/role.permission.entity");
const project_module_1 = require("./project/project.module");
const business_team_entity_1 = require("./team/entities/business-team.entity");
const team_entity_1 = require("./team/entities/team.entity");
const business_team_member_entity_1 = require("./business/entities/business-team-member.entity");
const team_module_1 = require("./team/team.module");
const team_member_entity_1 = require("./team/entities/team-member.entity");
const record_module_1 = require("./record/record.module");
const address_module_1 = require("./address/address.module");
const address_entity_1 = require("./address/entities/address.entity");
const shared_address_module_1 = require("./shared-address/shared-address.module");
const shared_address_entity_1 = require("./shared-address/entities/shared-address.entity");
const concern_module_1 = require("./concern/concern.module");
const concern_entity_1 = require("./concern/entities/concern.entity");
const record_entity_1 = require("./record/entities/record.entity");
const column_module_1 = require("./column/column.module");
const columntype_entity_1 = require("./column/entities/columntype.entity");
const column_entity_1 = require("./column/entities/column.entity");
const columnvalue_entity_1 = require("./column/entities/columnvalue.entity");
const concern_row_entity_1 = require("./concern/entities/concern.row.entity");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: 'ishworisbillionire',
                signOptions: { expiresIn: '1d' },
            }),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '1234',
                database: 'project_management',
                entities: [user_entity_1.User, user_role_entity_1.UserRole, role_entity_1.Role,
                    team_member_entity_1.TeamMember,
                    permission_entity_1.Permission, business_entity_1.BusinessEntity, business_user_entity_1.BusinessUser, business_role_entity_1.BusinessRole, role_permission_entity_1.RolePermission, business_role_entity_1.BusinessRole, business_team_entity_1.BusinessTeam, team_entity_1.Team, business_team_member_entity_1.BusinessTeamMember, address_entity_1.Address,
                    shared_address_entity_1.SharedAddress, concern_entity_1.Concern, column_entity_1.ColumnName, record_entity_1.Record, columntype_entity_1.ColumnType, columnvalue_entity_1.ColumnValue, concern_row_entity_1.ConcernRow],
                synchronize: true,
            }),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            role_module_1.RoleModule,
            permission_module_1.PermissionModule,
            business_module_1.BusinessModule,
            project_module_1.ProjectModule,
            team_module_1.TeamModule,
            record_module_1.RecordModule,
            address_module_1.AddressModule,
            shared_address_module_1.SharedAddressModule,
            concern_module_1.ConcernModule,
            record_module_1.RecordModule,
            column_module_1.ColumnModule
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map