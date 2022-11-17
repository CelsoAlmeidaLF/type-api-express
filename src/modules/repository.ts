import IRepository from './interface/repository'
import Database from "./library/database"
import Framework from './library/framework';

export default class Repository extends Framework implements IRepository {
    
    constructor(){   
        super()
    }

    async getall(sql: string, params?: any[]): Promise<any[]> {
        try{
            this.db = new Database();
            return await this.db.getall(sql, params);
        }
        catch(err){
            throw err;
        }
    }

    async get(sql: string, params?: any[]): Promise<any[]> {
        try{
            this.db = new Database();
            return await this.db.get(sql, params);
        }
        catch(err){
            throw err;
        }
    }

    async set(sql: string, params?: any[]): Promise<void> {
        try{
            this.db = new Database();
            this.db.sucess = 'cadastro com sucesso!';
            this.db.run(sql, params);
        }
        catch(err){
            console.error(err)
        }
    }

    async up(sql: string, params?: any[]): Promise<void> {
        try{
            this.db = new Database();
            this.db.sucess = 'atualização com sucesso!';
            this.db.run(sql, params);
        }
        catch(err){
            throw err;
        }
    }

    async del(sql: string, params?: any[]): Promise<void> {
        try{
            this.db = new Database();
            this.db.sucess = 'remoção com sucesso!';
            this.db.run(sql, params);
        }
        catch(err){
            throw err;
        }
    }

}