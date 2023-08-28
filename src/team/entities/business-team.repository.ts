import { Injectable } from '@nestjs/common/decorators';
import { DataSource, Repository } from 'typeorm';
import { BusinessTeam } from './business-team.entity';

@Injectable()
export class BusinessTeamRepository extends Repository<BusinessTeam> {
  constructor(dataSource: DataSource) {
    super(BusinessTeam, dataSource.createEntityManager());
  }

}
