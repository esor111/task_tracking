export declare class CreateTeamDto {
    name: string;
    description: string;
}
export declare class TeammemberDto {
    userId: number;
}
export declare class TeamMemberDto {
    teamId: number;
    businessId: number;
    member: TeammemberDto[];
}
export declare class CreateBusinessTeamDto {
    businessteam: TeamMemberDto[];
}
export declare class addBusinessTeamOnlyDto {
    userId: number[];
}
