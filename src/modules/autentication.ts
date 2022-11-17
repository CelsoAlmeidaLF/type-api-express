import Framework from "./library/framework";
import * as jwt from 'jsonwebtoken';
import {JwtPayload} from 'jsonwebtoken';
import { AES, enc, lib } from 'crypto-ts'

export default class Autentication extends Framework {
    
    constructor(){
        super()
    }

    tokenJwt(authorization: string | undefined): JwtPayload {
        let authc = authorization;
        let arr: string[] = authc != undefined ? authc?.toString().split(' ')  : ['0']
        let tk: JwtPayload = jwt.verify(arr[1], this.CryptKey) as JwtPayload
        console.log(tk.user)
        return tk;
    }

    encrypt(message: string) : string {
        let ciphertext = AES.encrypt(message, this.CryptKey);
        return ciphertext.toString();
    }

    decrypt(ciphertext: string): string {
        var bytes  = AES.decrypt(ciphertext.toString(), this.CryptKey);
        var plaintext = bytes.toString(enc.Utf8);
        return plaintext;
    }

}