import { DataSource, Repository } from 'typeorm';
import { TeamMember } from './entities/team-member.entity';
export declare class TeammemberRepositoru extends Repository<TeamMember> {
    constructor(dataSource: DataSource);
}
