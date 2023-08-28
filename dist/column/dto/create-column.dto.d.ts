export declare class CreateColumnDto {
}
export declare class ColumnValueItemDTO {
    columnId: number;
    rowId: number;
    value: string;
}
export declare class ColumnValueDTO {
    columnvalues: ColumnValueItemDTO[];
}
export declare class UpdateColumnValueDto {
    value: string;
}
