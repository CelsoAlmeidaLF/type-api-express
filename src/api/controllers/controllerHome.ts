
import { Response, Request } from 'express';
import API from '../util';

export default class Home { 

    static async index(req: Request, res: Response) {
        API.Ok(res, 'mu API');
    }   

}
