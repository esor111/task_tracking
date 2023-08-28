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
exports.BusinessController = void 0;
const common_1 = require("@nestjs/common");
const business_service_1 = require("./business.service");
const create_business_dto_1 = require("./dto/create-business.dto");
const update_business_dto_1 = require("./dto/update-business.dto");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
const user_decorators_1 = require("../user/user.decorators");
const business_user_service_1 = require("./business-user.service");
const isAuthorizedToModifyBusinessUser_guards_1 = require("../guard/isAuthorizedToModifyBusinessUser.guards");
const business_user_repository_1 = require("./entities/business-user.repository");
let BusinessController = exports.BusinessController = class BusinessController {
    constructor(businessService, businessuserService, businessUserRepo) {
        this.businessService = businessService;
        this.businessuserService = businessuserService;
        this.businessUserRepo = businessUserRepo;
    }
    create(createBusinessDto, user) {
        return this.businessService.create(createBusinessDto, user.id);
    }
    async addbusinessUser(adduser, userId, user) {
        return this.businessService.addbusinessUser(adduser, user.id, userId);
    }
    async finallbusinessUser() {
        return this.businessuserService.finallbusinessUser();
    }
    findOneBusinessUser(userId, businessId) {
        return this.businessUserRepo.findOneBusinessUserwithRole(businessId, userId);
    }
    findAll({ page, take }) {
        return this.businessService.findAll(page, take);
    }
    update(id, updateBusinessDto) {
        return this.businessService.update(+id, updateBusinessDto);
    }
    findManybusinessUser(businessidesdto) {
        const businessIdes = businessidesdto.businessIdes;
        return this.businessuserService.findManybusinessUser(businessIdes);
    }
    remove(id) {
        return this.businessService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorators_1.JwtUserDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_business_dto_1.CreateBusinessDto, Object]),
    __metadata("design:returntype", void 0)
], BusinessController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('adduser/:userid'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(isAuthorizedToModifyBusinessUser_guards_1.IsBusinessAdmin),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('userid')),
    __param(2, (0, user_decorators_1.JwtUserDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_business_dto_1.addUsertoBusinessDto, Number, Object]),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "addbusinessUser", null);
__decorate([
    (0, common_1.Post)('main'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BusinessController.prototype, "finallbusinessUser", null);
__decorate([
    (0, common_1.Get)('businessuser/getone'),
    __param(0, (0, common_1.Query)('userid')),
    __param(1, (0, common_1.Query)('businessid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], BusinessController.prototype, "findOneBusinessUser", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_business_dto_1.PaginationParams]),
    __metadata("design:returntype", void 0)
], BusinessController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_business_dto_1.UpdateBusinessDto]),
    __metadata("design:returntype", void 0)
], BusinessController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('business-users'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_business_dto_1.businessIdesDto]),
    __metadata("design:returntype", void 0)
], BusinessController.prototype, "findManybusinessUser", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BusinessController.prototype, "remove", null);
exports.BusinessController = BusinessController = __decorate([
    (0, swagger_1.ApiTags)('business'),
    (0, common_1.Controller)('business'),
    __metadata("design:paramtypes", [business_service_1.BusinessService,
        business_user_service_1.BusinessUserService,
        business_user_repository_1.BusinessUserRepository])
], BusinessController);
//# sourceMappingURL=business.controller.js.map