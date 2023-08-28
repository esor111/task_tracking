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
exports.PermissionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const permission_entity_1 = require("./entities/permission.entity");
const typeorm_2 = require("typeorm");
const role_service_1 = require("../role/role.service");
const role_permission_entity_1 = require("./entities/role.permission.entity");
let PermissionService = exports.PermissionService = class PermissionService {
    constructor(permissionRepo, RolepermissionRepo, roleService) {
        this.permissionRepo = permissionRepo;
        this.RolepermissionRepo = RolepermissionRepo;
        this.roleService = roleService;
    }
    async create(createPermissionDto) {
        const createdrole = this.permissionRepo.create({ ...createPermissionDto });
        const savedpermission = await this.permissionRepo.save(createdrole);
        return {
            data: savedpermission,
            message: `successfully created a permission called ${savedpermission.name}`,
        };
    }
    async addpermissiontoRole(ides, roleid) {
        const role = await this.roleService.findOne(roleid);
        if (!role) {
            throw new common_1.HttpException('role not found', 404);
        }
        const permissions = await this.findAllByides(ides);
        let savedrolepermission = await Promise.all(permissions.map(async (permission) => {
            const rolepermission = await this.RolepermissionRepo.save({
                role,
                permission,
            });
            return rolepermission;
        }));
        return savedrolepermission;
    }
    findAllByides(ides) {
        let data = ides;
        if (!Array.isArray(ides)) {
            data = [ides];
        }
        return this.permissionRepo
            .createQueryBuilder('permission')
            .where('permission.id IN(:...id)', { id: data })
            .getMany();
    }
    findOne(id) {
        return `This action returns a #${id} permission`;
    }
    update(id, updatePermissionDto) {
        return `This action updates a #${id} permission`;
    }
    remove(id) {
        return `This action removes a #${id} permission`;
    }
};
exports.PermissionService = PermissionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(permission_entity_1.Permission)),
    __param(1, (0, typeorm_1.InjectRepository)(role_permission_entity_1.RolePermission)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        role_service_1.RoleService])
], PermissionService);
//# sourceMappingURL=permission.service.js.map