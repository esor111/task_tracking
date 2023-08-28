import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamRepository } from './team.repository';
import { BusinessModule } from 'src/business/business.module';
import { BusinessTeamRepository } from './entities/business-team.repository';
import { BusinessTeamMemberRepository } from 'src/business/entities/business-team-member.repository';
import { UserModule } from 'src/user/user.module';

@Module({
  imports:[BusinessModule, UserModule, TypeOrmModule.forFeature([TeamRepository, BusinessTeamRepository, BusinessTeamMemberRepository])],
  controllers: [TeamController],
  providers: [TeamService, TeamRepository, BusinessTeamRepository, BusinessTeamMemberRepository],
  exports:[TeamService]
})
export class TeamModule {}
