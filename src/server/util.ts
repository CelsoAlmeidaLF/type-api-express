import { format } from 'date-fns';
import {v4} from 'uuid';
import {Response} from 'express';

export class Util {
    
    static async Ok(res: Response, js: JSON) {

        let date = `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`;
        let uuid : string = v4();

        let json = {
            uid: uuid,
            dtConsulta: date,
            result: js
        }

        res.json(json);

    }

    static async Fail(res: Response, js: JSON) {

        let date = `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`;
        let uuid : string = v4();

        let json = {
            uid: uuid,
            dtConsulta: date,
            result: js
        }
        
        res.status(400).json(json);

    }
} 