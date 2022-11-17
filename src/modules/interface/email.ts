
export interface IEmailTo {
    to: string,
    name: string
}

export interface IMailMessage {
    subject: string,
    body: string,
    html: boolean
    attachment?: string[]
}

export interface IMailDTO{
    to: IEmailTo,
    message: IMailMessage
}

export interface IMail{
    MailSend(to:string, subject:string, body:string, html:boolean): any
    MailRead(): any
    Send({to, message} : IMailDTO ): any
}