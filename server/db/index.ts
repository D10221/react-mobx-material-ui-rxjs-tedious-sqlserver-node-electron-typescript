export * from "./StockItems";
import {StockItems} from "./StockItems";
import {SqlServiceFty} from "../sql";

const sql = SqlServiceFty();

export const db = {
    stockItems: new StockItems(sql),
};