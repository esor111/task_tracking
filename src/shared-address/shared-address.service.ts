import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSharedAddressDto } from './dto/create-shared-address.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SharedAddress } from './entities/shared-address.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import { AddressService } from 'src/address/address.service';

@Injectable()
export class SharedAddressService {
  constructor(
    @InjectRepository(SharedAddress)
    private readonly sharedaddressRepository: Repository<SharedAddress>,
    private readonly userService: UserService,
    private readonly addressservice: AddressService
  ) {}

 async create(createSharedAddressDto: CreateSharedAddressDto) {
    const { addressId, userId, recipientIds } = createSharedAddressDto;

    const user = await this.userService.findOne(userId);
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    const address = await this.addressservice.findOne(addressId);
    if (!address) {
      throw new NotFoundException(`Address with ID ${addressId} not found`);
    }

    const sharedAddress = new SharedAddress();
    sharedAddress.user = user;
    sharedAddress.address = address;

    if (recipientIds && recipientIds.length > 0) {
      const recipients = await this.userService.findByIds(recipientIds);
      console.log(recipients)
      sharedAddress.recipients = recipients;
    }

    return this.sharedaddressRepository.save(sharedAddress);
  }
  }

