import { RequestHandler } from "express";
import parser from 'body-parser';
import { BodyParser } from "body-parser";

let handler: RequestHandler

handler = parser.urlencoded({extended: true})
handler = parser.json()

export default handler