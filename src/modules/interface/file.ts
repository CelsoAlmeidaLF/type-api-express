import { ModelFile } from "../../models/modelFile"

export interface IFile {
    ImportTXT(file: ModelFile): any
    ImportCSV(file: ModelFile): any
    ImportXLSX(file: ModelFile): any
    ExportTXT(file: ModelFile): any
    ExportCSV(file: ModelFile): any
    ExportXLSX(file: ModelFile): any
    ExportPDF(file: ModelFile): any
}