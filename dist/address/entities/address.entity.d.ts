import { Base } from 'src/domain/base.entity';
import { User } from 'src/user/entities/user.entity';
export declare class Address extends Base {
    street: string;
    city: string;
    postalCode: string;
    countryCode: string;
    user: User;
}
