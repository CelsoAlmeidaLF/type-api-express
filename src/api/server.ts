import router from './routers/index';
import System from '../core/system';
import handler from './middleware/handler';

export default class API extends System {

    private middleware(){
        this.app.use(handler)
    }

    private router(){   
        this.app.use('/api', router);
        this.app.get('/', (req, res) => { res.redirect('/api') });
    }

    private pipelines(){
        this.middleware();
        this.router();
    }

    private static middleware(){
        this.app.use(handler)
    }

    private static router(){   
        this.app.use('/api/v1', router);
        this.app.get('/', (req, res) => { res.redirect('/api') });
    }

    private static pipelines(){
        this.middleware();
        this.router();
    }

    Server(){
        this.pipelines();
        this.app.listen(this.port, () => console.log(`rodando: http://localhost:${this.port}/api`));
    }  

    static Server(){
        this.pipelines();
        this.app.listen(this.port, () => console.log(`rodando: http://localhost:${this.port}/api/v1`));
    }

}