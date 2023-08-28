import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { Permission } from './entities/permission.entity';
import { Repository } from 'typeorm';
import { RoleService } from 'src/role/role.service';
import { RolePermission } from './entities/role.permission.entity';
export declare class PermissionService {
    private readonly permissionRepo;
    private readonly RolepermissionRepo;
    private readonly roleService;
    constructor(permissionRepo: Repository<Permission>, RolepermissionRepo: Repository<RolePermission>, roleService: RoleService);
    create(createPermissionDto: CreatePermissionDto): Promise<{
        data: Permission;
        message: string;
    }>;
    addpermissiontoRole(ides: any, roleid: number): Promise<({
        role: import("../role/entities/role.entity").Role;
        permission: Permission;
    } & RolePermission)[]>;
    findAllByides(ides: any): Promise<Permission[]>;
    findOne(id: number): string;
    update(id: number, updatePermissionDto: UpdatePermissionDto): string;
    remove(id: number): string;
}
