import express from 'express';
import parser from 'body-parser';
import router from './routers/index';

const app = express();
const port : number = 3000;

export class ServerHttp {

    constructor(){
        app.use(parser.urlencoded({extended: true}));
        app.use(parser.json());
        app.use('/api', router);
        app.get('/', (req, res) => { res.redirect('/api') });
    }

    CreateServer(){
        app.listen(port, () => 
            console.log(`rodando: http://localhost:${port}/api`));
    }    
}