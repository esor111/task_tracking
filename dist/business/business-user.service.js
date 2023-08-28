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
exports.BusinessUserService = void 0;
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
const business_service_1 = require("./business.service");
const typeorm_3 = require("typeorm");
let BusinessUserService = exports.BusinessUserService = class BusinessUserService {
    constructor(businessRepo, businessRoleRepo, businessuserRepo, rolepermissionRepo, roleService, userservice, businessuserRepository, businessService) {
        this.businessRepo = businessRepo;
        this.businessRoleRepo = businessRoleRepo;
        this.businessuserRepo = businessuserRepo;
        this.rolepermissionRepo = rolepermissionRepo;
        this.roleService = roleService;
        this.userservice = userservice;
        this.businessuserRepository = businessuserRepository;
        this.businessService = businessService;
    }
    async addbusinessUser(adduser, clientId, userId) {
        const { businessId, rollid } = adduser;
        const user = await this.userservice.findOneById3(userId);
        if (!user) {
            throw new common_1.HttpException('user not found', 404);
        }
        const addedBy = await this.userservice.findOneById3(clientId);
        const business = await this.businessRepo.findOne({
            where: { id: businessId },
        });
        if (!business) {
            throw new common_1.HttpException('business not found', 404);
        }
        const role = await this.roleService.findOne(rollid);
        if (!role) {
            throw new common_1.HttpException('role not found', 404);
        }
        const rolepermission = await this.rolepermissionRepo.findOne({
            where: { role: { id: role.id } },
        });
        if (!rolepermission) {
            throw new common_1.HttpException('rolepermission not found', 404);
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
        return await this.businessuserRepository.findBusinessUser();
    }
    async assignRole(assignroledto) {
        const { userId, businessId, roleId } = assignroledto;
        const user = await this.userservice.findOneById3(userId);
        if (!user) {
            throw new common_1.HttpException('user not found', 404);
        }
        const role = await this.roleService.findOne(roleId);
        if (!role) {
            throw new common_1.HttpException(`role not found for ${user.name}`, 404);
        }
        const business = await this.businessService.findOneBusinessByid(businessId);
        if (!business) {
            throw new common_1.HttpException('business not found', 404);
        }
        const businessuser = await this.findOne(user.id, business.id);
        if (!businessuser) {
            throw new common_1.HttpException('user is not accociated with this business', 404);
        }
        const isuseralredyinrole = this.checkincludeornot(businessuser, role.name);
        if (isuseralredyinrole === role.name) {
            throw new common_1.HttpException('user is already assign to this', 409);
        }
        const rolepermission = await this.rolepermissionRepo.findOne({
            where: { role: { id: roleId } },
        });
        if (!rolepermission) {
            throw new common_1.HttpException(`given  ${role.name} have no permission`, 409);
        }
        const businessrole = this.businessRoleRepo.create({
            rolepermission,
            businessuser,
        });
        const assignrole = await this.businessRoleRepo.save(businessrole);
        return {
            data: assignrole,
            message: `role has been assign`,
        };
    }
    async findOneBusinessUser(businessId, userId) {
        return await this.businessuserRepo.findOne({
            where: { business: { id: businessId }, user: { id: userId } },
            relations: ['businessrole.rolepermission.role'],
        });
    }
    findOne(userid, businessId) {
        return this.businessuserRepository
            .createQueryBuilder('buser')
            .leftJoinAndSelect('buser.user', 'user')
            .leftJoin('buser.business', 'business')
            .leftJoin('buser.businessrole', 'brole')
            .leftJoinAndSelect('brole.rolepermission', 'rolepermission')
            .leftJoinAndSelect('rolepermission.role', 'role')
            .where('user.id =:userid', { userid: userid })
            .andWhere('business.id =:businessid', { businessid: businessId })
            .getOne();
    }
    checkincludeornot(data, name) {
        if (!data) {
            return;
        }
        let allroles = [];
        data?.businessrole.map((each) => {
            console.log(each);
            let roleper = each?.rolepermission?.role?.name;
            allroles.push(roleper);
        });
        const isinclude = allroles.find((role) => role === name);
        return isinclude;
    }
    async removeBusinessUser(removeuserdto) {
        const { userId, businessId } = removeuserdto;
        const user = await this.userservice.findOneById3(userId);
        if (!user) {
            throw new common_1.HttpException(`User not found for`, 404);
        }
        const businessuser = await this.businessuserRepository.findOneBusinessUserwithRole(userId, businessId);
        if (!businessuser) {
            throw new common_1.HttpException(`business-user not found for`, 404);
        }
        const isSuperadmin = this.checkincludeornot(businessuser, 'super_admin');
        if (isSuperadmin) {
            throw new common_1.HttpException('you cannot remove yourself', 409);
        }
        const { id } = businessuser;
        await this.remove(id);
        await this.deleManyBusinessRoles(id);
        return {
            message: `user has been removed from the business`,
        };
    }
    remove(id) {
        return this.businessuserRepo.delete(id);
    }
    async deleManyBusinessRoles(buserId) {
        return await this.businessRoleRepo.delete({
            businessuser: { id: buserId },
        });
    }
    async findManybusinessUser(busineessIdes) {
        const businessusers = await this.businessuserRepo.find({
            where: { business: { id: (0, typeorm_3.In)(busineessIdes) } },
        });
        return businessusers;
    }
};
exports.BusinessUserService = BusinessUserService = __decorate([
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
        business_user_repository_1.BusinessUserRepository,
        business_service_1.BusinessService])
], BusinessUserService);
//# sourceMappingURL=business-user.service.js.map