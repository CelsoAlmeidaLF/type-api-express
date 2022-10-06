export class ModelUser {
    
    user: string | undefined;
    email: string | undefined;
    password: string | undefined;
    token: string| undefined;

    constructor(){
        this.user = undefined;
        this.email= undefined;
        this.password= undefined;
        this.token= undefined;
    }
}