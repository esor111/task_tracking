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
exports.BusinessService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const business_entity_1 = require("./entities/business.entity");
const typeorm_2 = require("typeorm");
const business_role_entity_1 = require("./entities/business-role.entity");
const role_service_1 = require("../role/role.service");
const business_user_entity_1 = require("./entities/business-user.entity");
const user_service_1 = require("../user/user.service");
const role_permission_entity_1 = require("../permission/entities/role.permission.entity");
const business_user_repository_1 = require("./entities/business-user.repository");
let BusinessService = exports.BusinessService = class BusinessService {
    constructor(businessRepo, businessRoleRepo, businessuserRepo, rolepermissionRepo, roleService, userservice, businessuserRepository) {
        this.businessRepo = businessRepo;
        this.businessRoleRepo = businessRoleRepo;
        this.businessuserRepo = businessuserRepo;
        this.rolepermissionRepo = rolepermissionRepo;
        this.roleService = roleService;
        this.userservice = userservice;
        this.businessuserRepository = businessuserRepository;
    }
    async create(createBusinessDto, userId) {
        const user = await this.userservice.findOneById3(userId);
        const role = await this.roleService.findAdmin();
        if (!role) {
            throw new common_1.HttpException("role not found", 404);
        }
        let createdbusiness = this.businessRepo.create(createBusinessDto);
        let business = await this.businessRepo.save(createdbusiness);
        let businessuser = await this.businessuserRepo.save({ business, user });
        await this.businessRoleRepo.save({ role, businessuser });
        return this.businessRepo.findOne({
            where: { id: business.id },
        });
    }
    async addbusinessUser(adduser, clientId, userId) {
        const { businessId, rollid } = adduser;
        const user = await this.userservice.findOneById3(userId);
        if (!user) {
            throw new common_1.HttpException("user not found", 404);
        }
        const addedBy = await this.userservice.findOneById3(clientId);
        const business = await this.businessRepo.findOne({
            where: { id: businessId },
        });
        if (!business) {
            throw new common_1.HttpException("business not found", 404);
        }
        const role = await this.roleService.findOne(rollid);
        if (!role) {
            throw new common_1.HttpException("role not found", 404);
        }
        const rolepermission = await this.rolepermissionRepo.findOne({
            where: { role: { id: role.id } },
        });
        if (!rolepermission) {
            throw new common_1.HttpException("rolepermission not found", 404);
        }
        const businessuser = await this.businessuserRepo.save({
            business,
            user,
            addedBy: addedBy,
        });
        const businessrole = await this.businessRoleRepo.save({
            rolepermission,
            businessuser,
        });
        return businessuser;
    }
    async finallbusinessUser() {
        const data = await this.businessuserRepository.findBusinessUser();
        return data;
    }
    async findOneBusinessByid(businessId) {
        return await this.businessRepo.findOne({ where: { id: businessId } });
    }
    findAll(page, take) {
        const skip = (page - 1) * take;
        return this.businessRepo.find({ skip, take });
    }
    async findOne(id) {
        return await this.businessRepo.findOne({ where: { id: id } });
    }
    update(id, updateBusinessDto) {
        return `This action updates a #${id} business`;
    }
    remove(id) {
        return `This action removes a #${id} businefsddf ss`;
    }
    removss(id) {
        return `This action removes a #${id} business`;
    }
};
exports.BusinessService = BusinessService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(business_entity_1.BusinessEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(business_role_entity_1.BusinessRole)),
    __param(2, (0, typeorm_1.InjectRepository)(business_user_entity_1.BusinessUser)),
    __param(3, (0, typeorm_1.InjectRepository)(role_permission_entity_1.RolePermission)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        role_service_1.RoleService,
        user_service_1.UserService,
        business_user_repository_1.BusinessUserRepository])
], BusinessService);
//# sourceMappingURL=business.service.js.map