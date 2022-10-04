import sqlite3 from "sqlite3";

export class Database {

    private Open(): any {
        let db = new sqlite3.Database('./database.db');
        return db;
    }

    GetAll(): any {
        try{        
            return undefined
        }
        catch(err){
            throw err;
        }
    }

    ExecCommand(sql: string) {
        try{    
            let db = this.Open();
            db.exec(sql);    
        }
        catch(err){
            console.error(err);
        }
    }

    RunCommand(sql: string) {
        try{    
            let db = this.Open();
            db.run(sql);    
        }
        catch(err){
            console.error(err);
        }
    }

}