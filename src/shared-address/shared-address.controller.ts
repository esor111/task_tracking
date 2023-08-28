import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SharedAddressService } from './shared-address.service';
import { CreateSharedAddressDto } from './dto/create-shared-address.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("shared-address")
@Controller('shared-address')
export class SharedAddressController {
  constructor(private readonly sharedAddressService: SharedAddressService) {}

  @Post()
  create(@Body() createSharedAddressDto: CreateSharedAddressDto) {
    return this.sharedAddressService.create(createSharedAddressDto);
  }

}
