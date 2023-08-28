import { IsNumber, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRecordDto {
  @ApiProperty()
  @IsNumber()
  concernId: number;

  @ApiProperty()
  @IsNumber()
  columnId: number;

  @ApiProperty()
  @IsObject()
  value: any;
}
