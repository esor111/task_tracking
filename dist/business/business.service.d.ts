import { CreateBusinessDto, addUsertoBusinessDto } from "./dto/create-business.dto";
import { UpdateBusinessDto } from "./dto/update-business.dto";
import { BusinessEntity } from "./entities/business.entity";
import { Repository } from "typeorm";
import { BusinessRole } from "./entities/business-role.entity";
import { RoleService } from "src/role/role.service";
import { BusinessUser } from "./entities/business-user.entity";
import { UserService } from "src/user/user.service";
import { RolePermission } from "src/permission/entities/role.permission.entity";
import { BusinessUserRepository } from "./entities/business-user.repository";
export declare class BusinessService {
    private readonly businessRepo;
    private readonly businessRoleRepo;
    private readonly businessuserRepo;
    private readonly rolepermissionRepo;
    private readonly roleService;
    private readonly userservice;
    private readonly businessuserRepository;
    constructor(businessRepo: Repository<BusinessEntity>, businessRoleRepo: Repository<BusinessRole>, businessuserRepo: Repository<BusinessUser>, rolepermissionRepo: Repository<RolePermission>, roleService: RoleService, userservice: UserService, businessuserRepository: BusinessUserRepository);
    create(createBusinessDto: CreateBusinessDto, userId: any): Promise<BusinessEntity>;
    addbusinessUser(adduser: addUsertoBusinessDto, clientId: number, userId: number): Promise<{
        business: BusinessEntity;
        user: import("../user/entities/user.entity").User;
        addedBy: import("../user/entities/user.entity").User;
    } & BusinessUser>;
    finallbusinessUser(): Promise<any>;
    findOneBusinessByid(businessId: number): Promise<any>;
    findAll(page: any, take: any): Promise<BusinessEntity[]>;
    findOne(id: number): Promise<BusinessEntity>;
    update(id: number, updateBusinessDto: UpdateBusinessDto): string;
    remove(id: number): string;
    removss(id: number): string;
}
