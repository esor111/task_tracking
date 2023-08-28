import { CreateSharedAddressDto } from './dto/create-shared-address.dto';
import { SharedAddress } from './entities/shared-address.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import { AddressService } from 'src/address/address.service';
export declare class SharedAddressService {
    private readonly sharedaddressRepository;
    private readonly userService;
    private readonly addressservice;
    constructor(sharedaddressRepository: Repository<SharedAddress>, userService: UserService, addressservice: AddressService);
    create(createSharedAddressDto: CreateSharedAddressDto): Promise<SharedAddress>;
}
