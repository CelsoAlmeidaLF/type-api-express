import * as env from '../config/env'
import express from 'express';

export default class System {
    public CryptKey: string = process.env.CRYPT_KEY === undefined ? '0' : process.env.CRYPT_KEY
    public app = express();
    public readonly port : number = 3000;

    public static app = express();
    public static readonly port = 3000;
}