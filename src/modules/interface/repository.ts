
export default interface IRepository {
    getall(sql: string, params: any[] | undefined): Promise<any[]>
    get(sql: string, params: any[] | undefined): Promise<any[]>
    set(sql: string, params: any[] | undefined): Promise<void>
    up(sql: string, params: any[] | undefined): Promise<void>
    del(sql: string, params: any[] | undefined): Promise<void>
}