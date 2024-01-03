import { Request, Response } from 'express';
import PersonService from '../services/Person';
import { StatusCodes } from 'http-status-codes';

export default class PersonController {
  constructor(private personService: PersonService) {}

  newWish = async (req: Request, res: Response) => {
    const { email, name, bookTitle, bookAuthor, role } = req.body;
    const wish = await this.personService.newWish(email, name, bookTitle, bookAuthor, role);
    res.status(StatusCodes.CREATED).json(wish);
  };

  listAllWishes = async (_req: Request, res: Response) => {
    const wishes = await this.personService.listAllWishes();
    res.status(StatusCodes.OK).json(wishes);
  };

  findWishesByBookTitle = async (req: Request, res: Response) => {
    const { q } = req.query;
    const wishes = await this.personService.findWishesByBookTitle(String(q));
    res.status(StatusCodes.OK).json(wishes);
  };

  findWishesByPerson = async (req: Request, res: Response) => {
    const { q } = req.query;
    const wishes = await this.personService.findWishesByPerson(String(q));
    res.status(StatusCodes.OK).json(wishes);
  };
}
