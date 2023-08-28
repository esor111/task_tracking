import { addUsertoBusinessDto, assignRoleDto, removebusinessuserDto } from './dto/create-business.dto';
import { BusinessEntity } from './entities/business.entity';
import { Repository } from 'typeorm';
import { BusinessRole } from './entities/business-role.entity';
import { RoleService } from 'src/role/role.service';
import { BusinessUser } from './entities/business-user.entity';
import { UserService } from 'src/user/user.service';
import { RolePermission } from 'src/permission/entities/role.permission.entity';
import { BusinessUserRepository } from './entities/business-user.repository';
import { BusinessService } from './business.service';
export declare class BusinessUserService {
    private readonly businessRepo;
    private readonly businessRoleRepo;
    private readonly businessuserRepo;
    private readonly rolepermissionRepo;
    private readonly roleService;
    private readonly userservice;
    private readonly businessuserRepository;
    private readonly businessService;
    constructor(businessRepo: Repository<BusinessEntity>, businessRoleRepo: Repository<BusinessRole>, businessuserRepo: Repository<BusinessUser>, rolepermissionRepo: Repository<RolePermission>, roleService: RoleService, userservice: UserService, businessuserRepository: BusinessUserRepository, businessService: BusinessService);
    addbusinessUser(adduser: addUsertoBusinessDto, clientId: number, userId: number): Promise<{
        business: BusinessEntity;
        user: import("../user/entities/user.entity").User;
        addedBy: import("../user/entities/user.entity").User;
    } & BusinessUser>;
    finallbusinessUser(): Promise<any>;
    assignRole(assignroledto: assignRoleDto): Promise<any>;
    findOneBusinessUser(businessId: number, userId: number): Promise<any>;
    findOne(userid: number, businessId: number): Promise<BusinessUser>;
    checkincludeornot(data: any, name: string): any;
    removeBusinessUser(removeuserdto: removebusinessuserDto): Promise<any>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    deleManyBusinessRoles(buserId: number): Promise<import("typeorm").DeleteResult>;
    findManybusinessUser(busineessIdes: number[]): Promise<BusinessUser[]>;
}
