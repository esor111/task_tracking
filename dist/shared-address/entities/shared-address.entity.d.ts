import { Address } from 'src/address/entities/address.entity';
import { Base } from 'src/domain/base.entity';
import { User } from 'src/user/entities/user.entity';
export declare class SharedAddress extends Base {
    user: User;
    address: Address;
    recipients: User[];
}
