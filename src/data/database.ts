import sqlite3 from "sqlite3";

export class Database {

    private Open(): any {
        let db = new sqlite3.Database('./database.db');
        return db;
    }

    GetAll(sql: string) {
        try{        
            //return undefined
            let db = this.Open();
            //db.all(sql, ( err: Error | null, rows: any[]) => { console.log(rows) }); 
            //let rows = db.all(sql, (err: Error | null, rows: any[]) => {  return new Promise<any[]>((res, rej) => res(rows));  });
            let rows = new Promise<any[]>((res, rej) => { db.all(sql, (err: Error | null, rows: any[]) => { res(rows) }) });
            console.log(rows);

            //let rows = [{user:"testing..."}, {senha:"testing..."}]
        }
        catch(err){
            console.error(err);
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