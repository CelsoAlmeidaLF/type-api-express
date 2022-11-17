
export default interface IRepository {
    getall(sql: string, params?: any[]): Promise<any[]>
    get(sql: string, params?: any[]): Promise<any[]>
    set(sql: string, params?: any[]): Promise<void>
    up(sql: string, params?: any[]): Promise<void>
    del(sql: string, params?: any[]): Promise<void>
}