import { Response, Request } from 'express';
import API from '../util';

export default class Home { 

    static async index(req: Request, res: Response) {
        
        let cookie = req.headers.cookie
        let jwt = req.headers.authorization;

        try{
            if(jwt !== undefined){
                if(cookie !== undefined){
                    API.Ok(res, { message: "token validado!"});
                }
                else{
                    res.cookie('token', jwt, { maxAge: 10000 });
                    API.Ok(res, { message: "token validado!"});
                }
            }else{
                if(cookie === undefined){
                    console.log('[not authorization: 400]');
                    API.Fail(res, { message: "not authorization"});
                }
            }
        }catch(err){
            API.Fail(res, { message: "not authorization", error: err });
        }

    }   

}
