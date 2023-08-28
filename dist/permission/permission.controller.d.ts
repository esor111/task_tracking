import { PermissionService } from './permission.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { addpermissionToRoleDto } from 'src/business/dto/create-business.dto';
export declare class PermissionController {
    private readonly permissionService;
    constructor(permissionService: PermissionService);
    create(createPermissionDto: CreatePermissionDto): Promise<{
        data: import("./entities/permission.entity").Permission;
        message: string;
    }>;
    addpermissiontoRole(addpermission: addpermissionToRoleDto, roleid: number): Promise<({
        role: import("../role/entities/role.entity").Role;
        permission: import("./entities/permission.entity").Permission;
    } & import("./entities/role.permission.entity").RolePermission)[]>;
    findOne(id: string): string;
    update(id: string, updatePermissionDto: UpdatePermissionDto): string;
    remove(id: string): string;
}
