import { RequestHandler } from "express";
import parser from 'body-parser';
import { BodyParser } from "body-parser";
import cookieParser from 'cookie-parser'

let handler: RequestHandler

handler = parser.urlencoded({extended: true})
handler = parser.json()
//handler = cookieParser()

export default handler