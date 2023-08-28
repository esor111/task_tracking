import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';
export declare class RoleService {
    private readonly roleRepository;
    constructor(roleRepository: Repository<Role>);
    create(createRoleDto: CreateRoleDto): Promise<{
        data: Role;
        message: string;
    }>;
    findOne(rolid: number): Promise<Role>;
    findRoleByName(name: string): Promise<Role>;
    findAdmin(): Promise<Role>;
    findAll(): Promise<Role[]>;
    update(id: number, updateRoleDto: UpdateRoleDto): string;
    remove(id: number): string;
}
