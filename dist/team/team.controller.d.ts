import { TeamService } from "./team.service";
import { CreateBusinessTeamDto, CreateTeamDto } from "./dto/create-team.dto";
import { UpdateTeamDto } from "./dto/update-team.dto";
import { Team } from "./entities/team.entity";
import { addProjectTeamDto } from "src/project/dto/create-project.dto";
export declare class TeamController {
    private readonly teamService;
    constructor(teamService: TeamService);
    createTeam(teamDto: CreateTeamDto): Promise<Team>;
    getAllTeams(): Promise<Team[]>;
    addBusinessTeam(addteamDto: CreateBusinessTeamDto): Promise<Team>;
    addProjectTeam(addprojectteamdto: addProjectTeamDto): Promise<any>;
    findOne(id: string): string;
    update(id: string, updateTeamDto: UpdateTeamDto): string;
    remove(id: string): string;
}
