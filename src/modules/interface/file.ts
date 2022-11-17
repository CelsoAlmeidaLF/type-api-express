import IFile from '../../core/interface/IFile'

export default interface IStreamFile {
    ImportTXT(file: IFile): any
    ImportCSV(file: IFile): any
    ImportXLSX(file: IFile): any
    ExportTXT(file: IFile): any
    ExportCSV(file: IFile): any
    ExportXLSX(file: IFile): any
    ExportPDF(file: IFile): any
}