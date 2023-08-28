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
   addUsertoBusinessDto, 
   assignRoleDto,
   businessIdesDto,
   removebusinessuserDto,
 } from './dto/create-business.dto';
 import { UpdateBusinessDto } from './dto/update-business.dto';
 import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
 import { AuthGuard } from '@nestjs/passport';
 import { JwtUserDecorator } from 'src/user/user.decorators';
 import { BusinessUserService } from './business-user.service';
 import { IsBusinessAdmin } from 'src/guard/isAuthorizedToModifyBusinessUser.guards';
 import { BusinessUserRepository } from './entities/business-user.repository';
 
 @ApiTags('business-user')
 @Controller('business')
 export class BusinessUserController {
   constructor(
     private readonly businessService: BusinessService,
     private readonly businessuserService: BusinessUserService,
     private readonly businessUserRepo: BusinessUserRepository,
   ) {}


   @Post('remove/:businessId')
   @ApiBearerAuth()
   @UseGuards(IsBusinessAdmin)
   @UseGuards(AuthGuard('jwt'))
   async removeBusinessUser(@Body() removeuserdto: removebusinessuserDto) {
     return await this.businessuserService.removeBusinessUser(removeuserdto);
   }


   @Get('businessuser')
   findAllBusinessUser() {
     return this.businessService.finallbusinessUser();
   }
 
   @Get('businessuser/:id/:businessid')
   findOne(@Param('id') id: number, @Param('businessid') businessId: number) {
     return this.businessuserService.findOne(id, businessId);
   }
 
   @Post('assign/:roid')
   @ApiBearerAuth()
   @UseGuards(IsBusinessAdmin)
   @UseGuards(AuthGuard('jwt'))
   assignRole(@Body() assignroledto: assignRoleDto) {
     return this.businessuserService.assignRole(assignroledto);
   }

 }
 