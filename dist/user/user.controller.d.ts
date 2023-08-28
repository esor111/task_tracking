import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): string;
    findOne(id: string): Promise<import("./entities/user.entity").User>;
    remove(id: string): string;
}
