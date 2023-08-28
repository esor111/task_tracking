import { Role } from "src/role/entities/role.entity";
import { Permission } from "./permission.entity";
import { Base } from "src/domain/base.entity";
export declare class RolePermission extends Base {
    role: Role;
    permission: Permission;
}
