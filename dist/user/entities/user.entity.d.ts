import { Address } from 'src/address/entities/address.entity';
import { BusinessTeamMember } from 'src/business/entities/business-team-member.entity';
import { BusinessUser } from 'src/business/entities/business-user.entity';
import { GeneralInformation } from 'src/domain/general.entity';
import { Record } from 'src/record/entities/record.entity';
import { UserRole } from 'src/role/entities/user-role.entity';
import { TeamMember } from 'src/team/entities/team-member.entity';
export declare class User extends GeneralInformation {
    password: string;
    userrole: UserRole;
    businessuser: BusinessUser;
    businessteammember: BusinessTeamMember;
    teammember: TeamMember;
    address: Address;
    record: Record;
}
