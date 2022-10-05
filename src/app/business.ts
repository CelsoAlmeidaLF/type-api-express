import { Database } from "../data/database"

 export class Business {

    async getall() {
        let db = new Database();
        let rows = await db.GetAll('SELECT * FROM tb_teste')
        return rows;
    }

}