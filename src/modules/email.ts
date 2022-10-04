
import { IMailDTO, IMail } from './interface/email'
import {ModelEmail} from '../models/ModelEmail'

export class EmailService implements IMail {

    MailSend(to:string, subject:string, body:string, html:boolean): ModelEmail | undefined {
        try{
            return undefined
        }
        catch(err){
            throw err;
        }
    }

    MailRead(): ModelEmail | undefined {
        try{
            return undefined
        }
        catch(err){
            throw err;
        }
    }

    Send({to, message} : IMailDTO ): ModelEmail | undefined {
        try{
            return undefined
        }
        catch(err){
            throw err;
        }
    }

}