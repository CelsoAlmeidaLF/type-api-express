export class ModelBase {
    
    ID: Number;
    dtCriacao: Date | undefined;
    dtAlteracao: Date | undefined;
    dtExclusao: Date | undefined;
    flExclusao: Boolean;

    constructor(){
        this.ID = 0;
        this.dtCriacao = undefined;
        this.dtAlteracao = undefined;
        this.dtExclusao = undefined;
        this.flExclusao = false;
    }
} 