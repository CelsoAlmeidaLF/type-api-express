import ServerHttp from "../server/serverHttp";
import Framework from "../bin//framwork";

export default class Application extends Framework {
    
    constructor(){       
        super()
    }

    static Server(){      
        console.clear();
        ServerHttp.CreateServer();
    }
}