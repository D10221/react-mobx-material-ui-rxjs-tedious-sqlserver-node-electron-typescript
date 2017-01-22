import * as tedious from "tedious";
import Connection = tedious.Connection;
import ConnectionConfig = tedious.ConnectionConfig;
import Request = tedious.Request;

let config: ConnectionConfig = {
    userName: "sa",
    password: "P@55w0rd!",
    server: "localhost",
    // When you connect to Azure SQL Database, you need these next options.  
    options: { encrypt: true, database: "TestDb" }
};

let connection = new Connection(config);

connection.on("connect", function (err: any) {
    if (err) {

    }
    // If no error, then good to proceed.  
    console.log("Connected");
    executeStatement();
});

let onError = (err: any) => {
    if (err) {
        console.log(err);
    }
};

function executeStatement() {
    let request = new Request(`
    SELECT * from Things;
    `, onError);
    let result = "";
    request.on("row", function (columns: any) {
        columns.forEach(function (column: any) {
            if (column.value === null) {
                console.log("NULL");
            } else {
                result += column.value + " ";
            }
        });
        console.log(result);
        result = "";
    });

    request.on("done", function (rowCount: any, more: any) {
        if (more) {
            // ..
        }
        console.log(rowCount + " rows returned");
    });
    connection.execSql(request);
}
