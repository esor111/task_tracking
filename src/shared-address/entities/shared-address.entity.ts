import { Address } from 'src/address/entities/address.entity';
import { Base } from 'src/domain/base.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, ManyToOne, ManyToMany, JoinTable } from 'typeorm';


@Entity()
export class SharedAddress extends Base {
  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Address)
  address: Address;

  @ManyToMany(() => User)
  @JoinTable({
    name: 'shared_address_recipients',
    joinColumn: { name: 'sharedAddressId' },
    inverseJoinColumn: { name: 'recipientId' },
  })
  recipients: User[];
}