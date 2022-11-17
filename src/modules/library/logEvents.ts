import fs from 'fs'
import { promises } from 'fs'
import path from 'path'
import System from '../../bin/system';

export default class LogEvents extends System {

    result: string;

    constructor(){
        super()
        this.result = ''
    }

    async saveLog(message: string) {
        message += `\n`

        try{
            if(!fs.existsSync(path.join(__dirname))){
                await promises.mkdir(path.join(__dirname))
            }
            await promises.appendFile(path.join(__dirname,'eventsLog.log'), message) 
        }catch(err){
            console.log(err)
        }
    
    }
}
