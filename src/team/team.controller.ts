import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { TeamService } from "./team.service";
import { CreateBusinessTeamDto, CreateTeamDto, addBusinessTeamOnlyDto } from "./dto/create-team.dto";
import { UpdateTeamDto } from "./dto/update-team.dto";
import { Team } from "./entities/team.entity";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { addProjectTeamDto, addTeamMemberDto } from "src/project/dto/create-project.dto";

@ApiTags("teams")
@Controller("team")
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  async createTeam(@Body() teamDto: CreateTeamDto): Promise<Team> {
    return this.teamService.createTeam(teamDto);
  }

  @Get()
  async getAllTeams(): Promise<Team[]> {
    return this.teamService.getAllTeams();
  }

  @Post("/addteam/:businessId")
  async addBusinessTeam(
    @Body() addteamDto: CreateBusinessTeamDto
  ): Promise<Team> {
    return this.teamService.addBusinessTeam(addteamDto);
  }

  // @ApiOperation({
  //   summary: 'used for add the business team only ',
  // })
  // @Post("/:businessId")
  // async addBusinessTeamOnly(
  //   @Body() addteamDto: addBusinessTeamOnlyDto,
  //   @Param()businessId: number
  // ): Promise<Team> {
  //   return this.teamService.addBusinessTeamOnly(addteamDto);
  // }

  

  @Post("projectteam/:projectId")
  async addProjectTeam(
    @Body() addprojectteamdto:addProjectTeamDto
  ): Promise<any> {
    return this.teamService.addProjectTeam(addprojectteamdto);
  }

  // @Post("/:teamid")
  // async addTeammember(
  //   @Param()teamId: number,
  //   @Body() teammember: addTeamMemberDto
  // ): Promise<Team> {
  //   return this.teamService.addTeammember(teammember);
  // }


  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.teamService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamService.update(+id, updateTeamDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.teamService.remove(+id);
  }
}
