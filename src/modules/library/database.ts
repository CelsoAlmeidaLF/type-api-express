import sqlite3 from "sqlite3";
import System from "../../core/system";


export default class Database extends System {

    public sucess?: string

    constructor(){
        super()
    }

    private Open(): sqlite3.Database {
        let db: sqlite3.Database = new sqlite3.Database('./database.db');
        return db;
    }

    // Get Entity
    async get(sql: string, params?: any[]){
        let db = this.Open();

        try{
             return new Promise<any>((res, rej) => { 
                 db.get(sql, params, (err: Error | null, row: any) => { 
                    if(err) { rej(err) }
                    else { res(row) }
                });
            });
        }
        catch(err){
            throw err;
        }
        finally{
            db.close();
        }
    }

    // Get List
    async getall(sql: string, params?: any[]) {
        let db = this.Open();

        try{
             return new Promise<any[]>((res, rej) => { 
                db.all(sql, params, (err: Error | null, rows: any[]) => { 
                    if(err) { rej(err) }
                    else { res(rows) }
                });
            });
        }
        catch(err){
            throw err;
        }
        finally{
            db.close();
        }
    }

    // Exec Command
    exec(sql: string): string {
        let db = this.Open();

        try{    
            db.exec(sql);
            return 'sucess';
        }
        catch(err){
            throw err;
        }
        finally{
            db.close();
        }
    }

    // Run Command
    run(sql: string, params?: any[]): string {
        let db = this.Open();

        try{    
            db.run(sql, params);    
            return 'sucess';
        }
        catch(err){
            throw err;
        }
        finally{
            db.close();
        }
    }

}