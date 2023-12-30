import { Router } from 'express';
import { ebookController } from './main';

const ebookRouter = Router();

ebookRouter.post('/ebooks', ebookController.newEbook);
ebookRouter.get('/ebooks', ebookController.listAll);
ebookRouter.get('/ebooks/title', ebookController.findByTitle);
ebookRouter.get('/ebooks/author', ebookController.findByAuthor);
ebookRouter.get('/ebooks/category', ebookController.findByCategory);

export default ebookRouter;