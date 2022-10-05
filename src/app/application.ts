import { ServerHttp } from "../server/serverHttp";

export class Application {
    constructor(){       
        console.clear();
        let server = new ServerHttp();
        server.CreateServer();
    }
}