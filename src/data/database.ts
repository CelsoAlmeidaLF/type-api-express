import sqlite3 from "sqlite3";

export class Database {

    private Open(): sqlite3.Database {
        let db: sqlite3.Database = new sqlite3.Database('./database.db');
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
    execCommand(sql: string) {
        let db = this.Open();

        try{    
            db.exec(sql);
        }
        catch(err){
            console.error(err);
        }
        finally{
            db.close();
        }
    }

    // Run Command
    runCommand(sql: string) {
        let db = this.Open();

        try{    
            db.run(sql);    
        }
        catch(err){
            console.error(err);
        }
        finally{
            db.close();
        }
    }

}