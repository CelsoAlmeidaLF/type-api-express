import express from 'express';
import parser from 'body-parser';
import router from './routers/index';

const app = express();
const port : number = 3000;

export default class ServerHttp {

    private middleware(){
        app.use(parser.urlencoded({extended: true}));
        app.use(parser.json());
    }

    private router(){   
        app.use('/api', router);
        app.get('/', (req, res) => { res.redirect('/api') });
    }

    private pipelines(){
        this.middleware();
        this.router();
    }

    private static middleware(){
        app.use(parser.urlencoded({extended: true}));
        app.use(parser.json());
    }

    private static router(){   
        app.use('/api/v1', router);
        app.get('/', (req, res) => { res.redirect('/api') });
    }

    private static pipelines(){
        this.middleware();
        this.router();
    }

    createServer(){
        this.pipelines();
        app.listen(port, () => console.log(`rodando: http://localhost:${port}/api`));
    }  

    static CreateServer(){
        this.pipelines();
        app.listen(port, () => console.log(`rodando: http://localhost:${port}/api/v1`));
    }

}