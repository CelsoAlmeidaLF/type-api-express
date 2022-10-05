
import { LogEvents } from "../log/logEvents";

export class Log extends LogEvents {

    constructor(){
        super()
    }

    print(){
        console.log(this.result);
    }
}