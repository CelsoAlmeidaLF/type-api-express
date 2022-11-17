import fs from "fs";
import IFile from "../core/interface/IFile";
import IStreamFile from "./interface/file";
import Framework from "./library/framework";

export default class FileTS extends Framework implements IStreamFile {

    constructor(){
        super()
    }

    ImportTXT(file: IFile){
        try{
            return undefined
        }
        catch(err){
            throw err;
        }
    }
    
    ImportCSV(file: IFile){
        try{
            return undefined
        }
        catch(err){
            throw err;
        }
    }
    
    ImportXLSX(file: IFile){
        try{
            return undefined
        }
        catch(err){
            throw err;
        }
    }
    
    ExportTXT(file: IFile){
        try{
            return undefined
        }
        catch(err){
            throw err;
        }
    }
    
    ExportCSV(file: IFile){
        try{
            return undefined
        }
        catch(err){
            throw err;
        }
    }
    
    ExportXLSX(file: IFile){
        try{
            return undefined
        }
        catch(err){
            throw err;
        }
    }
    
    ExportPDF(file: IFile){
        try{
            return undefined
        }
        catch(err){
            throw err;
        }
    }
}