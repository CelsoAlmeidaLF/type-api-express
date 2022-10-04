import {Response, Request} from 'express';
import { format } from 'date-fns';
import {v4} from 'uuid';
import { Business } from '../../app/business';

export class Home { 
        index(req: Request, res: Response){
            
            let bll = new Business();

            let date = `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`;
            let uuid : string = v4();
           
            let json = req.body;
            json.uid = uuid;
            json.dtConsulta = date;

            let get = bll.get(json);

            res.json({
                mensagem: 'systekna, testing...',
                dtConsulta: date,
                uid:uuid,
                get: get
        });
    }
}