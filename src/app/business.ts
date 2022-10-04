
import {Database} from '../data/database'
 
export class Business {
    get(){
        let db = new Database();
        let rows: any = db.GetAll();
    }
}