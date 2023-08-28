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
exports.IsBusinessAdminParam = void 0;
const common_1 = require("@nestjs/common");
const business_user_service_1 = require("../business/business-user.service");
const business_service_1 = require("../business/business.service");
const business_user_repository_1 = require("../business/entities/business-user.repository");
const role_service_1 = require("../role/role.service");
let IsBusinessAdminParam = exports.IsBusinessAdminParam = class IsBusinessAdminParam {
    constructor(businessService, roleservice, businessuserservice, businessuserRepo) {
        this.businessService = businessService;
        this.roleservice = roleservice;
        this.businessuserservice = businessuserservice;
        this.businessuserRepo = businessuserRepo;
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        return this.validateRequest(request);
    }
    async validateRequest(request) {
        const { body, user } = request;
        const businessId = request.Param;
        const business = await this.businessService.findOneBusinessByid(businessId);
        if (!business) {
            throw new common_1.HttpException('business not found', 404);
        }
        const businessuser = await this.businessuserRepo.findOneBusinessUserwithRole(businessId, user.id);
        if (businessuser?.businessrole.length === 0) {
            throw new common_1.HttpException('business-user role found', 404);
        }
        if (!businessuser) {
            throw new common_1.HttpException(`business-user not found for`, 404);
        }
        let isuseralredyinrole = this.businessuserservice.checkincludeornot(businessuser, 'super_admin');
        if (!isuseralredyinrole) {
            throw new common_1.HttpException(`you dont have necessary permission`, 400);
        }
        return true;
    }
};
exports.IsBusinessAdminParam = IsBusinessAdminParam = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [business_service_1.BusinessService,
        role_service_1.RoleService,
        business_user_service_1.BusinessUserService,
        business_user_repository_1.BusinessUserRepository])
], IsBusinessAdminParam);
//# sourceMappingURL=isbusinessAdmin.js.map