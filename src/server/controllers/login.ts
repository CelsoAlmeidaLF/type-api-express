import { format } from 'date-fns';
import { Response, Request } from 'express';
import { Log } from '../../modules/log';
import { Util } from '../util';
import { Autentication } from '../../modules/autentication';

export class Login { 

    async index(req: Request, res: Response){
        
        let { token, user } = req.body
        let date: string = `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`;

        let aut = new Autentication();
        let log = new Log();    

        if(aut.getToken(token)){
            let json: any = { Result: aut.set(user, token, date) };
            await Util.Ok(res, json);
        }
        else{
            let json: any = { Falha: 'falha de token!', dtConsulta: date };
            await Util.Fail(res, json);
        }

    }   

    async get(req: Request, res: Response){
        
        let { token, user } = req.body
        let date: string = `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`;

        let aut = new Autentication();
        let log = new Log();    

        if(aut.getToken(token)){
            let json: any = { Result: await aut.getall() };
            await Util.Ok(res, json);
        }
        else{
            let json: any = { Falha: 'falha de token!', dtConsulta: date };
            await Util.Fail(res, json);
        }

    } 

}
