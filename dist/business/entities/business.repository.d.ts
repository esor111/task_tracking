import { DataSource, Repository } from 'typeorm';
import { BusinessEntity } from './business.entity';
export declare class BidRepository extends Repository<BusinessEntity> {
    constructor(dataSource: DataSource);
}
