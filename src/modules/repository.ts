import {IRepository} from './interface/repository'
import { Database } from "../data/database"

let db: Database | any

export class Repository implements IRepository {
    
    constructor(){   
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

    set(sql: string, params: any[] | undefined): void {
        try{
            db.sucess = 'cadastro com sucesso!';
            db.run(sql, params);
        }
        catch(err){
            console.error(err)
        }
    }

    up(sql: string, params: any[] | undefined): void {
        try{
            db.sucess = 'atualização com sucesso!';
            db.run(sql, params);
        }
        catch(err){
            throw err;
        }
    }

    del(sql: string, params: any[] | undefined): void {
        try{
            db.sucess = 'remoção com sucesso!';
            db.run(sql, params);
        }
        catch(err){
            throw err;
        }
    }

}