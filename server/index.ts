import * as express from "express";
import { SqlServiceFty } from "./sql";
import { StockItems } from "./db";
import * as cors from "cors";

const app = express();
app.use(cors);
app.get("/", (req, res) => {
    let stockItems = new StockItems(SqlServiceFty());
    if (!req) {
        // ...
    }
    stockItems.getAll().then(
        data => {
            res.send(data)
        }
    );
});

app.listen(3000, function () {
    console.log("Listening on port 3000!");
});