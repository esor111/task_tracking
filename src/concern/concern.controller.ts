import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { ConcernService } from './concern.service';
import { ColumnTypeDTO, CreateColumnDto, CreateConcernDto } from './dto/create-concern.dto';
import { UpdateConcernDto } from './dto/update-concern.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { JwtUserDecorator } from 'src/user/user.decorators';

@ApiTags('concern')
@Controller('concern')
export class ConcernController {
  constructor(private readonly concernService: ConcernService) {}

  @Post('concerns')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ description: 'Create a new concern' })
  async createConcern(
    @JwtUserDecorator() user,
    @Body() createConcernDto: CreateConcernDto,
  ) {
    return this.concernService.createConcern(createConcernDto, 1);
  }


  @Post('columns')
  // @ApiBearerAuth()
  // @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ description: 'Create a new column' })
  async createColumn(
    // @JwtUserDecorator() user,
    @Body() createcolumndto: CreateConcernDto,
  ) {
    return this.concernService.createColumn(createcolumndto);
  }


  @Post('columntype/:columnNameId')
  async createColumnType(
    @Param('columnNameId') columnNameId: number,
    @Body() columnTypeDto: ColumnTypeDTO,
  ): Promise<any> {
    return await this.concernService.createColumnType(columnNameId, columnTypeDto);
  }


  @Get()
  findAll() {
    return this.concernService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.concernService.findOne(id);
  }

  @Get('column/:id')
  findOneColumn(@Param('id') id: number) {
    return this.concernService.findOneColumn(id);
  }


  @Get('columntype/:columnId')
  findOneColumnType(@Param('columnId') id: number) {
    return this.concernService.findOneColumnType(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConcernDto: UpdateConcernDto) {
    return this.concernService.update(+id, updateConcernDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.concernService.remove(+id);
  }


  @Delete(':id')
  removeColumn(@Param('id') id: number) {
    return this.concernService.removecolumn(id);
  }
}
