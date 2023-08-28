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
exports.BusinessUser = void 0;
const typeorm_1 = require("typeorm");
const business_entity_1 = require("./business.entity");
const business_role_entity_1 = require("./business-role.entity");
const base_entity_1 = require("../../domain/base.entity");
const user_entity_1 = require("../../user/entities/user.entity");
let BusinessUser = exports.BusinessUser = class BusinessUser extends base_entity_1.Base {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.businessuser),
    __metadata("design:type", user_entity_1.User)
], BusinessUser.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => business_entity_1.BusinessEntity, (business) => business.businessuser),
    __metadata("design:type", business_entity_1.BusinessEntity)
], BusinessUser.prototype, "business", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => business_role_entity_1.BusinessRole, (businessrole) => businessrole.businessuser, {
        eager: true,
    }),
    __metadata("design:type", Array)
], BusinessUser.prototype, "businessrole", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { nullable: true }),
    __metadata("design:type", user_entity_1.User)
], BusinessUser.prototype, "addedBy", void 0);
exports.BusinessUser = BusinessUser = __decorate([
    (0, typeorm_1.Entity)()
], BusinessUser);
//# sourceMappingURL=business-user.entity.js.map