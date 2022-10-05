import { ModelBase } from "../../models/modelBase"

export interface IRepository {
    GetAll(entity :ModelBase): Promise<any[]>
    Get(entity :ModelBase): Promise<any[]>
    Set(entity :ModelBase): void
    Up(entity :ModelBase): void
    Del(entity :ModelBase): void
}