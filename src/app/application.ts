import { ServerHttp } from "../server/serverHttp";

export default class Application {
    constructor(){       
        console.clear();
        let server = new ServerHttp();
        server.CreateServer();
    }
}