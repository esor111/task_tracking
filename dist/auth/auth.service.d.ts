import { loginDto, registerUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    Signup(registeruser: registerUserDto): Promise<any>;
    Validateandlogin(logindto: loginDto): Promise<any>;
    login(user: User): Promise<any>;
    validateUser(loginDto: loginDto): Promise<User>;
    generateToken(user: any): Promise<string>;
    private comparePass;
    hashpassword(password: string): Promise<any>;
}
