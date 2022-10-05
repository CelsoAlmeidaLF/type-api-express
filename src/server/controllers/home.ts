import { format } from 'date-fns';
import {Response, Request} from 'express';
import { Business } from '../../app/business';
import { Log } from '../../modules/log';
import { Util } from '../util';

export class Home { 

    async index(req: Request, res: Response){
        
        let date = `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`;
        let result = `LOG [ data consulta: ${date} ]: method: ${req.method}:index`;

        let bll = new Business();
        let log = new Log();         

        log.result = result;

        log.print();
        log.saveLog(result);

        let json: any = { mensagem: 'testing, api ...',dtConsulta: date };
        await Util.Ok(res, json);
    }
    
}
