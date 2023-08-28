import { Injectable } from '@nestjs/common/decorators';
import { DataSource, Repository } from 'typeorm';
import { BusinessTeamMember } from './business-team-member.entity';

@Injectable()
export class BusinessTeamMemberRepository extends Repository<BusinessTeamMember> {
  constructor(dataSource: DataSource) {
    super(BusinessTeamMember, dataSource.createEntityManager());
  }

}