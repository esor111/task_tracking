import { Injectable } from '@nestjs/common/decorators';
import { DataSource, Repository } from 'typeorm';
import { Team } from './entities/team.entity';
import { TeamMember } from './entities/team-member.entity';

@Injectable()
export class TeammemberRepositoru extends Repository<TeamMember> {
  constructor(dataSource: DataSource) {
    super(TeamMember, dataSource.createEntityManager());
  }

}
