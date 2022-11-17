import IRepository from './interface/repository'
import Database from "./library/database"
import Framework from './library/framework';

let db: Database | any

export default class Repository extends Framework implements IRepository {
    
    constructor(){   
        super()
        db = new Database();
    }

    async getall(): Promise<any[]> {
        try{
            return await db.getall('', undefined);
        }
        catch(err){
            throw err;
        }
    }

    async get(sql: string, params: any[] | undefined): Promise<any[]> {
        try{
            return await db.get(sql, params);
        }
        catch(err){
            throw err;
        }
    }

    async set(sql: string, params: any[] | undefined): Promise<void> {
        try{
            db.sucess = 'cadastro com sucesso!';
            db.run(sql, params);
        }
        catch(err){
            console.error(err)
        }
    }

    async up(sql: string, params: any[] | undefined): Promise<void> {
        try{
            db.sucess = 'atualização com sucesso!';
            db.run(sql, params);
        }
        catch(err){
            throw err;
        }
    }

    async del(sql: string, params: any[] | undefined): Promise<void> {
        try{
            db.sucess = 'remoção com sucesso!';
            db.run(sql, params);
        }
        catch(err){
            throw err;
        }
    }

}