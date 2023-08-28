import { DataSource, Repository } from 'typeorm';
import { BusinessTeamMember } from './business-team-member.entity';
export declare class BusinessTeamMemberRepository extends Repository<BusinessTeamMember> {
    constructor(dataSource: DataSource);
}
