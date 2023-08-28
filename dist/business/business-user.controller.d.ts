import { BusinessService } from './business.service';
import { assignRoleDto, removebusinessuserDto } from './dto/create-business.dto';
import { BusinessUserService } from './business-user.service';
import { BusinessUserRepository } from './entities/business-user.repository';
export declare class BusinessUserController {
    private readonly businessService;
    private readonly businessuserService;
    private readonly businessUserRepo;
    constructor(businessService: BusinessService, businessuserService: BusinessUserService, businessUserRepo: BusinessUserRepository);
    removeBusinessUser(removeuserdto: removebusinessuserDto): Promise<any>;
    findAllBusinessUser(): Promise<any>;
    findOne(id: number, businessId: number): Promise<import("./entities/business-user.entity").BusinessUser>;
    assignRole(assignroledto: assignRoleDto): Promise<any>;
}
