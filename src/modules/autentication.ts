import Database from "./library/database";
import ModelUser from "../models/modelUser";
import Framework from "./library/framework";

export default class Autentication extends Framework {

    private db: Database
    private user: ModelUser

    constructor(){
        super()
        this.user = new ModelUser();
        this.db = new Database();
    }

    async getToken(token: string, user: string){
        this.user = await this.db.get('SELECT * FROM tb_user WHERE token = ? and user = ?', [token, user]);
        if(this.user != undefined){
            return this.user.token === token ? true : false;
        }else{
            return false;
        }
    }

    async getall(){
        return await this.db.getall('SELECT * FROM tb_user', undefined);
    }

    set(user: string, token: string, date: string): string { 
        try{
            //this.db.exec('DROP TABLE tbe_user')
            //this.db.exec('CREATE TABLE tb_user (user, token, dtCriacao)'); 
            //let result: string = this.db.run('DELETE FROM tb_user WHERE user = ?', [user]);
            this.db.sucess = 'cadastro do usuario com sucesso!'
            let result: string = this.db.run(`INSERT INTO tb_user (user, token, dtCriacao) VALUES (?,?,?)`, [user, token, date]);
            return result;
        }catch(err){
            return 'error: ' + err
        }
    }
}