export default class ModelEmail {
    
    de: String | undefined;
    para: String | undefined;
    assunto: String | undefined;
    isHttp: Boolean | undefined;

    constructor(){
        this.de= undefined;
        this.para= undefined;
        this.assunto= undefined;
        this.isHttp= false;
    }
}