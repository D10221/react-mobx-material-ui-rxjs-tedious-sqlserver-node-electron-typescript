import {IColumn, IMapper} from "./Interfaces";

export class Mapper implements IMapper {
    map(columns: IColumn[]): any {
        let r: any = {};
        for (let column of columns) {
            r[column.metadata.colName] = column.value;
        }
        return r;
    }
}
