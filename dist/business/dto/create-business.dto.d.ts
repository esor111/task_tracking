export declare class CreateBusinessDto {
    name: string;
    email: string;
    contact: string;
    address: string;
    description: string;
    available: boolean;
    avatar: string;
    gallery: string[];
}
export declare class addUsertoBusinessDto {
    businessId: number;
    rollid: number;
}
export declare class addpermissionToRole {
    permissionIds: number;
}
export declare class addpermissionToRoleDto {
    ids: number[];
}
export declare class assignRoleDto {
    userId: number;
    roleId: number;
    businessId: number;
}
export declare class removebusinessuserDto {
    userId: number;
    businessId: number;
}
export declare class businessIdesDto {
    businessIdes: number[];
}
export declare class PaginationParams {
    page: number;
    take: number;
}
