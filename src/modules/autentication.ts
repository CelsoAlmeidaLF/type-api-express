import { Database } from "../data/database";

export class Autentication {

    private db: Database

    constructor(){
        this.db = new Database();
    }

    getToken(token: string){
        return '8b691da9' === token ? true : false;
    }

    set(user: string, token: string, date: string): string { 
        try{
            //this.db.execCommand('DROP TABLE tbe_user')
            //this.db.execCommand('CREATE TABLE tb_user (user, token, dtCriacao)');
            //this.db.execCommand(`INSERT INTO tb_user (user, token, dtCriacao) VALUES ('${user}', '${token}','${date}')`);
            return 'sucess!'
        }catch(err){
            return 'error: ' + err
        }
    }

    async getall(){
        return await this.db.getall('SELECT * FROM tb_user');
    }

}