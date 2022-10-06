import { format } from 'date-fns';
import { Response, Request } from 'express';
import { Business } from '../../app/business';
import { Log } from '../../modules/log';
import { Util } from '../util';
import { Autentication } from '../../modules/autentication';

export class Home { 

    async index(req: Request, res: Response){
        
        let { token, user } = req.body
        let date = `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`;
        
        let bll = new Business();
        let aut = new Autentication();
        let log = new Log();

        if(aut.getToken(token)){
            let json: any = { Usuario: bll.get(user), dtConsulta: date };
            await Util.Ok(res, json);
        }
        else{
            let json: any = { Falha: 'falha de token!', dtConsulta: date };
            await Util.Fail(res, json);
        }

    }   
}
