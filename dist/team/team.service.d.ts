import { CreateBusinessTeamDto, CreateTeamDto, addBusinessTeamOnlyDto } from "./dto/create-team.dto";
import { UpdateTeamDto } from "./dto/update-team.dto";
import { Team } from "./entities/team.entity";
import { TeamRepository } from "./team.repository";
import { BusinessService } from "src/business/business.service";
import { BusinessTeamRepository } from "./entities/business-team.repository";
import { BusinessTeamMemberRepository } from "src/business/entities/business-team-member.repository";
import { UserService } from "src/user/user.service";
import { addProjectTeamDto } from "src/project/dto/create-project.dto";
export declare class TeamService {
    private readonly businessservice;
    private readonly userservice;
    private readonly teamRepo;
    private readonly businessTeamRepo;
    private readonly businessteammemberrepository;
    private teammemberrepository;
    constructor(businessservice: BusinessService, userservice: UserService, teamRepo: TeamRepository, businessTeamRepo: BusinessTeamRepository, businessteammemberrepository: BusinessTeamMemberRepository, teammemberrepository: BusinessTeamMemberRepository);
    createTeam(createTeamDto: CreateTeamDto): Promise<Team>;
    getAllTeams(): Promise<Team[]>;
    addBusinessTeam(teamDto: CreateBusinessTeamDto): Promise<any>;
    addProjectTeam(addprojectteamdto: addProjectTeamDto): Promise<any>;
    addBusinessTeamOnly(addteamDto: addBusinessTeamOnlyDto): Promise<void>;
    findOne(id: number): string;
    update(id: number, updateTeamDto: UpdateTeamDto): string;
    remove(id: number): string;
}
