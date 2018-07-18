import { FNO } from "../../types/types";

const r = require("rethinkdb");

export async function init(){
    var conn = await r.connect({ host: 'localhost', port: 28015 });
    return {
        insertTradeData : async function(data: FNO[]) {
            console.log("Inserting ", data.length);
            const results = await r.table('trade_data').insert(data).run(conn);
            //const results = await cursor.toArray();
            console.log("Data inserted !!", results.inserted);
        }
    }
}