
import {Database} from '../data/database'
 
export class Business {
    get() {
        let db = new Database();

        //create table: db.ExecCommand("CREATE TABLE tb_teste (user TEXT, email TEXT)");
        //insert: db.RunCommand("INSERT INTO tb_teste (user, email) VALUES ('CelsoAlmeida', 'celso.almeida.leite@hotmail.com')");

        let rows: any = db.GetAll('SELECT * FROM tb_teste');
        console.log('>>> testing, business!')
    }
}