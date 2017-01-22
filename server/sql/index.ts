export * from "./Interfaces";
export * from "./ConnectionConfigFty";
export * from "./mapper";
export * from "./SqlService";
import {SqlService} from "./SqlService";
import {Mapper} from "./mapper";
import {ConnectionConfigFty} from "./ConnectionConfigFty";

export function SqlServiceFty(){
    return new SqlService(
        new ConnectionConfigFty(),
        new Mapper()
    )
}