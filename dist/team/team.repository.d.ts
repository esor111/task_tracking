import { DataSource, Repository } from 'typeorm';
import { Team } from './entities/team.entity';
export declare class TeamRepository extends Repository<Team> {
    constructor(dataSource: DataSource);
}
