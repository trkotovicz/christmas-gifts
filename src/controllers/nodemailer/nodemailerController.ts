import { Request, Response } from 'express';
import NodemailerService from '../../services/nodemailer/nodemailerService';
import { StatusCodes } from 'http-status-codes';

export default class NodemailerController {
  constructor (private nodemailerService: NodemailerService) { }
  
  sendMail = async (req: Request, res: Response) => {
    const { email, name, title, author, year, pages, language } = req.body;
    const sent = await this.nodemailerService.sendMail(
      email,
      name,
      title,
      author,
      year,
      pages,
      language,
    );

    console.log(sent);
    res.status(StatusCodes.ACCEPTED).end();
  }
}