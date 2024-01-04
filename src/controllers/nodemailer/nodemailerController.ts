import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import PersonService from '../../services/Person';
import NodemailerService from '../../services/nodemailer/nodemailerService';

export default class NodemailerController {
  private personService: PersonService;

  constructor(private nodemailerService: NodemailerService, personService: PersonService) {
    this.personService = personService;
  }

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
  };

  sendAllEbooks = async (_req: Request, res: Response) => {
    const listAll = await this.personService.listAllPersonEbook();

    for (let item of listAll) {
      const { title, author, year, pages, language } = item.ebook;
      const { email, name } = item.person;

      this.nodemailerService
        .sendMail(email, name, title, author, String(year), String(pages), language)
        .then((_response) => console.log(`E-mail enviado para ${email}`))
        .catch((error) => console.error(`Erro ao enviar e-mail para ${email}:`, error));
    }
    res.status(StatusCodes.ACCEPTED).end();
  };
}
