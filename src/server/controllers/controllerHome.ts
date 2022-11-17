import { format } from 'date-fns';
import { Response, Request } from 'express';
import Business from '../../app/business';
import Util from '../util';
import LogEvents from '../../modules/library/logEvents';
import Autentication from '../../modules/autentication';
import Telegram from '../../modules/telegram';

export default class Home { 

    static async index(req: Request, res: Response) {
        res.json({mensagem: 'my api'})
    }   

}
