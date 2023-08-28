import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { BusinessUserService } from 'src/business/business-user.service';
import { BusinessService } from 'src/business/business.service';
import { BusinessUserRepository } from 'src/business/entities/business-user.repository';
import { RoleService } from 'src/role/role.service';
export declare class IsBusinessAdmin implements CanActivate {
    private readonly businessService;
    private readonly roleservice;
    private readonly businessuserservice;
    private readonly businessuserRepo;
    constructor(businessService: BusinessService, roleservice: RoleService, businessuserservice: BusinessUserService, businessuserRepo: BusinessUserRepository);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
    validateRequest(request: any): Promise<boolean>;
}
