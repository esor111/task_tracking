import { AuthService } from './auth.service';
import { loginDto, registerUserDto } from 'src/user/dto/create-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(registerUserDto: registerUserDto): Promise<any>;
    login(loginDto: loginDto): Promise<any>;
}
