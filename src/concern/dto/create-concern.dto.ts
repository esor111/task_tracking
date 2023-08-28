import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEnum, IsObject, IsOptional, IsString } from "class-validator";



export class CreateColumnDto {
  @ApiProperty()
  @IsString()
  name: string;
}


export class CreateConcernDto {
   @ApiProperty()
   @IsString()
   name: string;
 }



export enum ColumnTypeEnum{
  priority='PRIORITY',
  level='LEVEL',
  person='PERSON',
  date='DATE',
  status= 'STATUS'
}

export class ColumnTypeDTO {
  @ApiProperty({ type: Boolean })
  @IsBoolean()
  isDynamic: boolean;

  @ApiProperty({ type: 'object', nullable: true })
  @IsOptional()
  @IsObject()
  options: any;

  @ApiProperty({ enum: ColumnTypeEnum })
  @IsEnum(ColumnTypeEnum)
  type: ColumnTypeEnum;
}
