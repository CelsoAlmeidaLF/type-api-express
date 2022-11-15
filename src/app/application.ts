import ServerHttp from "../server/serverHttp";
import Framework from "./framwork";

export default class Application extends Framework {
    constructor(){       
        super()
        let server = new ServerHttp();
        server.createServer();
    }
}