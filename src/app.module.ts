import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { User } from './user/entities/user.entity';
import { RoleModule } from './role/role.module';
import { PermissionModule } from './permission/permission.module';
import { UserRole } from './role/entities/user-role.entity';
import { Role } from './role/entities/role.entity';
import { Permission } from './permission/entities/permission.entity';
import { BusinessModule } from './business/business.module';
import { BusinessEntity } from './business/entities/business.entity';
import { BusinessUser } from './business/entities/business-user.entity';
import { BusinessRole } from './business/entities/business-role.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { RolePermission } from './permission/entities/role.permission.entity';
import { ProjectModule } from './project/project.module';
import { BusinessTeam } from './team/entities/business-team.entity';
import { Team } from './team/entities/team.entity';
import { BusinessTeamMember } from './business/entities/business-team-member.entity';
import { TeamModule } from './team/team.module';
import { TeamMember } from './team/entities/team-member.entity';
import { RecordModule } from './record/record.module';
import { AddressModule } from './address/address.module';
import { Address } from './address/entities/address.entity';
import { SharedAddressModule } from './shared-address/shared-address.module';
import { SharedAddress } from './shared-address/entities/shared-address.entity';
import { ConcernModule } from './concern/concern.module';
import { Concern } from './concern/entities/concern.entity';
import { Record } from './record/entities/record.entity';
import { ColumnModule } from './column/column.module';
import { ColumnType } from './column/entities/columntype.entity';
import { ColumnName } from './column/entities/column.entity';
import { ColumnValue } from './column/entities/columnvalue.entity';
import { ConcernRow } from './concern/entities/concern.row.entity';

@Module({
  imports: [
    JwtModule.register({
      secret: 'ishworisbillionire',
      signOptions: { expiresIn: '1d' },
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234', 
      database: 'project_management', 
      entities: [User,  UserRole, Role,
        TeamMember,
        Permission, BusinessEntity, BusinessUser, BusinessRole, RolePermission, BusinessRole, BusinessTeam, Team, BusinessTeamMember, Address,
      SharedAddress, Concern, ColumnName, Record, ColumnType, ColumnValue, ConcernRow],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    RoleModule,
    PermissionModule,
    BusinessModule,
    ProjectModule,
    TeamModule,
    RecordModule,
    AddressModule,
    SharedAddressModule,
    ConcernModule,
    RecordModule,
    ColumnModule
  ], 

  
})
export class AppModule {}