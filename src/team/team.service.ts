import { HttpException, Injectable } from "@nestjs/common";
import { CreateBusinessTeamDto, CreateTeamDto, addBusinessTeamOnlyDto } from "./dto/create-team.dto";
import { UpdateTeamDto } from "./dto/update-team.dto";
import { Team } from "./entities/team.entity";
import { TeamRepository } from "./team.repository";
import { BusinessService } from "src/business/business.service";
import { BusinessTeamRepository } from "./entities/business-team.repository";
import { BusinessTeamMemberRepository } from "src/business/entities/business-team-member.repository";
import { UserService } from "src/user/user.service";
import { addProjectTeamDto, addTeamMemberDto } from "src/project/dto/create-project.dto";

@Injectable()
export class TeamService {
  constructor(
    private readonly businessservice: BusinessService,
    private readonly userservice: UserService,
    private readonly teamRepo: TeamRepository,
    private readonly businessTeamRepo: BusinessTeamRepository,
    private readonly businessteammemberrepository: BusinessTeamMemberRepository,
    private teammemberrepository: BusinessTeamMemberRepository
  ) {}

  async createTeam(createTeamDto: CreateTeamDto) {
    const { name, description } = createTeamDto;
    const team = new Team();
    team.name = name;
    team.description = description;
    return await this.teamRepo.save(team);
  }

  async getAllTeams(): Promise<Team[]> {
    return this.teamRepo.find();
  }
  //need
  //workout on respose type
  async addBusinessTeam(teamDto: CreateBusinessTeamDto): Promise<any> {
    const savedbusinessteam = teamDto.businessteam.map(async (eachteam) => {
      const { businessId, teamId } = eachteam;
      const team = await this.teamRepo.findOne({
        where: { id: teamId },
      });
      if (!team) {
        throw new HttpException("team not found", 404);
      }
      const business = await this.businessservice.findOne(businessId);
      if (!business) {
        throw new HttpException("business not found", 404);
      }

      const businessteam = await this.businessTeamRepo.save({ team, business });

      const member = await eachteam?.member?.map(async (member) => {
        const { userId } = member;
        const user = await this.userservice.findOneById3(userId);
        if (!user) {
          throw new HttpException("user not found", 404);
        }
        return this.businessteammemberrepository.save({ user, businessteam });
      });

      return { ...businessteam, member };
    });

    return savedbusinessteam;
  }

async addProjectTeam(addprojectteamdto:addProjectTeamDto):Promise<any>{

}


async addBusinessTeamOnly(addteamDto: addBusinessTeamOnlyDto){

}


// async addTeammember(teammember: addTeamMemberDto):Promise<any>{
// let create= t
// }

  findOne(id: number) {
    return `This action returns a #${id} team`;
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return `This action updates a #${id} team`;
  }

  remove(id: number) {
    return `This action removes a #${id} team`;
  }
}
