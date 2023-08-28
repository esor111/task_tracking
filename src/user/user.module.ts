import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JwtStrategy } from 'src/auth/strategies/jwt.strategy';
import { UserRepository } from './user.repository';

@Module({
  imports: [ TypeOrmModule.forFeature([User, UserRepository])],
  controllers: [UserController],
  providers: [UserService, JwtStrategy],
  exports:[UserService,TypeOrmModule]
})
export class UserModule {}
