import * as env from '../config/env'

export default class System {
    
    public CryptKey: string = process.env.CRYPT_KEY === undefined ? '0' : process.env.CRYPT_KEY

    constructor(){
        console.clear()
    }
}