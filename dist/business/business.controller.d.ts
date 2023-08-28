import { BusinessService } from './business.service';
import { CreateBusinessDto, PaginationParams, addUsertoBusinessDto, businessIdesDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { BusinessUserService } from './business-user.service';
import { BusinessUserRepository } from './entities/business-user.repository';
export declare class BusinessController {
    private readonly businessService;
    private readonly businessuserService;
    private readonly businessUserRepo;
    constructor(businessService: BusinessService, businessuserService: BusinessUserService, businessUserRepo: BusinessUserRepository);
    create(createBusinessDto: CreateBusinessDto, user: any): Promise<import("./entities/business.entity").BusinessEntity>;
    addbusinessUser(adduser: addUsertoBusinessDto, userId: number, user: any): Promise<{
        business: import("./entities/business.entity").BusinessEntity;
        user: import("../user/entities/user.entity").User;
        addedBy: import("../user/entities/user.entity").User;
    } & import("./entities/business-user.entity").BusinessUser>;
    finallbusinessUser(): Promise<any>;
    findOneBusinessUser(userId: number, businessId: number): Promise<import("./entities/business-user.entity").BusinessUser>;
    findAll({ page, take }: PaginationParams): Promise<import("./entities/business.entity").BusinessEntity[]>;
    update(id: string, updateBusinessDto: UpdateBusinessDto): string;
    findManybusinessUser(businessidesdto: businessIdesDto): Promise<import("./entities/business-user.entity").BusinessUser[]>;
    remove(id: string): string;
}
