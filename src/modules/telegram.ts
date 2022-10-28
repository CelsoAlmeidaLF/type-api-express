
import TelegramBot from "node-telegram-bot-api";
import { format } from 'date-fns';
import Framework from "./library/framework";

export default class Telegram extends Framework {

        private token: string
        private chatId: string

        constructor(){
            super()
            this.token = '...';
            this.chatId = '...';
        }

        sendMessage(msg: string){

            try{        
                let date = `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`; 
                let bot = new TelegramBot(this.token);
                bot.sendMessage(this.chatId, `[${date}] ${msg}`);
                console.log('enviado, telegram ...');
            }catch(ex){
                throw ex;
            }

       }

}