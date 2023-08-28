import { SharedAddressService } from './shared-address.service';
import { CreateSharedAddressDto } from './dto/create-shared-address.dto';
export declare class SharedAddressController {
    private readonly sharedAddressService;
    constructor(sharedAddressService: SharedAddressService);
    create(createSharedAddressDto: CreateSharedAddressDto): Promise<import("./entities/shared-address.entity").SharedAddress>;
}
