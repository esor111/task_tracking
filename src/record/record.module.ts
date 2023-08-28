import { Module } from '@nestjs/common';
import { RecordService } from './record.service';
import { RecordController } from './record.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Record } from './entities/record.entity';
import { ConcernModule } from 'src/concern/concern.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports:[ConcernModule, UserModule, TypeOrmModule.forFeature([Record])],
  controllers: [RecordController],
  providers: [RecordService]
})
export class RecordModule {}
