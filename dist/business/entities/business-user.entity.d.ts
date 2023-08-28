import { BusinessEntity } from './business.entity';
import { BusinessRole } from './business-role.entity';
import { Base } from 'src/domain/base.entity';
import { User } from 'src/user/entities/user.entity';
export declare class BusinessUser extends Base {
    user: User;
    business: BusinessEntity;
    businessrole: BusinessRole[];
    addedBy: User;
}
