import { DataSource, Repository } from 'typeorm';
import { BusinessTeam } from './business-team.entity';
export declare class BusinessTeamRepository extends Repository<BusinessTeam> {
    constructor(dataSource: DataSource);
}
