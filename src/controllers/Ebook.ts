import { Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';
import EbookService from '../services/Ebook';
import { Category } from '../interfaces/Category';

export default class EbookController {
  constructor(private ebookService: EbookService) {}

  newEbook = async (req: Request, res: Response) => {
    const { title, author, year, pages, language, category } = req.body;
    const ebook = await this.ebookService.newEbook(title, author, year, pages, language, category);
    res.status(StatusCodes.CREATED).json(ebook);
  };

  listAll = async (_req: Request, res: Response) => {
    const ebooks = await this.ebookService.listAll();
    res.status(StatusCodes.OK).json(ebooks);
  };

  findByTitle = async (req: Request, res: Response) => {
    const { q } = req.query;
    const ebooks = await this.ebookService.findByTitle(String(q));
    res.status(StatusCodes.OK).json(ebooks);
  };

  findByAuthor = async (req: Request, res: Response) => {
    const { q } = req.query;
    const ebooks = await this.ebookService.findByAuthor(String(q));
    res.status(StatusCodes.OK).json(ebooks);
  };

  findByCategory = async (req: Request, res: Response) => {
    const { q } = req.query;
    const ebooks = await this.ebookService.findByCategory(q as Category);
    res.status(StatusCodes.OK).json(ebooks);
  };
}