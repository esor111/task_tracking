import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from "class-validator";

export class CreateColumnDto {}
export class ColumnValueItemDTO {
  @ApiProperty()
  @IsNumber()
  columnId: number;


  @ApiProperty()
  @IsNumber()
  rowId: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  value: string;
}

export class ColumnValueDTO {
  @ApiProperty({ type: [ColumnValueItemDTO] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ColumnValueDTO)
  public columnvalues: ColumnValueItemDTO[];
}

export class UpdateColumnValueDto {
  @ApiProperty()
  @IsString()
  value: string;
}
