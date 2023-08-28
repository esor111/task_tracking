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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessUserController = void 0;
const common_1 = require("@nestjs/common");
const business_service_1 = require("./business.service");
const create_business_dto_1 = require("./dto/create-business.dto");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
const business_user_service_1 = require("./business-user.service");
const isAuthorizedToModifyBusinessUser_guards_1 = require("../guard/isAuthorizedToModifyBusinessUser.guards");
const business_user_repository_1 = require("./entities/business-user.repository");
let BusinessUserController = exports.BusinessUserController = class BusinessUserController {
    constructor(businessService, businessuserService, businessUserRepo) {
        this.businessService = businessService;
        this.businessuserService = businessuserService;
        this.businessUserRepo = businessUserRepo;
    }
    async removeBusinessUser(removeuserdto) {
        return await this.businessuserService.removeBusinessUser(removeuserdto);
    }
    findAllBusinessUser() {
        return this.businessService.finallbusinessUser();
    }
    findOne(id, businessId) {
        return this.businessuserService.findOne(id, businessId);
    }
    assignRole(assignroledto) {
        return this.businessuserService.assignRole(assignroledto);
    }
};
__decorate([
    (0, common_1.Post)('remove/:businessId'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(isAuthorizedToModifyBusinessUser_guards_1.IsBusinessAdmin),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_business_dto_1.removebusinessuserDto]),
    __metadata("design:returntype", Promise)
], BusinessUserController.prototype, "removeBusinessUser", null);
__decorate([
    (0, common_1.Get)('businessuser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BusinessUserController.prototype, "findAllBusinessUser", null);
__decorate([
    (0, common_1.Get)('businessuser/:id/:businessid'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('businessid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], BusinessUserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('assign/:roid'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(isAuthorizedToModifyBusinessUser_guards_1.IsBusinessAdmin),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_business_dto_1.assignRoleDto]),
    __metadata("design:returntype", void 0)
], BusinessUserController.prototype, "assignRole", null);
exports.BusinessUserController = BusinessUserController = __decorate([
    (0, swagger_1.ApiTags)('business-user'),
    (0, common_1.Controller)('business'),
    __metadata("design:paramtypes", [business_service_1.BusinessService,
        business_user_service_1.BusinessUserService,
        business_user_repository_1.BusinessUserRepository])
], BusinessUserController);
//# sourceMappingURL=business-user.controller.js.map