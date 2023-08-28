import { Module } from '@nestjs/common';
import { SharedAddressService } from './shared-address.service';
import { SharedAddressController } from './shared-address.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedAddress } from './entities/shared-address.entity';
import { UserModule } from 'src/user/user.module';
import { AddressModule } from 'src/address/address.module';

@Module({
imports:[UserModule,AddressModule, TypeOrmModule.forFeature([SharedAddress])],
  controllers: [SharedAddressController],
  providers: [SharedAddressService]
})
export class SharedAddressModule {}
