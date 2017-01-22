import * as tedious from "tedious";
import { IConnectionConfigFty } from "./Interfaces";

export class ConnectionConfigFty implements IConnectionConfigFty {

    constructor() {
        // ...
    }

    get(): tedious.ConnectionConfig {
        return {
            userName: "sa",
            password: "P@55w0rd!",
            server: "BEEBLEBROX",
            options: {
                // required on Azure
                // encrypt: true,
                database: "MyDB"
            }
        };
    }
}

