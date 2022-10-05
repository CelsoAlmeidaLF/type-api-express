export class ModelFile {
    IdArquivo: Number;
    DtImportacao: Date | undefined;
    DtExportacao: Date | undefined;

    constructor(){
        this.IdArquivo= 0;
        this.DtImportacao= undefined;
        this.DtExportacao= undefined;
    }
} 