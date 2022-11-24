import router from './routers/index';
import handler from './middleware/handler';
import IServer from './interface/iserver';
import Framework from '../core/framwork';

export default class Server extends Framework implements IServer {

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

    private _middleware(): void{
        this.app.use(handler)
    }

    private _routers(): void{   
        this.app.use('/api/v1', router);
        this.app.get('/', (req, res) => { res.redirect('/api/v1') });
    }

    private _pipelines(): void{
        this._middleware();
        this._routers();
    }

    private static _middleware(): void{
        this.app.use(handler)
    }

    private static _router(): void{   
        this.app.use('/api/v1', router);
        this.app.get('/', (req, res) => { res.redirect('/api') });
    }

    private static _pipelines(): void{
        this._middleware();
        this._router();
    }

    static server(): void{
        this._pipelines();
        this.app.listen(this.port, () => console.log(`rodando: http://localhost:${this.port}/api/v1`));
    }

}