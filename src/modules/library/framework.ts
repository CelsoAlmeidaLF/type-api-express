import System from "../../bin/system";
import * as jwt from 'jsonwebtoken';
import {JwtPayload} from 'jsonwebtoken';
import { AES, enc, lib } from 'crypto-ts'

export default class Framework extends System {

    token(authorization: string | undefined): JwtPayload {
        let key: string = process.env.CRYPT_KEY === undefined ? '0' : process.env.CRYPT_KEY
        let authc = authorization;
        let arr: string[] = authc != undefined ? authc?.toString().split(' ')  : ['0']
        let tk: JwtPayload = jwt.verify(arr[1], key) as JwtPayload
        console.log(tk.user)
        return tk;
    }

    encrypt(message: string) : string {
        let key: string = process.env.CRYPT_KEY === undefined ? '0' : process.env.CRYPT_KEY
        let ciphertext = AES.encrypt(message, key);
        return ciphertext.toString();
    }

    decrypt(ciphertext: string): string {
        let key: string = process.env.CRYPT_KEY === undefined ? '0' : process.env.CRYPT_KEY
        var bytes  = AES.decrypt(ciphertext.toString(), key);
        var plaintext = bytes.toString(enc.Utf8);
        return plaintext;
    }

}