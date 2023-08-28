import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userService;
    constructor(userService: Repository<User>);
    validate(payload: any): Promise<User>;
}
export {};
