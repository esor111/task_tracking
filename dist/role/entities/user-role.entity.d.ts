import { Base } from "src/domain/base.entity";
import { User } from "src/user/entities/user.entity";
import { Role } from "./role.entity";
export declare class UserRole extends Base {
    name: string;
    description: string;
    isActive: Boolean;
    user: User;
    role: Role;
}
