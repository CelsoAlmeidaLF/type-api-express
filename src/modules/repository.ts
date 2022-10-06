import { ModelBase } from "../models/modelBase"
import {IRepository} from './interface/repository'
import { Database } from "../data/database"

let db: any = undefined

export class Repository implements IRepository {
    
    constructor(){   
        db = new Database();
    }

    async GetAll(): Promise<any[]> {
        try{
            return await db.getall('select * from tb_teste');
        }
        catch(err){
            throw err;
        }
    }

    async Get(entity: ModelBase): Promise<any[]> {
        try{
            let SQL = ''
            return await db.getall(SQL);
        }
        catch(err){
            throw err;
        }
    }

    Set(entity: ModelBase): void {
        try{
            db.execCommand('...');
        }
        catch(err){
            console.error(err)
        }
    }

    Up(entity: ModelBase): void {
        try{
            db.execCommand('...');
        }
        catch(err){
            throw err;
        }
    }

    Del(entity: ModelBase): void {
        try{
            db.execCommand('...');
        }
        catch(err){
            throw err;
        }
    }

}