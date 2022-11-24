import Framework from "../core/framwork";
import IServer from '../api/interface/iserver';
import Server from '../api/server';

export default class Application extends Framework {
    
    public static api?: IServer
    //public static ServerHtml?: ServerHttp 

    constructor(){       
        super()
    }

    static server(){      
        this.api = new Server();
        this.api.build();
    }
}