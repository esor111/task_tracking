import { PartialType } from '@nestjs/swagger';
import { CreateSharedAddressDto } from './create-shared-address.dto';

export class UpdateSharedAddressDto extends PartialType(CreateSharedAddressDto) {}
