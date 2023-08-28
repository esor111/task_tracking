import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsDate, IsNumber, IsArray, IsInt } from "class-validator";

export class CreateProjectDto {
  @ApiProperty({ example: "tanka sadak", default: "Default Project" })
  @IsString()
  projectName: string;

  @ApiProperty({
    example: "Description of the project",
    default: "Default Description",
  })
  @IsString()
  projectDescription: string;

  @ApiProperty({
    example: "2023-08-01",
    default: new Date().toISOString().split("T")[0],
  })
  @IsDate()
  startDate: Date;

  @ApiProperty({
    example: "2023-08-10",
    default: new Date().toISOString().split("T")[0],
  })
  @IsDate()
  endDate: Date;
}

export class ProjectTeam {
  @ApiProperty()
  public teamId: number;
}

export class addProjectTeamDto {
  
  // @ApiProperty({ type: [ProjectTeam] })
  // public projectteam: ProjectTeam[];
  @ApiProperty()
  @IsArray()
  @IsInt({each: true})
  public projectteamId:number[]
}


export class addTeamMemberDto {

  @ApiProperty()
  @IsArray()
  @IsInt({each: true})
  public userId:number[]
}
// export class CreateProjectDto {}
