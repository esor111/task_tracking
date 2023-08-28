import { CreateAddressDto } from './dto/create-address.dto';
import { Address } from './entities/address.entity';
import { Repository } from 'typeorm';
export declare class AddressService {
    private readonly addressRepository;
    constructor(addressRepository: Repository<Address>);
    create(createAddressDto: CreateAddressDto): Promise<Address>;
    findOne(id: number): Promise<any>;
}
