export declare class CreateProjectDto {
    projectName: string;
    projectDescription: string;
    startDate: Date;
    endDate: Date;
}
export declare class ProjectTeam {
    teamId: number;
}
export declare class addProjectTeamDto {
    projectteamId: number[];
}
export declare class addTeamMemberDto {
    userId: number[];
}
