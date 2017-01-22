import { SqlService } from "../sql";

import { StockItem } from "./StockItem";

export class StockItems {

    constructor(private sqlService: SqlService) {

    }

    getAll(): Promise<StockItem[]> {
        return this.sqlService.query<StockItem>(
            `select * from StockItems`
        );
    }

    getWhere(where: string): Promise<StockItem[]> {
        return this.sqlService.query<StockItem>(
            `select * from StockItems where ${where}`
        );
    }

    get(id: number) {
        return this.sqlService.query<StockItem>(
            `select * from StockItems where @id`, { id }
        ).then((x: StockItem[]) => x[0]);
    }

    add(StockItem: StockItem): Promise<number> {
        return this.sqlService.query("insert into StockItems (*) values @values; select @@IDENTITY", StockItem);
    }

    update(stockItem: StockItem): Promise<void> {
        return this.sqlService
            .query("update StockItems set @values; ", stockItem)
            .then(() => {
                // ...
            });
    }

    remove(stockItem: StockItem): Promise<void> {
        if (stockItem) {
            // ...
        }
        return null;
    }
}