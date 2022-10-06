import { Repository } from "../modules/repository";

 export class Business {

    async getall() {
        let dal = new Repository();
        let rows = await dal.GetAll();
        return rows;
    }

    get(user: string){
        return { 
            user: user,
            email:'celso.almeida.leite@hotmail.com'
        }
    }

}