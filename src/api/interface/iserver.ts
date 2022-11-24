export default interface IServer {
    middleware(): void;
    routers(): void;
    pipeline(): void;
    build(): void;
}