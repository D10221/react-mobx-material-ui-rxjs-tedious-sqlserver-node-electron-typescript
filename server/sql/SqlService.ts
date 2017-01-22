import * as tds from "tedious";
import * as I from "./Interfaces";


export class SqlService implements I.ISqlService {

    constructor(
        private configTy: I.IConnectionConfigFty,
        private mapper: I.IMapper) {
        // ...
    }

    query<T>(sqlTxt: string, parameters?: any): Promise<T|T[]|void> {

        let self = this;
        return new Promise<any>((resolve, reject) => {

            let connection = new tds.Connection(self.configTy.get());

            connection.on("connect", (err: Error) => {
                if (err) {
                    reject(err);
                    return;
                }
                if (parameters) {
                    connection.execute(request, parameters);
                } else {
                    connection.execSql(request);
                }
            });

            let request = new tds.Request(sqlTxt, reject);

            let rows: any[] = [];
            request.on("row", (columns: I.IColumn[]) => {
                rows.push(self.mapper.map(columns));
            });

            request.on("doneProc", (rowCount: number, more: any) => {
                if (more && rowCount) {
                    // ...
                }
                resolve(rows);
                connection.close();
            });
            request.on("done", (rowCount: number, more: any) => {
                if (more && rowCount) {
                    // ...
                }
                resolve(rows);
                connection.close();
            });
            request.on("doneInProc", (rowCount: any, more: any) => {
                if (more && rowCount) {
                    // ...
                }
                resolve(rows);
                connection.close();
            });
        });

    }
}