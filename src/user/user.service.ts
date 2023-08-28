import { HttpException, Injectable } from '@nestjs/common';
import {registerUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { In, Repository } from 'typeorm';
import { UserRepository } from './user.repository';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    // private readonly userRepo: UserRepository
  ) {}

  async registerUser(user: registerUserDto, pass: string): Promise<any> {
    let newUser = this.userRepo.create({ ...user, password: pass });
    return await this.userRepo.save(newUser);
  }

  public async findOneById3(userId: number) {
    return this.userRepo.findOne({ where: { id: userId } });
  }

  public async findOneByemail(email: string): Promise<User> {
    const user = await this.userRepo.findOne({ where: { email: email } });
    if (!user) {
      throw new HttpException(`user not found for this email ${email}`, 404);
    }
    return user;
  }

  async findByIds(ides):Promise<any>{
    return await this.userRepo.find({where:{id:In(ides)}})
      }
      
    

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return this.userRepo.findOne({where:{id:id}})
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
