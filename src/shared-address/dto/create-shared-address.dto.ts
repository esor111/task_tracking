import { ApiProperty } from '@nestjs/swagger';

export class CreateSharedAddressDto {
  @ApiProperty()
  addressId: number;

  @ApiProperty()
  userId: number;

  @ApiProperty({ type: [Number] })
  recipientIds: number[];
}
