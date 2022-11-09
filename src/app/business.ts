import Repository from "../modules/repository";

 export default class Business {

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