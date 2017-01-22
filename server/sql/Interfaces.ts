import * as tedious from "tedious";

export interface IConnectionConfigFty {
    get(): tedious.ConnectionConfig ;
}

export interface TType extends tedious.TediousType {
    id: any;
    userType: number; // as bit?
    udtInfo: any;
    validate: (value: any) => any;
    writeParameterData: (...args: any[]) => any;
    writeTypeInfo: (...args: any[]) => any;
}

export interface IColumnMetadata extends tedious.ColumnMetaData {
    collation: any;
    tableName: string;
    flags: number;
}

export interface IColumn {
    value?: any;
    metadata?: IColumnMetadata;
}

export interface IMapper {
    map(columns: IColumn[]): void;
}

export interface ISqlService {
    query<T>(query: string, parameters?: any): Promise<T|T[]|void>;
}
