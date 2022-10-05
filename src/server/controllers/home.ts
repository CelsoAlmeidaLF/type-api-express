import {Response, Request} from 'express';
import { format } from 'date-fns';
import {v4} from 'uuid';
import { Business } from '../../app/business';

export class Home { 
        async index(req: Request, res: Response){
            
            let bll = new Business();

            let date = `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`;
            let uuid : string = v4();
           
            let json = req.body;
            json.uid = uuid;
            json.dtConsulta = date;

            let rows = await bll.getall();

            res.json({
                mensagem: 'testing...',
                dtConsulta: date,
                uid:uuid,
                rows:rows
        });
    }
}