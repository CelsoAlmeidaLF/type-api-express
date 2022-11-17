
import TelegramBot from "node-telegram-bot-api";
import { format } from 'date-fns';
import Framework from "./library/framework";

export default class Telegram extends Framework {

        private _token?: string
        private _chatId?: string

        constructor(){
            super()
        }

        sendMessage(msg: string){

            this._token = '..'
            this._chatId = '..'
            try{        
                let date = `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`; 
                let bot = new TelegramBot(this._token);
                bot.sendMessage(this._chatId, `[${date}] ${msg}`);
                console.log('enviado, telegram ...');
            }catch(ex){
                throw ex;
            }

       }

}