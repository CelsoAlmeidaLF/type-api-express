import { format } from 'date-fns';
import {v4} from 'uuid';
import {Response} from 'express';

export default class API {
    
    static async Ok(res: Response, result: any) {

        let date = `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`;
        let uuid : string = v4();

        let json = {
            uid: uuid,
            dtConsulta: date,
            result: result
        }

        res.json(json);

    }

    static async Fail(res: Response, result: any) {

        let date = `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`;
        let uuid : string = v4();

        let json = {
            uid: uuid,
            dtConsulta: date,
            result: result
        }
        
        res.status(400).json(json);

    }
} 