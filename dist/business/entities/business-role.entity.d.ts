import { Base } from 'src/domain/base.entity';
import { BusinessUser } from './business-user.entity';
import { RolePermission } from 'src/permission/entities/role.permission.entity';
export declare class BusinessRole extends Base {
    businessuser: BusinessUser;
    rolepermission: RolePermission;
}
