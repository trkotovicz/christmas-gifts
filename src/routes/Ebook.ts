import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';
import { ebookController } from './main';

const ebookRouter = Router();

ebookRouter.post('/ebooks', authMiddleware, ebookController.newEbook);
ebookRouter.get('/ebooks', authMiddleware, ebookController.listAll);
ebookRouter.get('/ebooks/title', authMiddleware, ebookController.findByTitle);
ebookRouter.get('/ebooks/author', authMiddleware, ebookController.findByAuthor);
ebookRouter.get('/ebooks/category', authMiddleware, ebookController.findByCategory);

export default ebookRouter;
