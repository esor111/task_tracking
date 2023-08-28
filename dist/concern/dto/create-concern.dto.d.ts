export declare class CreateColumnDto {
    name: string;
}
export declare class CreateConcernDto {
    name: string;
}
export declare enum ColumnTypeEnum {
    priority = "PRIORITY",
    level = "LEVEL",
    person = "PERSON",
    date = "DATE",
    status = "STATUS"
}
export declare class ColumnTypeDTO {
    isDynamic: boolean;
    options: any;
    type: ColumnTypeEnum;
}
