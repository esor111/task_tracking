import { Module } from '@nestjs/common';
import { ConcernService } from './concern.service';
import { ConcernController } from './concern.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Concern } from './entities/concern.entity';
import { UserModule } from 'src/user/user.module';
import { ColumnName } from 'src/column/entities/column.entity';
import { ColumnType } from 'src/column/entities/columntype.entity';
import { ConcernRow } from './entities/concern.row.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Concern, ColumnName, ColumnType, ConcernRow]), UserModule],
  controllers: [ConcernController],
  providers: [ConcernService],
  exports:[ConcernService]
})
export class ConcernModule {}
