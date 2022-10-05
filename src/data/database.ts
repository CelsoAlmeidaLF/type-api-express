import sqlite3 from "sqlite3";

export class Database {

    private Open(): any {
        let db = new sqlite3.Database('./data/database.db');
        return db;
    }

    // Get List
    async getall(sql: string) {
        let db = this.Open();

        try{
             return new Promise<any[]>((res, rej) => { 
                 db.all(sql, (err: Error | null, rows: any[]) => { 
                    if(err) { rej(err) }
                    else { res(rows) }
                });
            });
        }
        catch(err){
            throw err;
        }
    }

    // Exec Command
    async execCommand(sql: string) {
        try{    
            let db = this.Open();
            db.exec(sql);    
        }
        catch(err){
            console.error(err);
        }
    }

    // Run Command
    async runCommand(sql: string) {
        try{    
            let db = this.Open();
            db.run(sql);    
        }
        catch(err){
            console.error(err);
        }
    }

}