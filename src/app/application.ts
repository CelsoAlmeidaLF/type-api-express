import API from "../api/server";
import Server from "../api/server";
import Framework from "../core/framwork";

export default class Application extends Framework {
    
    public server?: API
    //public static ServerHtml?: ServerHttp 

    constructor(){       
        super()
    }

    static Server(){      
        console.clear();
        API.Server();
    }
}