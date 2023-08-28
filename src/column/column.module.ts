import { Module } from '@nestjs/common';
import { ColumnService } from './column.service';
import { ColumnController } from './column.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColumnName } from './entities/column.entity';
import { ColumnType } from './entities/columntype.entity';
import { ColumnValue } from './entities/columnvalue.entity';
import { ConcernModule } from 'src/concern/concern.module';
import { Concern } from 'src/concern/entities/concern.entity';
import { ConcernRow } from 'src/concern/entities/concern.row.entity';

@Module({ 
  imports:[ConcernModule, TypeOrmModule.forFeature([ColumnName, ColumnType, ColumnValue, Concern, ConcernRow])],
  controllers: [ColumnController],
  providers: [ColumnService],
  exports: [ColumnService]
})
export class ColumnModule {}