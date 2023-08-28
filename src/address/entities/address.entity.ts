import { Base } from 'src/domain/base.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity,  Column, ManyToMany, ManyToOne } from 'typeorm';

@Entity()
export class Address extends Base{
  @Column({ length: 100 })
  street: string;

  @Column({ length: 50 })
  city: string;

  @Column({ length: 20 })
  postalCode: string;

  @Column({ length: 2 })
  countryCode: string; 

  @ManyToOne(()=> User, user=> user.address)
  public user: User
}
