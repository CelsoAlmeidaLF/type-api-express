import router from './routers/index';
import System from '../core/system';
import handler from './middleware/handler';
import IServer from './interface/iserver';

export default class Server extends System implements IServer {

    public middleware(): void {
        this._middleware();
    }

    public routers(): void {
        this._routers();
    }

    public pipeline(): void {
        this._pipelines();
    }

    public build(): void {
        this._pipelines();
        this.app.listen(this.port, () => console.log(`rodando: http://localhost:${this.port}/api/v1`));
    }

    private _middleware(){
        this.app.use(handler)
    }

    private _routers(){   
        this.app.use('/api/v1', router);
        this.app.get('/', (req, res) => { res.redirect('/api/v1') });
    }

    private _pipelines(){
        this._middleware();
        this._routers();
    }

    private static _middleware(){
        this.app.use(handler)
    }

    private static _router(){   
        this.app.use('/api/v1', router);
        this.app.get('/', (req, res) => { res.redirect('/api') });
    }

    private static _pipelines(){
        this._middleware();
        this._router();
    }

    static server(){
        this._pipelines();
        this.app.listen(this.port, () => console.log(`rodando: http://localhost:${this.port}/api/v1`));
    }

}