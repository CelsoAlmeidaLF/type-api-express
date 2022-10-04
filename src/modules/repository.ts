import { ModelBase } from "../models/modelBase"
import {IRepository} from './interface/repository'

export class Repository implements	IRepository {
    
    constructor(){   
    }

    GetAll(entity: ModelBase): undefined {
        try{
            return undefined
        }
        catch(err){
            throw err;
        }
    }

    Get(entity: ModelBase): undefined {
        try{
            return undefined
        }
        catch(err){
            throw err;
        }
    }

    Set(entity: ModelBase): undefined {
        try{
            return undefined
        }
        catch(err){
            throw err;
        }
    }

    Up(entity: ModelBase): undefined {
        try{
            return undefined
        }
        catch(err){
            throw err;
        }
    }

    Del(entity: ModelBase): undefined {
        try{
            return undefined
        }
        catch(err){
            throw err;
        }
    }

}