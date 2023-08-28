import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { ColumnService } from './column.service';
import { ColumnValueDTO, CreateColumnDto, UpdateColumnValueDto } from './dto/create-column.dto';
import { UpdateColumnDto } from './dto/update-column.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("column-man")
@Controller('column')
export class ColumnController {
  constructor(private readonly columnService: ColumnService) {}

  @Post()
  create(@Body() createColumnDto: CreateColumnDto) {
    return this.columnService.create(createColumnDto);
  }


  @Post("addcolumnvalue/:concernId")
  addColumnValue(
    @Query('concernId')concernId: number,
    @Body() createcolumnvalue: ColumnValueDTO) {
    return this.columnService.addColumnValue(createcolumnvalue, concernId);
  }

  @Get("rows/:concernId")
  findConcernRows(
    @Query('concernId')concernId: number) {
    return this.columnService.returnval(concernId);
  }


  @Put('columnvalue/update:id/')
  updateColumnValue(@Param('id') id: number, @Body() updateColumnValueDto: UpdateColumnValueDto) {
    const {value}=updateColumnValueDto;
    return this.columnService.updateColumnValue(id, value);
  }



  @Get('columnval')
  getColumnval() {
    return this.columnService.getColumnval()
  }


  @Get()
  findAll() {
    return this.columnService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.columnService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateColumnDto: UpdateColumnDto) {
    return this.columnService.update(+id, updateColumnDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.columnService.remove(+id);
  }
}
