import { ModelBase } from "../models/modelBase";
import { Repository } from "../modules/repository";

 export class Business {

    async getall() {
        let dal = new Repository();
        let rows = await dal.GetAll();
        return rows;
    }

}