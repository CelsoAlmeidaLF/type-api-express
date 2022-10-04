import { ModelFile } from "../models/modelFile"
import { IFile } from './interface/file'

export class FileTS implements IFile {

    constructor(){
    }

        ImportTXT(file: ModelFile){
            try{
                return undefined
            }
            catch(err){
                throw err;
            }
        }
        
        ImportCSV(file: ModelFile){
            try{
                return undefined
            }
            catch(err){
                throw err;
            }
        }
        
        ImportXLSX(file: ModelFile){
            try{
                return undefined
            }
            catch(err){
                throw err;
            }
        }
        
        ExportTXT(file: ModelFile){
            try{
                return undefined
            }
            catch(err){
                throw err;
            }
        }
        
        ExportCSV(file: ModelFile){
            try{
                return undefined
            }
            catch(err){
                throw err;
            }
        }
        
        ExportXLSX(file: ModelFile){
            try{
                return undefined
            }
            catch(err){
                throw err;
            }
        }
        
        ExportPDF(file: ModelFile){
            try{
                return undefined
            }
            catch(err){
                throw err;
            }
        }
}