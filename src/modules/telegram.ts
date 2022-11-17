
import TelegramBot from "node-telegram-bot-api";
import { format } from 'date-fns';
import Framework from "./library/framework";

export default class Telegram extends Framework {

        private _token?: string
        private chatId: string

        constructor(){
            super()
            this.chatId = '...';
        }

        sendMessage(msg: string){

            this._token = '..'
            try{        
                let date = `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`; 
                let bot = new TelegramBot(this._token);
                bot.sendMessage(this.chatId, `[${date}] ${msg}`);
                console.log('enviado, telegram ...');
            }catch(ex){
                throw ex;
            }

       }

}