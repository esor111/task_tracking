import { Base } from 'src/domain/base.entity';
import { BusinessUser } from './business-user.entity';
import { BusinessTeam } from '../../team/entities/business-team.entity';
export declare class BusinessEntity extends Base {
    name: string;
    email: string;
    contact: string;
    address: string;
    description: string;
    available: boolean;
    avatar: string;
    gallery: string[];
    businessuser: BusinessUser;
    businessteam: BusinessTeam;
}
