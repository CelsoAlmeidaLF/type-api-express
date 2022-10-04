import { ModelBase } from "../../models/modelBase"

export interface IRepository {
    GetAll(entity :ModelBase): undefined
    Get(entity :ModelBase): undefined
    Set(entity :ModelBase): undefined
    Up(entity :ModelBase): undefined
    Del(entity :ModelBase): undefined
}