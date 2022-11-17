import Repository from "../modules/repository";
import Framework from '../core/framwork';

 export default class Business extends Framework {

    async getall() {
        let dal = new Repository();
        let rows = await dal.getall();
        return rows;
    }

    async getTable(table: string, params: any[] | undefined){
        let dal = new Repository();
        let rows = await dal.get(`select* from ${table}`, params);
        return rows;
    }

    get(user: string){
        return { 
            user: user,
            email_suporte:'...'
        }
    }

}