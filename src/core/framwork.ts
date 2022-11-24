import System from './system'
import express from 'express';

export default class Framework extends System {  

    public app = express();
    public static app = express();
    public readonly port : number = 3000;
    public static readonly port = 3000;

    constructor(){
        super()    
    }
}