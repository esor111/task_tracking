import { DataSource, Repository } from 'typeorm';
import { BusinessUser } from './business-user.entity';
export declare class BusinessUserRepository extends Repository<BusinessUser> {
    constructor(dataSource: DataSource);
    findBusinessUser(): Promise<BusinessUser[]>;
    findOneBusinessUserwithRole(businessId: number, userId: number): Promise<BusinessUser>;
    findOneBusinessUser(buserid: number): Promise<BusinessUser>;
}
