import { registerUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepo;
    constructor(userRepo: Repository<User>);
    registerUser(user: registerUserDto, pass: string): Promise<any>;
    findOneById3(userId: number): Promise<User>;
    findOneByemail(email: string): Promise<User>;
    findByIds(ides: any): Promise<any>;
    findAll(): string;
    findOne(id: number): Promise<User>;
    remove(id: number): string;
}
