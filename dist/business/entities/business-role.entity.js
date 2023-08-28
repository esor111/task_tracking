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
exports.BusinessRole = void 0;
const base_entity_1 = require("../../domain/base.entity");
const typeorm_1 = require("typeorm");
const business_user_entity_1 = require("./business-user.entity");
const role_permission_entity_1 = require("../../permission/entities/role.permission.entity");
let BusinessRole = exports.BusinessRole = class BusinessRole extends base_entity_1.Base {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => business_user_entity_1.BusinessUser, (businessuser) => businessuser.businessrole),
    __metadata("design:type", business_user_entity_1.BusinessUser)
], BusinessRole.prototype, "businessuser", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => role_permission_entity_1.RolePermission),
    __metadata("design:type", role_permission_entity_1.RolePermission)
], BusinessRole.prototype, "rolepermission", void 0);
exports.BusinessRole = BusinessRole = __decorate([
    (0, typeorm_1.Entity)()
], BusinessRole);
//# sourceMappingURL=business-role.entity.js.map