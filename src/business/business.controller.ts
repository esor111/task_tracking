import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { BusinessService } from './business.service';
import {
  CreateBusinessDto,
  PaginationParams,
  addUsertoBusinessDto,
  businessIdesDto,
} from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { JwtUserDecorator } from 'src/user/user.decorators';
import { BusinessUserService } from './business-user.service';
import { IsBusinessAdmin } from 'src/guard/isAuthorizedToModifyBusinessUser.guards';
import { BusinessUserRepository } from './entities/business-user.repository';

@ApiTags('business')
@Controller('business')
export class BusinessController {
  constructor(
    private readonly businessService: BusinessService,
    private readonly businessuserService: BusinessUserService,
    private readonly businessUserRepo: BusinessUserRepository,
  ) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  create(
    @Body() createBusinessDto: CreateBusinessDto,
    @JwtUserDecorator() user,
  ) {
    return this.businessService.create(createBusinessDto, user.id);
  }

  @Post('adduser/:userid')
  @ApiBearerAuth()
  @UseGuards(IsBusinessAdmin)
  @UseGuards(AuthGuard('jwt'))
  async addbusinessUser(
    @Body() adduser: addUsertoBusinessDto,
    @Param('userid') userId: number,
    @JwtUserDecorator()user
  ) {
    return this.businessService.addbusinessUser(adduser, user.id, userId);
  }

  @Post('main')
  async finallbusinessUser() {
    return this.businessuserService.finallbusinessUser();
  }

  @Get('businessuser/getone')
  findOneBusinessUser(
    @Query('userid') userId: number,
    @Query('businessid') businessId: number,
  ) {
    return this.businessUserRepo.findOneBusinessUserwithRole(
      businessId,
      userId,
    );
  }

  @Get()
  findAll(   @Query() { page, take }: PaginationParams) {
    return this.businessService.findAll(page, take);
  }


  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBusinessDto: UpdateBusinessDto,
  ) {
    return this.businessService.update(+id, updateBusinessDto);
  }

  @Get('business-users')
  findManybusinessUser(@Query() businessidesdto: businessIdesDto) {
    const businessIdes = businessidesdto.businessIdes;
    return this.businessuserService.findManybusinessUser(businessIdes);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businessService.remove(+id);
  }
}
