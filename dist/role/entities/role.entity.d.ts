import { Base } from 'src/domain/base.entity';
import { RolePermission } from 'src/permission/entities/role.permission.entity';
export declare class Role extends Base {
    name: string;
    description: string;
    isActive: Boolean;
    rolepermission: RolePermission;
}
