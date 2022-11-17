import ServerHttp from "../server/serverHttp";
import Framework from "../core/framwork";

export default class Application extends Framework {
    
    public server?: ServerHttp
    //public static ServerHtml?: ServerHttp 

    constructor(){       
        super()
    }

    static Server(){      
        console.clear();
        ServerHttp.CreateServer();
    }
}